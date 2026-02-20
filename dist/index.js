// src/index.ts
var colors = {
  success: "\x1B[32m",
  //verde claro
  error: "\x1B[31m",
  //vermelho
  db: "\x1B[36m",
  //verde escuro
  api: "\x1B[36m",
  // ciano
  info: "\x1B[34m",
  // azul
  warn: "\x1B[33m",
  // amarelo
  debug: "\x1B[35m"
  // magenta
};
var prefixes = {
  success: "[V]",
  error: "[X]",
  db: "[DB]",
  api: "[API]",
  info: "[!]",
  warn: "[WARN]",
  debug: "[DEBUG]"
};
var reset = "\x1B[0m";
function getTime() {
  return (/* @__PURE__ */ new Date()).toLocaleTimeString;
}
function format(type, message) {
  return `${colors[type]}${prefixes[type]} ${getTime()} ${message}${reset}`;
}
var log = {
  success: (msg) => console.log(format("success", msg)),
  error: (msg) => console.log(format("error", msg)),
  db: (msg) => console.log(format("db", msg)),
  api: (msg) => console.log(format("api", msg)),
  info: (msg) => console.log(format("info", msg)),
  warn: (msg) => console.log(format("warn", msg)),
  debug: (msg) => console.log(format("debug", msg))
};
export {
  log
};
