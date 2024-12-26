import DigitalCard from '@/components/DigitalCard';

export default function CardPage() {
  // This is test data - we'll connect to Google Sheets later
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