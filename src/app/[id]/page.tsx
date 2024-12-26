import DigitalCard from '@/components/DigitalCard';

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  // Using params.id to make it explicitly used
  console.log(`Rendering card for ID: ${params.id}`);
  
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