import https from 'https';

export interface Log {
  name: string;
  tags?: string[];
  desc?: string;
  infos?: any;
}

export interface FullLog extends Log {
  type: string;
}

const request = (d: any) =>
  new Promise((resolve, reject) => {
    const data = JSON.stringify(d);
    const options = {
      hostname: 'api.yukkyapp.com',
      port: 443,
      path: '/log',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };
    const req = https.request(options, (res: any) => {
      if (res.statusCode !== 200) {
        return reject(res.statusCode);
      }
      return resolve();
    });
    req.on('error', (err: any) => {
      return reject(err);
    });
    req.write(data);
    req.end();
  });

export default class YukkyLog {
  static appkey: string;
  static appsecret: string;
  static debug: boolean;

  static init = (appkey: string, appsecret: string, debug: boolean = false) => {
    YukkyLog.appkey = appkey;
    YukkyLog.appsecret = appsecret;
    YukkyLog.debug = debug;
  };

  static error = async (data: Log) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        log: {
          name: data.name,
          tags: data.tags || [],
          type: 'error',
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      if (YukkyLog.debug) {
        console.log(err);
      }
    }
  };

  static warning = async (data: Log) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        log: {
          name: data.name,
          tags: data.tags || [],
          type: 'warning',
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      if (YukkyLog.debug) {
        console.log(err);
      }
    }
  };

  static info = async (data: Log) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        log: {
          name: data.name,
          tags: data.tags || [],
          type: 'info',
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      if (YukkyLog.debug) {
        console.log(err);
      }
    }
  };

  static custom = async (data: FullLog) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        log: {
          name: data.name,
          tags: data.tags || [],
          type: data.type,
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      if (YukkyLog.debug) {
        console.log(err);
      }
    }
  };
}
