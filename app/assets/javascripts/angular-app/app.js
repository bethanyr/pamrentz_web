app = angular.module("AngularApp", ['angular-parallax'])

app.config([
  "$httpProvider", function(provider) {
    return provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);