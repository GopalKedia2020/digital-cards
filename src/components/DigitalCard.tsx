import React from 'react'
import { 
  PhoneIcon, 
  MailIcon
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
            <img 
              src={employeeData.imageUrl}
              alt={`${employeeData.firstName} ${employeeData.lastName}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          {employeeData.firstName} {employeeData.lastName}
        </h1>
        <p className="text-center text-gray-600 mt-1">{employeeData.designation}</p>
        
        <div className="mt-6 space-y-4">
          <a href={`tel:${employeeData.mobile}`} className="flex items-center space-x-3 text-gray-700">
            <PhoneIcon className="w-5 h-5 text-blue-600" />
            <span>{employeeData.mobile}</span>
          </a>
          <a href={`mailto:${employeeData.email}`} className="flex items-center space-x-3 text-gray-700">
            <MailIcon className="w-5 h-5 text-blue-600" />
            <span>{employeeData.email}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DigitalCard