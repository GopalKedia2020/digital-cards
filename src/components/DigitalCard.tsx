import React from "react";
import Image from "next/image";
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  GlobeIcon,
} from "lucide-react";

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

// Define the type for employeeData prop
interface EmployeeData {
  firstName: string;
  lastName: string;
  designation: string;
  mobile: string;
  email: string;
  imageUrl: string;
}

interface DigitalCardProps {
  employeeData: EmployeeData;
}

const DigitalCard: React.FC<DigitalCardProps> = ({ employeeData }) => {
  const companyData = {
    socials: {
      facebook: "https://facebook.com/somanirealtors",
      x: "https://x.com/somani_realtors",
      instagram: "https://www.instagram.com/somanirealtors/",
      linkedin: "https://in.linkedin.com/company/somanirealtors",
      youtube: "https://www.youtube.com/c/SomaniRealtorsPvtLtd",
    },
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#F9FAFB] max-w-md mx-auto rounded-lg shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center bg-[#CF963F] py-6">
        <Image
          src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg"
          alt="Somani Realtors Logo"
          width={140}
          height={50}
          priority
        />
        <p className="text-white text-sm mt-2 font-light">Home for All</p>
      </div>

      {/* Profile Section */}
      <div className="text-center px-6 py-8">
        <Image
          src={employeeData.imageUrl}
          alt={`${employeeData.firstName} ${employeeData.lastName}`}
          width={100}
          height={100}
          className="rounded-full border-4 border-[#37419A]"
        />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-sm text-gray-500">{employeeData.designation}</p>
        <p className="text-gray-400 mt-1">Somani Realtors</p>
      </div>

      {/* Contact Info */}
      <div className="px-6 space-y-4 text-gray-700">
        <a
          href={`tel:${employeeData.mobile}`}
          className="flex items-center gap-3 hover:text-[#CF963F] transition"
        >
          <PhoneIcon className="w-5 h-5 text-[#CF963F]" />
          {employeeData.mobile}
        </a>
        <a
          href={`mailto:${employeeData.email}`}
          className="flex items-center gap-3 hover:text-[#CF963F] transition"
        >
          <MailIcon className="w-5 h-5 text-[#CF963F]" />
          {employeeData.email}
        </a>
        <a
          href="https://www.somanirealtors.com"
          className="flex items-center gap-3 hover:text-[#CF963F] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeIcon className="w-5 h-5 text-[#CF963F]" />
          somanirealtors.com
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-5 py-6 border-t border-gray-100 bg-[#F9FAFB]">
        {Object.entries(companyData.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#CF963F] transition"
          >
            {platform === "facebook" && <FacebookIcon className="w-5 h-5" />}
            {platform === "x" && <XIcon className="w-5 h-5" />}
            {platform === "instagram" && <InstagramIcon className="w-5 h-5" />}
            {platform === "linkedin" && <LinkedinIcon className="w-5 h-5" />}
            {platform === "youtube" && <YoutubeIcon className="w-5 h-5" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DigitalCard;
