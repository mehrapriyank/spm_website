import { NavItem, Service, Statistic, Project, ContactInfo, Product, GalleryItem, Machine } from './types';
import { Settings, Factory, Hammer, Leaf, Zap, TrendingUp, Wrench, Users, Recycle, ShieldCheck, LifeBuoy, Cog } from 'lucide-react';

export const APP_NAME = "Saloni Paper Machine Pvt. Ltd.";
export const LOGO = "images/logo.png";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Products", href: "products" },
  { label: "Customers", href: "customers" },
  { label: "Contact", href: "contact" },
  { label: "Gallery", href: "gallery" },
  { label: "Download Brochure", href: "brochure" },
];

// export const MENU_ITEMS = [
//   { label: "Home", id: "home" },
//   { label: "Manufacturing and Erection", id: "manufacturing" },
//   { label: "Our Machines", id: "machines" },
//   { label: "Our Customers", id: "customers" },
//   { label: "About Us", id: "about" },
//   { label: "Gallery", id: "gallery" },
//   { label: "Download Brochure", id: "brochure" },
//   { label: "Contact", id: "contact" },
// ];

export const STATISTICS: Statistic[] = [
  { label: "Years Experience", value: "20", suffix: "+" },
  { label: "Projects Executed", value: "100", suffix: "+" },
  { label: "Machines Delivered", value: "50", suffix: "+" },
  { label: "Expert Engineers", value: "40", suffix: "+" },
];

export const MACHINES: Machine[] = [
  {
    id: "headbox",
    title: "Headbox Systems",
    description: "Advanced open and pressurized (air cushion) headboxes designed for precision. Features precise slice adjustment for optimal sheet formation and uniform flow distribution.",
    image: "images/Head_box.jpg",
    features: ["Pressurized Air Cushion", "Precision Slice Control", "Uniform Flow Profile", "Sturdy Construction"]
  },
  {
    id: "wire-section",
    title: "Fourdrinier (Wire) Section",
    description: "Robust cantilever type wire sections with SS 304 cladding. Includes advanced drainage elements like forming boards and hydrofoils for efficient dewatering.",
    image: "images/Wire_section.jpg",
    features: ["Cantilever Design", "SS 304 Cladding", "Optimized Drainage", "Auto-Guide Systems"]
  },
  {
    id: "straight-press",
    title: "Straight Press Section (Conventional)",
    description: "Traditional straight-through press design ensuring reliable dewatering and web transfer. Ideal for standard paper grades with balanced sheet properties.",
    image: "images/Straight_press.jpg",
    features: ["Reliable Operation", "Easy Maintenance", "Uniform Nip Pressure", "Cost Effective"]
  },
  {
    id: "k-press",
    title: "K-Press Section",
    description: "Specialized press configuration primarily for Kraft liner and packaging grades. Utilizes a center suction press roll for enhanced water removal at higher speeds.",
    image: "images/K_press.jpg",
    features: ["High Dewatering", "Compact Design", "Suitable for Kraft", "Energy Efficient"]
  },
  {
    id: "bi-nip",
    title: "Bi-Nip Press Section",
    description: "Modern press section design with two nips on a central suction roll. Optimized for high-speed writing, printing, and newsprint machines to minimize open draw.",
    image: "images/Bi_nip_press.jpg",
    features: ["Closed Web Transfer", "High Speed Capability", "Reduced Sheet Breaks", "Superior Surface"]
  }
];


