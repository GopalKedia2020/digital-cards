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

// Make it an async component
export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const employeeData = employees[params.id] || defaultEmployee
  return <DigitalCard employeeData={employeeData} />
}