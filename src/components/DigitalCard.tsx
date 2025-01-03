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
  GlobeIcon,
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
  website: 'https://www.somanirealtors.com',
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
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header with logo */}
      <div className="flex justify-center items-center bg-white py-4 border-b">
        <Image
          src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg"
          alt="Somani Realtors Logo"
          width={150}
          height={50}
          priority
        />
      </div>

      {/* Employee details */}
      <div className="px-6 py-6 text-center">
        <Image
          src={employeeData.imageUrl}
          alt={`${employeeData.firstName} ${employeeData.lastName}`}
          width={100}
          height={100}
          className="mx-auto rounded-full border-4 border-6F963F"
          priority
        />
        <h1 className="mt-4 text-xl font-semibold text-gray-800">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-sm text-gray-600">{employeeData.designation}</p>
        <p className="mt-1 text-sm text-gray-500">{companyData.name}</p>
      </div>

      {/* Contact Information */}
      <div className="px-6 py-4 space-y-4 text-sm text-gray-700">
        <a
          href={`tel:${employeeData.mobile}`}
          className="flex items-center gap-2 hover:text-6F963F transition"
        >
          <PhoneIcon className="w-5 h-5 text-6F963F" />
          {employeeData.mobile}
        </a>
        <a
          href={`mailto:${employeeData.email}`}
          className="flex items-center gap-2 hover:text-6F963F transition"
        >
          <MailIcon className="w-5 h-5 text-6F963F" />
          {employeeData.email}
        </a>
        <a
          href={companyData.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-6F963F transition"
        >
          <GlobeIcon className="w-5 h-5 text-6F963F" />
          {companyData.website.replace('https://', '')}
        </a>
        <a
          href={`tel:${companyData.workPhone}`}
          className="flex items-center gap-2 hover:text-6F963F transition"
        >
          <PhoneIcon className="w-5 h-5 text-6F963F" />
          {companyData.workPhone}
        </a>
        <a
          href={`https://www.google.com/maps?q=${companyData.coordinates.lat},${companyData.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-6F963F transition"
        >
          <MapPinIcon className="w-5 h-5 text-6F963F" />
          {companyData.address}
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 py-4 border-t">
        {Object.entries(companyData.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-6F963F hover:text-37419A transition"
          >
            {platform === 'facebook' && <FacebookIcon className="w-6 h-6" />}
            {platform === 'x' && <XIcon className="w-6 h-6" />}
            {platform === 'instagram' && <InstagramIcon className="w-6 h-6" />}
            {platform === 'linkedin' && <LinkedinIcon className="w-6 h-6" />}
            {platform === 'youtube' && <YoutubeIcon className="w-6 h-6" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DigitalCard;
