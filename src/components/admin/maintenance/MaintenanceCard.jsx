import React, { useState } from "react"
import { FaTools, FaEdit, FaEnvelope, FaWrench, FaBolt, FaBuilding, FaBroom, FaWifi, FaEllipsisH, FaUserCog } from "react-icons/fa"
import EditMaintenanceForm from "./EditMaintenanceForm"

const MaintenanceCard = ({ staff, onUpdate, onDelete }) => {
  const [showEditForm, setShowEditForm] = useState(false)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Plumbing":
        return <FaWrench className="text-blue-500" />
      case "Electrical":
        return <FaBolt className="text-yellow-500" />
      case "Civil":
        return <FaBuilding className="text-orange-500" />
      case "Cleanliness":
        return <FaBroom className="text-green-500" />
      case "Internet":
        return <FaWifi className="text-purple-500" />
      default:
        return <FaEllipsisH className="text-gray-500" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "Plumbing":
        return { bg: "bg-blue-100", text: "text-blue-700" }
      case "Electrical":
        return { bg: "bg-yellow-100", text: "text-yellow-700" }
      case "Civil":
        return { bg: "bg-orange-100", text: "text-orange-700" }
      case "Cleanliness":
        return { bg: "bg-green-100", text: "text-green-700" }
      case "Internet":
        return { bg: "bg-purple-100", text: "text-purple-700" }
      default:
        return { bg: "bg-gray-100", text: "text-gray-700" }
    }
  }

  const categoryColor = getCategoryColor(staff.category)

  return (
    <>
      <div className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative">
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor.bg} ${categoryColor.text}`}>{staff.category}</span>
        </div>

        <div className="flex items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1360AB] flex items-center justify-center text-[#ffffff] text-xl mr-4">
            <FaUserCog />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{staff.name}</h3>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              {getCategoryIcon(staff.category)}
              <span className="ml-1.5">{staff.category} Specialist</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 space-y-3">
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full bg-[#E4F1FF] flex items-center justify-center mr-3">
              <FaEnvelope className="text-[#1360AB] text-xs" />
            </div>
            <span className="text-sm text-gray-700 truncate">{staff.email}</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-500">Created {new Date(staff.createdAt || Date.now()).toLocaleDateString()}</span>
          <button onClick={() => setShowEditForm(true)} className="p-2.5 bg-[#E4F1FF] text-[#1360AB] rounded-lg hover:bg-[#1360AB] hover:text-white transition-all duration-300 flex items-center">
            <FaEdit className="mr-1" /> <span className="text-sm">Edit</span>
          </button>
        </div>
      </div>

      {showEditForm && <EditMaintenanceForm staff={staff} onClose={() => setShowEditForm(false)} onUpdate={onUpdate} onDelete={onDelete} />}
    </>
  )
}

export default MaintenanceCard
