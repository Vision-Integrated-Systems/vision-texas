export interface TrainingVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  category: string;
  tags: string[];
}

export const trainingCategories = ["Genetec", "Axis", "Crestron"];

export const trainingVideos: TrainingVideo[] = [
  // GENETEC VIDEOS
  {
    id: "gen-01",
    title: "Security Center: Software Installation",
    description: "Security Center software installation. Both server and workstation are covered in this video.",
    youtubeId: "G0AY4mdrBA4",
    duration: "22:34",
    category: "Genetec",
    tags: ["Security Center", "Installation"],
  },
  {
    id: "gen-02",
    title: "Security Center Architecture",
    description: "Server architecture / role-based architecture.",
    youtubeId: "7WjmdRHasao",
    duration: "28:19",
    category: "Genetec",
    tags: ["Security Center", "Architecture"],
  },
  {
    id: "gen-03",
    title: "Customizing How Tiles Are Displayed",
    description: "How to customize the way tiles are displayed in Security Center.",
    youtubeId: "o-DEyYAtWbs",
    duration: "1:12",
    category: "Genetec",
    tags: ["Security Center", "Customization"],
  },
  {
    id: "gen-04",
    title: "Generating Reports",
    description: "How to generate reports in Security Center.",
    youtubeId: "admZ639B4YA",
    duration: "1:25",
    category: "Genetec",
    tags: ["Security Center", "Reports"],
  },
  {
    id: "gen-05",
    title: "Creating Cardholders",
    description: "To add new employees who must enter and exit secured areas using access cards, and to track their activities, you can create cardholders using the Cardholder management task.",
    youtubeId: "woggR-ioKTA",
    duration: "2:17",
    category: "Genetec",
    tags: ["Security Center", "Cardholders"],
  },
  {
    id: "gen-06",
    title: "Assigning Access Rules To Cardholders",
    description: "To assign access rules to cardholders in Security Center, you must first create cardholders and then define the access rules that apply to them.",
    youtubeId: "_rsaUgWRdyE",
    duration: "1:12",
    category: "Genetec",
    tags: ["Security Center", "Access Rules"],
  },
  {
    id: "gen-07",
    title: "Checking In New Visitors",
    description: "To check in new visitors, you can use the Visitor Management task in Security Center. This task allows you to create visitor profiles, assign access rules, and track their activities during their visit.",
    youtubeId: "F5APacnbolU",
    duration: "1:48",
    category: "Genetec",
    tags: ["Security Center", "Visitors"],
  },
  {
    id: "gen-08",
    title: "Creating a cardholder group in Config Tool",
    description: "A quick example of creating a cardholder group in Config Tool.",
    youtubeId: "ZtGJJPyLxJc",
    duration: "1:34",
    category: "Genetec",
    tags: ["Security Center", "Config Tool", "Cardholder Group"],
  },
  {
    id: "gen-09",
    title: "Creating an Access Rule",
    description: "A quick example of how to create an Access Rule in Config Tool. This video explains the 3 W's (Who,When,Where) necessary on the access rule.",
    youtubeId: "v-qVq7Uy7io",
    duration: "3:39",
    category: "Genetec",
    tags: ["Security Center", "Config Tool", "Access Rule"],
  },
  {
    id: "gen-10",
    title: "How to create a schedule in Config Tool",
    description: "A quick example of the steps necessary to create a schedule in Config Tool.",
    youtubeId: "Wqo6ViLditc",
    duration: "2:58",
    category: "Genetec",
    tags: ["Security Center", "Config Tool", "Schedule"],
  },
  {
    id: "gen-11",
    title: "Manually adding a new credential",
    description: "This video shows how to add a credential to the system when no enrollment reader is available.",
    youtubeId: "OIy_1sBujT0",
    duration: "1:47",
    category: "Genetec",
    tags: ["Security Center", "Config Tool", "Credential"],
  },
    {
    id: "gen-12",
    title: "Security Desk General Operator Training",
    description: "Basic operator training for the Security Center 5.2 Security Desk application",
    youtubeId: "TgbSoH_OddA",
    duration: "38:10",
    category: "Genetec",
    tags: ["Security Center", "Security Desk", "Operator Training"],
  },
  {
    id: "gen-13",
    title: "Security Desk Operator Basics",
    description: "In this webinar we will talk about the general use of the Security Desk client application, such as navigation and handling of alarms, and specific operations related to video and access control, like creating bookmarks and managing visitor credentials.",
    youtubeId: "GcMIXFCic3w",
    duration: "1:21:20",
    category: "Genetec",
    tags: ["Security Center", "Security Desk", "Operator Training"],
  },

  // AXIS VIDEOS
  {
    id: "axis-01",
    title: "AXIS Camera Station Pro - version 6.14 new user features",
    description: "This video with show you the highlights of some of the new features introduced into ACS Pro 6.14.",
    youtubeId: "qYqDLmrclvw",
    duration: "5:32",
    category: "Axis",
    tags: ["AXIS Camera Station Pro", "Features"],
  },
  {
    id: "axis-02",
    title: "Audit logging in AXIS OS",
    description: "Learn how audit logging in AXIS OS plays a key role in system accountability and compliance.",
    youtubeId: "TPFCD-SIAzI",
    duration: "9:18",
    category: "Axis",
    tags: ["AXIS OS", "Audit Logging"],
  },

  // CRESTRON VIDEOS
  {
    id: "cre-01",
    title: "Introduction to Crestron Systems: Introduction and Automation",
    description: "An overview to the course and what you will learn from it. Defines automation systems and how Crestron provides the right solutions.",
    youtubeId: "OdhueSto4Fc",
    duration: "4:14",
    category: "Crestron",
    tags: ["Crestron", "Introduction", "Automation"],
  },
  {
    id: "cre-02",
    title: "Introduction to Crestron Systems: Ethernet",
    description: "Ethernet connectivity overview covering POE or Power Over Ethernet, network IP addressing, as well as how to set the IP ID of Crestron products.",
    youtubeId: "DGe9QjcLuFw",
    duration: "9:15",
    category: "Crestron",
    tags: ["Crestron", "Ethernet"],
  },
  {
    id: "cre-03",
    title: "Introduction to Crestron Systems: Crestron Toolbox",
    description: "How to use Crestron Toolbox™ as well as using Device Discovery and Easy Config to simplify discovering and setting up Crestron products.",
    youtubeId: "jNZr8ITamkg",
    duration: "1:59",
    category: "Crestron",
    tags: ["Crestron", "Toolbox"],
  },
  {
    id: "cre-04",
    title: "Introduction to Crestron Systems: Debugging Connections",
    description: "This video will cover the Crestron best practices on how to debug connections with all the supported Crestron connection types. This will include how the local Wi-Fi RF signals can cause interference with infiNET EX® devices.",
    youtubeId: "TNyJ54Z9DT8",
    duration: "6:20",
    category: "Crestron",
    tags: ["Crestron", "Debugging"],
  },
];