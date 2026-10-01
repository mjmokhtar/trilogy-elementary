[🇮🇩 Bahasa Indonesia](README.md) | 🇬🇧 English

# Trilogy Elementary

A repository for learning the fundamentals of **HTML, CSS, and JavaScript** from scratch through a collection of small examples that can be opened and studied one by one in the browser.

The name **Trilogy Elementary** reflects the three main foundations of web development studied in this repository:

1. **HTML** to structure content and give it meaning.
2. **CSS** to control the appearance and layout of pages.
3. **JavaScript** to add logic and interactivity.

This repository is documentation of a learning journey, not a production application. Each file generally focuses on a single concept so it is easy to read, try, and modify.

## Topics Covered

- Basic HTML elements and structure
- Semantic HTML, multimedia, tables, links, and images
- Forms, inputs, validation, and various control types
- CSS selectors, cascade, box model, background, fonts, and filters
- Layout with position, float, Flexbox, and Grid
- JavaScript basics, data types, operators, branching, and loops
- Functions, closures, destructuring, objects, and error handling
- Object-Oriented Programming with JavaScript
- The JavaScript standard library
- ECMAScript Modules
- The Document Object Model and browser events
- Promises, the Fetch API, AJAX, async/await, and Web Workers
- An interactive Todo List mini-project

## Repository Structure

| Directory | Topic |
| --- | --- |
| `project-html/` | HTML basics, semantic elements, multimedia, tables, links, and page structure |
| `html-form/` | HTML forms and the various input and control types |
| `css-dasar/` | Selectors, cascade, box model, colors, fonts, backgrounds, gradients, and basic styling |
| `css-layout/` | Positioning, float, Flexbox, Grid, and responsive layout |
| `belajar-js-dasar/` | JavaScript syntax and basic concepts |
| `js-oop/` | Objects, prototypes, classes, inheritance, fields, methods, and error handling |
| `js-lib/` | Standard objects such as Array, Date, JSON, Map, Set, RegExp, Math, and Proxy |
| `js-modul/` | Export, import, aliases, default export, aggregate, and dynamic modules |
| `js-dom/` | DOM manipulation, events, forms, nodes, elements, and browser APIs |
| `js-async/` | Callbacks, Promises, AJAX, Fetch API, async/await, and Web Workers |
| `to-do-list-js/` | A Todo List mini-project using HTML and JavaScript |

## Prerequisites

This project needs no framework or package manager. Recommended tools:

