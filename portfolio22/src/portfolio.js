const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://danielledasilva.netlify.app/',
  title: 'Always Learning',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Danni Da Silva',
  role: 'Software Developer',
  description:
    'An aspiring fullstack developer, intent on being a fully adaptable engineer with an "Always learning" mindset.',
  resume: 'https://drive.google.com/file/d/16PzpmQ3_37m_0Xt33m8gawtTKgEiUG5N/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/danielle-da-silva-baab0289/',
    github: 'https://github.com/Nyxerian?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Smooth Movie search, watchlist and favouriting app. Searches through movies via The Move Database (TMDB) and displays on cards. Clicking on the card title expands a modal with plot overview of the movie and the official rating of the movie displayed in stars.',
    stack: ['React','|', 'Styled-Components', '|', 'Bootstrap'],
    sourceCode: 'https://github.com/Nyxerian/movieapp',
    livePreview: 'https://nyxerian.github.io/movieapp/',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React.js', '', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React.js',
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'Angular',
  'TypeScript',
  'Material UI',
  'Bootstrap',
  'Styled Components',
  'Git',
  'Node.js',
  'Python',
  'SQL',
  'UI/UX Design',
  'Azure DevOps'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'DanielleNyxDaSilva@gmail.com',
}

export { header, about, projects, skills, contact }
