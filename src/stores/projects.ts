import { defineStore } from 'pinia'
import { html as ProjectPromobilityContent } from '../content/ProjectPromobility.md'
import { html as ProjectInteractiveMapContent } from '../content/ProjectInteractiveMap.md'
import { html as ProjectOnlineShooterContent } from '../content/ProjectOnlineShooter.md'
import { html as ProjectQuantumSupremacyContent } from '../content/ProjectQuantumSupremacy.md'
import { html as ProjectMariaHockingContent } from '../content/ProjectMariaHocking.md'
import assetMap from './../assets/project-interactive-map.png?w=300&h=300&webp&imagetools'
import assetMariaHocking from './../assets/project-mariahocking.png?w=300&h=300&webp&imagetools'
import assetQuantum from './../assets/project-quantum.jpg?w=300&h=300&webp&imagetools'
import assetPromobility from './../assets/project-promobility.png?w=300&h=300&webp&imagetools'
import assetOnline2DShooter from './../assets/project-online-2d-shooter.png?w=300&h=300&webp&imagetools'

export interface Project {
  title: string
  slug: string
  description: string
  content?: string
  image: string
  link: string
  type: string
  tags: string[]
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        title: 'Interactive Map',
        slug: '',
        description: 'The Interactive Holiday Park Map project\'s objective was to make the process of booking a holiday and exploring a holiday park a more immersive and satisfying experience.',
        content: ProjectInteractiveMapContent,
        image: assetMap,
        link: '/portfolio/interactive-map',
        type: 'Full Stack Project',
        tags: ['Vue', 'Bootstrap', 'REST API', 'MongoDB'],
      },
      {
        title: 'Online Multiplayer Shooter',
        slug: '',
        description: 'This online multiplayer shooter game utilizes websockets to handle real-time data.',
        content: ProjectOnlineShooterContent,
        image: assetOnline2DShooter,
        link: '/portfolio/2d-shooter',
        type: 'Full Stack Project',
        tags: ['Online Game', 'Vue', 'websockets', 'WebGL'],
      },
      {
        title: 'Quantum Supremacy',
        slug: '',
        description: 'This project required me to write a scientific research paper on a topic related to Computer Science. I decided to write about Quantum Computing, since this is a topic that interests me. This is my best written work and I received a very strong First.',
        content: ProjectQuantumSupremacyContent,
        image: assetQuantum,
        link: '/portfolio/quantum-supremacy',
        type: 'Scientific Research Report',
        tags: ['Scientific Research Report'],
      },
      {
        title: 'Pro Mobility',
        slug: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        content: ProjectPromobilityContent,
        image: assetPromobility,
        link: '/portfolio/promobility',
        type: 'Wordpress Theme',
        tags: ['Wordpress', 'Bootstrap', 'PHP'],
      },
      {
        title: 'Maria Hocking',
        slug: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        content: ProjectMariaHockingContent,
        image: assetMariaHocking,
        link: '/portfolio/maria-hocking',
        type: 'Wordpress Theme',
        tags: ['Wordpress', 'Bootstrap', 'PHP'],
      },
    ],
  }) as { projects: Project[] },
})
