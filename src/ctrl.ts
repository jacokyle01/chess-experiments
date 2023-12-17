import { Api } from "chessground/api";
import { Redraw } from "./interfaces";

export default class Ctrl {
    
    chessground: Api = null;

    constructor(readonly redraw: Redraw) {

	}

}
