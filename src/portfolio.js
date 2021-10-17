/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shahrukh Anwar",
  title: "Hi all, I'm Shahrukh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having expertise in building Web applications with Vuejs, Laravel, Lumen, Javascript, PHP, Bulma, Tailwind, Bootstrap, HTML, CSS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lsDu6mej3yOFZoDdob5crX9bUCdo_u2m/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shahrukh4",
  linkedin: "https://www.linkedin.com/in/shahrukh-anwar-912233132",
  gmail: "shahrukhanwar2013@gmail.com",
  gitlab: "https://gitlab.com/shahrukh58",
  facebook: "https://www.facebook.com/shahrukh.anwar.58",
  medium: "https://medium.com/@shahrukhanwar2013",
  stackoverflow: "https://stackoverflow.com/users/8473036/shahrukh-anwar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Expertise in Laravel and Vue js development with 4.5 years of total experience and 3 years of Remote experience."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Vue JS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Krishna Engineering College",
      logo: require("./assets/images/kec.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2013 - May 2017",
      desc: "One of the toppers in Computer Science department, learned a lot and attended various technical and cultural events",
      descBullets: [
        "Passed out with 80% marks through having a degree in A.P.J Abdul Kalam Technical University"
      ]
    },
    {
      schoolName: "Colonelganj Inter College",
      logo: require("./assets/images/cic.jpg"),
      subHeader: "Higher Secondary",
      duration: "July 2010 - May 2012",
      desc: "Colonelganj Inter College focuses on the all round development of the students and the willful efforts of the teachers to make new methods of teaching & to make their participation in various activities & their participation is sure in various kinds of workshops & seminars.",
      descBullets: [
        "Passed out with 72% marks through having a degree with Uttar Pradesh Education Board"
      ]
    },
    {
      schoolName: "Colonelganj Inter College",
      logo: require("./assets/images/cic.jpg"),
      subHeader: "High School",
      duration: "July 2009 - May 2010",
      desc: "Colonelganj Inter College aims at providing quality education to the students & to make them good citizens also. They strongly believe that students are the most important asset for building a nation. ",
      descBullets: [
        "Passed out with 70% marks through having a degree with Uttar Pradesh Education Board"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Vuejs",
      progressPercentage: "90%"
    },
    {
      Stack: "Laravel",
      progressPercentage: "85%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "80%"
    },
    {
      Stack: "PHP",
      progressPercentage: "70%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Git",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Vinove",
      companylogo: require("./assets/images/logo/vinove.png"),
      date: "Sept 2019 – Current",
      desc: "A high-spirited startup where I am working as a Full Stack Developer and get my hands dirty with Laravel and Vuejs with some kick of ElasticSearch and various other technologies to give my contribution in the Microservices architecture of my projects.",
      descBullets: [
        "Working as a full time Full Stack Developer.",
        "Worked on Vuejs, Laravel, Symfony, Nodejs and various other technologies.",
        "Having working experience of Remote environment."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Sparx IT",
      companylogo: require("./assets/images/logo/sparx.png"),
      date: "Mar 2019 – Sept 2019",
      desc: "A good startup to work with, I worked on Laravel, Node.js, Vuejs, Jquery and similar technologies here. Developed and worked with a great team to build some very interesting products with a very collaborative team and management.",
      descBullets: [
        "Worked as a full time Full Stack Developer.",
        "Had a great time with my collegues, management and great learning opportunities.",
        "Had working experience of Remote environment."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "HestaBit",
      companylogo: require("./assets/images/logo/hb.jpg"),
      date: "July 2017 – Feb 2019",
      desc: "Worked as a Backend Developer initially here. Learned and grew with HestaBit for 2 years. Worked on Laravel, Vuejs, Node.js, Symfony, and various interesting technologies in HestaBit.",
      descBullets: [
        "Worked as a full time Full Stack Developer.",
        "Worked on various products for development of their APIs and Web App",
        "Learned a lot and find some great collegues there. Great management and people to work with."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Recent Projects",
  subtitle: "Some of my recent projects that I worked on in association with HestaBit and Vinove.",
  projects: [
    {
      image: require("./assets/images/logo/hp.png"),
      projectName: "Hellopeter",
      projectDesc: "Hellopeter.com is South Africa's leading consumer advocacy and corporate reputation management website and has become one of the biggest customer service sites in the world.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://hellopeter.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo/vm.png"),
      projectName: "Votemix",
      projectDesc: "Social network for music lovers, artists, bands, musicians and more! Connect with fans, discover new music, and share the music you love with your friends.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://votemix.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@shahrukhanwar2013/laravel-version-6-0-is-coming-e7cc2885781d",
      title: "Laravel Version 6.0 is coming",
      description: "Brief introduction of what's in store for us in the brand new Laravel 6"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  location: 'Allahabad, India',
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7503504678",
  email_address: "shahrukhanwar2013@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
