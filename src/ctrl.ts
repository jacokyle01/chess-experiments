import { Api } from "chessground/api";
import { Redraw } from "./interfaces";
import { Chess} from "chess.js";
import { Color, Key} from "chessground/types";
import { Chessground } from "chessground";
import { toColor } from "./util";

export default class Ctrl {
	oriented: Color;
	chessground: Api | undefined;
	coordinates: boolean;
	chess: Chess = new Chess();
	constructor(readonly redraw: Redraw) {}

	initializeCg = () => {
        console.log("initialized")
		this.chessground.set({
			movable: {
				events: { after: this.playOtherSide(this.chessground, this.chess) },
			},
		});
	};

	playOtherSide = (cg: Api, chess: Chess) => {
		return (orig: Key, dest: Key) => {
            console.log(chess.ascii());
			chess.move({from: orig, to: dest});
            cg.set({
                turnColor: toColor(chess),
                movable: {
                  color: toColor(chess),
                }
              });
		};
	};

	flip = () => {
		this.oriented = this.oriented == "white" ? "black" : "white";
		this.chessground?.set({ orientation: this.oriented });
		this.redraw();
	};

	fen = (): string => {
		return this.chessground?.getFen();
	};

	handleMove = () => {
		this.redraw();
		//simple for now
	};
}
