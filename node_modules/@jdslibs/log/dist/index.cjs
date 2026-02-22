"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  log: () => log
});
module.exports = __toCommonJS(index_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  log
});
