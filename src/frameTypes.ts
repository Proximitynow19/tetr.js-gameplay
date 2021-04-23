export interface Targets {
  id: "diyusi";
  frame: number;
  type: "targets";
  data: string[];
}

export interface KeyEvent {
  key:
    | "hardDrop"
    | "softDrop"
    | "moveLeft"
    | "moveRight"
    | "rotateCW"
    | "rotateCCW";
  subframe: number;
  provisioned: number;
}

export interface InGameEvent {
  id: number;
  frame: number;
  type: "ige";
  data: {
    type: "attack";
    lines: number;
    column: number;
    sender: string;
    sent_frame: number;
  };
}
