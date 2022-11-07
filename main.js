const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  let percorso = './img/';


  for (let i = 0; i < team.lenght; i++) {

    let elementoCorrente = team[i];
    console.log(elementoCorrente.name);

    document.getElementById('carta').innerHTML +=

    `
    <div class="foto">
            <img src="${percorso + elementoCorrente.image}" alt="">
        </div>
        <div class="mt-3">
            <div class="fs-4 fw-semibold text-center">
                ${elementoCorrente.name}
            </div>
            <div class="text-center">
                ${elementoCorrente.role}
            </div>
        </div>
    `


  }