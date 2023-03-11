<h1>II. DOM and Events fundamentals</h1>

_In this chapter, we actually make JavaScript interact with real web pages_

<h2>Table of Contents</h2>

-  [1. DOM](#1-dom)
   -  [1.1. What is the DOM?](#11-what-is-the-dom)

## 1. DOM

### 1.1. What is the DOM?

DOM is stands for Document Object Model. It's structured representation of HTML documents. Allows JavaScript to access HTML elements and styles to manipulate them. For example, it can change text, HTML attributes, CSS styles, etc.

Simply, DOM is basically a connection between HTML documents and JavaScript code. It's automatically created by the browser when the page (HTML document) loads. And it's stored in a tree structure like this one.

![DOM tree](https://www.freecodecamp.org/news/content/images/2022/06/DOM-tree.png)
_Source: https://www.freecodecamp.org/_

As you can see, each element in the HTML document is represented by an object in the DOM tree. And each object has properties and methods that allow you to interact with it.

With the node on the top is always the document node. It represents the whole document. This's special object that is the entry point to the DOM. We need it to start selecting elements f

For example: `document.querySelector('h1')` will return the first `h1` element in the document.

Btw, I need to clarify that DOM is not a part of JavaScript. It's is actually part of something called the Web APIs(Application Programming Interface) and implemented by the browser that we can access from our JavaScript code. For that, DOM works same in all browsers. In fact, there are a ton more Web APIs such that timers, fetch, etc. But we'll talk about them later.
