"use client"

import React, { useState } from "react"

import imageCompression from "browser-image-compression"
import { useRouter } from "next/navigation"
import { insertCaravan } from "@/Utils/Supabase/supabase"
import FormInput from "@/components/Inputs/FormInput"
import UploadImages from "@/components/uploadImages/UploadImages"
import FormSelect from "@/components/Inputs/FormSelect"

export default function CreateCaravan() {
  const router = useRouter()
  const [imagesToUpload, setImagesToUpload] = useState([])
  const [compressingImages, setCompressingImages] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    short_description: "",
    long_description: "",
    make: "",
    model: "",
    size: "",
    price: "",
    beds: "",
    sleeps: "",
    state: "",
    status: "",
  })

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

      const newCaravan = await insertCaravan(formData, compressedFiles)

      if (newCaravan) {
        router.push("/admin")
      }
    } catch (compressionError) {
      console.error("Error during image compression:", compressionError)
      showToast("Error compressing images", "error")
      setCompressingImages(false)
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

  console.log(imagesToUpload)
  return (
    <div className="min-h-screen">
      <div className="mt-[70px] p-4">
        <h1 className="text-3xl font-bold mb-6">Create Caravan</h1>
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
                  placeholder="eg 50000"
                  required
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
                      value: "NEW",
                    },
                    {
                      label: "Pre-Owned",
                      value: "PRE_OWNED",
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
              <div className="space-y-2">
                <FormInput
                  textArea
                  label="Short Description"
                  type="text"
                  name="short_description"
                  value={formData.short_description}
                  handleChange={handleChange}
                  placeholder="Enter the short description"
                  rows={4}
                />
                <FormInput
                  textArea
                  label="Long Description"
                  type="text"
                  name="long_description"
                  value={formData.long_description}
                  handleChange={handleChange}
                  placeholder="Enter the long description"
                  rows={10}
                />
              </div>
            </div>

            <div className="h-full flex flex-col justify-between">
              <UploadImages
                imagesToUpload={imagesToUpload}
                setImagesToUpload={setImagesToUpload}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              disabled={compressingImages || isUploading}
              type="submit"
              className="btn-secondary"
            >
              {compressingImages || isUploading
                ? "Uploading..."
                : "Create Caravan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
