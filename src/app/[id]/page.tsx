import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';

export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

export default function Page({ params }: { params: { id: string } }) {
  // Get employee data or use fallback
  const employeeData = employees[params.id as keyof typeof employees] || {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}