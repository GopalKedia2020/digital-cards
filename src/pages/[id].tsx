import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DigitalCard from '@/components/DigitalCard'
import { employees } from '@/data/employees'
import type { EmployeeData } from '@/components/DigitalCard'

const defaultEmployee: EmployeeData = {
  firstName: "John",
  lastName: "Doe",
  mobile: "+919830046276",
  email: "contact@somanirealtors.com",
  designation: "Real Estate Consultant",
  imageUrl: "/api/placeholder/200/200"
}

const CardPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (!router.isReady) {
    return null
  }

  const employeeData: EmployeeData = 
    typeof id === 'string' && employees[id] 
      ? employees[id] 
      : defaultEmployee

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Head>
        <title>{`${employeeData.firstName} ${employeeData.lastName} | Somani Realtors`}</title>
        <meta name="description" content={`Digital Business Card for ${employeeData.firstName} ${employeeData.lastName} - ${employeeData.designation} at Somani Realtors`} />
      </Head>
      <DigitalCard employeeData={employeeData} />
    </div>
  )
}

export default CardPage