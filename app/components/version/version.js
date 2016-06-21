'use strict';

angular.module('octApp.version', [
  'octApp.version.interpolate-filter',
  'octApp.version.version-directive'
])

.value('version', '0.1');
