// select elements
const projects = Array.from(document.querySelectorAll(".project"));
const allProjectsBtn = document.querySelector(".all-projects");
const htmlCssProjectsBtn = document.querySelector(".static-projects");
const pythonProjectsBtn = document.querySelector(".py-projects");
const jsProjectsBtn = document.querySelector(".js-projects");

// functions
const displayAllProjects = (e) => {
  e.preventDefault();
  projects.forEach((project) => {
    if (project.classList.contains("animate")) {
      project.classList.remove("animate");
    }
    project.style.display = "flex";
  });
};
const filterStaticProjects = (e) => {
  e.preventDefault();
  projects.filter((project) => {
    if (!project.classList.contains("static")) {
      project.style.display = "none";
    } else {
      project.classList.remove("animate");
      project.style.display = "flex";
      project.classList.add("animate");
    }
  });
};
const filterJsProjects = (e) => {
  e.preventDefault();
  projects.filter((project) => {
    if (!project.classList.contains("js")) {
      project.style.display = "none";
    } else {
      project.style.display = "flex";
      project.classList.add("animate");
    }
  });
};

const filterPythonProjects = (e) => {
  e.preventDefault();
  projects.filter((project) => {
    if (!project.classList.contains("py")) {
      project.style.display = "none";
    } else {
      project.style.display = "flex";
      project.classList.add("animate");
    }
  });
};

// events
allProjectsBtn.addEventListener("click", displayAllProjects);
htmlCssProjectsBtn.addEventListener("click", filterStaticProjects);
pythonProjectsBtn.addEventListener("click", filterPythonProjects);
jsProjectsBtn.addEventListener("click", filterJsProjects);
