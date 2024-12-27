import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';

export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

type PageParams = {
  id: string;
};

interface PageProps {
  params: PageParams;
}

export default function Page({ params }: PageProps) {
  const id = params.id;
  const employeeData = id && employees[id] ? employees[id] : {
    firstName: "John",
    lastName: "Doe",
    mobile: "+919830046276",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}
