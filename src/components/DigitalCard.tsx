import React from 'react'
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
} from 'lucide-react'

interface EmployeeData {
  firstName: string
  lastName: string
  mobile: string
  email: string
  designation: string
  imageUrl: string
}

interface DigitalCardProps {
  employeeData: EmployeeData
}

const defaultEmployee: EmployeeData = {
  firstName: "John",
  lastName: "Doe",
  mobile: "+91 9876543210",
  email: "john@somanirealtors.com",
  designation: "Real Estate Consultant",
  imageUrl: "/api/placeholder/200/200"
}

const DigitalCard: React.FC<DigitalCardProps> = ({ 
  employeeData = defaultEmployee 
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Rest of your component remains the same */}
    </div>
  )
}

export default DigitalCard