// Central type definitions for Paras Creations

export type ClientType = "Government" | "Private";
export type ProjectStatus = "Ongoing" | "Completed";

export interface Project {
  id: string;
  name: string;
  clientType: ClientType;
  status: ProjectStatus;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  image: string;
  progress: number; // 0 - 100
  budget?: string;
  siteManager?: string;
}

export type EmployeeStatus = "Active" | "Inactive";
export type AttendanceStatus = "Present" | "Absent" | "On Leave";

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  mobile: string;
  currentSite: string;
  salary: number;
  joiningDate: string;
  attendance: AttendanceStatus;
  status: EmployeeStatus;
}

export type InventoryCategory = "Material" | "Tool" | "Equipment";

export interface InventoryItem {
  id: string;
  name: string;
  category: InventoryCategory;
  total: number;
  available: number;
  used: number;
  returned: number;
  currentSite: string;
  lastUpdated: string;
  unit: string;
}

export type EnquiryStatus = "New" | "Contacted" | "Closed";

export interface Enquiry {
  id: string;
  name: string;
  mobile: string;
  projectType: string;
  location: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
