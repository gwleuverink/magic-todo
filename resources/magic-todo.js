import "./magic-todo.css";

import tippy, { inlinePositioning, createSingleton } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";

const config = {
  allowHTML: true,
  theme: "translucent",
  inlinePositioning: true,
  plugins: [inlinePositioning],
  content: (reference) => reference.dataset.todo || "todo",
};

function init() {
  let wrapped = document.querySelectorAll(
    ".magic-todo:not(.magic-todo--initialized)"
  );
  let marks = document.querySelectorAll(
    ".magic-todo-mark:not(.magic-todo--initialized)"
  );

  tippy(wrapped, config);
  tippy(marks, config);

  // Add --initialized modifier so tooltip's aren't reinitialized each time
  [...Array.from(wrapped), ...Array.from(marks)].forEach((element) => {
    element.classList.add("magic-todo--initialized");
  });
}

// Initialize tooltips
document.addEventListener("DOMContentLoaded", init); // Pageload

// Livewire
document.addEventListener("livewire:init", init); // wire:navigate
document.addEventListener("livewire:init", () => {
  // Lazy components
  Livewire.hook("component.init", init);

  // Rendered by after Blade conditional  - Must be a better way to do this?
  Livewire.hook("element.init", init);
});