- A modern browser such as Chrome, Firefox, Edge, or Safari
- A text editor such as [Visual Studio Code](https://code.visualstudio.com/)
- Git to fetch the repository
- A local development server, especially for the module, Fetch API, AJAX, and Web Worker examples

## Getting Started

Clone the repository:

```bash
git clone https://github.com/mjmokhtar/trilogy-elementary.git
cd trilogy-elementary
```

Simple HTML examples can be opened directly in the browser. For example:

```text
project-html/hello-world.html
css-dasar/hello.html
belajar-js-dasar/hello-world.html
```

You can also use the **Live Server** extension in Visual Studio Code.

## Running with a Local Server

Using a local server is recommended because some browsers restrict modules and asynchronous requests when a page is opened through the `file://` protocol.

If Python is available:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Example topic addresses:

```text
http://localhost:8000/project-html/hello-world.html
http://localhost:8000/css-layout/flexbox.html
http://localhost:8000/js-modul/index.html
http://localhost:8000/to-do-list-js/todolist.html
```

## HTML

The HTML material is divided into two main groups.

### HTML Basics

The `project-html` directory covers examples of:

- Headings, paragraphs, line breaks, and formatting
- Links, bookmarks, images, pictures, audio, and video
- Lists, tables, `div`, `span`, IDs, and menus
- `iframe`, favicons, the responsive meta tag, and reserved characters
- Semantic elements such as `header`, `nav`, `section`, `article`, and `footer`

### HTML Forms

The `html-form` directory covers:

- `form`, `label`, `input`, `textarea`, and `button`
- Checkboxes, radio buttons, select, and data lists
- Email, number, date, time, month, week, URL, file, and color inputs
- Hidden inputs, fieldset, multiple select, and form validation

## CSS

### CSS Basics

The `css-dasar` directory is used to study:

- Inline, internal, and external CSS
- Element, class, ID, attribute, universal, and pseudo selectors
- Cascade, inheritance, specificity, and combinators
- Box model, border, padding, margin, width, and height
- Font, text, background, gradient, opacity, filter, counter, and transform

### CSS Layout

The `css-layout` directory contains experiments on:

- `display`, float, positioning, and z-index
- Flexbox: direction, wrap, order, grow, shrink, basis, gap, and alignment
- Grid: column, row, area, gap, fraction units, and alignment
- Responsive layout and media queries

## JavaScript

### JavaScript Basics

The `belajar-js-dasar` directory contains small examples of:

- Variables, data types, operators, and template strings
- Arrays and objects
- `if`, `switch`, the ternary operator, and nullish coalescing
- `for`, `while`, `do while`, `for in`, and `for of`
- Functions, parameters, return values, arrow functions, generators, and recursion
- Scope, closures, destructuring, getters/setters, and optional chaining
- Errors, strict mode, the debugger, and use of the console

### Object-Oriented Programming

The `js-oop` directory covers:

- Objects, constructor functions, and prototypes
- Classes, constructors, properties, and methods
- Public/private fields and private methods
- Inheritance, `super`, static fields, and static methods
- The `instanceof` operator, iterables, iterators, and error classes

### Standard Library

The `js-lib` directory contains experiments with JavaScript's built-in objects such as:

`Array`, `Object`, `String`, `Number`, `BigInt`, `Boolean`, `Date`, `Math`, `RegExp`, `JSON`, `Map`, `Set`, `Symbol`, `Proxy`, and `Reflect`.

### JavaScript Modules

The `js-modul` directory shows the use of `type="module"`, including:

- Named and default exports
- Import aliases
- Multiple and aggregate exports
- Exporting functions, variables, classes, and objects
- Dynamic import

Run this section through a local server so module imports are not blocked by the browser's security policy.

### DOM and Browser Events

The `js-dom` directory contains exercises on:

- Documents, elements, nodes, attributes, and text nodes
- Creating, reading, changing, and removing elements
- Events, event targets, and global events
- Forms, tables, styles, class lists, and `innerHTML`
- Location, history, navigator, screen, timers, and Web Storage

### Asynchronous JavaScript

The `js-async` directory covers:

- Callbacks
- Promises and Promise static methods
- The Fetch API and AJAX
- Sending query parameters, JSON, forms, and files
- `async` and `await`
- Web Workers

Some examples use external APIs or practice endpoints. If an endpoint is no longer active, the example can still be used to learn the request structure, but its response may fail.

## Todo List Mini-project

The file `to-do-list-js/todolist.html` is an exercise in combining HTML, the DOM, events, arrays, and functions in a single page.

Available features:

- Showing a list of activities
- Adding a new todo
- Removing a todo with the **Done** button
- Searching or filtering todos live

Run it at:

```text
http://localhost:8000/to-do-list-js/todolist.html
```

Todo data is stored only in the browser's memory and returns to the initial data when the page is reloaded.

## Suggested Learning Order

1. `project-html`
2. `html-form`
3. `css-dasar`
4. `css-layout`
5. `belajar-js-dasar`
6. `js-lib`
7. `js-oop`
8. `js-modul`
9. `js-dom`
10. `js-async`
11. `to-do-list-js`

## How to Use This Repository

For each topic:

1. Open a file and read its source code.
2. Run the file in the browser.
3. Open Developer Tools with the `F12` key.
4. Inspect the **Console**, **Elements**, and **Network** tabs.
5. Change a small value or piece of logic, then observe the result.
6. Rewrite the example without looking at the source code to test your understanding.

## Notes

- Each file is deliberately kept small and focused on a single concept.
- Most of the CSS and JavaScript is written directly inside the HTML files to make learning easier.
- This project uses no build tools, frameworks, or npm dependencies.
- The examples are meant for exploration and do not yet apply all production application standards.

the rest of the time learning HTML CSS and JS from zero

## Author

**MJ Mokhtar**

- GitHub: [@mjmokhtar](https://github.com/mjmokhtar)
- Website: [mjmokhtar.netlify.app](https://mjmokhtar.netlify.app)

## License

This repository does not yet have a license file. Add a `LICENSE` file if the source code will be used or distributed under specific license terms.
