/** @param {HTMLElement} node */
export function clickOutside(node) {
  /** @param {Event} event */
  function onClick(event) {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent('outclick'));
    }
  }

  document.addEventListener('click', onClick, true);

  return {
    destroy() {
      document.removeEventListener('click', onClick, true);
    }
  };
}
