import React from 'react';
import Image from 'next/image';
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  FacebookIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon, 
  SaveIcon, 
  XIcon 
} from 'lucide-react';

import type { EmployeeData } from '@/data/employees';

interface DigitalCardProps {
  employeeData: EmployeeData;
}

const companyData = {
  name: "Somani Realtors",
  workPhone: "033 40274027",
  website: "www.somanirealtors.com",
  address: "Somani Realtors Pvt Ltd, 40, Ashutosh Mukherjee Road, 2nd Floor, Bhowanipore, Kolkata, West Bengal 700020",
  coordinates: {
    lat: "22.5257",
    lng: "88.3451",
  },
  socials: {
    facebook: "https://facebook.com/somanirealtors",
    x: "https://x.com/somani_realtors",
    instagram: "https://www.instagram.com/somanirealtors/",
    linkedin: "https://in.linkedin.com/company/somanirealtors",
    youtube: "https://www.youtube.com/c/SomaniRealtorsPvtLtd",
  },
};

const DigitalCard = ({ employeeData }: DigitalCardProps) => {
  const getBase64Image = async (imageUrl: string): Promise<string> => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
          } else {
            reject(new Error('Failed to convert image to base64'));
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return '';
    }
  };

  const handleSaveContact = async () => {
    try {
      const photoData = employeeData.imageUrl ? await getBase64Image(employeeData.imageUrl) : '';

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
END:VCARD`;

      const blob = new Blob([vCard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${employeeData.firstName}_${employeeData.lastName}_Somani.vcf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating vCard:', error);
    }
  };

  const getMapsUrl = () => {
    const query = encodeURIComponent(companyData.address);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 flex justify-center p-4">
        <Image 
          src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg" 
          alt="Somani Realtors Logo" 
          width={80} 
          height={80} 
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src={employeeData.imageUrl}
            alt={`${employeeData.firstName} ${employeeData.lastName}`}
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-blue-500"
          />
          <h1 className="text-xl font-bold mt-2">{employeeData.firstName} {employeeData.lastName}</h1>
          <p className="text-gray-600 text-sm">{employeeData.designation}</p>
          <p className="text-blue-600 text-sm mt-1">{companyData.name}</p>
        </div>
        <div className="space-y-3 mt-4">
          <a href={`tel:${employeeData.mobile}`} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100">
            <PhoneIcon className="w-5 h-5 text-blue-600" />
            <span>{employeeData.mobile}</span>
          </a>
          <a href={`mailto:${employeeData.email}`} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100">
            <MailIcon className="w-5 h-5 text-blue-600" />
            <span>{employeeData.email}</span>
          </a>
          <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100">
            <MapPinIcon className="w-5 h-5 text-blue-600" />
            <span>View Office Location</span>
          </a>
        </div>
        <div className="flex justify-around mt-4">
          <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon className="w-5 h-5 text-blue-600" /></a>
          <a href={companyData.socials.x} target="_blank" rel="noopener noreferrer"><XIcon className="w-5 h-5 text-blue-600" /></a>
          <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon className="w-5 h-5 text-blue-600" /></a>
          <a href={companyData.socials.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-5 h-5 text-blue-600" /></a>
          <a href={companyData.socials.youtube} target="_blank" rel="noopener noreferrer"><YoutubeIcon className="w-5 h-5 text-blue-600" /></a>
        </div>
        <button
          onClick={handleSaveContact}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <SaveIcon className="w-5 h-5" />
          Save Contact
        </button>
      </div>
    </div>
  );
};

export default DigitalCard;
