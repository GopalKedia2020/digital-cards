import { useRouter } from 'next/router';
import DigitalCard from '../components/DigitalCard';
import { employees } from '../data/employees';

const EmployeeCardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <div>Loading...</div>;
  }

  const employeeData = employees[id];

  if (!employeeData) {
    return <div>Employee not found</div>;
  }

  return <DigitalCard employeeData={employeeData} />;
};

export default EmployeeCardPage;
