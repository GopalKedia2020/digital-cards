import { type Metadata } from 'next'
import DigitalCard from '@/components/DigitalCard'
import { employees, type EmployeeData } from '@/data/employees'

export const metadata: Metadata = {
  title: 'Digital Card - Somani Realtors'
}

const defaultEmployee: EmployeeData = {
  firstName: "John",
  lastName: "Doe",
  mobile: "+919830046276",
  email: "contact@somanirealtors.com",
  designation: "Real Estate Consultant",
  imageUrl: "/api/placeholder/200/200"
}

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Get the id from query parameters
  const id = typeof searchParams.id === 'string' ? searchParams.id : undefined
  const employeeData = id ? employees[id] || defaultEmployee : defaultEmployee

  return <DigitalCard employeeData={employeeData} />
}