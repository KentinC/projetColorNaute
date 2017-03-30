var moon = document.getElementById('moon'),
  earth = document.getElementById('earth'),
  chrome = document.getElementById('chrome'),
  facebook = document.getElementById('facebook'),
  twitter = document.getElementById('twitter'),
  btnStartGame = document.getElementById('btn-start-game'),
  startPageContent = document.getElementById('start-page-content'),
  sponsor = document.getElementById('sponsor');


btnStartGame.onclick = function () {
  // ajouter la classe a la lune pour la faire bouger
  moon.classList.add('has-moved');

  // ajouter la classe a la terre pour la faire bouger
  earth.classList.add('has-moved');

  // ajouter la classe au logo chrome pour le faire bouger
  chrome.classList.add('has-moved');

  // ajouter la classe au texte de sponsor pour le faire bouger
  sponsor.classList.add('has-moved');

  // ajouter la classe au logo facebook pour le faire bouger
  facebook.classList.add('has-moved');

  // ajouter la classe au logo twitter pour le faire bouger
  twitter.classList.add('has-moved');

  // cacher le bloc principal avec les explication, bouton, logo
  startPageContent.classList.add('opacity0');

  setTimeout(function () {
    startPageContent.classList.add('hidden');
  }, 500);


};

// le reste de ton code du jeu