System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "*": "js/*",
    "js": "js",
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "/js": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "ionic": "github:driftyco/ionic-bower@1.2.0",
    "typescript": "npm:typescript@1.7.5",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-animate@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-sanitize@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:driftyco/ionic-bower@1.2.0": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-animate": "github:angular/bower-angular-animate@1.4.8",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.8",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
