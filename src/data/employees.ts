export interface EmployeeData {
  firstName: string
  lastName: string
  mobile: string
  email: string
  designation: string
  imageUrl: string
}

export interface EmployeeDatabase {
  [key: string]: EmployeeData
}

export const employees: EmployeeDatabase = {
  '0UPg5oPgaBtO7Mhe61IqqrgjDPkzzsSJ': {
    firstName: "Gopal",
    lastName: "Kedia",
    mobile: "+919830046276",
    email: "gopalkedia@somanirealtors.com",
    designation: "Operations manager",
    imageUrl: "https://somanirealtors.keka.com/files/36781736-e700-4bbd-aeea-afc1b3aae5f8/200x200/profileimage/1b4a0e365020446b86965cd9df864cc3.jpg?1735125417292?1735113600000"
  },
  'CIqAPZ9shdMGgtyU5YewJRoEL7MneF4m': {
    firstName: "Divya",
    lastName: "Roy",
    mobile: "+919830079859",
    email: "divyaroy@somanirealtors.com",
    designation: "General Manager - HR and Admin",
    imageUrl: "https://somanirealtors.keka.com/files/36781736-e700-4bbd-aeea-afc1b3aae5f8/200x200/profileimage/f2d06cf8236e4250a1e4b82599449f73.jpeg?1735277187231?1735272000000"
  }
}