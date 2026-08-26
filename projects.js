const projects = [
  // {
  //   src: "assets/img/projects/",
  //   description: "",
  //   tags: "",
  //   date: ""
  // },
  {
    src: "assets/img/projects/KittenOS.png",
    title: "KittenOS",
    description: "Simple WebOS. It features many apps including: music player, paint app, weather app and much more!",
    repo: "https://github.com/n0kira/KittenOS",
    demo: "https://n0kira.github.io/KittenOS/",
    languages: "HTML, CSS, JS",
  },
  {
    src: "assets/img/projects/Hackpad.png",
    title: "Nokira's Hackpad",
    description: "Simple macropad with 6 keys, 1 rotary encoder and an OLED Display. This is an open-case hackpad. You could say it was because I don't know how to build a case... maybe.",
    repo: "https://github.com/n0kira/NokirasHackpad",
    demo: "https://youtu.be/H9pZjf9lS04",
    languages: "C, KiCad",
  },
  {
    src: "assets/img/projects/TomType.png",
    title: "TomType",
    description: "A simple typing game inspired by MonkeyType. This was made just to improve my javascript skills",
    repo: "https://github.com/n0kira/TomType",
    demo: "https://n0kira.github.io/TomType/",
    languages: "HTML, CSS, JS",
  },
  {
    src: "assets/img/projects/MyLittleBlooms.webp",
    title: "My Little Blooms",
    description: "A little gardening game built with Phaser. Plant seeds, water them to keep them healthy and watch them grow until ready to be harvested. Try to not drown or wither your plants!",
    repo: "https://github.com/n0kira/MyLittleBlooms",
    demo: "https://n0kira.github.io/MyLittleBlooms/",
    languages: "HTML, CSS, JS",
  },
  {
    src: "assets/img/projects/TomatoWare.webp",
    title: "TomatoWare",
    description: "Stupid game made with Godot. First time using it and to be honest, not a fan of it... Just try to collect all the tomatoes",
    repo: "https://github.com/n0kira/TomatoWare",
    demo: "https://n0kira.itch.io/tomatoware",
    languages: "Godot",
  },
  {
    src: "assets/img/projects/Maintab.webp",
    title: "MainTab",
    description: "MainTab is my own New Tab page. It's built using HTML, CSS and JavaScript using some APIs (see in the repo). I decided to build it like this because it has everything I would want from a New Tab page.",
    repo: "https://github.com/n0kira/MainTab",
    demo: "https://n0kira.github.io/MainTab/",
    languages: "HTML, CSS, JS",
  },
  {
    src: "assets/img/projects/TheLazyOne.jpg",
    title: "TheLazyOne",
    description: "Slack Bot was made totally with Node.js. It features some basic commands and also some API commands. See them all in the repo",
    repo: "https://github.com/n0kira/TheLazyOne",
    demo: "",
    languages: "Node.js",
  },
  {
    src: "assets/img/projects/Terry.png",
    title: "C++ Competitions",
    description: "Not really a project, but some C++ code used to practice for the OII and OIS competitions, visit repo for more info.",
    repo: "https://github.com/n0kira/terry-oli",
    demo: "",
    languages: "C++",
  },
];

const projectsGallery = document.querySelector(`.projects`);

function renderGallery() {
  projectsGallery.innerHTML = '';

  projects.forEach(project => {
    const item = document.createElement('div');
    item.className = "projects-item";
    item.innerHTML = `
      <img src="${project.src}" alt="${project.description}" class="projects-picture" decoding="async" loading="lazy">
      <div class="projects-details">
        <div>
          <div class="projects-title">${project.title}</div>
          <div class="projects-description">${project.description}</div>
        </div>
        <div class="projects-resources">
          <a href="${project.repo}">Repo</a>
          - 
          <a href="${project.demo}">Demo</a>
        </div>
        <div class="projects-languages">${project.languages}</div>
      </div>
    `;

    projectsGallery.appendChild(item);
  });
}


renderGallery();
