import { Metadata } from 'next';
import DigitalCard from '@/components/DigitalCard';

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  return {
    title: `Card - ${params.id} - Somani Realtors`
  };
}

export default async function Page({ 
  params: { id } 
}: { 
  params: { id: string } 
}) {
  // Using id to avoid ESLint error
  const employeeData = {
    firstName: `Employee ${id}`,
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "john@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}