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
        description: 'Vue 3 is my favourite front-end framework.',
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'Wordpress',
        subtitle: 'Themes, Plugins, PHP',
        description: `
          I have over 5 years of experience working with Wordpress, with strong understanding of WordPress core.
          I have built over 20 custom themes with intuitive back offices and modern front-ends.
          Some of these websites are viewed by thousands of visitors daily.
          At my current job, I have also developed a Wordpress Saas product 
          with over 15 paid subscribers.
          <br><br>
          Wordpress development has improved my HTML, CSS, JavaScript, PHP, and MySQL skills massively.`,
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'CSS',
        subtitle: 'Tailwind, Bootstrap, SCSS',
        description: `
          Many of the Wordpress sites I have developed use Bootstrap and SCSS. However,
          I have since learned Tailwind CSS and Post CSS, which I find to be a much more modern and clean approach,
          since they integrate well with frameworks such as Vue and React. My CSS skills are very good, and often have
          no trouble converting design assets into code.
        `,
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'React',
        subtitle: 'Next',
        description: `
          I understand the benefits of React. It's simplicity and the way it integrates with Typescript cannot be faulted.
          At my current employment, I introduced the company to React and now spend much of my time working with it. This includes
          building component libraries and web applications for our clients. I will often
          use Next.js which gives me access to a server incase I need to hide API keys.
          <br><br>
          Outside of work I have experimented with React Native, which is a hybrid mobile app framework.
          I thought the workflow was relatively simple, but I have found Flutter to be a much more powerful framework.
        `,
        rating: 4,
        type: 'frontend',
      },
      {
        title: 'OpenGL',
        subtitle: 'WebGL, Pixi.js, C++',
        description: `
          I have experience rendering high performance 2D graphics using WebGL and Pixi.js. 
          These were some of the technologies used within my University <a href="https://youtu.be/Hku3ORswnwE" target="_blank">dissentation project</a>, 
          which received a strong first. I have also used the same technologies
          to build an <a href="https://youtu.be/hVRlS9BiE78?t=75" target="_blank">online shooter game</a>.
          <br><br>
          Another project at University involved using C++ and shaders to render a 3D world.
          My project was a world generator that allows you to generate
          a small and simple world by providing a grayscale height-map and an RGB blend-map.
          This project also recevied a strong first and was a great learning experience.
          Please see the <a href="https://youtu.be/7nspIj7_fQo" target="_blank">demo here</a>.
        `,
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
