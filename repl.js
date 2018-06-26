buf= "";
repl= function () {
  if (buf) {
    postMessage(['show', buf]);
    buf= ""
  }
  setTimeout(repl, 100);
}

// vim: set sw=2 ts=2 sts=2:
