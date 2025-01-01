import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Card - Somani Realtors'
};

// Using Record type
type PageProps = {
  params: Record<'id', string>;
};

export default async function Page({ params }: PageProps) {
  const employeeData = employees[params.id] || {
    firstName: "John",
    lastName: "Doe",
    mobile: "+919830046276",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}