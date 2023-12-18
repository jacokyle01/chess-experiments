import { VNode, h } from "snabbdom";
import Ctrl from "./ctrl";
import { Chessground } from "chessground";
import { Config } from "chessground/config";

function makeConfig(ctrl: Ctrl): Config {
	return {
        coordinates: true,
        events: {
            move: ctrl.handleMove
        }
	};
}

const chessground = (ctrl: Ctrl): VNode => {
	return h("section.blue.merida", [
		h("div.cg-wrap", {
			hook: {
				insert: (vnode) => {
					const el = vnode.elm as HTMLElement;
					ctrl.chessground = Chessground(el, makeConfig(ctrl));
				},
			},
		}),
	]);
};

const flip = (ctrl: Ctrl): VNode => {
	return h(
		"h1#flip",
		{
			on: { click: () => ctrl.flip() },
		},
		"Flip"
	);
};

const fen = (ctrl: Ctrl): VNode => {
    return h(
        "h2#fen", ctrl.fen()
    )
}

const view = (ctrl: Ctrl) => {
	return h("div#main-wrap", [
		h("div", chessground(ctrl)),
		flip(ctrl),
        fen(ctrl)
	]);
};

export default view;
