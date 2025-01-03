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

  const addContact = () => {
    const contact = {
      name: `${employeeData.firstName} ${employeeData.lastName}`,
      email: employeeData.email,
      phone: employeeData.mobile,
      company: "Somani Realtors",
      title: employeeData.designation,
    };

    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
EMAIL:${contact.email}
TEL:${contact.phone}
ORG:${contact.company}
TITLE:${contact.title}
END:VCARD
    `;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name.replace(" ", "_")}_Contact.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white max-w-md mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 py-4">
        <Image
          src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg"
          alt="Somani Realtors Logo"
          width={70}
          height={50}
          priority
        />
        <Image
          src="https://res.cloudinary.com/somani/image/upload/v1730982022/Somani%20Realtors%20Logo%20Svg%20File.svg"
          alt="Somani Realtors Logo"
          width={70}
          height={50}
          priority
        />
      </div>

      {/* Profile Section */}
      <div className="text-center px-6 py-8">
        <Image
          src={employeeData.imageUrl}
          alt={`${employeeData.firstName} ${employeeData.lastName}`}
          width={120}
          height={120}
          className="rounded-full border-4 border-[#CF963F]"
        />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-sm text-gray-500">{employeeData.designation}</p>
        <p className="text-gray-400 mt-1">Somani Realtors</p>
      </div>

      {/* Contact Info Section */}
      <div className="bg-[#37419A] text-white px-6 py-4">
        <button
          onClick={addContact}
          className="block w-full bg-[#CF963F] text-white py-2 rounded-md mb-4 text-center hover:bg-[#D5A04D] transition"
        >
          Add Contact
        </button>
        <div className="space-y-4">
          <a
            href={`tel:${employeeData.mobile}`}
            className="flex items-center gap-3 hover:text-[#D5A04D] transition"
          >
            <PhoneIcon className="w-5 h-5" />
            {employeeData.mobile}
          </a>
          <a
            href={`mailto:${employeeData.email}`}
            className="flex items-center gap-3 hover:text-[#D5A04D] transition"
          >
            <MailIcon className="w-5 h-5" />
            {employeeData.email}
          </a>
          <a
            href="https://www.somanirealtors.com"
            className="flex items-center gap-3 hover:text-[#D5A04D] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon className="w-5 h-5" />
            somanirealtors.com
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-6 py-4 text-gray-700">
        <div className="flex justify-center space-x-4 mb-4">
          {Object.entries(companyData.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#CF963F] transition"
            >
              {platform === "facebook" && <FacebookIcon className="w-6 h-6" />}
              {platform === "x" && <XIcon className="w-6 h-6" />}
              {platform === "instagram" && (
                <InstagramIcon className="w-6 h-6" />
              )}
              {platform === "linkedin" && <LinkedinIcon className="w-6 h-6" />}
              {platform === "youtube" && <YoutubeIcon className="w-6 h-6" />}
            </a>
          ))}
        </div>
        <p className="text-center text-sm">
          Somani Realtors Pvt Ltd, 40 Ashutosh Mukherjee Road, 2nd Floor,
          Bhowanipore, Kolkata, West Bengal 700020
        </p>
      </div>
    </div>
  );
};

export default DigitalCard;
