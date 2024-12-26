import DigitalCard from '@/components/DigitalCard';
import { google } from 'googleapis';

// Define params interface
interface PageParams {
  id: string;
}

// Define page props interface
interface Props {
  params: PageParams;
}

async function getEmployeeData(uniqueId: string) {
  try {
    // Install googleapis if not already installed
    // npm install googleapis
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Employee Cards!A:G',
    });

    const rows = response.data.values;
    if (!rows) return null;

    const row = rows.find(row => row[6]?.includes(uniqueId));
    if (!row) return null;

    return {
      firstName: row[0],
      lastName: row[1],
      mobile: row[2],
      email: row[3],
      designation: row[4],
      imageUrl: row[5] || '/api/placeholder/200/200',
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Define the page component
export default function Page({ params }: Props) {
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