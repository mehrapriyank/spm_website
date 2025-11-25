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
    title: "Head Box Systems - Precision Paper Machine Components",
    description:
      "The headbox plays a critical role in determining basis weight profile, sheet formation, and fiber orientation. Our designs ensure uniform stock distribution and stable flow for consistent paper quality across all grades.",
    image: "images/head_Box.jpg",
    features: ["Uniform Sheet Formation", "Stable Flow Distribution", "Improved Fiber Orientation", "High-precision engineering"]
  },
  {
    id: "wire-section",
    title: "Fourdrinier / Wire Section - Heavy-Duty Paper Machine Equipment",
    description:
      "We manufacture heavy-duty cantilever-type wire sections that enable quick and easy wire changes. The structural frames are fabricated in MS and clad with 2mm SS 304 for strength, durability, and corrosion resistance in demanding paper manufacturing environments.",
    image: "images/wire_section.jpg",
    features: ["Cantilever System", "SS 304 Cladding", "Fast Wire Change", "Proven reliability"]
  },
  {
    id: "press-section",
    title: "Straight Press Section (Conventional) - Efficient Dewatering",
    description:
      "The press section mechanically removes water from the wet web delivered from the wire section. Higher dryness after pressing significantly reduces steam consumption in the dryer, making efficient pressing a key cost advantage for paper manufacturers.",
    image: "images/straight_press.jpg",
    features: ["High Dryness Output", "Lower Steam Consumption", "Robust Dewatering", "Cost-effective operation"]
  },
  {
    id: "k-press",
    title: "K-Press - Kraft Paper Machine Specialization",
    description:
      "Specially engineered for lighter GSM kraft paper, the K-Press features a compact two-nip design with a central suction press roll serving both nips. It delivers higher exit dryness, improved bulk, and reduced space requirements for kraft paper production.",
    image: "images/K_press.jpg",
    features: ["Two-Nip Compact Design", "High Exit Dryness", "Ideal for Kraft Paper", "Space-efficient"]
  },
  {
    id: "bi-nip-press",
    title: "Bi-Nip Press - High-Speed Paper Machine Solution",
    description:
      "Designed for writing, printing, and newsprint grades above 400 MPM speeds, the Bi-Nip Press uses a pickup-cum-press roll configuration serving two suction nips. It offers better runnability, higher dryness, and improved sheet quality for high-speed production.",
    image: "images/Bi_nip_press.jpg",
    features: ["High-Speed Operation", "Two Suction Nips", "Improved Runnability", "Superior sheet quality"]
  },
  {
    id: "suction-roll",
    title: "Suction Press Rolls - Versatile Paper Machine Components",
    description:
      "Engineered for both suction couch and suction press applications, our suction rolls feature single or double zone internal box options. They deliver smooth operation, reliable dewatering, and proven performance across diverse machine setups and paper grades.",
    image: "images/Suction_press_rolls.jpg",
    features: ["Single/Double Zone", "Smooth Dewatering", "Versatile Applications", "Reliable performance"]
  },
  {
    id: "size-press",
    title: "Size Press Section - Surface Sizing Paper Machines",
    description:
      "Used for surface sizing to apply starch or sizing agents, this section enhances sheet strength and surface properties. Our systems ensure uniform size pick-up and come with complete size preparation support for various paper grades.",
    image: "images/Size_press.jpg",
    features: ["Surface Sizing", "Strength Enhancement", "Uniform Application", "Complete support"]
  },
  {
    id: "dryer-section",
    title: "Dryer Section - Efficient Moisture Removal for Paper Production",
    description:
      "After leaving the press section at 40–50% dryness, the sheet enters the dryer where moisture is removed by evaporation. Our alloy cast iron cylinders ensure efficient drying for paper, board, specialty grades, and tissue paper applications.",
    image: "images/Dryer_section.jpg",
    features: ["Alloy Cast Cylinders", "Efficient Evaporation", "Wide Grade Compatibility", "Energy-efficient"]
  },
  {
    id: "pope-reel",
    title: "Pope Reel Section - Master Reel Winding System",
    description:
      "At the end of the machine, the paper web is wound into a master reel. Our systems ensure smooth reel building, stable tension, and reliable winding performance for consistent roll quality in all paper manufacturing applications.",
    image: "images/pope_reel.jpg",
    features: ["Stable Winding", "Smooth Roll Formation", "Consistent Tension", "Quality assurance"]
  },
  {
    id: "rewinder",
    title: "Rewinder Section - Precision Paper Slitting Equipment",
    description:
      "The master reel from the pope reel is rewound and slit into required sizes. Our twin drum winders deliver excellent slitting quality, large finished reels, high output, low downtime, and automated set changes for paper finishing operations.",
    image: "images/Rewinder_section.jpg",
    features: ["Twin Drum Design", "High Slitting Quality", "High Productivity", "Automated efficiency"]
  }
];


