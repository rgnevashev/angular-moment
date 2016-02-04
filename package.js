Package.describe({
  name: 'rgnevashev:angular-moment',
  version: '0.10.3',
  summary: 'Moment.JS directives for Angular.JS (timeago and more)',
  git: 'https://github.com/urish/angular-moment',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles([
    "angular-moment.js"
  ], 'client');
});
