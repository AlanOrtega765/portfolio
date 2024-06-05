import { Icons, type NavLink, type Project } from '~/types.d'

export const navLinks: NavLink[] = [
  { text: 'Inicio', section: 'home' },
  { text: 'Sobre mí', section: 'about' },
  { text: 'Habilidades', section: 'skills' },
  { text: 'Proyectos', section: 'projects' },
  { text: 'Contacto', section: 'contact' },
]

export const projects: Project[] = [
  {
    id: 1,
    name: 'Movies Hub',
    description:
      'La aplicación Movies Hub es una herramienta intuitiva y completa para los amantes del cine y las series. Utilizando la API de TheMovieDB, ofrece una amplia base de datos con detalles actualizados sobre películas y series de televisión. Los usuarios pueden buscar información sobre sus títulos favoritos, incluyendo sinopsis, elencos, tráilers, reseñas y puntuaciones.',
    image: '/img/projects/project-1.webp',
    url: 'https://movies-hub-nuxt.netlify.app/',
    icons: [Icons.Nuxt, Icons.Typescript, Icons.Tailwind],
  },
  {
    id: 2,
    name: 'Tic Tac Toe',
    description:
      'Disfruta del clásico juego de Tic Tac Toe. Juega contra la computadora o reta a tus amigos en modo multijugador local. Con una interfaz simple y atractiva, es perfecto para todas las edades. ¡Empieza a jugar y demuestra tu estrategia!',
    image: '/img/projects/project-2.webp',
    url: 'https://tic-tac-toe-nuxt.netlify.app',
    icons: [Icons.Nuxt, Icons.Typescript, Icons.Tailwind],
  },
  {
    id: 3,
    name: 'Appolly',
    description:
      'Descubre Appolly, la app móvil diseñada para ayudarte a tomar el control de tus finanzas. Con Appolly, puedes gestionar tus ingresos, gastos, ahorros e inversiones desde una sola plataforma intuitiva. Simplifica tus finanzas y toma decisiones informadas con nuestras herramientas avanzadas y fáciles de usar.',
    image: '/img/projects/project-3.webp',
    url: 'https://appolly-app.netlify.app/',
    icons: [Icons.Vue, Icons.Javascript, Icons.Tailwind],
  },
  {
    id: 4,
    name: 'Jadoo',
    description:
      'Bienvenido a Jadoo, que transforma la forma en que descubres y planeas tus viajes. Con Jadoo, puedes explorar destinos increíbles, encontrar las mejores ofertas y planificar cada detalle de tus aventuras desde una sola plataforma. Ya sea que busques una escapada de fin de semana o el viaje de tus sueños, Jadoo te tiene cubierto.',
    image: '/img/projects/project-4.webp',
    url: 'https://jadoo-nuxt.netlify.app/',
    icons: [Icons.Nuxt, Icons.Javascript, Icons.Tailwind],
  },
  {
    id: 5,
    name: 'Brainwave',
    description:
      'Bienvenido a Brainwave, la app de chat con inteligencia artificial que transforma la forma en que obtienes respuestas y asistencia. Con Brainwave, tienes un asistente personal disponible para ayudarte con tareas diarias, responder preguntas complejas y ofrecerte consejos personalizados. Simplifica tu vida y mejora tu productividad con nuestras conversaciones inteligentes y soluciones instantáneas.',
    image: '/img/projects/project-5.webp',
    url: 'https://react-brainwave-landing.vercel.app/',
    icons: [Icons.React, Icons.Javascript, Icons.Tailwind],
  },
  {
    id: 6,
    name: 'Google Translate Clone',
    description:
      'Bienvenido a la app de traducción que lleva tus habilidades lingüísticas al siguiente nivel. Utilizando la poderosa API de DeepL, ofrece traducciones precisas y naturales en cuestión de segundos. Ya sea para viajes, estudios o trabajo.',
    image: '/img/projects/project-6.webp',
    url: 'https://google-translate-clone-flame.vercel.app/',
    icons: [Icons.React, Icons.Javascript, Icons.Tailwind, Icons.DeepL],
  },
  {
    id: 7,
    name: 'Todo App',
    description:
      'Bienvenido a la app definitiva para gestionar tus tareas diarias y proyectos. Diseñada para ayudarte a mantenerte organizado y productivo, te permite crear, seguir y completar tus tareas con facilidad. Ya sea que estés planeando tu día a día o gestionando un gran proyecto.',
    image: '/img/projects/project-7.webp',
    url: 'https://todo-app-react-inky.vercel.app/',
    icons: [Icons.React, Icons.Typescript],
  },
]
