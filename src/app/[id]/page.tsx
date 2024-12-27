import { google } from 'googleapis';
import DigitalCard from '@/components/DigitalCard';

export const metadata = {
  title: 'Digital Card - Somani Realtors'
};

export default function Page() {
  // Fallback data - we know this works
  const employeeData = {
    firstName: "John",
    lastName: "Doe",
    mobile: "+91 9876543210",
    email: "john@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  // We'll add Google Sheets here in the next step
  return <DigitalCard employeeData={employeeData} />;
}