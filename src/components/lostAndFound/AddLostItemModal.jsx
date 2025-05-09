import React, { useState } from "react"
import { lostAndFoundApi } from "../../services/apiService"
import Modal from "../common/Modal"
import { FaCalendarAlt, FaClipboardList, FaBoxOpen } from "react-icons/fa"

const AddLostItemModal = ({ show, onClose, onItemAdded }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    dateFound: new Date().toISOString().split("T")[0],
    status: "Active",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newItem = await lostAndFoundApi.addLostItem(formData)
      if (!newItem) {
        alert("Failed to add item. Please try again.")
        return
      }
      alert(`Item "${newItem.itemName}" added successfully!`)
      onItemAdded && onItemAdded()
      onClose()
    } catch (error) {
      console.error("Error adding lost item:", error)
      alert("Failed to add item. Please try again.")
    }
  }

  if (!show) return null

  return (
    <Modal title="Add Lost Item" onClose={onClose} width={600}>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="flex items-center text-blue-800">
            <FaBoxOpen className="mr-2" />
            <h4 className="font-medium">Item Information</h4>
          </div>
        </div> */}

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Item Name</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <FaClipboardList />
              </div>
              <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-[#1360AB] outline-none transition-all" placeholder="Enter item name" required />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-[#1360AB] outline-none transition-all resize-none"
              placeholder="Describe the item, condition, where it was found, etc."
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Date Found</label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FaCalendarAlt />
                </div>
                <input type="date" name="dateFound" value={formData.dateFound} onChange={handleChange} className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-[#1360AB] outline-none transition-all" required />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Status</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-[#1360AB] outline-none transition-all bg-white" required>
                <option value="Active">Active</option>
                <option value="Claimed">Claimed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end pt-5 mt-6 border-t border-gray-100 space-y-3 sm:space-y-0 sm:space-x-3">
          <button type="button" className="order-last sm:order-first px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all font-medium" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="px-5 py-2.5 bg-[#1360AB] text-white rounded-lg hover:bg-[#0F4C81] transition-all shadow-sm hover:shadow font-medium">
            Add Item
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddLostItemModal
