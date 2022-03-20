import { defineStore } from 'pinia'

export interface Skill {
  title: string
  subtitle: string
  rating: number
  description: string
  type: 'frontend' | 'backend' | 'other'
}

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    skills: [
      {
        title: 'Vue',
        subtitle: 'Nuxt, Vite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'Wordpress',
        subtitle: 'Themes, Plugins, PHP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'CSS',
        subtitle: 'Tailwind, Bootstrap, SCSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'React',
        subtitle: 'Next',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4,
        type: 'frontend',
      },
      {
        title: 'Canvas',
        subtitle: 'WebGL, Pixi.js',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 3,
        type: 'frontend',
      },
      {
        title: 'Node.js',
        subtitle: 'Express, Nest, MongoDB, socket.io',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4,
        type: 'backend',
      },
      {
        title: 'Database',
        subtitle: 'MongoDB, SQL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4,
        type: 'backend',
      },
      {
        title: 'API Development',
        subtitle: 'REST, GraphQL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4,
        type: 'backend',
      },
      {
        title: 'Supabase',
        subtitle: 'Auth, DB',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 3,
        type: 'backend',
      },
      {
        title: '.Net',
        subtitle: 'Core',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 3,
        type: 'backend',
      },
      {
        title: 'UI/UX',
        subtitle: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4,
        type: 'other',
      },
      {
        title: 'Figma',
        subtitle: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 2,
        type: 'other',
      },
      {
        title: 'OpenGL',
        subtitle: 'c++, Java',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 3,
        type: 'other',
      },
      {
        title: 'DevOps',
        subtitle: 'CI/CD, Docker, Azure, Heroku',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 2,
        type: 'other',
      },
    ],
  }) as { skills: Skill[] },
  getters: {
    frontendSkills: state => state.skills.filter(skill => skill.type === 'frontend'),
    backendSkills: state => state.skills.filter(skill => skill.type === 'backend'),
    otherSkills: state => state.skills.filter(skill => skill.type === 'other'),
    asCategories: (state) => {
      const categories = ['frontend', 'backend', 'other']
      return categories.map(category => ({
        category,
        skills: state.skills.filter(skill => skill.type === category),
      }))
    },
  },
})
