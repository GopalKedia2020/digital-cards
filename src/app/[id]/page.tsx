import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';

export const metadata = {
  title: 'Digital Card - Somani Realtors',
};

// Ensure types are correct
type PageParams = {
  id: string;
};

interface PageProps {
  params: PageParams;
}

// Use Promise.resolve in generateStaticParams
export async function generateStaticParams() {
  return Promise.resolve(
    Object.keys(employees).map((id) => ({
      id,
    }))
  );
}

// Handle dynamic route
export default function Page({ params }: PageProps) {
  const { id } = params;

  const employeeData = employees[id] || {
    firstName: "John",
    lastName: "Doe",
    mobile: "+919830046276",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200",
  };

  return <DigitalCard employeeData={employeeData} />;
}
