# Async Assignment

This exercise follows the three code examples on the course's Async Assignment page.

Keep all three code files in the same folder:

- `before_async.html`: the initial example, with an ordinary script before the paragraph.
- `async.js`: reads the paragraph with the ID `p1` and displays its contents in an alert.
- `index.html`: the updated example, with `async` added to the script tag.

## Run the exercise

1. Open `before_async.html` in a browser. The page displays **Hello World**, but no alert appears. The script runs before the paragraph exists, causing a JavaScript error when it tries to read `innerHTML` from `null`.
2. Open the browser console to inspect the error.
3. Open `index.html` in the browser. This is the version with `async` added. If the paragraph has been parsed when the script executes, an alert displays **Hello World**.

## Timing matters

An async script downloads without blocking HTML parsing, then executes as soon as it is ready. It does **not** guarantee that the paragraph exists at execution time. The course example can therefore depend on loading and caching timing. Adding `async` reproduces the assignment's final code; it is not a general solution for scripts that depend on later HTML elements.

For code that must run after HTML parsing, use an external script with `defer` or explicitly wait for DOM readiness. Those approaches are separate from the required async example.
