import React from 'react';
import Image from 'next/image';
import { 
  PhoneIcon, 
  MailIcon, 
  SaveIcon, 
  MapPinIcon, 
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon
} from 'lucide-react';

const XIcon = React.forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill="currentColor"
      aria-hidden="true"
      ref={ref}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
);

XIcon.displayName = 'XIcon';

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

const companyData = {
  name: "Somani Realtors",
  workPhone: "033 40274027",
  website: "www.somanirealtors.com",
  fullAddress: "Somani Realtors Pvt Ltd, 40, Ashutosh Mukherjee Road, 2nd Floor, Bhowanipore, Kolkata, West Bengal 700020",
  displayAddress: "40, Ashutosh Mukherjee Road, 2nd Floor, Bhowanipore, Kolkata, West Bengal 700020",
  coordinates: {
    lat: "22.5342279",
    lng: "88.3458677"
  },
  socials: {
    facebook: "https://facebook.com/somanirealtors",
    x: "https://x.com/somani_realtors",
    instagram: "https://www.instagram.com/somanirealtors/",
    linkedin: "https://in.linkedin.com/company/somanirealtors",
    youtube: "https://www.youtube.com/c/SomaniRealtorsPvtLtd"
  }
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
ADR:;;${companyData.fullAddress}
URL:https://${companyData.website}
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
    const query = encodeURIComponent(companyData.fullAddress);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  const handleEmailClick = (email: string) => {
    // Try to open default mail client first
    window.location.href = `mailto:${email}`;

    // After a small delay, check if the mail client was opened
    // If not, open Gmail compose in browser
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      window.open(gmailUrl, '_blank');
    }, 300);
  };

  const getContactButton = (
    href: string,
    icon: React.ReactElement<{ className?: string }>,
    primary: string,
    secondary?: string
  ) => {
    // Special handling for email
    if (href.startsWith('mailto:')) {
      return (
        <button
          onClick={() => handleEmailClick(primary)}
          className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#4351B0] hover:bg-[#4957BD] transition-colors"
        >
          {React.cloneElement(icon, {
            className: "w-5 h-5 text-white flex-shrink-0"
          })}
          <div>
            <span className="text-white text-sm break-all">{primary}</span>
            {secondary && <span className="text-xs text-gray-200 block">{secondary}</span>}
          </div>
        </button>
      );
    }

    // Default handling for other types
    return (
      <a 
        href={href}
        target={href.startsWith('tel:') ? undefined : '_blank'}
        rel={href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
        className="flex items-center gap-3 p-3 rounded-lg bg-[#4351B0] hover:bg-[#4957BD] transition-colors"
      >
        {React.cloneElement(icon, {
          className: "w-5 h-5 text-white flex-shrink-0"
        })}
        <div>
          <span className="text-white text-sm break-all">{primary}</span>
          {secondary && <span className="text-xs text-gray-200 block">{secondary}</span>}
        </div>
      </a>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Top Section with White Background */}
      <div className="bg-white pt-4 pb-16 px-6 relative">
        <div className="flex justify-between items-start mb-2">
          {/* Company Logo */}
          <div className="w-48">
            <Image 
              src="https://res.cloudinary.com/somani/image/upload/v1730981810/Somani%20Realtors%20Logo%20round.png"
              alt="Somani Realtors Logo"
              width={240}
              height={120}
              priority
              unoptimized
              className="h-[120px] w-auto"
            />
          </div>

          {/* 34 Years Logo */}
          <div className="w-48 flex justify-end mt-4">
            <Image 
              src="https://res.cloudinary.com/somani/image/upload/v1735978151/PC_34yrs_b3hyde.png"
              alt="34 Years Logo"
              width={200}
              height={96}
              priority
              unoptimized
              className="h-20 w-auto"
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
      <div className="bg-[#37419A] pt-16 pb-4 px-6">
        <h1 className="text-xl font-bold text-center text-white">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-center text-sm text-gray-200 mb-4">
          {employeeData.designation}
        </p>
        
        <div className="space-y-3">
          {getContactButton(
            `tel:${employeeData.mobile}`,
            React.createElement(PhoneIcon),
            employeeData.mobile,
            'Mobile'
          )}

          {getContactButton(
            `tel:${companyData.workPhone}`,
            React.createElement(PhoneIcon),
            companyData.workPhone,
            'Office'
          )}

          {getContactButton(
            `mailto:${employeeData.email}`,
            React.createElement(MailIcon),
            employeeData.email
          )}

          {getContactButton(
            getMapsUrl(),
            React.createElement(MapPinIcon),
            companyData.displayAddress,
            'Open in Google Maps'
          )}
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-6">
          {[
            { href: companyData.socials.facebook, Icon: FacebookIcon },
            { href: companyData.socials.x, Icon: XIcon },
            { href: companyData.socials.instagram, Icon: InstagramIcon },
            { href: companyData.socials.linkedin, Icon: LinkedinIcon },
            { href: companyData.socials.youtube, Icon: YoutubeIcon }
          ].map(({ href, Icon }) => (
            <a 
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CF963F] transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Website Link */}
        <div className="mt-4 text-center">
          <a 
            href={`https://${companyData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white hover:text-[#CF963F] transition-colors"
          >
            {companyData.website}
          </a>
        </div>

        {/* Save Contact Button */}
        <button
          onClick={handleSaveContact}
          className="w-full mt-4 bg-[#CF963F] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#b17d2f] transition-colors"
        >
          <SaveIcon className="w-5 h-5" />
          <span>Save Contact</span>
        </button>
      </div>
    </div>
  );
};

export default DigitalCard;
