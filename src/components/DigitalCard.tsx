import React from 'react'
import Image from 'next/image'
import { PhoneIcon, MailIcon, SaveIcon } from 'lucide-react'

export interface EmployeeData {
  firstName: string
  lastName: string
  mobile: string
  email: string
  designation: string
  imageUrl: string
}

interface DigitalCardProps {
  employeeData: EmployeeData
}

const DigitalCard = ({ employeeData }: DigitalCardProps) => {
  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${employeeData.firstName} ${employeeData.lastName}
ORG:Somani Realtors
TITLE:${employeeData.designation}
TEL;TYPE=CELL:${employeeData.mobile}
EMAIL:${employeeData.email}
END:VCARD`

    const blob = new Blob([vCard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${employeeData.firstName}_${employeeData.lastName}_Somani.vcf`)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      {/* Header with gradient and image */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-6 flex justify-center items-center h-48">
        <div className="relative w-32 h-32 rounded-full border-4 border-white bg-white shadow-lg z-10">
          <Image 
            src={employeeData.imageUrl}
            alt={`${employeeData.firstName} ${employeeData.lastName}`}
            fill
            className="rounded-full object-cover"
            sizes="128px"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-8">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {employeeData.designation}
        </p>
        <p className="text-center text-blue-600 font-medium mt-1">
          Somani Realtors
        </p>
        
        {/* Contact Buttons */}
        <div className="mt-8 space-y-3">
          <a 
            href={`tel:${employeeData.mobile}`} 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700">{employeeData.mobile}</span>
          </a>
          <a 
            href={`mailto:${employeeData.email}`} 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <MailIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700 break-all">{employeeData.email}</span>
          </a>
        </div>

        {/* Save Contact Button */}
        <button
          onClick={handleSaveContact}
          className="w-full mt-8 bg-blue-600 text-white py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors font-medium shadow-sm"
        >
          <SaveIcon className="w-5 h-5" />
          <span>Save Contact</span>
        </button>
      </div>
    </div>
  )
}

export default DigitalCard