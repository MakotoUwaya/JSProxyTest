export interface Iuser {
  name: string;
  age: number;
  birthday: timestamp;
  work: work;
}

export interface timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface work {
  name: string;
  post: string;
}
