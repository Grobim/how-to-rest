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
        'Developpement',
        'Java/Javascript ♥♥♥',
        'Music player',
        'Video games'
      ]
    };

  setInterval(function() {
    details.age = moment().diff(moment([1988, 5, 21]))

    detailTarget.innerHTML = JSON.stringify(details, null, 2);
    hljs.highlightBlock(detailTarget);
  }, 500);

})();
