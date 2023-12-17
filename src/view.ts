import { VNode, h } from "snabbdom";
import Ctrl from "./ctrl";
import { Chessground } from "chessground";
import { Config } from "chessground/config";

const config: Config = {
    "orientation": "black",
    
};

const chessground = (ctrl: Ctrl): VNode => {
	return h("section.blue.merida", [
		h("div.cg-wrap", {
			hook: {
				insert: (vnode) => {
					const el = vnode.elm as HTMLElement;
					ctrl.chessground = Chessground(el, config);
				},
			},
		}),
	]);
};

const view = (ctrl: Ctrl) => {
	return h("div", chessground(ctrl));
};

export default view;
