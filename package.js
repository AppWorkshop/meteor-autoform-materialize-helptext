Package.describe({
  name: 'appworkshop:autoform-materialize-helptext',
  version: '2.0.2',
  // Brief, one-line summary of the package.
  summary: 'Adds help text to mozfet:autoform-materialize',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/appworkshop/meteor-autoform-materialize-helptext',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('ecmascript@0.16.10');
  api.use([
    'templating@1.4.2',
    'dm:template-extension@4.1.1'
  ], ['client']);
  api.use([
    'aldeed:autoform@5.8.1||6.0.0||7.0.0',
    'mozfet:autoform-materialize@0.0.26||1.0.0||2.0.0||3.0.0||4.0.0||5.0.0',
  ], ['client'], {weak: true}); // dependencies can't be resolved unless we use weak: true
  api.addFiles([
    'afFormGroup_materialize_withHelp.html',
    'afFormGroup_materialize_withHelp.js'
  ], ['client']);
});

