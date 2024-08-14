import "./dotoo.css";

import tippy, { inlinePositioning } from "tippy.js";
import "tippy.js/dist/tippy.css";

document.addEventListener("DOMContentLoaded", function () {
  tippy(".dotoo", {
    interactive: true,
    inlinePositioning: true,
    plugins: [inlinePositioning],
    content: (reference) => reference.dataset.bladeDotooLabel,
  });
});
