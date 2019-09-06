export interface Log {
  name: string;
  tags?: string[];
  desc?: string;
  infos?: any;
}

export interface FullLog extends Log {
  type: string;
}
