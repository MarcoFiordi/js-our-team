'use strict'
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

const teamContainer = document.querySelector('#team-container');

for (let i = 0; i < teamMembers.length; i++){
  const currentMember = teamMembers[i];
  const card = `
  <div class= "card">
    <img src = "${currentMember.img}" alt="${currentMember.name}">
    <div class="card-body">
      <h3>${currentMember.name}</h3>
      <p class="role">${currentMember.role}</p>
      <a href="mailto:${currentMember.email}">${currentMember.email}</a>
    </div>
  </div>
  `;
  teamContainer.innerHTML += card;

}

