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
  }
}

export class Game {}
