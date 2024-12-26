// Import necessary dependencies
import React from 'react';
import Image from 'next/image';
// Import icons from lucide-react library that we'll use for our contact buttons
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  GlobeIcon, 
  DownloadIcon, 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon 
} from 'lucide-react';

// Define the DigitalCard component with default values for when no data is provided
const DigitalCard = ({ 
  employeeData = {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "john@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200" // Default placeholder image
  }
}) => {
  // Static company information that will be the same for all cards
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
  };

  // Function to handle downloading the contact as a vCard
  const handleDownloadVCard = () => {
    // Create vCard format string
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:2.1",
      `N:${employeeData.lastName};${employeeData.firstName}`,
      `FN:${employeeData.firstName} ${employeeData.lastName}`,
      `ORG:${companyData.name}`,
      `TEL;CELL:${employeeData.mobile}`,
      `TEL;WORK:${companyData.workPhone}`,
      `EMAIL:${employeeData.email}`,
      `ADR:;;${companyData.address}`,
      `URL:${companyData.website}`,
      employeeData.imageUrl ? `PHOTO;VALUE=URI:${employeeData.imageUrl}` : "",
      "END:VCARD"
    ].filter(Boolean).join("\r\n");

    // Create and trigger download
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${employeeData.firstName}_${employeeData.lastName}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // The component's JSX structure
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Profile Photo Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 relative">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
            <Image 
              src={employeeData.imageUrl}
              alt={`${employeeData.firstName} ${employeeData.lastName}`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Employee Information Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-center text-gray-600 mt-1">{employeeData.designation}</p>
        
        {/* Contact Details Section */}
        <div className="mt-6 space-y-4">
          <a href={`tel:${employeeData.mobile}`} className="flex items-center space-x-3 text-gray-700">
            <PhoneIcon className="w-5 h-5 text-blue-600" />
            <span>{employeeData.mobile}</span>
          </a>
          <a href={`tel:${companyData.workPhone}`} className="flex items-center space-x-3 text-gray-700">
            <PhoneIcon className="w-5 h-5 text-blue-600" />
            <span>{companyData.workPhone}</span>
          </a>
          <a href={`mailto:${employeeData.email}`} className="flex items-center space-x-3 text-gray-700">
            <MailIcon className="w-5 h-5 text-blue-600" />
            <span>{employeeData.email}</span>
          </a>
          <div className="flex items-center space-x-3 text-gray-700">
            <MapPinIcon className="w-5 h-5 flex-shrink-0 text-blue-600" />
            <span className="text-sm">{companyData.address}</span>
          </div>
          <a href={`https://${companyData.website}`} className="flex items-center space-x-3 text-gray-700">
            <GlobeIcon className="w-5 h-5 text-blue-600" />
            <span>{companyData.website}</span>
          </a>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href={companyData.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <YoutubeIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Save Contact Button Section */}
        <div className="mt-6">
          <button
            onClick={handleDownloadVCard}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Save Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the component so it can be imported elsewhere
export default DigitalCard;