import { Metadata } from 'next';
import DigitalCard from '@/components/DigitalCard';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  return {
    title: `Digital Card - Somani Realtors`
  };
}

export default async function Page({ 
  params: { id } 
}: { 
  params: { id: string } 
}) {
  const employeeData = {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "john@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}