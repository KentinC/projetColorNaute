let moon = document.getElementById('moon'),
    earth = document.getElementById('earth'),
    chrome = document.getElementById('chrome'),
    facebook = document.getElementById('facebook'),
    twitter = document.getElementById('twitter'),
    btnStartGame = document.getElementById('btn-start-game'),
    startPageContent = document.getElementById('start-page-content'),
    sponsor = document.getElementById('sponsor');


btnStartGame.onclick = function () {
  // Add moon class to make it move
  moon.classList.add('has-moved');

  // Add earth class to make it move
  earth.classList.add('has-moved');

  // Add chrome class to make logo move
  chrome.classList.add('has-moved');

  // Add Sponsor text class to make it move
  sponsor.classList.add('has-moved');

  // Add Facebook class to make logo move
  facebook.classList.add('has-moved');

  // Add twitter class to make logo move
  twitter.classList.add('has-moved');

  // Hide elements
  startPageContent.classList.add('opacity0');

  setTimeout(function () {
    startPageContent.classList.add('hidden');
  }, 500);


};
