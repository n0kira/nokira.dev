const latestProjectContainer = document.querySelector(`.latest-project`);
const latestProject = document.querySelector(`.project`);
function renderLatest() {
  latestProject.innerHTML = "";
  let project = projects[0]
  const item = document.createElement('div');
  item.className = "latest-project-item";
  item.innerHTML = `
    <img src="${project.src}" alt="${project.description}" class="latest-project-picture" decoding="async" loading="lazy">
    <div class="latest-project-details">
      <div>
        <div class="latest-project-title">${project.title}</div>
        <div class="latest-project-description">${project.description}</div>
      </div>
      <div class="latest-project-resources">
        <a href="${project.repo}">Repo</a>
        - 
        <a href="${project.demo}">Demo</a>
      </div>
      <div class="latest-project-languages">${project.languages}</div>
    </div>
  `;

  latestProject.appendChild(item);
}

renderLatest();
