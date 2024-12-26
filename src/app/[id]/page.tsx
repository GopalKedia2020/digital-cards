import DigitalCard from '@/components/DigitalCard';

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  // Test data - we'll replace with dynamic data later
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