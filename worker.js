importScripts('repl.js');
onmessage= function (e) {
  if (e.data[0] == "repl") {repl();}
  else if (e.data[0] == "put") {
    buf= e.data[1];
  }
}

// vim: set sw=2 ts=2 sts=2:
