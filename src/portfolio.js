/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "dxpeshpatxl",
  title: "Hi all, I'm Dipesh Patil",
  subTitle: emoji(
    "Skilled Fullstack Developer with a demonstrated history of working with MERN Stack with React-Redux, NodeJS, MongoDB and MySQL. Strong Engineering Professional with a Bachelor's Degree focused in Computer Engineering from University of Mumbai."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1S1tTvU910bdocbg9D7EquDe_KMnLzoV5/view?usp=share_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dipeshpatil",
  linkedin: "https://www.linkedin.com/in/dipesh-patil/",
  gmail: "dipeshpatil.contact@gmail.com",
  medium: "https://medium.com/@thedipeshpatil",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Skilled in MERN Stack + (SQL and No SQL) Based Databases"),
    emoji("⚡ Integration of third party services such as AWS"),
    emoji("⚡ Familiar In - JavaScript, Ruby, C++, Java")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Mumbai",
      // logo: "https://i.ibb.co/f0Bnjnb/logo.jpg",
      subHeader: "Bachelor Of Engineering, Computer Engineering",
      duration: "2016 - 2020",
      desc: "Secured A CGPA Of 7.02/10.0",
      descBullets: [
        "Secured 10.0 CGPA in SEM 8",
        "Conducted Android Development and Web Animation Workshops for College",
        "Head Of Dept for Website Committee in College Fest, 2019"
      ]
    },
    {
      schoolName: "Nirmala Memorial Foundation College of Commerce & Science",
      // logo: "https://i.ibb.co/f0Bnjnb/logo.jpg",
      subHeader: "HSC, Computer Science",
      duration: "2014 - 2016",
      desc: "Secured Aggregate 77%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "BrowserStack",
      companylogo: "https://i.ibb.co/f8Qw6dT/bs.png",
      date: "Apr 2021 - Present",
      // desc: "Contributing at Mobile Devices Team to add a new Device to BrowserStack’s Device Farm.",
      descBullets: [
        "Migrated existing Ruby framework to JavaScript based NightwatchJS Automation Framework. Used Jenkins as CI/CD pipeline for continuous code shipping and automated several jobs to reduce manual effort, used Docker for Containerization and code shipping.",
        "Implemented Parallel Execution of tests on Multiple Devices using concurrency, Integrated in existing WDIO Framework and thereby reduced queuing of tests and execution time by 80%. Implemented a safe-lock mechanism which prevented resources from accessing common file at the same time which reduced read-write file errors in concurrent environment.",
        "Enhanced Test Reporting Dashboard by implementing new features using React and NodeJS to overall improve productivity in analysing test cases and failures in graphical & pictorial way which reduced manual effort by 40%.",
        "Participated actively in code reviews and took logical and analytical decisions. Worked closely with team to achieve OKRs and onboarded new joinees."
      ]
    },
    {
      role: "Graduate Trainee - Associate Software Engineer",
      company: "Jio",
      companylogo:
        "https://i.ibb.co/XS737zY/jio-logo-7720-D2-E7-BA-seeklogo-com.png",
      date: "Nov 2020 - Apr 2021",
      // desc: "Department of Automation Testing",
      descBullets: [
        "Worked on various tools and technologies like ReactJS and NodeJS and developed internal tools like Reporting Dashboard and Management Systems.",
        "Worked on various frameworks which consisted of Automation Scripts of Selenium and Appium and used Java as primary language for scripting.",
        "Worked with Android Team in building JioTube using technologies like React Native, Redux, Expo, NodeJS, ExpressJS and MongoDB."
      ]
    },
    {
      role: "Junior Developer - Intern",
      company: "Imprimo",
      companylogo: "https://i.ibb.co/r4pGZm4/imprimo-2dc135c0.png",
      date: "Apr 2019 - Sep 2019",
      desc: "Developed the website for Imprimo, A Subsidiary of Ricoh India.",
      descBullets: [
        "Worked on Landing Page, Products Page, Booking Demos & Services, Admin Panel.",
        "Used LAMP Stack since it was a normal CMS website.",
        "Also used AJAX for dynamic content rendering.",
        "Included Meta information for SEO to recognize.",
        "Also designed the logo for the company and handled creatives under Dept of Marketing."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      subtitle: "Issued Nov 2022 · No Expiration Date",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-a4e415ea-492e-4a7d-99d2-90f60c403f0e.jpg?v=1667644589000",
      imageAlt: "MERN Stack Front To Back Certificate",
      showImage: true,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a4e415ea-492e-4a7d-99d2-90f60c403f0e/"
        }
      ]
    },
    {
      title: "Getting Started with Go",
      subtitle: "Issued Jun 2020 · No Expiration Date",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XLNXJXXSLCS6/CERTIFICATE_LANDING_PAGE~XLNXJXXSLCS6.jpeg",
      imageAlt: "Getting Started with Go Certificate",
      showImage: true,
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/a2d322e45647f8402a1a389de0ef25db"
        }
      ]
    }
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Some of the best blogs that I have came across",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@wijithbandara/best-practices-in-coding-9b9ffbdbfe27",
      title: "Best Practices in Coding",
      description:
        "This article will detail the most important best practices when writing readable code."
    },
    {
      url: "https://blog.logrocket.com/creating-offline-first-react-native-app/",
      title: "Creating an offline-first React Native app",
      description: "Five ways to implement an offline-first app in React Native"
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
      title: "HOD of Website Committee for Spandan 2019",
      subtitle: "Xavier Institute Of Engineering"
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Resource Person - Android Workshop",
      subtitle: "Xavier Institute Of Engineering"
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
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
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-835-6906-995",
  email_address: "dipeshpatil.contact@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
