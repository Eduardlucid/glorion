export function initProjects() {

  const tabs = document.querySelectorAll(".projects-tab");

  if (!tabs.length) return;

  const track = document.querySelector("[data-project-track]");
  const title = document.querySelector("[data-project-title]");
  const role = document.querySelector("[data-project-role]");
  const scope = document.querySelector("[data-project-scope]");
  const responsibilities = document.querySelector("[data-project-responsibilities]");

  const previous = document.querySelector("[data-project-previous]");
  const next = document.querySelector("[data-project-next]");

  const projects = {

    canada: [

      {
        title: "BC Place Stadium",
        image: "",
        role: "Low-Voltage Technician",

        scope: [
          "Structured Cabling",
          "WiFi",
          "Fiber Optic",
          "Testing"
        ],

        responsibilities:
          "Performed technician duties as part of an established British Columbia electrical contractor’s project team."
      },

      {
        title: "BMO Oakridge",
        image: "",
        role: "Low-Voltage Technician",

        scope: [
          "Structured Cabling",
          "Testing",
          "Device Installation"
        ],

        responsibilities:
          "Performed assigned installation and testing duties as part of a professional project team."
      }

    ],

    israel: [

      {
        title: "Project Name",
        image: "",
        role: "Independent Low-Voltage Subcontractor",

        scope: [
          "Structured Cabling",
          "Fiber Optic",
          "Testing"
        ],

        responsibilities:
          "Performed low-voltage installation work as an independent subcontractor engaged through an established integration company."
      },

      {
        title: "Project Name",
        image: "",
        role: "Independent Low-Voltage Subcontractor",

        scope: [
          "WiFi",
          "CCTV",
          "Testing"
        ],

        responsibilities:
          "Performed assigned low-voltage work under an independent subcontracting arrangement."
      }

    ]

  };

  let region = "canada";
  let active = 0;

  function renderDetails(project) {

    title.textContent = project.title;

    role.textContent = project.role;

    responsibilities.textContent =
      project.responsibilities;

    scope.innerHTML = "";

    project.scope.forEach(item => {

      const li = document.createElement("li");

      li.textContent = item;

      scope.appendChild(li);

    });

  }

  function renderGallery() {

    track.innerHTML = "";

    projects[region].forEach((project, index) => {

      const button = document.createElement("button");

      button.className =
        "project-preview" +
        (index === active ? " is-active" : "");

      button.innerHTML = `

        <span class="project-preview-image">

          ${
            project.image
              ? `<img src="${project.image}" alt="${project.title}">`
              : `<span class="project-preview-image-placeholder">
                    Project Image
                 </span>`
          }

        </span>

        <span class="project-preview-title">

          ${project.title}

        </span>

      `;

      button.addEventListener("click", () => {

        active = index;

        renderGallery();

      });

      track.appendChild(button);

    });

    track.classList.add("has-selection");

    renderDetails(projects[region][active]);

  }

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      tabs.forEach(item =>
        item.classList.remove("is-active")
      );

      tab.classList.add("is-active");

      region = tab.dataset.projectRegion;

      active = 0;

      renderGallery();

    });

  });

  previous.addEventListener("click", () => {

    active--;

    if (active < 0) {

      active = projects[region].length - 1;

    }

    renderGallery();

  });

  next.addEventListener("click", () => {

    active++;

    if (active >= projects[region].length) {

      active = 0;

    }

    renderGallery();

  });

  renderGallery();

}