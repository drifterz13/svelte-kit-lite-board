/** @param {HTMLInputElement} node */
export function autofocus(node, changes) {
  node.focus();

  return {
    update(changes) {
      if (!changes) return;

      requestAnimationFrame(() => {
        node.focus();
      });
    }
  };
}
