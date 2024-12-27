import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';

export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

type PageParams = {
  id: string;
}

export default function Page(context: { params: PageParams }) {
  const id = context.params.id;
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