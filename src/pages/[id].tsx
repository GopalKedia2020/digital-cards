import { useRouter } from 'next/router';
import Head from 'next/head';
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

  return (
    <>
      <Head>
        <title>{`${employeeData.firstName} ${employeeData.lastName} | Somani Realtors`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DigitalCard employeeData={employeeData} />
    </>
  );
};

export default EmployeeCardPage;
