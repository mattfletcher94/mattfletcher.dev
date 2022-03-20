import { defineStore } from 'pinia'
import assetMap from './../assets/project-interactive-map.png'
import assetMariaHocking from './../assets/project-mariahocking.png'
import assetQuantum from './../assets/project-quantum.jpg'
import assetPromobility from './../assets/project-promobility.png'
import assetOnline2DShooter from './../assets/project-online-2d-shooter.png'

export interface Project {
  title: string
  slug: string
  description: string
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image: assetMap,
        link: '/portfolio/interactive-map',
        type: 'Full Stack Project',
        tags: ['Vue', 'Bootstrap', 'REST API', 'MongoDB'],
      },
      {
        title: 'Multiplayer 2D Shooter',
        slug: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image: assetOnline2DShooter,
        link: '/portfolio/2d-shooter',
        type: 'Full Stack Project',
        tags: ['Online Game', 'Vue', 'socket.io', 'WebGL'],
      },
      {
        title: 'Quantum Supremacy',
        slug: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image: assetQuantum,
        link: '/portfolio/quantum-supremacy',
        type: 'Scientific Research Report',
        tags: ['Scientific Research Report'],
      },
      {
        title: 'Maria Hocking',
        slug: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image: assetMariaHocking,
        link: '/portfolio/maria-hocking',
        type: 'Wordpress Theme',
        tags: ['Wordpress', 'Bootstrap', 'PHP'],
      },
      {
        title: 'Promobility',
        slug: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image: assetPromobility,
        link: '/portfolio/promobility',
        type: 'Wordpress Theme',
        tags: ['Wordpress', 'Bootstrap', 'PHP'],
      },
    ],
  }) as { projects: Project[] },
})