export const SERVICES: Service[] = [
  {
    id: "manufacturing",
    title: "Paper Machine Manufacturing - Custom Solutions",
    description:
      "We deliver high-quality paper machines designed for a wide range of applications with varying TPD, basis weight, speed, and deckle (width). Equipped with the latest technology, our machines are engineered to meet specific customer requirements and ensure long-term performance in global markets.",
    icon: Factory,
    features: ["Customized Designs", "Advanced Technology", "High-Performance Output", "Global standards compliance"]
  },
  {
    id: "installation",
    title: "Installation & Commissioning - Expert On-Site Services",
    description:
      "Our responsibility goes beyond supplying machines—we bring them to life. Our skilled on-site teams ensure smooth installation and commissioning, even for machines from other manufacturers, guaranteeing a seamless start to production with minimal downtime.",
    icon: Wrench,
    features: ["On-Site Expertise", "Multi-Brand Commissioning", "Smooth Startup", "24/7 support during commissioning"]
  },
  {
    id: "erection",
    title: "Plant Erection - Efficient Project Execution",
    description:
      "With a focus on minimizing downtime, our dedicated erection team provides efficient execution, supported by round-the-clock remote and on-site assistance. We handle emergency maintenance, preventive shutdowns, and unexpected breakdowns to keep operations running smoothly.",
    icon: Settings,
    features: ["Rapid Execution", "24/7 Support", "Downtime Reduction", "Emergency response"]
  },
  {
    id: "upgradation",
    title: "Machine Up-gradation - Performance Enhancement",
    description:
      "Continuous improvement drives success. We upgrade existing machines with the latest available technology to increase capacity, improve quality, and enhance overall machine performance without complete replacement.",
    icon: TrendingUp,
    features: ["Technology Integration", "Performance Boost", "Quality Enhancement", "Cost-effective upgrade"]
  },
  {
    id: "operations",
    title: "Operational Improvement & Expansion - Efficiency Solutions",
    description:
      "Operational efficiency is key to profitability in process plants. We deliver engineered solutions that streamline operations, eliminate bottlenecks, and maximize equipment efficiency for sustained growth and smooth production.",
    icon: Users,
    features: ["Process Optimization", "Capacity Expansion", "Efficiency Engineering", "Profitability improvement"]
  },
  {
    id: "energy",
    title: "Energy Conservation - Sustainable Solutions",
    description:
      "As one of the industry's largest energy-consuming sectors, the paper industry requires smart conservation practices. Our experts provide end-to-end solutions to reduce steam and power consumption, lower operating costs, and support environmental sustainability.",
    icon: Zap,
    features: ["Steam Optimization", "Power Savings", "Sustainability Solutions", "Green manufacturing"]
  },
  {
    id: "rejuvenation",
    title: "Old Machinery Rejuvenation - Life Extension Services",
    description:
      "We reinvent aging machines by repairing, replacing, and adding advanced features to restore performance and extend service life. Our approach transforms old equipment into reliable, efficient assets for years to come.",
    icon: Cog,
    features: ["Life Extension", "Component Upgrades", "Performance Restoration", "Cost-effective solution"]
  },
  {
    id: "modernization",
    title: "Modernization - Advanced System Integration",
    description:
      "Beyond rejuvenation, we provide modification and modernization solutions tailored to existing designs and operations—including machines manufactured by companies other than Saloni PMPL. We bridge technology gaps and future-proof your equipment.",
    icon: ShieldCheck,
    features: ["Cross-Brand Modernization", "Design Enhancements", "Future-Ready Systems", "Expert consultation"]
  }
];

