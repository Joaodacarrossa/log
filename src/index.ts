type LogType = 
    | "success"
    | "error"
    | "db"
    | "api"
    | "info"
    | "warn"
    | "debug"


const colors: Record<LogType, string> = {
    success: "\x1b[32m", //verde claro
    error: "\x1b[31m", //vermelho
    db: "\x1b[36m", //verde escuro
    api: "\x1b[36m", // ciano
    info: "\x1b[34m", // azul
    warn: "\x1b[33m", // amarelo
    debug: "\x1b[35m" // magenta
}

const prefixes: Record<LogType, string> = {
    success: "[V]",
    error: "[X]",
    db: "[DB]",
    api: "[API]",
    info: "[!]",
    warn: "[WARN]",
    debug: "[DEBUG]"
}

const reset: String = "\x1b[0m"

function getTime(){
    return new Date().toLocaleTimeString
}

function format(type: LogType, message:any): String{
    return `${colors[type]}${prefixes[type]} ${getTime()} ${message}${reset}`
}

export function success(msg: string){
    return console.log(format("success", msg))
}

export function error(msg: string){
    return console.log(format("error", msg))
}

export function db(msg: string){
    return console.log(format("db", msg))
}

export function api(msg: string){
    return console.log(format("api", msg))
}

export function info(msg: string){
    return console.log(format("info", msg))
}

export function warn(msg: string){
    return console.log(format("warn", msg))
}

export function debug(msg: string){
    return console.log(format("debug", msg))
}

export const log = {
    success: (msg:any) => console.log(format("success", msg)),
    error: (msg:any)  => console.log(format("error", msg)),
    db: (msg:any) => console.log(format("db", msg)),
    api: (msg:any) => console.log(format("api", msg)),
    info: (msg:any) => console.log(format("info", msg)),
    warn: (msg:any) => console.log(format("warn", msg)),
    debug: (msg:any) => console.log(format("debug", msg)),
}