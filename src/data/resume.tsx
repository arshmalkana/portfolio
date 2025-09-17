import { Icons } from "@/components/icons";
import { HomeIcon, WrenchIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Arsh Sidhu",
  initials: "Arsh",
  url: "https://itsarsh.dev",
  location: "Vancouver, BC",
  locationLink: "https://www.google.com/maps/place/vancouver",
  description:
  "Computer Science student. Passionate about IT, cybersecurity, and building practical tech solutions.",
  summary:
  "Currently studying Computer Science at Columbia College, Vancouver. I actively run a homelab with Portainer, Docker, and Nginx Proxy Manager, experimenting with self-hosted infrastructure, automation, and cloud-like setups. I've built full-stack applications (React, Fastify, PostgreSQL), designed reporting systems for government-scale use cases, and explored network & security concepts through hands-on projects.  \n\n I'm also pursuing certifications like CompTIA A+, Security+, and CCNA to strengthen my foundation in IT support, networking, and cybersecurity. My goal is to bridge strong technical knowledge with real-world problem solving and grow into roles where I can make an impact — whether that's IT support, systems administration, or cybersecurity analysis.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "Postgres",
    "Docker",
    "C++",
    "Portainer",
    "Nginx Proxy Manager",
    "Linux",
    "Networking",
    "Cybersecurity",
    "Git/GitHub",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://cv.itsarsh.dev", icon: FileTextIcon, label: "CV" },
  ],
  contact: {
    email: "arshpreetmalkana@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arshmalkana",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arshmalkana/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
work: [
  {
    company: "Loblaws Companies Limited",
    href: "https://www.realcanadiansuperstore.ca/en",
    badges: [],
    location: "Burnaby, BC",
    title: "Customer Support",
    logoUrl: "/loblaws.jpg",
    start: "Sept 2023",
    end: "Present",
    description:
      "Provide front-line customer support. Gained hands-on experience supporting users in a fast-paced retail environment.",
  },
    // {
    //   company: "Personal Homelab Projects",
    //   href: "https://itsarsh.dev",
    //   badges: ["Self-hosted"],
    //   location: "Remote",
    //   title: "Systems & Cybersecurity Enthusiast",
    //   logoUrl: "/homelab.png",
    //   start: "2022",
    //   end: "Present",
    //   description:
    //     "Built and maintain a homelab running Docker, Portainer, and Nginx Proxy Manager on servers in Canada and India. Configured Cloudflare tunnels, RAID storage, and VPN access. Experimented with IT security tools, self-hosted Nextcloud, and CDN-style replication. Developed practical skills in Linux administration, networking, and security hardening.",
    // },
    // {
    //   company: "Punjab Animal Husbandry Reporting System",
    //   href: "https://itsarsh.dev/projects",
    //   badges: ["Academic Project"],
    //   location: "Remote",
    //   title: "Full-Stack Developer",
    //   logoUrl: "/punjab.png",
    //   start: "2024",
    //   end: "2025",
    //   description:
    //     "Designed a full-stack Progressive Web App (React + Fastify + PostgreSQL) for large-scale government reporting (10K+ potential users). Implemented modules for staff management, vaccine distribution, and AI-based services. Integrated JWT authentication, WebAuthn, and offline sync with Dexie/IndexedDB. Deployed and tested using Dockerized workflows.",
    // },
    // {
    //   company: "Osare Studios",
    //   href: "https://osarestudios.com/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Freelance App Developer",
    //   logoUrl: "/osare.png",
    //   start: "2021",
    //   end: "2022",
    //   description:
    //     "Contributed to a React Native booking app for a startup. Built appointment scheduling features and integrated Firebase for authentication. Collaborated with a small team to deliver a functional MVP under tight deadlines.",
    // },
    // {
    //   company: "Personal IT Projects",
    //   href: "https://github.com/itsarsh",
    //   badges: ["Independent"],
    //   location: "Remote",
    //   title: "Project Builder",
    //   logoUrl: "/projects.png",
    //   start: "Ongoing",
    //   end: "Present",
    //   description:
    //     "Created various projects: • ESP32-based print server • File-sharing app (PHP + Java Android) • Website for an electrician business (WordPress). These projects helped strengthen my skills in full-stack development, IT support, and practical problem solving.",
    // },
],
    // work: [
    //   {
    //     company: "Atomic Finance",
    //     href: "https://atomic.finance",
    //     badges: [],
    //     location: "Remote",
    //     title: "Bitcoin Protocol Engineer",
    //     logoUrl: "/atomic.png",
    //     start: "May 2021",
    //     end: "Oct 2022",
    //     description:
    //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    //   },
    //   {
    //     company: "Shopify",
    //     badges: [],
    //     href: "https://shopify.com",
    //     location: "Remote",
    //     title: "Software Engineer",
    //     logoUrl: "/shopify.svg",
    //     start: "January 2021",
    //     end: "April 2021",
    //     description:
    //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    //   },
    //   {
    //     company: "Nvidia",
    //     href: "https://nvidia.com/",
    //     badges: [],
    //     location: "Santa Clara, CA",
    //     title: "Software Engineer",
    //     logoUrl: "/nvidia.png",
    //     start: "January 2020",
    //     end: "April 2020",
    //     description:
    //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    //   },
    //   {
    //     company: "Splunk",
    //     href: "https://splunk.com",
    //     badges: [],
    //     location: "San Jose, CA",
    //     title: "Software Engineer",
    //     logoUrl: "/splunk.svg",
    //     start: "January 2019",
    //     end: "April 2019",
    //     description:
    //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    //   },
    //   {
    //     company: "Lime",
    //     href: "https://li.me/",
    //     badges: [],
    //     location: "San Francisco, CA",
    //     title: "Software Engineer",
    //     logoUrl: "/lime.svg",
    //     start: "January 2018",
    //     end: "April 2018",
    //     description:
    //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    //   },
    //   {
    //     company: "Mitre Media",
    //     href: "https://mitremedia.com/",
    //     badges: [],
    //     location: "Toronto, ON",
    //     title: "Software Engineer",
    //     logoUrl: "/mitremedia.png",
    //     start: "May 2017",
    //     end: "August 2017",
    //     description:
    //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    //   },
    // ],
    // education: [
    //   {
    //     school: "Buildspace",
    //     href: "https://buildspace.so",
    //     degree: "s3, s4, sf1, s5",
    //     logoUrl: "/buildspace.jpg",
    //     start: "2023",
    //     end: "2024",
    //   },
    //   {
    //     school: "University of Waterloo",
    //     href: "https://uwaterloo.ca",
    //     degree: "Bachelor's Degree of Computer Science (BCS)",
    //     logoUrl: "/waterloo.png",
    //     start: "2016",
    //     end: "2021",
    //   },
    //   {
    //     school: "Wilfrid Laurier University",
    //     href: "https://wlu.ca",
    //     degree: "Bachelor's Degree of Business Administration (BBA)",
    //     logoUrl: "/laurier.png",
    //     start: "2016",
    //     end: "2021",
    //   },
    //   {
    //     school: "International Baccalaureate",
    //     href: "https://ibo.org",
    //     degree: "IB Diploma",
    //     logoUrl: "/ib.png",
    //     start: "2012",
    //     end: "2016",
    //   },
    // ],
  education: [
  {
    school: "Columbia College",
    href: "https://www.columbiacollege.ca",
    degree: "Associate of Science - Computer Science (in progress)",
    logoUrl: "/columbia.png",
    start: "2025",
    end: "2026 (expected)",
  },
  {
    school: "CompTIA",
    href: "https://www.comptia.org/certifications",
    degree: "CompTIA A+ (in progress), CompTIA Security+ (planned)",
    logoUrl: "/comptia.png",
    start: "2025",
    end: "2025 (expected)",
  },
  {
    school: "Cisco",
    href: "https://www.cisco.com/c/en_ca/training-events/training-certifications/certifications.html",
    degree: "CCNA (planned)",
    logoUrl: "/cisco.png",
    start: "2025",
    end: "2026 (expected)",
  },
],

  // projects: [
  //   {
  //     title: "Chat Collect",
  //     href: "https://chatcollect.com",
  //     dates: "Jan 2024 - Feb 2024",
  //     active: true,
  //     description:
  //       "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://chatcollect.com",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //   },
  //   {
  //     title: "Magic UI",
  //     href: "https://magicui.design",
  //     dates: "June 2023 - Present",
  //     active: true,
  //     description:
  //       "Designed, developed and sold animated UI components for developers.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://magicui.design",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/magicuidesign/magicui",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.magicui.design/bento-grid.mp4",
  //   },
  //   {
  //     title: "llm.report",
  //     href: "https://llm.report",
  //     dates: "April 2023 - September 2023",
  //     active: true,
  //     description:
  //       "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://llm.report",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/dillionverma/llm.report",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.llm.report/openai-demo.mp4",
  //   },
  //   {
  //     title: "Automatic Chat",
  //     href: "https://automatic.chat",
  //     dates: "April 2023 - March 2024",
  //     active: true,
  //     description:
  //       "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://automatic.chat",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",

  // ],
  projects: [
  {
    title: "Punjab Animal Husbandry Reporting System",
    href: "",
    dates: "Jun 2022 - Present",
    active: true,
    description:
      "A full-stack PWA built for managing animal husbandry data across Punjab. Features include staff management, vaccine distribution, AI services, and offline-first sync with Dexie/IndexedDB and CouchDB replication. Designed to support 10K+ monthly active users.",
    technologies: [
      "React",
      "Next.js",
      "Fastify",
      "PostgreSQL",
      "Dexie.js",
      "Docker",
      "WebAuthn",
      "JWT",
      "TailwindCSS",
            "Java", "Google Sheets API", "Google Apps Script", "React PWA", "PostgreSQL", "Fastify", "Figma"

    ],
    links: [
      // {
      //   type: "GitHub",
      //   href: "https://github.com/yourrepo/punjab-reporting",
      //   icon: <Icons.github className="size-3" />,
      // },
      // {
      //   type: "Docs",
      //   href: "https://itsarsh.dev/docs/homelab",
      //   icon: <Icons.globe className="size-3" />,
      // },
    ],
    image: "/punjab.png",  
    video: "",

  },
  {
    title: "Homelab Infrastructure",
    href: "",
    dates: "Sept 2025 - Present",
    active: true,
    description:
      "Built a multi-node homelab with Docker, Portainer, and Nginx Proxy Manager. Configured Cloudflare Tunnels, self-hosted services, and experimented with Nextcloud geo-replication between Canada and India. Designed for both learning and real-world app hosting.",
    technologies: [
      "Docker",
      "Portainer",
      "Nginx Proxy Manager",
      "Cloudflare Tunnels",
      "Ubuntu Server",
      "Proxmox"
    ],
    links: [
      {
        type: "Docs",
        href: "https://homelab.itsarsh.dev/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/homelab.png",
    video: "",

  },
  {
    title: "Technical Academic Projects",
    href: "",
    dates: "Jan 2024 - Present",
    active: true,
    technologies: ["LogicWorks", "Assembler", "Pipelining", "APIs", "Automation"],
    links: [],
    description: 
      "Built MIPS CPU using LogicWorks circuit diagrams (won Classroom Appreciation Award).\n Designed and built a RISC Assembler for 16-bit Thumb instruction.\n Implemented RISC CPU with pipelining, hazard detection, and stalling.\n Developed automation bot using APIs to auto-register courses instantly at seat release."
    ,
    image: "/mips.png",
    video: "",

  },
  {
    title: "Digital Transformation for Immigration Consultancy",
    href: "",
    dates: "Apr 2024 - May 2024",
    active: false,
    technologies: [
      "WordPress", "cPanel", "Google Apps Script", "Google Forms", "HTML", "CSS", "JavaScript", "Networking"
    ],
    links: [
      // {
      //   type: "GitHub",
      //   href: "https://github.com/yourrepo/punjab-reporting",
      //   icon: <Icons.github className="size-3" />,
      // },
      // {
      //   type: "Docs",
      //   href: "https://itsarsh.dev/docs/homelab",
      //   icon: <Icons.globe className="size-3" />,
      // },
    ],
    description: 
      "Migrated manual spreadsheets into Google Sheets + Forms with automated workflows.\nDeveloped responsive client website to showcase services and enable future visa tracking features.\nPlanned and deployed a 20+ workstation computer lab for PTE training.",
    image: "/networking.png",
    video: "",

  },
  {
    title: "Photography Studio App",
    href: "",
    dates: "Dec 2023 - May 2024",
    active: false,
    technologies: ["React Native", "Strapi CMS", "OAuth", "Google Login", "Firebase", "DigitalOcean"],
    description: 
      "Built booking system with scheduling, confirmations, and portfolio showcase.\nIntegrated cart + payments for orders and photo sessions.\nAdded Google login, user profiles, order management, and address book.",
    image: "/osare.png",
    links: [
      // {
      //   type: "GitHub",
      //   href: "https://github.com/yourrepo/punjab-reporting",
      //   icon: <Icons.github className="size-3" />,
      // },
      // {
      //   type: "Docs",
      //   href: "https://itsarsh.dev/docs/homelab",
      //   icon: <Icons.globe className="size-3" />,
      // },
    ],
    video: "",
  },
  {
    title: "Mystery Cam Projector (Experimental)",
    href: "",
    dates: "Dec 2022",
    active: false,
    technologies: ["Java", "CameraView API", "Android SDK", "Git"],
    description: 
      "Explored Android CameraView API and real-time streaming.\nLearned about UX design and Android performance constraints.",
    image: "/mystery.png",
    links: [
      // {
      //   type: "GitHub",
      //   href: "https://github.com/yourrepo/punjab-reporting",
      //   icon: <Icons.github className="size-3" />,
      // },
      // {
      //   type: "Docs",
      //   href: "https://itsarsh.dev/docs/homelab",
      //   icon: <Icons.globe className="size-3" />,
      // },
    ],
    video: "",
  },
  {
    title: "Files Implementor (Experimental)",
    href: "",
    dates: "May - Jun 2022",
    active: false,
    technologies: ["PHP", "MySQL", "dex", "Reverse Engineering", "ClassLoader", "Android SDK"],
    description: "Implemented time-based access control with login tokens.\n Designed workflows for secure file download, extraction, and storage.\n Explored remote code execution and dynamic loading within Android apps.",
    image: "",
    links: [
      // {
      //   type: "GitHub",
      //   href: "https://github.com/yourrepo/punjab-reporting",
      //   icon: <Icons.github className="size-3" />,
      // },
      // {
      //   type: "Docs",
      //   href: "https://itsarsh.dev/docs/homelab",
      //   icon: <Icons.globe className="size-3" />,
      // },
    ],
    video: "",
  },
  {
    title: "Metashow (Experimental)",
    href: "",
    dates: "Feb - Mar 2022",
    active: false,
    technologies: ["Node.js", "ffmpeg", "Azure", "ExoPlayer", "HLS", "RTMP"],
    description: 
      "Developed backend with Node.js + ffmpeg deployed on Microsoft Azure.\n Integrated ExoPlayer for smooth mobile video playback.\n Learned about streaming infra and challenges of cloud hosting.",
    image: "",
    links: [
      // {
      //   type: "GitHub",
      //   href: "https://github.com/yourrepo/punjab-reporting",
      //   icon: <Icons.github className="size-3" />,
      // },
      // {
      //   type: "Docs",
      //   href: "https://itsarsh.dev/docs/homelab",
      //   icon: <Icons.globe className="size-3" />,
      // },
    ],
    video: "",
  },
],

  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
