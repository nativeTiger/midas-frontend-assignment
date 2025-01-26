import { HomeOutlined } from "@ant-design/icons";
import { DataType } from "./table";

export const doctorSelectOptions = [
  {
    value: "Dr. Jane Doe",
    label: <span>Dr. Jane Doe</span>,
  },
  {
    value: "Dr. Alex Smith",
    label: <span>Dr. Alex Smith</span>,
  },
  {
    value: "Dr. Emily Davis",
    label: <span>Dr. Emily Davis</span>,
  },
];

export const tableData: DataType[] = [
  {
    serialNumber: 1,
    UHID: "B1000216",
    patientName: "Ramesh Koirala",
    ageAndGender: "12 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Biochemistry",
    doctorName: "Sirishak Aryal",
    queueNumber: 1,
    previousRecord: "4",
    status: "follow-up",
  },
  {
    serialNumber: 2,
    UHID: "B1000216",
    patientName: "Ramesh Koirala",
    ageAndGender: "20 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Haematology",
    doctorName: "Engineer",
    queueNumber: 2,
    previousRecord: "2",
    status: "new",
  },
  {
    serialNumber: 3,
    UHID: "B1000216",
    patientName: "John Doe",
    ageAndGender: "35 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Immunology",
    doctorName: "John Doe",
    queueNumber: 3,
    previousRecord: "4",
    status: "follow-up",
  },
  {
    serialNumber: 4,
    UHID: "B1000216",
    patientName: "Jane Smith",
    ageAndGender: "45 Yrs/F",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Microbiology",
    doctorName: "Designer",
    queueNumber: 4,
    previousRecord: "5",
    status: "follow-up",
  },
  {
    serialNumber: 5,
    UHID: "B1000216",
    patientName: "Michael Johnson",
    ageAndGender: "27 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Genetics",
    doctorName: "Jane Smith",
    queueNumber: 5,
    previousRecord: "2",
    status: "free",
  },
  {
    serialNumber: 6,
    UHID: "B1000216",
    patientName: "Emily Davis",
    ageAndGender: "50 Yrs/F",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Neurology",
    doctorName: "Developer",
    queueNumber: 6,
    previousRecord: "2",
    status: "new",
  },
  {
    serialNumber: 7,
    UHID: "B1000216",
    patientName: "David Brown",
    ageAndGender: "35 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Pathology",
    doctorName: "Alex Johnson",
    queueNumber: 7,
    previousRecord: "8",
    status: "free",
  },
  {
    serialNumber: 8,
    UHID: "B1000216",
    patientName: "Sarah Wilson",
    ageAndGender: "60 Yrs/F",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Pharmacology",
    doctorName: "Architect",
    queueNumber: 8,
    previousRecord: "6",
    status: "new",
  },
  {
    serialNumber: 9,
    UHID: "B1000216",
    patientName: "Chris Lee",
    ageAndGender: "42 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Endocrinology",
    doctorName: "Emily Brown",
    queueNumber: 9,
    previousRecord: "2",
    status: "free",
  },
];

export const breadCrumbItems = [
  {
    href: "",
    title: <HomeOutlined />,
  },
  {
    href: "",
    title: <span>Clinical Management</span>,
  },
  {
    href: "",
    title: <span>OPD</span>,
  },
  {
    title: "New Patients",
  },
];

export const patientStatusTags = [
  {
    label: "New Patients",
    numberOfPatients: 20,
  },
  {
    label: "Nurse Seen",
    numberOfPatients: 4,
  },
  {
    label: "Doctor Visited",
    numberOfPatients: 6,
  },
  {
    label: "Appointment",
    numberOfPatients: 6,
  },
];
