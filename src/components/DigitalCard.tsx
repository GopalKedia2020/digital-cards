import React from 'react';
import Image from 'next/image';
import {
  PhoneIcon,
  MailIcon,
  SaveIcon,
  GlobeIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

import type { EmployeeData } from '@/data/employees';

interface DigitalCardProps {
  employeeData: EmployeeData;
}

const companyData = {
  name: 'Somani Realtors',
  workPhone: '033 40274027',
  website: 'www.somanirealtors.com',
  address:
    'Somani Realtors Pvt Ltd, 40, Ashutosh Mukherjee Road, 2nd Floor, Bhowanipore, Kolkata, West Bengal 700020',
  coordinates: {
    lat: '22.5257',
    lng: '88.3451',
  },
  socials: {
    facebook: 'https://facebook.com/somanirealtors',
    x: 'https://x.com/somani_realtors',
    instagram: 'https://www.instagram.com/somanirealtors/',
    linkedin: 'https://in.linkedin.com/company/somanirealtors',
    youtube: 'https://www.youtube.com/c/SomaniRealtorsPvtLtd',
  },
};

const DigitalCard = ({ employeeData }: DigitalCardProps) => {
  const handleSaveContact = async () => {
    try {
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
END:VCARD`;

      const blob = new Blob([vCard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `${employeeData.firstName}_${employeeData.lastName}_Somani.vcf`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating vCard:', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-6F963F">
      {/* Header with logo */}
      <div className="flex justify-center items-center bg-white py-4">
        <Image
          src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg"
          alt="Somani Realtors Logo"
          width={150}
          height={50}
          priority
        />
      </div>

      {/* Employee details */}
      <div className="px-4 py-6 text-center">
        <Image
          src={employeeData.imageUrl}
          alt={`${employeeData.firstName} ${employeeData.lastName}`}
          width={80}
          height={80}
          className="mx-auto rounded-full border-2 border-6F963F"
          priority
        />
        <h1 className="mt-4 text-lg font-bold text-gray-800">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-sm text-gray-600">{employeeData.designation}</p>
        <p className="mt-1 text-xs text-gray-500">{companyData.name}</p>
      </div>

      {/* Contact Information */}
      <div className="px-4 space-y-2">
        <div className="flex items-center gap-3 text-gray-700">
          <PhoneIcon className="w-5 h-5 text-37419A" />
          <span>{employeeData.mobile}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MailIcon className="w-5 h-5 text-37419A" />
          <span>{employeeData.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <GlobeIcon className="w-5 h-5 text-37419A" />
          <a
            href={`https://${companyData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {companyData.website}
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <PhoneIcon className="w-5 h-5 text-37419A" />
          <span>{companyData.workPhone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPinIcon className="w-5 h-5 text-37419A" />
          <span>{companyData.address}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-4 px-4">
        {Object.entries(companyData.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-37419A hover:text-6F963F transition"
          >
            {platform === 'facebook' && <FacebookIcon className="w-5 h-5" />}
            {platform === 'x' && <XIcon className="w-5 h-5" />}
            {platform === 'instagram' && <InstagramIcon className="w-5 h-5" />}
            {platform === 'linkedin' && <LinkedinIcon className="w-5 h-5" />}
            {platform === 'youtube' && <YoutubeIcon className="w-5 h-5" />}
          </a>
        ))}
      </div>

      {/* Save Contact Button */}
      <div className="px-4 mt-6 pb-4">
        <button
          onClick={handleSaveContact}
          className="w-full bg-37419A text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-6F963F transition"
        >
          <SaveIcon className="w-5 h-5" />
          <span>Save Contact</span>
        </button>
      </div>
    </div>
  );
};

export default DigitalCard;
