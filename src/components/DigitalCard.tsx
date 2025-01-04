import React from 'react'
import Image from 'next/image'
import { 
  PhoneIcon, 
  MailIcon, 
  SaveIcon, 
  MapPinIcon, 
  GlobeIcon,
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
  address: "Somani Realtors, 2nd Floor, 40, Ashutosh Mukherjee Rd, Bhowanipore, Kolkata, West Bengal 700020",
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-32 relative">
        {/* Logo Container */}
        <div className="absolute top-4 left-0 right-0 flex justify-between items-start px-4">
          {/* 24 years logo - moved to left */}
          <div className="w-16 h-16">
            <Image 
              src="/api/placeholder/64/64"
              alt="24 Years Logo"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
          {/* Company logo - moved to right */}
          <div className="w-12 h-12">
            <Image 
              src="/api/placeholder/48/48"
              alt="Somani Realtors Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Profile Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white shadow-md">
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
        
        <div className="mt-8 space-y-3">
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

          <a 
            href={`mailto:${employeeData.email}`} 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <MailIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700 break-all">{employeeData.email}</span>
          </a>

          <a 
            href={`https://${companyData.website}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <GlobeIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700">{companyData.website}</span>
          </a>

          <a 
            href={getMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
          >
            <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <span className="text-gray-700 text-sm">{companyData.address}</span>
              <span className="text-sm text-blue-600 block group-hover:underline">Open in Google Maps</span>
            </div>
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a 
            href={companyData.socials.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
            title="Facebook"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a 
            href={companyData.socials.x}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            title="X"
          >
            <XIcon className="w-5 h-5" />
          </a>
          <a 
            href={companyData.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            title="Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a 
            href={companyData.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a 
            href={companyData.socials.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            title="YouTube"
          >
            <YoutubeIcon className="w-6 h-6" />
          </a>
        </div>

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