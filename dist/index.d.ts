export interface Log {
    name: string;
    tags?: string[];
    desc?: string;
    infos?: any;
}
export interface FullLog extends Log {
    type: string;
}
export default class YukkyLog {
    static appkey: string;
    static appsecret: string;
    static debug: boolean;
    static init: (appkey: string, appsecret: string, debug?: boolean) => void;
    static error: (data: Log) => Promise<void>;
    static warning: (data: Log) => Promise<void>;
    static info: (data: Log) => Promise<void>;
    static custom: (data: FullLog) => Promise<void>;
}
