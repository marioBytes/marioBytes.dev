import devfinder from '../images/projects/devfinder.png';
import passwordGenerator from '../images/projects/password-generator.jpg';

const projects = [
  {
    id: 2,
    name: 'Password Generator',
    imgSource: passwordGenerator,
    description:
      "This application elegantly crafts passwords, tailored to user-defined criteria, and offers the convenience of clipboard copying for the generated passwords. It features a password strength indicator, ensuring users can gauge their password's robustness at a glance. Designed with responsiveness in mind, the app's interface seamlessly adapts to the size of the user's device, providing an optimal user experience. Underpinning this sophisticated functionality is a blend of Angular and TailwindCSS, chosen for their flexibility and efficiency in building dynamic, responsive web applications.",
    links: [
      {
        id: 1,
        source: 'Github',
        link: 'https://github.com/marioBytes/password-generator-app',
      },
      {
        id: 2,
        source: 'Live Site',
        link: 'https://password-generator-app-sage.vercel.app/',
      },
    ],
  },
  {
    id: 1,
    name: 'devfinder',
    imgSource: devfinder,
    description:
      'This application facilitates the search for GitHub users utilizing their open API. It features a user interface that automatically switches between light and dark modes based on the system settings of the user. Developed with React, the app also incorporates additional libraries such as Axios for handling fetch requests and React Loading Skeleton to enhance the loading screen experience.',
    links: [{ id: 1, source: 'Github', link: 'https://github.com/marioBytes/github-user-search-app' }],
  },
];

export default projects;
