var server = require("./lib/server");
var router = require("./lib/router");
var renderer = require("./lib/renderer");


//setup globals
GLOBAL.appDir = __dirname;
GLOBAL.libDir = __dirname + "/lib";
GLOBAL.jadeDir = libDir + "/templates";
GLOBAL.jadeExt = ".jade";
GLOBAL.appName = "NODE-BASE-APP";


//process flags
function flagExists(pflag){
  for(i in process.argv){
    var flag = process.argv[i];
    if(flag == pflag) return true;
  }
  return false;
}

if(flagExists("-h") || flagExists("--help")){
 console.log("Welcome to" + GLOBAL.appName + ". Turn on logging with the -v (--verbose) flag.");
 return;
}

if(flagExists("-v") || flagExists("--verbose")){
  //verbose mode is on, set logging to true
  console.log("[STARTUP] RUNNING" + GLOBAL.appName + " IN VERBOSE MODE");
  GLOBAL.logging = true;
}else{
  GLOBAL.logging = false;
}

//start server
server.start(router.route, renderer.render);
