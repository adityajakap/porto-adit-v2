export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'other'
  status: 'completed' | 'in-progress' | 'planned'
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce solution with modern UI/UX, secure payment processing, inventory management, and real-time analytics. Built with scalability and performance in mind.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    longDescription: 'A productivity app that helps teams organize and track their work with intuitive interfaces, real-time collaboration, and powerful project management features.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Redux'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/username/task-management',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that provides real-time weather data and forecasts with beautiful visualizations.',
    longDescription: 'An elegant weather application with interactive charts, location-based forecasts, and a clean, responsive design that works across all devices.',
    image: '/projects/weather.jpg',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS', 'Vuex'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    featured: false
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication and real-time transaction monitoring.',
    longDescription: 'A comprehensive mobile banking solution with advanced security features, intuitive user interface, and seamless integration with financial services.',
    image: '/projects/banking.jpg',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Node.js', 'MongoDB'],
    category: 'mobile',
    status: 'in-progress',
    githubUrl: 'https://github.com/username/mobile-banking',
    featured: true
  }
]

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id)
}
