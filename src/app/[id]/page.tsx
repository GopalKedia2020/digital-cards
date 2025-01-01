import { type Metadata } from 'next'
import DigitalCard from '@/components/DigitalCard'
import { employees, type EmployeeData } from '@/data/employees'

export const metadata: Metadata = {
  title: 'Digital Card - Somani Realtors'
}

// Updated props type to match Next.js 13+ app router typing
type Props = {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

const defaultEmployee: EmployeeData = {
  firstName: "John",
  lastName: "Doe",
  mobile: "+919830046276",
  email: "contact@somanirealtors.com",
  designation: "Real Estate Consultant",
  imageUrl: "/api/placeholder/200/200"
}

export default function Page({ params }: Props) {
  const employeeData = employees[params.id] || defaultEmployee
  return <DigitalCard employeeData={employeeData} />
}