export const MACHINE_HIERARCHY = [
  {
    label: "Types of Machine",
    children: [
      {
        label: "Product Wise",
        children: [
           { label: "Writing & Printing" },
           { label: "Single & Multi-Layer Kraft" },
           { label: "MG Poster" },
           { label: "News Print" },
           { label: "Board Machine" },
        ]
      },
      {
        label: "Size-Capacity",
        children: [
          {
            label: "Deckle",
            children: [{ label: "2.5 to 5.5 Meter" },{ label: "Speed 200-800 M/Minute" }]
          },
           {
            label: "Production",
            children: [{ label: "50-500 T/Day" }]
          },
        ]
      },
      {
         label: "Design wise",
         children: [
            { label: "Writing & Printing" },
            { label: "Single & Multi-Layer Kraft" },
            { label: "MG Poster" },
            { label: "News Print" },
            { label: "Board Machine" },
         ]
      }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "headbox",
    title: "Head Box Systems",
    description:
      "The headbox plays a critical role in determining basis weight profile, sheet formation, and fiber orientation. Our designs ensure uniform stock distribution and stable flow for consistent paper quality.",
    image: "images/head_box.jpg",
    features: ["Uniform Sheet Formation", "Stable Flow Distribution", "Improved Fiber Orientation"]
  },
  {
    id: "wire-section",
    title: "Fourdrinier / Wire Section",
    description:
      "We manufacture heavy-duty cantilever-type wire sections that enable quick and easy wire changes. The structural frames are fabricated in MS and clad with 2mm SS 304 for strength, durability, and corrosion resistance.",
    image: "images/wire_section.jpg",
    features: ["Cantilever System", "SS 304 Cladding", "Fast Wire Change"]
  },
  {
    id: "press-section",
    title: "Straight Press Section (Conventional)",
    description:
      "The press section mechanically removes water from the wet web delivered from the wire section. Higher dryness after pressing significantly reduces steam consumption in the dryer, making efficient pressing a key cost advantage.",
    image: "images/straight_press.jpg",
    features: ["High Dryness Output", "Lower Steam Consumption", "Robust Dewatering"]
  },
  {
    id: "k-press",
    title: "K-Press",
    description:
      "Specially engineered for lighter GSM kraft paper, the K-Press features a compact two-nip design with a central suction press roll serving both nips. It delivers higher exit dryness, improved bulk, and reduced space requirements.",
    image: "images/K_press.jpg",
    features: ["Two-Nip Compact Design", "High Exit Dryness", "Ideal for Kraft Paper"]
  },
  {
    id: "bi-nip-press",
    title: "Bi-Nip Press",
    description:
      "Designed for writing, printing, and newsprint grades above 400 MPM speeds, the Bi-Nip Press uses a pickup-cum-press roll configuration serving two suction nips. It offers better runnability, higher dryness, and improved sheet quality.",
    image: "images/Bi_nip_press.jpg",
    features: ["High-Speed Operation", "Two Suction Nips", "Improved Runnability"]
  },
  {
    id: "suction-roll",
    title: "Suction Press Rolls",
    description:
      "Engineered for both suction couch and suction press applications, our suction rolls feature single or double zone internal box options. They deliver smooth operation, reliable dewatering, and proven performance across diverse machine setups.",
    image: "images/Suction_press_rolls.jpg",
    features: ["Single/Double Zone", "Smooth Dewatering", "Versatile Applications"]
  },
  {
    id: "size-press",
    title: "Size Press Section",
    description:
      "Used for surface sizing to apply starch or sizing agents, this section enhances sheet strength and surface properties. Our systems ensure uniform size pick-up and come with complete size preparation support.",
    image: "images/Size_press.jpg",
    features: ["Surface Sizing", "Strength Enhancement", "Uniform Application"]
  },
  {
    id: "dryer-section",
    title: "Dryer Section",
    description:
      "After leaving the press section at 40–50% dryness, the sheet enters the dryer where moisture is removed by evaporation. Our alloy cast iron cylinders ensure efficient drying for paper, board, specialty grades, and tissue.",
    image: "images/Dryer_section.jpg",
    features: ["Alloy Cast Cylinders", "Efficient Evaporation", "Wide Grade Compatibility"]
  },
  {
    id: "pope-reel",
    title: "Pope Reel Section",
    description:
      "At the end of the machine, the paper web is wound into a master reel. Our systems ensure smooth reel building, stable tension, and reliable winding performance for consistent roll quality.",
    image: "images/pope_reel.jpg",
    features: ["Stable Winding", "Smooth Roll Formation", "Consistent Tension"]
  },
  {
    id: "rewinder",
    title: "Rewinder Section",
    description:
      "The master reel from the pope reel is rewound and slit into required sizes. Our twin drum winders deliver excellent slitting quality, large finished reels, high output, low downtime, and automated set changes.",
    image: "images/Rewinder_section.jpg",
    features: ["Twin Drum Design", "High Slitting Quality", "High Productivity"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "200 TPD Kraft Paper Plant",
    category: "Turnkey Project",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p2",
    title: "High Speed Tissue Machine",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p3",
    title: "Board Machine Modernization",
    category: "Rebuild",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p4",
    title: "Pulp Mill Expansion",
    category: "Consultancy",
    image: "https://images.unsplash.com/photo-1565459303368-733a9b3d0707?auto=format&fit=crop&q=80&w=600"
  }
];

export const SERVICES: Service[] = [
  {
    id: "manufacturing",
    title: "Paper Machine Manufacturing",
    description:
      "We deliver high-quality paper machines designed for a wide range of applications with varying TPD, basis weight, speed, and deckle (width). Equipped with the latest technology, our machines are engineered to meet specific customer requirements and ensure long-term performance.",
    icon: Factory,
    features: ["Customized Designs", "Advanced Technology", "High-Performance Output"]
  },
  {
    id: "installation",
    title: "Installation & Commissioning",
    description:
      "Our responsibility goes beyond supplying machines—we bring them to life. Our skilled on-site teams ensure smooth installation and commissioning, even for machines from other manufacturers, guaranteeing a seamless start to production.",
    icon: Wrench,
    features: ["On-Site Expertise", "Multi-Brand Commissioning", "Smooth Startup"]
  },
  {
    id: "erection",
    title: "Plant Erection",
    description:
      "With a focus on minimizing downtime, our dedicated erection team provides efficient execution, supported by round-the-clock remote and on-site assistance. We handle emergency maintenance, preventive shutdowns, and unexpected breakdowns to keep operations running.",
    icon: Settings,
    features: ["Rapid Execution", "24/7 Support", "Downtime Reduction"]
  },
  {
    id: "upgradation",
    title: "Machine Up-gradation",
    description:
      "Continuous improvement drives success. We upgrade existing machines with the latest available technology to increase capacity, improve quality, and enhance overall machine performance.",
    icon: TrendingUp,
    features: ["Technology Integration", "Performance Boost", "Quality Enhancement"]
  },
  {
    id: "operations",
    title: "Operational Improvement & Expansion",
    description:
      "Operational efficiency is key to profitability in process plants. We deliver engineered solutions that streamline operations, eliminate bottlenecks, and maximize equipment efficiency for sustained growth and smooth production.",
    icon: Users,
    features: ["Process Optimization", "Capacity Expansion", "Efficiency Engineering"]
  },
  {
    id: "energy",
    title: "Energy Conservation",
    description:
      "As one of the industry's largest energy-consuming sectors, the paper industry requires smart conservation practices. Our experts provide end-to-end solutions to reduce steam and power consumption, lower operating costs, and support environmental sustainability.",
    icon: Zap,
    features: ["Steam Optimization", "Power Savings", "Sustainability Solutions"]
  },
  {
    id: "rejuvenation",
    title: "Old Machinery Rejuvenation",
    description:
      "We reinvent aging machines by repairing, replacing, and adding advanced features to restore performance and extend service life. Our approach transforms old equipment into reliable, efficient assets.",
    icon: Cog,
    features: ["Life Extension", "Component Upgrades", "Performance Restoration"]
  },
  {
    id: "modernization",
    title: "Modernization",
    description:
      "Beyond rejuvenation, we provide modification and modernization solutions tailored to existing designs and operations—including machines manufactured by companies other than Saloni PMPL.",
    icon: ShieldCheck,
    features: ["Cross-Brand Modernization", "Design Enhancements", "Future-Ready Systems"]
  }
];

// Using placeholders for logos as specific files weren't provided
export const CUSTOMERS = [
  { id: 1, name: "Kraft Paper Mills", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200" },
  { id: 2, name: "Global Tissues", logo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=200" },
  { id: 3, name: "Royal Paper", logo: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=200" },
  { id: 4, name: "Eco Boards", logo: "https://images.unsplash.com/photo-1565459303368-733a9b3d0707?auto=format&fit=crop&q=80&w=200" },
  { id: 5, name: "Sunrise Papers", logo: "https://images.unsplash.com/photo-1635350644142-7c1cb5c06389?auto=format&fit=crop&q=80&w=200" },
  { id: 6, name: "Delta Packaging", logo: "https://images.unsplash.com/photo-1580901368919-7738ef30fbb2?auto=format&fit=crop&q=80&w=200" },
  { id: 7, name: "United Pulp", logo: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=200" },
  { id: 8, name: "Asian Papers", logo: "https://images.unsplash.com/photo-1570545889512-2cbb0c4228c0?auto=format&fit=crop&q=80&w=200" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000", alt: "Machine Assembly", category: "Manufacturing" },
  { id: "g2", src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000", alt: "Paper Roll", category: "Product" },
  { id: "g3", src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1000", alt: "Engineering Team", category: "Team" },
  { id: "g4", src: "https://images.unsplash.com/photo-1565459303368-733a9b3d0707?auto=format&fit=crop&q=80&w=1000", alt: "Factory Floor", category: "Facility" },
  { id: "g5", src: "https://images.unsplash.com/photo-1535931301185-029c7c02201c?auto=format&fit=crop&q=80&w=1000", alt: "Quality Check", category: "Process" },
  { id: "g6", src: "https://images.unsplash.com/photo-1580901368919-7738ef30fbb2?auto=format&fit=crop&q=80&w=1000", alt: "Finished Rolls", category: "Product" },
];

export const CONTACT_INFO: ContactInfo = {
  address: "Plot No.: 3715/A-1 & A-3, 4th Phase, G.I.D.C., Vapi – 396195, Gujarat, India",
  phone: "+91 98980 21344",
  altPhone: "+91 98115 07120",
  email: "info@salonipmpl.com",
  altEmail: "jksharma@salonipmpl.com"
};

export const HERO_IMAGE_1 = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920";
export const HERO_IMAGE = "images/spm.jpg";
export const TEAM_IMAGE_PLACEHOLDER = "images/team.jpg";
