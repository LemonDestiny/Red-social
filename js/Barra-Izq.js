class BarraIzquierda {
  constructor() {
    this.sections = document.getElementById("sections");
  }

  createSection(icon, name) {
    const section = document.createElement("section");
    const title = document.createElement("p");
    const imgIcon = document.createElement("img");

    section.classList.add("section");
    imgIcon.classList.add("icon");
    imgIcon.src = icon;
    title.innerHTML = name;
    section.appendChild(imgIcon);
    section.appendChild(title);
    this.sections.appendChild(section);
    return section;
  }
  createSeeMore(icon, name) {
    const section = this.createSection(icon, name);
    const arrow = document.createElement("i");
    arrow.classList.add("fas", "fa-chevron-down", "arrow");
    section.appendChild(arrow);
  }
}

window.onload = (e) => {
  const barraIzquierda = new BarraIzquierda();
  const sections = [
    { icon: "./img/iconos/events.png", title: "Events" },
    { icon: "./img/iconos/saved.png", title: "Saved" },
    { icon: "./img/iconos/gaming.png", title: "Gaming" },
    { icon: "./img/iconos/fundraisers.png", title: "Fundraisers" },
    { icon: "./img/iconos/memories.png", title: "Memories" },
    { icon: "./img/iconos/saved.png", title: "Help & Support" },
    { icon: "./img/iconos/settings.png", title: "Settings & Privacy" },
  ];
  for (let { icon, title } of sections) {
    barraIzquierda.createSection(icon, title);
  }
  barraIzquierda.createSeeMore("./img/iconos/see.png", "See More");
};
