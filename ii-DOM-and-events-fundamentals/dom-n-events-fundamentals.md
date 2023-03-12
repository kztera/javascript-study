<h1>II. DOM and Events fundamentals</h1>

_In this chapter, we actually make JavaScript interact with real web pages_

<h2>Table of Contents</h2>

-  [1. DOM](#1-dom)
   -  [1.1. What is the DOM?](#11-what-is-the-dom)
   -  [1.2. Selecting elements](#12-selecting-elements)
-  [2. Events](#2-events)
-  [3. Create modal window with DOM and events](#3-create-modal-window-with-dom-and-events)
-  [4. Conclusion](#4-conclusion)

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

### 1.2. Selecting elements

Now, let's talk about how to select elements in the DOM. There are a few ways to do that. But the most common one is using `document.querySelector()` method. It's a method that allows you to select the first element that matches the specified CSS selector. For example:

```js
const heading = document.querySelector("h1");
```

We can manipulate the style of the element by using the `style` property. For example:

```js
heading.style.color = "red";
```

## 2. Events

With DOM, we can also interact with the page by listening to events. For example, we can listen to the `click` event on a button. And when the button is clicked, or when "Enter" is pressed, we can do something. For example:

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
   console.log("Button clicked");
});
```

Or trigger click button after pressing "Enter" key:

```js
var input = document.querySelector("input");
var button = document.querySelector("button");

input.addEventListener("keyup", function (event) {
   if (event.key === 13) {
      event.preventDefault();
      button.click();
   }
});
```

13 is the key code for "Enter" key. You can find the key code for other keys [here](https://keycode.info/). In conclusion, with DOM and events, we can do a lot of things.

## 3. Create modal window with DOM and events

When you surf the web, you may have seen a modal window. It's a window that pops up on top of the current page. It's used to display some information or ask for some input. For example, when you click on the "Sign up" button, a modal window will pop up and ask you to enter your email address. Let's create something like that.

In fact, the model window is just a normal HTML element. It's hidden by default. And when the user clicks on the "Sign up" button, we show it. And when the user clicks on the "Close" button, we hide it.

First, let's create the HTML for the modal window. We'll put it at the end of the body tag. And we'll give it a class name `modal` so we can select it later.

```html
<button class="show-modal">Show modal</button>
<div class="modal hidden">
   <button class="close-modal">&times;</button>
   <h1>This is a modal window</h1>
   <p>Something in modal windows . . .</p>
</div>
<div class="overlay hidden"></div>
```

Then, let's add some CSS to style the modal window. We'll hide it by default. And we'll make it appear in the center of the screen.

```css
.close-modal {
   position: absolute;
   top: 1.2rem;
   right: 2rem;
   font-size: 3rem;
   color: #333;
   cursor: pointer;
   border: none;
   background: none;
}

h1 {
   font-size: 2.5rem;
   margin-bottom: 2rem;
}

p {
   font-size: 1.8rem;
}

.hidden {
   display: none;
}

.modal {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 50%;

   background-color: white;
   padding: 3rem;
   border-radius: 5px;
   box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
   z-index: 10;
}

.overlay {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.6);
   backdrop-filter: blur(3px);
   z-index: 5;
}
```

You can download the full code in [here](code/index.html) and [here](code/style.css). Now, let's add some JavaScript to make the modal window work. First, we need to select the modal window and the overlay. We'll use the `querySelector()` method to do that.

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
```

Then, we need to select the "Show modal" button and the "Close" button. We'll use the `querySelectorAll()` method if we want to select multiple elements. And we'll use the `forEach()` method to loop through the elements.

```js
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");

btnsOpenModal.forEach(btn => {
   btn.addEventListener("click", openModal);
});
```

But, in this case, we only have one "Close" button. So we can just select it like this:

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
```

Now, we need to create the `openModal()` function. It will remove the `hidden` class from the modal window and the overlay. So they will be visible.

```js
const openModal = function () {
   modal.classList.remove("hidden");
   overlay.classList.remove("hidden");
};
```

Just like that, we can create the `closeModal()` function. It will add the `hidden` class to the modal window and the overlay. So they will be hidden.

```js
const closeModal = function () {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
};
```

Finally, we need to add the event listener to the "Close" button. And when the user clicks on it, we'll call the `closeModal()` function.

```js
btnCloseModal.addEventListener("click", closeModal);
```

Now, we can test our code. When you click on the "Show modal" button, the modal window will appear. And when you click on the "Close" button, the modal window will disappear. Additionally, when you click on the overlay, the modal window will also disappear.

If you want the modal window to disappear when you press "Esc" key, you can add this code:

```js
document.addEventListener("keydown", function (e) {
   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
   }
});
```

You can download the full js code in [here](code/script.js).

And so instead we can basically aggregate all of this properties in one class, that we identify here in CSS, and then in JavaScript we simply add and remove these classes as we need or don't need these styles.

So, usually when you need to manipulate styles on a page, then always just export the styles into a class, and then use the class just like we did here.

## 4. Conclusion

In this tutorial, we learned how to use DOM and events to manipulate HTML elements and apply it to know how to create a modal window with DOM and events. To the next chapter, we'll learn about how the language really works ^^

---

o(≧∇≦)ﾉ [III. How JavaScript Works Behind the Scenes](https://github.com/kztera/javascript-study/blob/main/iii-how-js-works-behind-the-sences/how-js-works.md)

And one more time, Congratulations! You have completed the next chapter of this JavaScript study. I hope you enjoyed it and have a lot of motivation to continue learning. See you in the next chapter!
