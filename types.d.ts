export interface Project {
  id: number
  name: string
  description: string
  image: string
  url: string
  icons: Icons[]
}

export enum Icons {
  Javascript = 'logos:javascript',
  Typescript = 'logos:typescript-icon',
  Vue = 'logos:vue',
  Nuxt = 'logos:nuxt-icon',
  Tailwind = 'logos:tailwindcss-icon',
  React = 'logos:react',
  DeepL = 'simple-icons:deepl'
}

export interface SkillIcon {
  name: string
  text: string
}

export interface NavLink {
  text: string
  section: string
}
