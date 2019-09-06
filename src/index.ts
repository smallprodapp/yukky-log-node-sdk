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

  static init = (appkey: string, appsecret: string) => {
    YukkyLog.appkey = appkey;
    YukkyLog.appsecret = appsecret;
  };

  static error = async (data: Log) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        event: {
          name: data.name,
          tags: data.tags || [],
          type: 'error',
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      // DO nothing
    }
  };

  static warning = async (data: Log) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        event: {
          name: data.name,
          tags: data.tags || [],
          type: 'warning',
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      // DO nothing
    }
  };

  static info = async (data: Log) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        event: {
          name: data.name,
          tags: data.tags || [],
          type: 'info',
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      // DO nothing
    }
  };

  static custom = async (data: FullLog) => {
    try {
      const d = {
        appkey: YukkyLog.appkey,
        appsecret: YukkyLog.appsecret,
        event: {
          name: data.name,
          tags: data.tags || [],
          type: data.type,
          desc: data.desc || '',
          infos: data.infos || {},
        },
      };
      await request(d);
    } catch (err) {
      // DO nothing
    }
  };
}
