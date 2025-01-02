import React from 'react'
import Image from 'next/image'
import { 
  PhoneIcon, 
  MailIcon, 
  SaveIcon, 
  MapPinIcon, 
  GlobeIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon
} from 'lucide-react'
import type { EmployeeData } from '@/data/employees'

interface DigitalCardProps {
  employeeData: EmployeeData
}

// Static company data
const companyData = {
  name: "Somani Realtors",
  workPhone: "033 40274027",
  website: "www.somanirealtors.com",
  address: "Somani Realtors, 2nd Floor, 40, Ashutosh Mukherjee Rd, Bhowanipore, Kolkata, West Bengal 700020",
  socials: {
    facebook: "https://facebook.com/somanirealtors",
    twitter: "https://twitter.com/somani_realtors",
    instagram: "https://www.instagram.com/somanirealtors/",
    linkedin: "https://in.linkedin.com/company/somanirealtors",
    youtube: "https://www.youtube.com/c/SomaniRealtorsPvtLtd"
  }
}

const DigitalCard = ({ employeeData }: DigitalCardProps) => {
  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${employeeData.firstName} ${employeeData.lastName}
ORG:${companyData.name}
TITLE:${employeeData.designation}
TEL;TYPE=CELL:${employeeData.mobile}
TEL;TYPE=WORK:${companyData.workPhone}
EMAIL:${employeeData.email}
ADR:;;${companyData.address}
URL:${companyData.website}
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
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-32 flex items-center justify-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white shadow-md transform translate-y-16">
          <Image 
            src={employeeData.imageUrl}
            alt={`${employeeData.firstName} ${employeeData.lastName}`}
            width={128}
            height={128}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-20 pb-8">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {employeeData.designation}
        </p>
        <p className="text-center text-blue-600 font-medium mt-1">
          {companyData.name}
        </p>
        
        {/* Contact Details */}
        <div className="mt-8 space-y-3">
          {/* Personal Mobile */}
          <a 
            href={`tel:${employeeData.mobile}`} 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <span className="text-gray-700">{employeeData.mobile}</span>
              <span className="text-sm text-gray-500 block">Mobile</span>
            </div>
          </a>

          {/* Office Phone */}
          <a 
            href={`tel:${companyData.workPhone}`} 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <span className="text-gray-700">{companyData.workPhone}</span>
              <span className="text-sm text-gray-500 block">Office</span>
            </div>
          </a>

          {/* Email */}
          <a 
            href={`mailto:${employeeData.email}`} 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <MailIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700 break-all">{employeeData.email}</span>
          </a>

          {/* Website */}
          <a 
            href={`https://${companyData.website}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <GlobeIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700">{companyData.website}</span>
          </a>

          {/* Address */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
            <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{companyData.address}</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-4">
          <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:text-blue-700 transition-colors">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.twitter} target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:text-blue-700 transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:text-blue-700 transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.linkedin} target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:text-blue-700 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.youtube} target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:text-blue-700 transition-colors">
            <YoutubeIcon className="w-6 h-6" />
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