# Defer Challenge

Keep `index.html` and `defer.js` in the same folder. Open `index.html` in a browser.

The HTML initially contains "Waiting for JavaScript...". The JavaScript function changes it to "Defer works: the HTML element is ready." Seeing that changed text confirms the function ran.

The external script is referenced in the HTML head with `defer`. It downloads while the HTML is parsed and executes after parsing, so the paragraph exists when `showMessage()` runs.
