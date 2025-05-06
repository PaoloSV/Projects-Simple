<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Navigation -->
      <nav class="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <span class="text-xl font-bold text-gray-900 dark:text-white">DevPortfolio</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
              <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
              <a href="#skills" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
              <a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a>
              <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
              <button @click="toggleDarkMode" class="p-1 rounded-full text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <sun-icon v-if="isDarkMode" class="h-6 w-6" />
                <moon-icon v-else class="h-6 w-6" />
              </button>
            </div>
            <div class="md:hidden flex items-center">
              <button @click="isMenuOpen = !isMenuOpen" class="p-2 rounded-md text-gray-700 dark:text-gray-300">
                <menu-icon v-if="!isMenuOpen" class="h-6 w-6" />
                <x-icon v-else class="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile menu -->
        <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</a>
            <a href="#about" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
            <a href="#skills" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Skills</a>
            <a href="#projects" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
            <a href="#contact" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
            <button @click="toggleDarkMode" class="w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="flex items-center">
                <sun-icon v-if="isDarkMode" class="h-5 w-5 mr-2" />
                <moon-icon v-else class="h-5 w-5 mr-2" />
                <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span class="text-indigo-600 dark:text-indigo-400">John Doe</span>
              </h1>
              <h2 class="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Web Developer
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I build modern, responsive web applications with cutting-edge technologies.
                Let's work together to bring your ideas to life!
              </p>
              <div class="flex space-x-4">
                <a href="#contact" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300">
                  Contact Me
                </a>
                <a href="#projects" class="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium rounded-lg transition duration-300">
                  View Projects
                </a>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
              <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section id="about" class="py-16 bg-white dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" alt="Working on code" class="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div class="md:w-1/2 md:pl-12">
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate web developer with over 5 years of experience building modern web applications. I specialize in front-end development with Vue.js and back-end development with Node.js.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                My journey in web development started when I built my first website for a local business. Since then, I've worked with startups and established companies to create user-friendly, performant web applications.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                  <github-icon class="h-6 w-6" />
                </a>
                <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                  <linkedin-icon class="h-6 w-6" />
                </a>
                <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                  <twitter-icon class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Skills Section -->
      <section id="skills" class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="(skill, index) in skills" :key="index" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-300 hover:transform hover:scale-105">
              <div class="w-16 h-16 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                <component :is="skill.icon" class="h-10 w-10" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                <div class="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Projects Section -->
      <section id="projects" class="py-16 bg-white dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Projects</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in projects" :key="index" class="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                    {{ tech }}
                  </span>
                </div>
                <div class="flex space-x-3">
                  <a :href="project.liveUrl" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    <external-link-icon class="h-4 w-4 mr-1" />
                    <span>Live</span>
                  </a>
                  <a :href="project.codeUrl" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    <github-icon class="h-4 w-4 mr-1" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section id="contact" class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <mail-icon class="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                  <div>
                    <p class="text-gray-900 dark:text-white font-medium">Email</p>
                    <a href="mailto:john.doe@example.com" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">john.doe@example.com</a>
                  </div>
                </div>
                <div class="flex items-start">
                  <phone-icon class="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                  <div>
                    <p class="text-gray-900 dark:text-white font-medium">Phone</p>
                    <a href="tel:+11234567890" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">+1 (123) 456-7890</a>
                  </div>
                </div>
                <div class="flex items-start">
                  <map-pin-icon class="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                  <div>
                    <p class="text-gray-900 dark:text-white font-medium">Location</p>
                    <p class="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <github-icon class="h-6 w-6" />
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <linkedin-icon class="h-6 w-6" />
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <twitter-icon class="h-6 w-6" />
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <instagram-icon class="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form @submit.prevent="submitForm" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input type="text" id="name" v-model="contactForm.name" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input type="email" id="email" v-model="contactForm.email" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required />
                </div>
                <div class="mb-4">
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input type="text" id="subject" v-model="contactForm.subject" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required />
                </div>
                <div class="mb-6">
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea id="message" v-model="contactForm.message" rows="4" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required></textarea>
                </div>
                <button type="submit" class="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <span class="text-xl font-bold text-gray-900 dark:text-white">DevPortfolio</span>
              <p class="text-gray-600 dark:text-gray-400 mt-2">© {{ new Date().getFullYear() }} John Doe. All rights reserved.</p>
            </div>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <github-icon class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <linkedin-icon class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <twitter-icon class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <instagram-icon class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { 
    Menu as MenuIcon, 
    X as XIcon, 
    Sun as SunIcon, 
    Moon as MoonIcon,
    Github as GithubIcon,
    Linkedin as LinkedinIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    Mail as MailIcon,
    Phone as PhoneIcon,
    MapPin as MapPinIcon,
    ExternalLink as ExternalLinkIcon,
    Code as CodeIcon,
    Database as DatabaseIcon,
    Layout as LayoutIcon,
    Server as ServerIcon,
    Globe as GlobeIcon,
    Smartphone as SmartphoneIcon,
    Cpu as CpuIcon
  } from 'lucide-vue-next';
  
  // State
  const isMenuOpen = ref(false);
  const isDarkMode = ref(false);
  const contactForm = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Skills data
  const skills = ref([
    { name: 'HTML/CSS', level: 95, icon: GlobeIcon },
    { name: 'JavaScript', level: 90, icon: CodeIcon },
    { name: 'Vue.js', level: 92, icon: LayoutIcon },
    { name: 'Tailwind CSS', level: 88, icon: LayoutIcon },
    { name: 'Node.js', level: 85, icon: ServerIcon },
    { name: 'Express.js', level: 82, icon: ServerIcon },
    { name: 'MongoDB', level: 78, icon: DatabaseIcon },
    { name: 'SQL', level: 75, icon: DatabaseIcon },
    { name: 'Git', level: 88, icon: GithubIcon },
    { name: 'Responsive Design', level: 90, icon: SmartphoneIcon },
    { name: 'RESTful APIs', level: 85, icon: ServerIcon },
    { name: 'Testing', level: 70, icon: CpuIcon }
  ]);
  
  // Projects data
  const projects = ref([
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart, and checkout functionality.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
      technologies: ['Vue.js', 'Vuex', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
      technologies: ['Vue.js', 'Tailwind CSS', 'Firebase'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data for any location.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      technologies: ['Vue.js', 'Tailwind CSS', 'OpenWeather API'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts with user authentication.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'A real-time messaging application with private and group chat functionality.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      technologies: ['Vue.js', 'Socket.io', 'Node.js', 'Express'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website to showcase projects and skills (like this one!).',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ]);
  
  // Methods
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  const submitForm = () => {
    // Here you would typically send the form data to a server
    alert(`Thank you for your message, ${contactForm.value.name}! I'll get back to you soon.`);
    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  };
  
  // Lifecycle hooks
  onMounted(() => {
    // Check user preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    }
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      const nav = document.querySelector('nav');
      if (isMenuOpen.value && !nav.contains(event.target)) {
        isMenuOpen.value = false;
      }
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  });
  </script>
  
  <style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', sans-serif;
  }
  
  .dark {
    color-scheme: dark;
  }
  </style>