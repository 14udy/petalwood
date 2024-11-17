import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

//import key in nextjs

export const supabase = createClient(supabaseUrl, supabaseKey)

export const insertCaravan = async (caravanData, compressedImages) => {
  try {
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError || !session?.user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase
      .from("caravans")
      .insert([caravanData])
      .select()

    if (error) throw error

    const caravanId = data[0].id

    // Upload compressed images and create image records
    for (const image of compressedImages) {
      const fileExt = image.name.split(".").pop()
      const fileName = `${image.id}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, image, {
          cacheControl: "86400",
          upsert: false,
        })

      if (uploadError) {
        console.log(uploadError, "uploadError")
        throw new Error(`Upload failed: ${uploadError.message}`)
      }

      const { error: insertError } = await supabase
        .from("images")
        .insert([
          {
            caravan_id: caravanId,
            name: fileName,
            file_path: filePath,
          },
        ])
        .select("*")

      if (insertError) {
        console.log(insertError, "insertError")
        throw new Error(
          `Failed to insert image metadata: ${insertError.message}`
        )
      }
    }

    const { data: caravan, getError } = await supabase
      .from("caravans")
      .select(
        `
        *,
        images (
          id,
          file_path
        )
      `
      )
      .eq("id", caravanId)
      .single()

    if (getError) throw error

    return caravan
  } catch (error) {
    console.error("Error inserting caravan:", error)
    return null
  }
}

//updateCaravan
export const updateCaravan = async (
  id,
  caravanData,
  compressedImages,
  imagesToDelete
) => {
  try {
    // Delete images via id imagesToDelete[{id: id, file_path: file_path}]
    //also delete images from storage using the file path
    for (const image of imagesToDelete) {
      const { error: deleteError } = await supabase.storage
        .from("images")
        .remove([image.file_path])

      if (deleteError) {
        console.log(deleteError, "deleteError")
        throw new Error(`Failed to delete image: ${deleteError.message}`)
      }

      const { error: deleteImageError } = await supabase
        .from("images")
        .delete()
        .eq("id", image.id)

      if (deleteImageError) {
        console.log(deleteImageError, "deleteImageError")
        throw new Error(
          `Failed to delete image metadata: ${deleteImageError.message}`
        )
      }
    }

    // Upload compressed images and create image records
    for (const image of compressedImages) {
      const fileExt = image.name.split(".").pop()
      const fileName = `${image.id}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, image, {
          cacheControl: "86400",
          upsert: false,
        })

      if (uploadError) {
        console.log(uploadError, "uploadError")
        throw new Error(`Upload failed: ${uploadError.message}`)
      }

      const { error: insertError } = await supabase
        .from("images")
        .insert([
          {
            caravan_id: id,
            name: fileName,
            file_path: filePath,
          },
        ])
        .select("*")

      if (insertError) {
        console.log(insertError, "insertError")
        throw new Error(
          `Failed to insert image metadata: ${insertError.message}`
        )
      }
    }

    const { data, error } = await supabase
      .from("caravans")
      .update(caravanData)
      .eq("id", id)
      .select(
        `
        *,
        images (
          id,
          file_path
        )
      `
      )

    if (error) throw error
    return data[0]
  } catch (error) {
    console.error("Error updating caravan:", error)
    return null
  }
}

//deleteCaravan
export const deleteCaravan = async (id) => {
  try {
    const { error } = await supabase.from("caravans").delete().eq("id", id)

    if (error) throw error

    //also delete images from storage if they have a caravan_id of id
    const { error: imagesError } = await supabase
      .from("images")
      .delete()
      .eq("caravan_id", id)

    if (imagesError) throw imagesError

    return true
  } catch (error) {
    console.error("Error deleting caravan:", error)
    return false
  }
}

export const getCaravanWithImages = async (id) => {
  try {
    const { data: caravan, error } = await supabase
      .from("caravans")
      .select("*")
      .eq("id", id)
      .single()

    if (error) throw error

    const { data: images, error: imagesError } = await supabase
      .from("images")
      .select("*")
      .eq("caravan_id", id)

    if (imagesError) throw imagesError

    return { ...caravan, images }
  } catch (error) {
    console.error("Error fetching caravan with images:", error)
    return null
  }
}
