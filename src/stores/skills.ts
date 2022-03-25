import { defineStore } from 'pinia'
import { html as SkillVueContent } from '../content/SkillVue.md'
import { html as SkillWordpressContent } from '../content/SkillWordpress.md'
import { html as SkillCSSContent } from '../content/SkillCSS.md'
import { html as SkillReactContent } from '../content/SkillReact.md'
import { html as SkillOpenGLContent } from '../content/SkillOpenGL.md'
import { html as SkillNodeContent } from '../content/SkillNode.md'
import { html as SkillDatabaseContent } from '../content/SkillDatabase.md'
import { html as SkillAPIContent } from '../content/SkillAPI.md'
import { html as SkillDotNetContent } from '../content/SkillDotNet.md'
import { html as SkillSupabaseContent } from '../content/SkillSupabase.md'
import { html as SkillUIContent } from '../content/SkillUI.md'
import { html as SkillFigmaContent } from '../content/SkillFigma.md'
import { html as SkillDevOpsContent } from '../content/SkillDevOps.md'

export interface Skill {
  title: string
  subtitle: string
  rating: number
  content?: string
  type: 'frontend' | 'backend' | 'other'
}

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    skills: [
      {
        title: 'Vue',
        subtitle: 'Nuxt, Vite',
        content: SkillVueContent,
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'Wordpress',
        subtitle: 'Themes, Plugins, PHP',
        content: SkillWordpressContent,
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'CSS',
        subtitle: 'Tailwind, Bootstrap, SCSS',
        content: SkillCSSContent,
        rating: 5,
        type: 'frontend',
      },
      {
        title: 'React',
        subtitle: 'Next',
        content: SkillReactContent,
        rating: 4,
        type: 'frontend',
      },
      {
        title: 'OpenGL',
        subtitle: 'WebGL, Pixi.js, C++',
        content: SkillOpenGLContent,
        rating: 3,
        type: 'frontend',
      },
      {
        title: 'Node.js',
        subtitle: 'Express, Nest, MongoDB, socket.io',
        rating: 4,
        content: SkillNodeContent,
        type: 'backend',
      },
      {
        title: 'Database',
        subtitle: 'MongoDB, SQL',
        rating: 4,
        content: SkillDatabaseContent,
        type: 'backend',
      },
      {
        title: 'API Development',
        subtitle: 'REST, GraphQL',
        content: SkillAPIContent,
        rating: 4,
        type: 'backend',
      },
      {
        title: 'Supabase',
        subtitle: 'Firebase',
        content: SkillSupabaseContent,
        rating: 4,
        type: 'backend',
      },
      {
        title: '.Net',
        subtitle: 'Core',
        content: SkillDotNetContent,
        rating: 3,
        type: 'backend',
      },
      {
        title: 'UI/UX',
        subtitle: '',
        rating: 4,
        content: SkillUIContent,
        type: 'other',
      },
      {
        title: 'Figma',
        subtitle: '',
        content: SkillFigmaContent,
        rating: 3,
        type: 'other',
      },
      {
        title: 'DevOps',
        subtitle: 'CI/CD, Docker, Azure, Heroku',
        content: SkillDevOpsContent,
        rating: 3,
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
