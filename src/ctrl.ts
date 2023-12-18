import { Api } from "chessground/api";
import { Redraw } from "./interfaces";

export default class Ctrl {
    
    color: "white" | "black";
    chessground: Api | undefined;
    coordinates: boolean;

    constructor(readonly redraw: Redraw) {

	}

    flip = () => {
        this.color = (this.color == "white" ? "black" : "white");
        this.chessground.set({orientation: this.color})
        this.redraw();
    }
}
