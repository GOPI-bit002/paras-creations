// --------------------------------------------------------------
// Employees demo data — used inside admin dashboard only.
// This information is private and must never be shown on public
// client pages.
// --------------------------------------------------------------

import type { Employee } from "@/types";

export const employees: Employee[] = [
  {
    id: "EMP-1001",
    name: "Rajeev Kumar",
    role: "Site Engineer",
    department: "Engineering",
    mobile: "9876543201",
    currentSite: "District Admin Complex",
    salary: 55000,
    joiningDate: "2019-06-12",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1002",
    name: "Sandeep Singh",
    role: "Project Manager",
    department: "Management",
    mobile: "9876543202",
    currentSite: "PWD Rural Road",
    salary: 72000,
    joiningDate: "2017-02-04",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1003",
    name: "Harpreet Kaur",
    role: "Architect",
    department: "Design",
    mobile: "9876543203",
    currentSite: "Sharma Residency",
    salary: 68000,
    joiningDate: "2020-09-01",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1004",
    name: "Amit Bansal",
    role: "Site Supervisor",
    department: "Operations",
    mobile: "9876543204",
    currentSite: "Malhotra Banquet Hall",
    salary: 42000,
    joiningDate: "2021-11-15",
    attendance: "On Leave",
    status: "Active"
  },
  {
    id: "EMP-1005",
    name: "Vikram Chauhan",
    role: "Civil Foreman",
    department: "Operations",
    mobile: "9876543205",
    currentSite: "District Admin Complex",
    salary: 38000,
    joiningDate: "2018-04-22",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1006",
    name: "Neha Sharma",
    role: "Accountant",
    department: "Accounts",
    mobile: "9876543206",
    currentSite: "Head Office",
    salary: 45000,
    joiningDate: "2022-01-10",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1007",
    name: "Suresh Yadav",
    role: "Mason Lead",
    department: "Labour",
    mobile: "9876543207",
    currentSite: "PWD Rural Road",
    salary: 28000,
    joiningDate: "2019-08-30",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1008",
    name: "Pooja Verma",
    role: "HR Executive",
    department: "Human Resources",
    mobile: "9876543208",
    currentSite: "Head Office",
    salary: 40000,
    joiningDate: "2023-05-18",
    attendance: "Present",
    status: "Active"
  },
  {
    id: "EMP-1009",
    name: "Dinesh Patel",
    role: "Store Keeper",
    department: "Inventory",
    mobile: "9876543209",
    currentSite: "Central Warehouse",
    salary: 32000,
    joiningDate: "2020-03-25",
    attendance: "Absent",
    status: "Active"
  },
  {
    id: "EMP-1010",
    name: "Manpreet Gill",
    role: "Safety Officer",
    department: "Safety",
    mobile: "9876543210",
    currentSite: "Malhotra Banquet Hall",
    salary: 48000,
    joiningDate: "2022-07-09",
    attendance: "Present",
    status: "Active"
  }
];
