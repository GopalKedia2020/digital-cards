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

// Adding async and proper Next.js 13 typing
export default async function Page({
  params,
  searchParams,
}: {
  params: {}
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Handle potential array value from searchParams
  const id = 
    Array.isArray(searchParams.id) 
      ? searchParams.id[0] 
      : searchParams.id

  const employeeData = id && employees[id] ? employees[id] : defaultEmployee

  return <DigitalCard employeeData={employeeData} />
}