export default function renderBasket(count) {
  const classname = count === 0 ? 'empty' : 'filled';
  return `<div class="${classname}">my basket: ${count} item(s)</div>`;
}
