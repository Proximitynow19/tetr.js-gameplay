import { Targets, KeyEvent, InGameEvent } from "./frameTypes";

import EventEmitter from "events";
import { Client } from "tetr.js";

export declare interface FramesClient {
  frame: number;
  type: "start" | "targets" | "keydown" | "keyup";
  data: Targets | KeyEvent | {};
}

export declare interface FramesServer {
  frame: number;
  type: "keydown" | "keyup" | "ige";
  data: KeyEvent | InGameEvent | {};
}

export declare interface SendReplay {
  command: "replay";
  data: {
    listenID: string;
    frames: FramesClient[] | [];
  };
}

export declare interface RecieveReplay {
  command: "replay";
  data: {
    listenID: string;
    frames: FramesServer[] | [];
  };
}

export declare interface GameplayClient {}

export class GameplayClient extends EventEmitter {
  public constructor(private client: Client) {
    super();

    //@ts-ignore
    client.on("readymulti", (data: any) => this.readymulti(data));
  }

  async readymulti(data: {
    options: {
      countdown: boolean;
      countdown_count: number;
      countdown_interval: number;
      precountdown: number;
      prestart: number;
    };
  }) {
    const options = data.options;
    let awaitStart: number = options.precountdown + options.prestart;

    options.countdown
      ? (awaitStart += options.countdown_count * options.countdown_interval)
      : undefined;

    setTimeout(() => {
      new Game();
    }, awaitStart);
  }
}

export class Game {
  public constructor() {}
}
