"use client"
import React, { useState } from "react"
import Modal from "../modal/Modal"
import { updateCaravan } from "../../Utils/Supabase/supabase"
import FormInput from "../Inputs/FormInput"
import { FaPencil, FaX } from "react-icons/fa6"
import UploadImages from "../uploadImages/UploadImages"
import imageCompression from "browser-image-compression"
import FormSelect from "../Inputs/FormSelect"

export default function EditCaravan({
  caravan,
  setCaravans,
  setCaravanToEdit,
}) {
  const [imagesToUpload, setImagesToUpload] = useState([])
  const [imagesToDelete, setImagesToDelete] = useState([])
  const [compressingImages, setCompressingImages] = useState(false)

  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: caravan.name,
    short_description: caravan.short_description,
    long_description: caravan.long_description,
    make: caravan.make,
    model: caravan.model,
    size: caravan.size,
    price: caravan.price,
    beds: caravan.beds,
    sleeps: caravan.sleeps,
    state: caravan.state,
    status: caravan.status,
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  const removeFile = (id) => {
    setImagesToDelete((current) => [...current, id])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setCompressingImages(true)

    // Define compression options
    const compressionOptions = {
      maxSizeMB: 0.5, // Maximum size in MB
      maxWidthOrHeight: 2160, // Maximum width or height
      useWebWorker: true, // Utilize web workers for better performance
      initialQuality: 0.7, // Compression quality (0 to 1)
    }

    try {
      // Compress all files
      const compressedFiles = await Promise.all(
        imagesToUpload.map(async (file) => {
          if (file.type.startsWith("image/")) {
            const compressedBlob = await imageCompression(
              file,
              compressionOptions
            )

            // Convert Blob back to File
            const compressedFile = new File([compressedBlob], file.name, {
              type: compressedBlob.type,
              lastModified: Date.now(),
            })

            // Reassign the original id to the compressed File
            compressedFile.id = file.id

            // Reassign the preview URL if needed
            compressedFile.preview = file.preview

            return compressedFile
          }
          // If not an image, return the original file
          return file
        })
      )
      setCompressingImages(false)
      setIsUploading(true)

      const updatedCaravan = await updateCaravan(
        caravan.id,
        formData,
        compressedFiles,
        imagesToDelete
      )
      if (updatedCaravan) {
        setCaravans((prev) =>
          prev.map((c) => (c.id === caravan.id ? updatedCaravan : c))
        )
        setCaravanToEdit(null)
        setImagesToDelete([])
        setImagesToUpload([])
      }
    } catch (error) {
      console.error("Error updating caravan:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className=" p-4 w-full bg-white ">
        <div className=" grid md:grid-cols-3 gap-2">
          <div className="space-y-4">
            <FormInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              handleChange={handleChange}
              required
              placeholder="Enter the name"
            />

            <div className="grid md:grid-cols-2 gap-2">
              <FormInput
                label="Make"
                type="text"
                name="make"
                value={formData.make}
                handleChange={handleChange}
                required
                placeholder="Enter the make"
              />

              <FormInput
                label="Model"
                type="text"
                name="model"
                value={formData.model}
                handleChange={handleChange}
                required
                placeholder="Enter the model"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <FormInput
                label="Size"
                type="text"
                name="size"
                value={formData.size}
                handleChange={handleChange}
                required
                placeholder="eg 24' x 12'"
              />

              <FormInput
                label="Price"
                type="number"
                name="price"
                value={formData.price}
                handleChange={handleChange}
                required
                placeholder="eg 50000"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <FormInput
                label="Beds"
                type="number"
                name="beds"
                value={formData.beds}
                handleChange={handleChange}
                required
                placeholder="eg 3"
              />

              <FormInput
                label="Sleeps"
                type="number"
                name="sleeps"
                value={formData.sleeps}
                handleChange={handleChange}
                required
                placeholder="eg 6"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <FormSelect
                label="State"
                name="state"
                value={formData.state || ""}
                handleChange={handleChange}
                required
                options={[
                  {
                    label: "New",
                    value: "New",
                  },
                  {
                    label: "Pre-Owned",
                    value: "Pre-Owned",
                  },
                ]}
              />
              <FormSelect
                label="Status"
                name="status"
                value={formData.status || ""}
                handleChange={handleChange}
                required
                options={[
                  {
                    label: "Available Now",
                    value: "AVAILABLE_NOW",
                  },
                  {
                    label: "Coming Soon",
                    value: "COMING_SOON",
                  },
                ]}
              />
            </div>
          </div>

          <div className="space-y-2">
            <FormInput
              textArea
              label="Short Description"
              type="text"
              name="short_description"
              value={formData.short_description || ""}
              handleChange={handleChange}
              placeholder="Enter the short description"
              rows={4}
            />
            <FormInput
              textArea
              label="Long Description"
              type="text"
              name="long_description"
              value={formData.long_description || ""}
              handleChange={handleChange}
              placeholder="Enter the long description"
              rows={10}
            />
          </div>

          <div className="h-full flex flex-col space-y-4">
            <div>
              <h5 className="text-sm font-medium text-gray-700 ">
                Existing Images
              </h5>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {caravan.images
                  .filter((i) => !imagesToDelete.some((itd) => itd.id === i.id))
                  // Filter images that are marked for deletion
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <img
                        src={`${supabaseUrl}/storage/v1/object/public/images/${image.file_path}`}
                        alt={image.name}
                        className="w-full h-16 object-center object-cover"
                      />
                      <button
                        onClick={() => {
                          // Remove the image from both imagesToDelete and caravan.images
                          removeFile(image) // Call the function to handle the removal
                        }}
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        <FaX />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-sm font-medium text-gray-700 ">
                Images To Upload
              </h5>
              <UploadImages
                imagesToUpload={imagesToUpload}
                setImagesToUpload={setImagesToUpload}
                existingImagesCount={
                  caravan.images.length - imagesToDelete.length
                }
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button
            className="btn-trash"
            onClick={() => {
              setImagesToDelete([])
              setImagesToUpload([])
              setCaravanToEdit(null)
            }}
            type="button"
          >
            Cancel
          </button>
          <button
            disabled={compressingImages || isUploading}
            type="submit"
            className="btn-secondary"
          >
            {compressingImages || isUploading ? "Uploading..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  )
}
