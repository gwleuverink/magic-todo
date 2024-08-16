import "./magic-todo.css";

import tippy, { inlinePositioning } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";

function init() {
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
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("livewire:init", init);
