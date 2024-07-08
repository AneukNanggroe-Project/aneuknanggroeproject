const tabLinks = document.querySelectorAll('.nav-link');

tabLinks.forEach(function(tabLink) {
  tabLink.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('data-target');
    
    document.querySelectorAll('.content-tab').forEach(function(tabContent) {
      tabContent.classList.remove('active');
    });
    
    document.getElementById(targetId).classList.add('active');
    
    tabLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const skymodLinks = [
    { href: "https://drive.google.com/file/d/1tKH6MDRbqulYXWV-M0rySo36U4ASvXow/view?usp=drive_link", text: "sm-v5.1.2-20190318-Evo..." },
    { href: "https://drive.google.com/file/d/1eF-n3NDgAY2HqUYTFouIzRhCs3Lm4nKL/view?usp=sharing", text: "sm-v5.0.1-20180606-Evo..." },
    { href: "https://drive.google.com/file/d/1Rb4_6PXjebRgI6A-6tOSf6lihGviOyf9/view?usp=sharing", text: "sm-v4.0-20170623-Prime..." },
    { href: "https://drive.google.com/file/d/1Oti0VZZQb_uk6gB3oOO9MJeu717vfxwi/view?usp=sharing", text: "sm-v3.0-20170505-Unoffi..." },
    { href: "https://drive.google.com/file/d/1b9a3563UlZU4DBCLmHdyq2EzEaGklKVU/view?usp=drive_link", text: "sm-v2.0-20170401-Unoffi..." },
    { href: "https://drive.google.com/file/d/1sP3AG6SQz1IU18-NkqPAuIGWyJyaUXJ0/view?usp=drive_link", text: "sm-v1.0-20170318_Offi..." }
  ];

  const rentjongLinks = [
    { href: "https://drive.google.com/file/d/1JDleivNRKBcw_e2Z8GfBW0IRbcQMn7hu/view?usp=sharing", text: "RentjongOS_3.4.1 Beauti..." },
    { href: "https://drive.google.com/file/d/1B8TsXHm_ZsGlqsYDaOehmNItg6v5Tdwq/view?usp=sharing", text: "RentjongOS_2.3.1 Amaz..." },
    { href: "https://drive.google.com/file/d/1A42rhRfvHF8PgRSFf8tnuF7E7aMdCb7E/view?usp=sharing", text: "RentjongOS_1.2.1 Amaz..." }
  ];

  const skymodList = document.getElementById('skymod-list');
  const rentjongList = document.getElementById('rentjong-list');

  skymodLinks.forEach(link => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.target = '_blank';
    li.appendChild(a);
    skymodList.appendChild(li);
  });

  rentjongLinks.forEach(link => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.target = '_blank';
    li.appendChild(a);
    rentjongList.appendChild(li);
  });
});
