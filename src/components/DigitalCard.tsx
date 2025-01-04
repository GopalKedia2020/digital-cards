import React from 'react'
import Image from 'next/image'
import { 
  PhoneIcon, 
  MailIcon, 
  SaveIcon, 
  MapPinIcon, 
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon
} from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

import type { EmployeeData } from '@/data/employees'

interface DigitalCardProps {
  employeeData: EmployeeData
}

const companyData = {
  name: "Somani Realtors",
  workPhone: "033 40274027",
  website: "www.somanirealtors.com",
  address: "Somani Realtors Pvt Ltd, 40, Ashutosh Mukherjee Road, 2nd Floor, Bhowanipore, Kolkata, West Bengal 700020",
  coordinates: {
    lat: "22.5257",
    lng: "88.3451"
  },
  socials: {
    facebook: "https://facebook.com/somanirealtors",
    x: "https://x.com/somani_realtors",
    instagram: "https://www.instagram.com/somanirealtors/",
    linkedin: "https://in.linkedin.com/company/somanirealtors",
    youtube: "https://www.youtube.com/c/SomaniRealtorsPvtLtd"
  }
}

const DigitalCard = ({ employeeData }: DigitalCardProps) => {
  const getBase64Image = async (imageUrl: string): Promise<string> => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            const base64String = reader.result.split(',')[1]
            resolve(base64String)
          } else {
            reject(new Error('Failed to convert image to base64'))
          }
        }
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
    } catch (error) {
      console.error('Error converting image to base64:', error)
      return ''
    }
  }

  const handleSaveContact = async () => {
    try {
      const photoData = employeeData.imageUrl ? await getBase64Image(employeeData.imageUrl) : ''
      
      const vCard = `BEGIN:VCARD
VERSION:3.0
N:${employeeData.lastName};${employeeData.firstName};;;
FN:${employeeData.firstName} ${employeeData.lastName}
ORG:${companyData.name}
TITLE:${employeeData.designation}
TEL;TYPE=CELL:${employeeData.mobile}
TEL;TYPE=WORK:${companyData.workPhone}
EMAIL:${employeeData.email}
ADR:;;${companyData.address}
URL:${companyData.website}
URL;type=Facebook:${companyData.socials.facebook}
URL;type=x.com:${companyData.socials.x}
URL;type=LinkedIn:${companyData.socials.linkedin}
URL;type=Instagram:${companyData.socials.instagram}
URL;type=YouTube:${companyData.socials.youtube}
GEO:${companyData.coordinates.lat},${companyData.coordinates.lng}${photoData ? `
PHOTO;ENCODING=b;TYPE=JPEG:${photoData}` : ''}
END:VCARD`

      const blob = new Blob([vCard], { type: 'text/vcard' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${employeeData.firstName}_${employeeData.lastName}_Somani.vcf`)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error creating vCard:', error)
    }
  }

  const getMapsUrl = () => {
    const query = encodeURIComponent(companyData.address)
    return `https://www.google.com/maps/search/?api=1&query=${query}`
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Top Section with White Background */}
      <div className="bg-white pt-6 pb-20 px-6 relative">
        <div className="flex justify-between items-start mb-4">
          {/* 34 Years Logo */}
          <div className="w-48">
            <Image 
              src="https://res.cloudinary.com/somani/image/upload/v1735978151/PC_34yrs_b3hyde.png"
              alt="34 Years Logo"
              width={200}
              height={100}
              priority
              unoptimized
              className="h-24 w-auto" // ~100px
            />
          </div>

          {/* Company Logo */}
          <div className="w-48 flex justify-end">
            <Image 
              src="https://res.cloudinary.com/somani/image/upload/v1730981810/Somani%20Realtors%20Logo%20round.png"
              alt="Somani Realtors Logo"
              width={240}
              height={120}
              priority
              unoptimized
              className="h-28 w-auto" // ~120px
            />
          </div>
        </div>

        {/* Profile Image - Positioned to overlap sections */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#37419A]">
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
      </div>

      {/* Bottom Section with Blue Background */}
      <div className="bg-[#37419A] pt-20 pb-6 px-6">
        <h1 className="text-xl font-bold text-center text-white">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-center mt-1 text-sm text-gray-200">
          {employeeData.designation}
        </p>
        
        <div className="mt-6 space-y-3">
          <a 
            href={`tel:${employeeData.mobile}`} 
            className="flex items-center gap-3 p-3 rounded-lg bg-[#4351B0] hover:bg-[#4957BD] transition-colors"
          >
            <PhoneIcon className="w-5 h-5 text-white flex-shrink-0" />
            <div>
              <span className="text-white text-sm">{employeeData.mobile}</span>
              <span className="text-xs text-gray-200 block">Mobile</span>
            </div>
          </a>

          <a 
            href={`tel:${companyData.workPhone}`} 
            className="flex items-center gap-3 p-3 rounded-lg bg-[#4351B0] hover:bg-[#4957BD] transition-colors"
          >
            <PhoneIcon className="w-5 h-5 text-white flex-shrink-0" />
            <div>
              <span className="text-white text-sm">{companyData.workPhone}</span>
              <span className="text-xs text-gray-200 block">Office</span>
            </div>
          </a>

          <a 
            href={`mailto:${employeeData.email}`} 
            className="flex items-center gap-3 p-3 rounded-lg bg-[#4351B0] hover:bg-[#4957BD] transition-colors"
          >
            <MailIcon className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white text-sm break-all">{employeeData.email}</span>
          </a>

          <a 
            href={getMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[#4351B0] hover:bg-[#4957BD] transition-colors"
          >
            <MapPinIcon className="w-5 h-5 text-white flex-shrink-0" />
            <div>
              <span className="text-sm text-white">{companyData.address}</span>
              <span className="text-xs text-[#CF963F] block hover:underline">Open in Google Maps</span>
            </div>
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <a 
            href={companyData.socials.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#CF963F] transition-colors"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a 
            href={companyData.socials.x}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#CF963F] transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a 
            href={companyData.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#CF963F] transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a 
            href={companyData.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#CF963F] transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a 
            href={companyData.socials.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#CF963F] transition-colors"
          >
            <YoutubeIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-white">{companyData.website}</p>
        </div>

        <button
          onClick={handleSaveContact}
          className="w-full mt-4 bg-[#CF963F] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#b17d2f] transition-colors"
        >
          <SaveIcon className="w-5 h-5" />
          <span>Save Contact</span>
        </button>
      </div>
    </div>
  )
}

export default DigitalCard