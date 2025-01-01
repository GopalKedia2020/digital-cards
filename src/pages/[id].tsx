import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DigitalCard from '@/components/DigitalCard'
import { employees, type EmployeeData } from '@/data/employees'

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
  
  // Handle the case when the page is being server-side rendered
  // and router.query is not yet available
  if (!router.isReady) {
    return null
  }

  const employeeData = 
    typeof id === 'string' && employees[id] 
      ? employees[id] 
      : defaultEmployee

  return (
    <>
      <Head>
        <title>Digital Card - Somani Realtors</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DigitalCard employeeData={employeeData} />
    </>
  )
}

export default CardPage