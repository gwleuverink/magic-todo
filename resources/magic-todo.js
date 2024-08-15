import "./magic-todo.css";

import tippy, { inlinePositioning } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";

document.addEventListener("DOMContentLoaded", function () {
  tippy(".magic-todo", {
    allowHTML: true,
    theme: "translucent",
    inlinePositioning: true,
    plugins: [inlinePositioning],
    content: (reference) => reference.dataset.todo || "todo",
  });

  tippy(".magic-todo-mark", {
    allowHTML: true,
    theme: "translucent",
    inlinePositioning: true,
    plugins: [inlinePositioning],
    content: (reference) => reference.dataset.todo || "todo",
  });
});
