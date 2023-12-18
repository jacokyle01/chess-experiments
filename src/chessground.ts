import { VNode, h } from "snabbdom";
import Ctrl from "./ctrl";
import { Chessground } from "chessground";
import { toDests } from "./util";
import { Config } from "chessground/config";


function makeConfig(ctrl: Ctrl): Config {
    const chess = ctrl.chess; //store chess state in ctrl
	const config: Config = {
        coordinates: true,
        events: {
            move: ctrl.handleMove,
        },
		movable: {
			color: "white",
			dests: toDests(chess),
            free: false
		},

	};
    return config;
}

export const chessground = (ctrl: Ctrl): VNode => {
	return h("section.blue.merida", [
		h("div.cg-wrap", {
			hook: {
				insert: (vnode) => {
					const el = vnode.elm as HTMLElement;
					ctrl.chessground = Chessground(el, makeConfig(ctrl));
					ctrl.initializeCg();
				},
			},
		}),
	]);
};