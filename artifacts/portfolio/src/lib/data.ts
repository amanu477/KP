export const PORTFOLIO_DATA = {
  personal: {
    name: "Kaleb",
    fullName: "Kaleb Anderson",
    role: "Creative Designer & Photographer",
    tagline: "Crafting visual stories through design and lens.",
    bio: "I am a multidisciplinary creative focusing on brutalist design, elegant typography, and moody, cinematic photography. With over 6 years of experience blending digital experiences with striking visuals, I build brand narratives that stand out in the noise. I believe in reduction, high contrast, and making every pixel intentional.",
    location: "New York, NY",
    email: "hello@kalebportfolio.com"
  },
  socials: [
    { name: "Instagram", url: "#" },
    { name: "Behance", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" }
  ],
  projects: [
    {
      id: 1,
      title: "Neon Echoes",
      category: "Photography",
      year: "2023",
      image: "port-6.png",
      description: "A cinematic exploration of cyberpunk aesthetics in modern urban environments."
    },
    {
      id: 2,
      title: "Onyx Collection",
      category: "Design",
      year: "2024",
      image: "port-3.png",
      description: "Abstract 3D compositions exploring glassmorphism and deep gold textures."
    },
    {
      id: 3,
      title: "Vogue Noir",
      category: "Photography",
      year: "2023",
      image: "port-2.png",
      description: "High fashion editorial capturing the essence of modern dark academia."
    },
    {
      id: 4,
      title: "Concrete Silence",
      category: "Photography",
      year: "2022",
      image: "port-1.png",
      description: "Brutalist architecture framed through stark black and white contrasts."
    },
    {
      id: 5,
      title: "Swiss Grid",
      category: "Design",
      year: "2023",
      image: "port-5.png",
      description: "Minimalist poster series celebrating classical typography and structural grids."
    },
    {
      id: 6,
      title: "Highland Mist",
      category: "Video",
      year: "2024",
      image: "port-4.png",
      description: "A short documentary film capturing the moody landscapes of the Scottish Highlands."
    }
  ],
  skills: [
    { name: "Art Direction", level: 95, category: "Creative" },
    { name: "UI/UX Design", level: 90, category: "Design" },
    { name: "Photography", level: 95, category: "Creative" },
    { name: "Cinematography", level: 80, category: "Creative" },
    { name: "Adobe Creative Suite", level: 98, category: "Tools" },
    { name: "Figma & Prototyping", level: 92, category: "Tools" },
    { name: "Cinema 4D", level: 75, category: "Tools" },
    { name: "Typography", level: 90, category: "Design" }
  ],
  experience: [
    {
      id: 1,
      role: "Senior Art Director",
      company: "Studio Noir",
      period: "2022 - Present",
      description: "Leading creative direction for luxury and fashion brands. Overseeing full campaign lifecycles from concept to execution."
    },
    {
      id: 2,
      role: "Lead UI Designer",
      company: "Vanguard Digital",
      period: "2019 - 2022",
      description: "Designed award-winning digital experiences for creative agencies. Specialized in dark-mode, high-end web applications."
    },
    {
      id: 3,
      role: "Freelance Photographer",
      company: "Self-Employed",
      period: "2017 - Present",
      description: "Editorial, architectural, and landscape photography. Featured in multiple international design publications."
    }
  ]
};

export const CATEGORIES = ["All", ...Array.from(new Set(PORTFOLIO_DATA.projects.map(p => p.category)))];
