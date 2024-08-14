import "./dotoo.css";

import tippy, { inlinePositioning } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";

document.addEventListener("DOMContentLoaded", function () {
  tippy(".dotoo", {
    theme: "translucent",
    inlinePositioning: true,
    plugins: [inlinePositioning],
    content: (reference) => reference.dataset.todo,
  });

  tippy(".dotoo-mark", {
    theme: "translucent",
    inlinePositioning: true,
    plugins: [inlinePositioning],
    content: (reference) => reference.dataset.todo,
  });
});
