import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPhp, FaPython, FaJava, FaUbuntu, FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiPostman, SiExpress, SiFlask, SiCplusplus, SiSqlite
} from 'react-icons/si';

export const portfolioData = {
  name: "Kirti Siddhu",
  title: "Full Stack Developer | MERN Developer",
  tagline: "Building scalable and user-friendly web applications",
  email: "kirtisidhu03@gmail.com",
  github: "https://github.com/KirtiSiddhu",
  linkedin: "https://www.linkedin.com/in/kirtisiddhu/",
  phone: "9368361638",
  about: {
    highlights: [
      "Curious • Innovative • Driven",
      "Creative • Analytical • Focused",
      "Passionate • Adaptive • Determined"
    ],
    description: "I’m a passionate Full Stack Developer who loves turning ideas into interactive, user-focused digital experiences. I enjoy working across both frontend and backend, building systems that are not only functional but also intuitive and visually engaging.\n\nWith a strong curiosity for learning and a problem-solving mindset, I continuously explore new technologies and push myself to create smarter, more efficient solutions. For me, coding is not just about writing logic — it’s about building experiences that people connect with. Curious • Innovative • Driven\nCreative • Analytical • Focused\nPassionate • Adaptive • Determined"
  },
  skills: [
    { name: "Languages", items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: FaPhp },
      { name: "SQL", icon: FaDatabase }
    ]},
    { name: "Frameworks/Web", items: [
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]},
    { name: "Tools", items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Postman", icon: SiPostman },
      { name: "Ubuntu", icon: FaUbuntu }
    ]},
    { name: "Soft Skills", items: [
      { name: "Communication" },
      { name: "Collaboration" },
      { name: "Project Management" }
    ]}
  ],
  projects: [
    {
      title: "Knowledge Management System",
      description: "A smart system for managing knowledge with auto-suggestion and real-time communication.",
      image: "/projects/knowledge-management.png",
      tech: ["HTML", "JavaScript", "Tailwind CSS", "PHP"],
      features: ["Smart auto-suggestion", "Real-time communication", "Improved search efficiency"],
      github: "https://github.com/KirtiSiddhu",
      category: "PHP"
    },
    {
      title: "Music Recommendation Website",
      description: "Personalized song suggestions based on user preferences using Flask and Python.",
      image: "/projects/music-recommendation.png",
      tech: ["Python", "Flask", "HTML", "Tailwind CSS"],
      features: ["Personalized song suggestions", "Interactive UI", "Improved recommendation accuracy"],
      github: "https://github.com/KirtiSiddhu",
      category: "Python"
    },
    {
      title: "Relief Coordination System",
      description: "A MERN stack application for emergency coordination and real-time updates.",
      image: "/projects/relief-coordination.png",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      features: ["Role-based authentication", "Real-time updates", "Emergency coordination system"],
      github: "https://github.com/KirtiSiddhu",
      category: "MERN"
    },
    {
      title: "AI-Powered Directory Management System",
      description: "Orchestrated an intelligent directory management system capable of handling files through voice commands and automated actions.",
      image: "/projects/ai-directory.png",
      tech: ["Python", "Tkinter", "HTML", "CSS"],
      features: [
        "Real-time voice processing and smart responses for seamless task execution",
        "Machine-learning–based pattern recognition to classify files automatically"
      ],
      github: "https://github.com/KirtiSiddhu",
      category: "Python"
    }
  ],
  trainings: [
    {
      name: "C++ Programming Training",
      focus: ["OOP", "File Handling", "Debugging"]
    }
  ],
  certifications: [
    { name: "Infosys: AI & Generative AI Tools", issuer: "Infosys" },
    { name: "NPTEL: Cloud Computing", issuer: "NPTEL" },
    { name: "Coursera: Front-End Development", issuer: "Coursera" },
    { name: "FreeCodeCamp: Responsive Web Design", issuer: "FreeCodeCamp" }
  ],
  achievements: [
    { title: "Solved 150+ DSA problems", platforms: ["LeetCode", "Codeforces"] },
    { title: "3-star on HackerRank", skills: ["Java", "C++", "Python"] }
  ],
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      cgpa: "7.6",
      period: "Aug ‘23 – Present",
      location: "Phagwara, Punjab"
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "Intermediate",
      field: "PCM",
      percentage: "82%",
      period: "Aug ‘21 – Jun ‘22",
      location: "Hapur, Uttar Pradesh"
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "Matriculation",
      field: "General",
      percentage: "86%",
      period: "Mar ‘19– Mar ‘20",
      location: "Hapur, Uttar Pradesh"
    }
  ]
};
