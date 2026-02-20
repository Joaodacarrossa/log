declare const log: {
    success: (msg: any) => void;
    error: (msg: any) => void;
    db: (msg: any) => void;
    api: (msg: any) => void;
    info: (msg: any) => void;
    warn: (msg: any) => void;
    debug: (msg: any) => void;
};

export { log };
