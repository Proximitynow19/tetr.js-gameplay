import { Targets, KeyEvent, InGameEvent } from "./frameTypes";

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

export default class Gameplay {}
