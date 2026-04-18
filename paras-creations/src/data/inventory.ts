// --------------------------------------------------------------
// Inventory demo data — construction materials and tools
// Edit this file to change inventory items in the admin panel.
// --------------------------------------------------------------

import type { InventoryItem } from "@/types";

export const inventory: InventoryItem[] = [
  {
    id: "INV-201",
    name: "Cement Bags (OPC 53)",
    category: "Material",
    total: 2000,
    available: 850,
    used: 1050,
    returned: 100,
    currentSite: "District Admin Complex",
    lastUpdated: "2026-04-15",
    unit: "bags"
  },
  {
    id: "INV-202",
    name: "Steel Rods (Fe 500)",
    category: "Material",
    total: 45000,
    available: 18500,
    used: 25200,
    returned: 1300,
    currentSite: "District Admin Complex",
    lastUpdated: "2026-04-14",
    unit: "kg"
  },
  {
    id: "INV-203",
    name: "Red Bricks",
    category: "Material",
    total: 150000,
    available: 62000,
    used: 85000,
    returned: 3000,
    currentSite: "Sharma Residency",
    lastUpdated: "2026-04-12",
    unit: "pcs"
  },
  {
    id: "INV-204",
    name: "River Sand",
    category: "Material",
    total: 320,
    available: 120,
    used: 190,
    returned: 10,
    currentSite: "Malhotra Banquet Hall",
    lastUpdated: "2026-04-10",
    unit: "cu.m"
  },
  {
    id: "INV-205",
    name: "Concrete Mixer",
    category: "Equipment",
    total: 6,
    available: 2,
    used: 4,
    returned: 0,
    currentSite: "Multiple Sites",
    lastUpdated: "2026-04-16",
    unit: "units"
  },
  {
    id: "INV-206",
    name: "Aluminium Ladders (8 ft)",
    category: "Tool",
    total: 24,
    available: 10,
    used: 12,
    returned: 2,
    currentSite: "Central Warehouse",
    lastUpdated: "2026-04-08",
    unit: "units"
  },
  {
    id: "INV-207",
    name: "Claw Hammers",
    category: "Tool",
    total: 80,
    available: 45,
    used: 30,
    returned: 5,
    currentSite: "Central Warehouse",
    lastUpdated: "2026-04-05",
    unit: "pcs"
  },
  {
    id: "INV-208",
    name: "Safety Helmets (ISI)",
    category: "Tool",
    total: 250,
    available: 70,
    used: 170,
    returned: 10,
    currentSite: "Multiple Sites",
    lastUpdated: "2026-04-02",
    unit: "pcs"
  },
  {
    id: "INV-209",
    name: "Shuttering Plates (Steel)",
    category: "Equipment",
    total: 600,
    available: 220,
    used: 360,
    returned: 20,
    currentSite: "District Admin Complex",
    lastUpdated: "2026-04-11",
    unit: "pcs"
  },
  {
    id: "INV-210",
    name: "Scaffolding Pipes",
    category: "Equipment",
    total: 1200,
    available: 400,
    used: 780,
    returned: 20,
    currentSite: "Multiple Sites",
    lastUpdated: "2026-04-09",
    unit: "pcs"
  }
];
