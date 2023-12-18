import { VNode, h } from "snabbdom";
import Ctrl from "./ctrl";
import { chessground } from "./chessground";

//TODO refactor chessground/chessjs logic out of view. only have presentation code here, not config stuff

// function makeConfig(ctrl: Ctrl): Config {
// 	return {
//         coordinates: true,
//         events: {
//             move: ctrl.handleMove,
//         },
// 		movable: {
// 			color: "white",
// 			dests: toDests(chess),
// 		}
// 	};
// }

// const chessground = (ctrl: Ctrl): VNode => {
// 	return h("section.blue.merida", [
// 		h("div.cg-wrap", {
// 			hook: {
// 				insert: (vnode) => {
// 					const el = vnode.elm as HTMLElement;
// 					ctrl.chessground = Chessground(el, makeConfig(ctrl));
// 					ctrl.initializeCg();
// 				},
// 			},
// 		}),
// 	]);
// };

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
