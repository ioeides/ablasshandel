
function init() {
  changeBusse();
}

var bussen = [
'expiration date aller pgp keys extenden',
'Windows updaten',
'Basteltisch aufräumen',
'...',
];

function changeBusse() {
  document.getElementById('busse').innerHTML = bussen[Math.floor(Math.random()*bussen.length)];
}


function createPDF() {
  if (window.confirm("Bitte bestätige mit [OK], dass du deine Buße getan hast.")) {
    window.print();
  }
  else {
    if (window.confirm("Du kannst deine Buße auch später erledigen. Falls du das tun möchtest, klicke [OK]")) {
      window.print();
    }
  }
}
