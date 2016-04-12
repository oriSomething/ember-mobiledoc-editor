/**
 * Move the cursor to the given selector.
 * This does *not* inform the editor that the cursor has changed.
 * `Editor#selectRange` should be preferred.
 */
export default function moveCursorTo(context, selector) {
  let element = context.$(selector);
  if (!element.length) {
    throw new Error(`could not find element from selector ${selector}`);
  } else if (element.length > 1) {
    throw new Error(`ambiguous selector ${selector}`);
  }

  window.getSelection().removeAllRanges();

  let node = element[0].firstChild;
  let range = document.createRange();
  range.selectNode(node);
  window.getSelection().addRange(range);
}
