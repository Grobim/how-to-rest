(function() {
  'use strict';

  var detailTarget = document.getElementById('detailsTarget'),
    details = {
      nom : 'Nicolas',
      prenom : 'CHALET',
      company : 'Extia',
      currentClient : 'Natixis',
      profession : 'Full-Stack software engineer',
      centerOfInterests : [
        'Web developpement',
        'Java/Javascript ♥♥♥',
        'Music player',
        'Video games'
      ]
    };

  document.body.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    Reveal.next();
    return false;
  });

  setInterval(function() {
    details.age = moment().diff(moment([1988, 5, 21]).hour(5).minute(20));

    detailTarget.innerHTML = JSON.stringify(details, null, 2);
    hljs.highlightBlock(detailTarget);
  }, 500);

})();
