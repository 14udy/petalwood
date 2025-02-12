// ./Components/UploadImages.jsx

import { showToast } from "@/Utils/toastUtils"
import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FaX } from "react-icons/fa6"
import { v4 as uuidv4 } from "uuid"

const UploadImages = ({
  imagesToUpload,
  setImagesToUpload,
  existingImagesCount = 0,
}) => {
  console.log(imagesToUpload.length + existingImagesCount)
  // Handle file selection
  const onDrop = useCallback(
    (acceptedFiles) => {
      const totalExistingImages = imagesToUpload.length + existingImagesCount // Current total images
      const remainingSlots = 8 - totalExistingImages // Calculate remaining slots

      if (remainingSlots <= 0) {
        // No slots left
        showToast("You can only upload up to 8 images.", "error")
        return
      }

      // Limit the files to the remaining slots
      const limitedFiles = acceptedFiles.slice(0, remainingSlots)

      // Map the files with additional properties
      const mappedFiles = limitedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file), // Create preview URL for the image
          id: uuidv4(), // Generate a unique ID for the image
        })
      )

      // Show toast if some files were refused
      if (acceptedFiles.length > remainingSlots) {
        showToast(
          `8 images max. ${limitedFiles.length} image${
            limitedFiles.length > 1 ? "s" : ""
          } added. ${acceptedFiles.length - limitedFiles.length} file${
            acceptedFiles.length - limitedFiles.length > 1 ? "s" : ""
          } ignored.`,
          "error"
        )
      }

      // Add the new files to the imagesToUpload array
      setImagesToUpload((current) => [...current, ...mappedFiles])
    },
    [imagesToUpload, existingImagesCount, setImagesToUpload]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".webp"],
    },
    multiple: true,
    maxFiles: 8,
  })

  // Handle upload button click

  // Remove file from the list
  const removeFile = (id) => {
    setImagesToUpload((current) => current.filter((file) => file.id !== id))
  }

  return (
    <div className=" ">
      <div
        {...getRootProps()}
        className={`   text-center cursor-pointer rounded w-full mb-2`}
      >
        <input {...getInputProps()} />
        {imagesToUpload.length + existingImagesCount < 8 && (
          <div>
            <button type="button" className="btn-secondary">
              Select images (max 8)
            </button>
          </div>
        )}
      </div>
      {imagesToUpload.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {imagesToUpload.map((file) => (
              <div
                key={file.id}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={file.preview}
                  alt={file.name}
                  className="w-full h-16 object-center object-cover"
                />
                <button
                  onClick={() => removeFile(file.id)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <FaX />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UploadImages
