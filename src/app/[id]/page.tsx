import DigitalCard from '@/components/DigitalCard';
import { employees } from '@/data/employees';

export default function Page(props: any) {
  const id = props.params.id;
  const employeeData = employees[id] || {
    firstName: "John",
    lastName: "Doe",
    mobile: "+919830046276",
    email: "contact@somanirealtors.com",
    designation: "Real Estate Consultant",
    imageUrl: "/api/placeholder/200/200"
  };

  return <DigitalCard employeeData={employeeData} />;
}