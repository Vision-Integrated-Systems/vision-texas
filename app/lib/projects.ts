export interface Project {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  client: string;
  duration: string;
  challenge: string;
  solution: string;
  gearList: string[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
 {
    id: "port-houston",
    title: "Port of Houston Administration Building",
    category: "Integrated Systems",
    imageSrc: "/projects/port-houston.webp",
    description: "A comprehensive technology fit-out for the new Port Houston headquarters, encompassing structured cabling, A/V collaboration spaces, and a hardened security infrastructure.",
    client: "Harvey Cleary / Port of Houston Authority",
    duration: "6 Months",
    challenge: "Port of Houston required a seamless transition to their new headquarters in the Historic Fifth Ward. The challenge was to deliver a unified technology experience that supported hybrid collaboration for staff while adhering to strict maritime security standards for physical access and surveillance.",
    solution: "We executed a complete low-voltage scope, installing a robust Cat6A structured cabling backbone to support all building systems. For security, we deployed a comprehensive video and access control system. The meeting spaces were fitted with Cisco Video Bar Pros and native Teams Rooms integration, all automated by Crestron RMC4 processors for a consistent, one-touch user experience.",
    gearList: ["Cisco Video Bar Pro", "Teams Rooms Integration", "Crestron RMC4", "Genetec Security Center", "Axis Communications", "Panduit Cat6A"],
    stats: [
      { label: "Data Drops", value: "2,200+" },
      { label: "Security Devices", value: "150+" },
    ]
  },
  {
    id: "community-center-and-library",
    title: "Kevin Brady Community Center & Library",
    category: "Structured Cabling, A/V Systems",
    imageSrc: "/projects/ccl.webp",
    description: "A state-of-the-art community center and library in the heart of Texas, featuring a comprehensive structured cabling infrastructure and advanced A/V systems to support educational programs and community events.",
    client: "O'Donnell/Snider Construction",
    duration: "6 Months",
    challenge: "The project required a future-proof technology infrastructure capable of supporting a wide range of community activities, from educational workshops to public events. The challenge was to design and implement an integrated technology platform that could seamlessly support audio, video, security, and networked systems while remaining flexible and scalable. The solution needed to accommodate current operational needs while allowing for easy expansion and integration of new technologies as the community center’s programs and requirements evolve.",
    solution: "We installed a robust copper and fiber infrastructure to provide a reliable, high-performance foundation for all technology systems throughout the facility. The A/V systems were designed to support both small group meetings and larger public events, with integrated sound reinforcement and video capabilities to ensure clear communication and an engaging experience in every space. In addition, we implemented a comprehensive security solution, including video surveillance and access control systems, to support both public accessibility and secure county operations. Our team worked closely with the client to ensure all technology systems were seamlessly integrated with the building’s architectural design while providing a scalable platform to support future growth and evolving operational needs.",
    gearList: ["Copper and Fiber Infrastructure Cabling", "Access Control", "Video Surveillance"],
    stats: [
      { label: "Data Drops", value: "1,000+" },
      { label: "A/V Zones", value: "20+" },
    ]
  },
  {
    id: "meow-wolf-houston",
    title: "Meow Wolf Houston",
    category: "Structured Cabling",
    imageSrc: "/projects/meow-wolf.webp",
    description: "A vibrant and immersive art installation space in Houston, Texas, featuring a comprehensive structured cabling infrastructure to support interactive exhibits and multimedia experiences.",
    client: "Burton Construction",
    duration: "8 Months",
    challenge: "Meow Wolf Houston required a massive, highly coordinated technology infrastructure to support its immersive art installation. The challenge was delivering over 1,070 data drops and 60 shielded Cat6 locations for show lighting—all while meeting tight deadlines and balancing technical precision with the artistic integrity of the dynamic, interactive environment.",
    solution: "We executed a complete low-voltage scope using Belden technology, installing and certifying backbone and horizontal data cabling for over 1,200 locations with fully prepared IDF locations. For audio-visual systems, we implemented cabling infrastructure connecting AV racks to speaker locations throughout the immersive installation. Security infrastructure included cabling for 37 access-controlled doors and 103 video surveillance cameras. Additionally, we integrated 60 Cat6 shielded locations and controllers for show lighting, creating a robust foundation that seamlessly supports Meow Wolf Houston's transformative visitor experience.",
    gearList: ["Cat6A Structured Cabling", "Network Switches", "Patch Panels", "Cable Management"],
    stats: [
      { label: "Data Drops", value: "1200+" },
      { label: "Interactive Exhibits", value: "15+" },
    ]
  }
];