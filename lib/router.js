function route(pathname,render) {
  if(GLOBAL.logging)
    console.log("[INFO] Routing " + pathname);

  if(pathname == '/'){
    return render('index');
  }

  return render('error');
}
exports.route = route;
