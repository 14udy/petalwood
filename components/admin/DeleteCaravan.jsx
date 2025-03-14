"use client"
import React, { useState } from "react"
import Modal from "../modal/Modal"
import { FaTrash } from "react-icons/fa6"
import { deleteCaravan } from "../../Utils/Supabase/supabase"

export default function DeleteCaravan({ caravan, setCaravans }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleDelete = async () => {
    const success = await deleteCaravan(caravan.id)
    if (success) {
      setCaravans((prev) => prev.filter((c) => c.id !== caravan.id))
      setShowDeleteModal(false)
    }
  }

  return (
    <div>
      <button
        className="p-2  hover:text-red-600 transition-colors"
        onClick={() => setShowDeleteModal(true)}
      >
        <FaTrash />
      </button>

      {showDeleteModal && (
        <Modal
          title="Delete Caravan"
          setModalOpen={setShowDeleteModal}
          width="w-96"
        >
          <div className="p-4 space-y-4 w-full bg-white">
            <p className="text-gray-700">
              Are you sure you want to delete this caravan? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                className="btn-secondary bg-gray-500"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button className="btn-trash bg-red-500" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
