import type { Metadata } from 'next';
import { NextPage } from 'next';
import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';

export const metadata: Metadata = {
  title: 'Digital Card - Somani Realtors'
};

type Props = {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page: NextPage<Props> = ({ params }) => {
  const employeeData = employees[params.id] || {
    firstName: "John",
    lastName: "Doe",
    mobile: "+919830046276",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
};

export default Page;