// Using placeholders for logos as specific files weren't provided
export const CUSTOMERS = [
  { id: 1, name: "ANAND TRIPLEX PVT LTD.", place: "MEERUT, UTTAR PRADESH", logo: "./images/emami.jpg" },
  { id: 2, name: "ARYAN PAPER MILLS LTD", place: "VAPI, GUJARAT", logo: "./images/aryan.jpg" },
  { id: 3, name: "BAHAL PAPER MILLS LIMITED", place: "KASHIPUR, UTTRAKHAND", logo: "" },
  { id: 4, name: "BALAJI MALTS PVT LTD.", place: "BANGALORE, KARNATAKA", logo: "" },
  { id: 5, name: "BEST PAPER MILLS LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 6, name: "BHAGWATIKRIPA PAPER MILLS PVT LTD", place: "JAIPUR, RAJASTHAN", logo: "" },
  { id: 7, name: "BILT GRAPHICS PAPER PRODUCT LIMITED", place: "UNIT BALLARPUR, MAHARASHTRA", logo: "" },
  { id: 8, name: "CAMERICH PAPERS PVT LTD", place: "MORBI, GUJARAT", logo: "" },
  { id: 9, name: "CENTURY PULP & PAPER", place: "LALKUAN, UTTRAKHAND", logo: "" },
  { id: 10, name: "CHADDHA PAPERS LTD.", place: "RAMPUR, UTTAR PRADESH", logo: "" },
  { id: 11, name: "DEVPRIYA INDUSTRIES.", place: "MEERUT, UTTAR PRADESH", logo: "" },
  { id: 12, name: "GAYATRI SHAKTI PAPER & BOARDS LTD UNIT II", place: "SARIGAM, GUJARAT", logo: "" },
  { id: 13, name: "GAYATRI SHAKTI PAPER & BOARDS LTD. UNIT II", place: "SARIGAM, GUJARAT", logo: "" },
  { id: 14, name: "INDIAN PULP & PAPER MILLS LTD.", place: "HAZINAGAR, WEST BANGAL", logo: "" },
  { id: 15, name: "JK PAPERS LTD.", place: "JAYKAYPUR, ODISHA", logo: "./images/jk.jpg" },
  { id: 16, name: "JODHANI PAPERS LTD.", place: "BANGLORE, KARNATAKA", logo: "" },
  { id: 17, name: "K.R PULP & PAPER MILLS LTD.", place: "SHAHJAHANPUR, UTTAR PRADESH", logo: "" },
  { id: 18, name: "MAGNUM VENTURES LTD.", place: "GAZIABAD, UTTAR PRADESH", logo: "" },
  { id: 19, name: "MARUTI PAPER LIMITED", place: "SHAMLI, UTTAR PRADESH", logo: "" },
  { id: 20, name: "MARUTI PAPERS LIMITED.", place: "SHAMLI, UTTAR PRADESH", logo: "" },
  { id: 21, name: "MEHALI PAPERS PVT LTD.", place: "DAHEJ, GUJARAT", logo: "" },
  { id: 22, name: "N.R AGARWAL INDUSTRIES LTD. UNIT. 5", place: "SARIGAM, GUJARAT", logo: "" },
  { id: 23, name: "NAINI PAPERS LTD.", place: "KASHIPUR, UTTRAKHAND", logo: "" },
  { id: 24, name: "NAINI TISSUES LIMITED.", place: "KASHIPUR, UTTRAKHAND", logo: "" },
  { id: 25, name: "NIKITA PAPERS LTD.", place: "SHAMLI, UTTAR PRADESH", logo: "" },
  { id: 26, name: "NIKITA PAPERS LTD.", place: "SHAMLI, UTTAR PRADESH", logo: "" },
  { id: 27, name: "P.G INFRASTRUCTURE & SERVICES PRIVATE LTD.", place: "RASLAKHEDI, BHOPAL", logo: "" },
  { id: 28, name: "RAMAA SHYAMA PAPERS PVT LTD.", place: "BAREILLY, UTTAR PRADESH", logo: "" },
  { id: 29, name: "RANA PAPERS LIMITED.", place: "MUZAFFAR NAGAR, UTTAR PRADESH", logo: "" },
  { id: 30, name: "RAYANA PAPER BOARD INDUSTRIES LTD.", place: "KHAILLILABAD, UTTAR PRADESH", logo: "" },
  { id: 31, name: "RUBY MACONS LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 32, name: "RUCHIRA PAPER MILLS LTD. UNIT. III", place: "KALAAMB, HIMACHAL PRADESH", logo: "" },
  { id: 33, name: "SABARMATI PAPERS PVT LTD.", place: "VIJAPUR, GUJARAT", logo: "" },
  { id: 34, name: "SABER PAPERS LTD.", place: "LUDHIANA, PUNJAB", logo: "" },
  { id: 35, name: "SARDHANA PAPERS PVT LIMITED.", place: "MEERUT, UTTAR PRADESH", logo: "" },
  { id: 36, name: "SATIA INDUSTRIES LTD. PM. 01 & PM. 02", place: "MUKTSAR, PUNJAB", logo: "./images/satia.jpg" },
  { id: 37, name: "SATIA PAPER MILLS LTD.", place: "MUKTSAR, PUNJAB", logo: "" },
  { id: 38, name: "SHAH PAPER MILLS LTD. UNIT.III", place: "VAPI, GUJARAT", logo: "" },
  { id: 39, name: "SHAH PULP &PAPER MILLS LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 40, name: "SHREE AJIT PULP & PAPER LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 41, name: "SHREE BAGASWARI PAPER MILL LTD.", place: "MUZFAR NAGAR, UTTAR PRADESH", logo: "" },
  { id: 42, name: "SHREE BHAVANI PAPER MILLS LTD.", place: "RAE BARELI, UTTAR PRADESH", logo: "" },
  { id: 43, name: "SHREE KRISHNA PAPER MILLS & INDUSTRIES LTD.", place: "KOTPUTLI, RAJASTHAN", logo: "" },
  { id: 44, name: "SHREE RAJESHWARANAND PAPER MILLS.", place: "BHARUCH, GUJARAT", logo: "" },
  { id: 45, name: "SHREYANCE INDUSTRIES LTD.", place: "AHMEDGARH, PUNJAB", logo: "" },
  { id: 46, name: "SIDDHESHWARI INDUSTRIES (P) LTD.", place: "MUZAFFAR NAGAR, UTTAR PRADESH", logo: "" },
  { id: 47, name: "SIDHARTH PAPERS PVT LTD. U - II", place: "KASHIPUR, UTTRAKHAND", logo: "" },
  { id: 48, name: "SILVERTON PAPERS LIMITED.", place: "MUZAFFAR NAGAR, UTTAR PRADESH", logo: "" },
  { id: 49, name: "SILVERTON PULP & PAPER LIMITED.", place: "MUZAFFAR NAGAR, UTTAR PRADESH", logo: "" },
  { id: 50, name: "SUCHI PAPER MILLS LTD.", place: "GHAZIABAD, UTTAR PRADESH", logo: "" },
  { id: 51, name: "SUPREME COATED BOARD MILLS PVT LTD.", place: "SIVAKASHI, TAMIL NADU", logo: "" },
  { id: 52, name: "TIRTHAK PAPER MILLS LTD.", place: "AHEMDABAD, GUJARAT", logo: "" },
  { id: 53, name: "YORK CELLULOSE PVT LTD.", place: "YAMUNA NAGAR, UTTAR PRADESH", logo: "" },

  { id: 54, name: "ARYAN PAPER MILLS LTD", place: "VAPI, GUJARAT", logo: "" },
  { id: 55, name: "BEST PAPER MILLS PVT LTD. UNIT I & UNIT II", place: "VAPI, GUJARAT", logo: "" },
  { id: 56, name: "BEST QUEST INDUSTRIES PAPER DIVISON", place: "VAPI, GUJARAT", logo: "" },
  { id: 57, name: "BBINJUSARIA PAPER PVT. LTD.", place: "TELANGANA, HYDRABAD", logo: "./images/binjusaria.jpg" },
  { id: 58, name: "DAMAN GANGA PAPER MILLS PVT LTD", place: "VAPI, GUJARAT", logo: "" },
  { id: 59, name: "DEVANG PAPER MILLS PVT LTD.", place: "VAPI, GUJARAT", logo: "./images/devang.jpg" },
  { id: 60, name: "DSG PAPERS PVT LTD.", place: "PATIALA, PUNJAB", logo: "" },
  { id: 61, name: "GANGA PULP & PAPERS PVT. LTD.", place: "VARANASI, UTTAR PRADESH", logo: "./images/ganga.jpg" },
  { id: 62, name: "GODAVARI PULP & PAPER MILLS LTD", place: "NASHIK, MAHARASHTRA", logo: "" },
  { id: 63, name: "JANI SALES PVT LTD PAPER DIVISION.", place: "PATIALA, PUNJAB", logo: "" },
  { id: 64, name: "JK PAPER LTD.", place: "SONGADH, PUNJAB", logo: "./images/jk.jpg" },
  { id: 65, name: "K. B BOARD MILLS LLP.", place: "HINGANGHAT, MAHARASTRA", logo: "" },
  { id: 66, name: "KARANJA INDUSTRIES LTD.", place: "BIDAR, KARNATAKA", logo: "" },
  { id: 67, name: "KHEANI PAPER MILLS PVT LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 68, name: "KARANJA INDUSTRIES LTD.", place: "BIDAR, KARNATAKA", logo: "" },
  { id: 69, name: "LADHAR PAPER MILLS.", place: "NAKODAR, PUNJAB", logo: "" },
  { id: 70, name: "LAXMI BOARD AND PAPER MILLS PRIVATE LIMITED.", place: "KALYAN, MAHARASHTRA", logo: "" },
  { id: 71, name: "MALU PAPER MILLS LTD.", place: "NAGPUR, MAHARASHTRA", logo: "" },
  { id: 72, name: "N.R AGARWAL INDUSTRIES LTD. UNIT – II.", place: "VAPI, GUJARAT", logo: "./images/nr.jpg" },
  { id: 73, name: "NAVDURGA PULP & PAPER MILLS (I) PVT. LTD.", place: "RAIPUR, CHHATTISGARH", logo: "" },
  { id: 74, name: "NEW BOMBAY PAPER MILLS PVT. LTD.", place: "NAVI MUMBAI, MAHARASHTRA", logo: "" },
  { id: 75, name: "NIKITA PAPERS LTD.", place: "SHAMLI, UTTAR PRADESH", logo: "" },
  { id: 76, name: "OM SREE PAPERTEK PVT LTD.", place: "HYDRABAD, TELANGANA", logo: "" },
  { id: 77, name: "PADMAVATI PAPER MILLS.", place: "AMBERNATH, MAHARASHTRA", logo: "./images/padma.jpg" },
  { id: 78, name: "R. A. SHAIKH PAPER MILLS PVT. LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 79, name: "RADHEYSHYAM PAPER MILLS PVT LTD.", place: "MORBI, GUJARAT", logo: "./images/radheshyam.jpg" },
  { id: 80, name: "RAMA PULP AND PAPERS LTD", place: "VAPI, GUJARAT", logo: "" },
  { id: 81, name: "SHAH PAPER MILLS LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 82, name: "SHAH PULP & PAPERS LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 83, name: "SHREE AJIT PULP & PAPERS LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 84, name: "SHREE GAJANAN PAPER & BOARDS PVT. LTD.", place: "VAPI, GUJARAT", logo: "" },
  { id: 85, name: "SHREE JAGDAMBE PAPER MILLS LTD.", place: "SIRSA, HARIYANA", logo: "./images/jagdamba.jpg" },
  { id: 86, name: "SHREE RAMA NEWS PRINT LIMITED", place: "SURAT, GUJARAT", logo: "./images/rama.jpg" },
  { id: 87, name: "SHREE SAMRAT PULP & PAPER MILLS PVT. LTD.", place: "PUNE, MAHARASHTRA", logo: "" },
  { id: 88, name: "STARK RIDGE PAPERS PVT LTD.", place: "CHAKULIA, JHARKHAND", logo: "" },
  { id: 89, name: "SUKRAFT PAPERS PVT LTD [ NASIK ]", place: "SINNAR, MAHARASHTRA", logo: "./images/sukraft.jpg" },
  { id: 90, name: "SUNSHINE PAP-TECH PVT.LTD.", place: "WADA, MAHARASHTRA", logo: "" },
  { id: 91, name: "SURYAANS PAPERS.", place: "KOLATHUR, CHENNAI", logo: "" },
  { id: 92, name: "SWASTIK PULP & PAPERS PVT LTD", place: "NASHIK, MAHARASHTRA", logo: "" },
  { id: 93, name: "TULJA BHAVANI PAPER MILLS PVT LTD.", place: "SOLAPUR, MAHARASHTRA", logo: "./images/tulja.jpg" },
  { id: 94, name: "UMESH BOARD & PAPER MILLS PVT. LTD", place: "AURANGABAD, MAHARASHTRA", logo: "./images/umesh.jpg" },
  { id: 95, name: "URVASHI PULP & PAPER MILLS PVT’ LTD.", place: "AKLESHWAR, GUJARAT", logo: "" },
  { id: 96, name: "VAIBHAV PAPER BOARDS PRIVATE LIMITED.", place: "VAPI, GUJARAT", logo: "" }
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
