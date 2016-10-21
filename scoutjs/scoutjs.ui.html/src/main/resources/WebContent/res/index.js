$(document).ready(function() {
  var app = new scoutjs.App();
  app.init({
    bootstrap: {
      fonts: ['scoutIcons'],
      modelsUrl: 'res/application-all-macro.json'
    }
  });
});
