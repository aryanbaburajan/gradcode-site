const command = `curl -fsSL ${window.location.origin}/install | bash`;
document.querySelector('#install-url').textContent = `${window.location.origin}/install`;
const button = document.querySelector('#copy');
const status = document.querySelector('#copy-status');
let reset;
button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(command);
    status.textContent = 'Copied!';
    button.setAttribute('aria-label', 'Install command copied');
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#install-command'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Select and copy the command.';
  }
  clearTimeout(reset);
  reset = setTimeout(() => {
    status.textContent = '';
    button.setAttribute('aria-label', 'Copy install command');
  }, 3000);
});
