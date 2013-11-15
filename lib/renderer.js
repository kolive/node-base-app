var jade = require('jade');


function render(jadeFile,options){
  var filePath = GLOBAL.jadeDir + "/" + jadeFile + GLOBAL.jadeExt;
  
  if(GLOBAL.logging)
    console.log("[INFO] Rendering " + jadeFile);

  return jade.renderFile(filePath,options);
}

exports.render = render;
