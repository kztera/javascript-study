<h1> HTML - CSS Crash Course </h1>

_In fact, I really hate CSS. But I have to learn it and it's gonna be helpful (I hope so). So I decided to make a repo about it although everything you will read in here is very basic. Just enough to familiar with the syntax and concepts. I hope it will help you too if you are a beginner like me. (´▽`ʃ♡ƪ)_

<h2> Table of Contents </h2>

-  [1. Basic HTML Sturcture and Elements](#1-basic-html-sturcture-and-elements)
   -  [1.1. Heading `<h1>` - `<h6>`](#11-heading-h1---h6)
   -  [1.2. Paragraph `<p>`](#12-paragraph-p)
   -  [1.3. Anchor `<a>`](#13-anchor-a)
-  [2. HTML Attributes, Classes and IDs](#2-html-attributes-classes-and-ids)
   -  [2.1. HTML Attributes](#21-html-attributes)
   -  [2.2. Classes and IDs](#22-classes-and-ids)
-  [3. Super Basic CSS for styling](#3-super-basic-css-for-styling)
-  [4. CSS Selectors](#4-css-selectors)
   -  [4.1. Universal Selector `*`](#41-universal-selector-)
   -  [4.2. Type Selector](#42-type-selector)
   -  [4.3. Class and ID Selector](#43-class-and-id-selector)
-  [5. CSS Box Model](#5-css-box-model)

## 1. Basic HTML Sturcture and Elements

Just open or download the `index.html` file and open it in your text editor. You will see a simple HTML page.

First of all, we need to know the basic structure of HTML. It's very simple. We have a `<!DOCTYPE html>` tag which is the first tag in our HTML file. It tells the browser that this is an HTML file. Then we have a `<html>` tag which is the root element of our HTML file. Inside the `<html>` tag, we have a `<head>` tag and a `<body>` tag. The `<head>` tag contains the metadata of our HTML file. The `<body>` tag contains the content of our HTML file. The content of our HTML file is called elements. There are many elements in HTML. We will learn about them later. For now, we will learn about the most basic elements.

In VScode, after create a file with the extension `.html`, you can write `!` and press `Tab` to get the basic structure of HTML.

### 1.1. Heading `<h1>` - `<h6>`

To create a heading, we put the text between the opening and closing tags of the heading element. For example, to create a heading with the text "Hello World!", we write:

```html
<h1>Hello World!</h1>
```

Number after the `h` in the heading element is the level of the heading. The higher the number, the smaller the heading. For example, `<h1>` is the biggest heading and `<h6>` is the smallest heading. Everytime you open a new heading element, you have to close it with the closing tag of the heading element. For example, if you open a `<h1>` tag, you have to close it with `</h1>` tag.

### 1.2. Paragraph `<p>`

To create a paragraph, we put the text between the opening and closing tags of the paragraph element. If you want to format the text in the paragraph, you can use the `<b>` tag to make the text bold and the `<i>` tag to make the text italic. For example:

```html
<p>This is a <b>bold</b> and <i>italic</i> text.</p>
```

and the result will be:

> This is a **bold** and _italic_ text.

### 1.3. Anchor `<a>`

To create a link, we use the anchor element. The anchor element has an attribute called `href` which is the link of the anchor. For example:

```html
<a href="https://google.com">Google</a>
```

And now, if you click on the word "Google", you will be redirected to the Google website.

## 2. HTML Attributes, Classes and IDs

### 2.1. HTML Attributes

`href` in anchor tag is an attribute. Attributes are used to provide additional information about an element. Attributes always come in name/value pairs like: name="value".

Other elements also have attributes. For example, the `<img>` element has an attribute called `src` which is the source of the image. For example:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" width="104" height="142" />
```

The `<img>` element also has an attribute called `alt` which is the alternative text of the image. If the image is not available, the browser will display the alternative text instead. Because `img` not have a closing tag, we have to use a slash `/` to close the tag.

To sum up, attributes are used to provide additional information about an element and they always come in name/value pairs like: name="value".

Some element you will use a lot in HTML:

-  `<div>`: A division or a section in an HTML document.
-  `<input>`: An input field where the user can enter data. Can be text, password, checkbox, radio button, submit button, etc.
-  `<button>`: A clickable button.

Read about them in [here]()

### 2.2. Classes and IDs

`class` and `id` are two very important attributes in HTML. They can used for all elements to indentify them and essentially name elements so that we can select them in CSS in order to style them. For example:

```html
<h1 class="heading_1">Hello World!</h1>
<h2 id="heading_2">Hi!</h2>
```

The difference between `class` and `id` is that `class` can be used for multiple elements and `id` can only be used for one element. It meants, with each `id` can only be used once on the page while `class` can be used over and over again. So, with above example, I could have more headings called heading_1 but I could not have another element with the id of heading_2.

So, it's just better practice to use `class` for styling and `id` for linking to a specific element.

You should attention to name of `class` and `id`. Select with JavaScript, camelCase is the good choice.

## 3. Super Basic CSS for styling

We have three ways to add CSS to our HTML file.

1. Inline CSS: Add CSS to HTML elements with the style attribute. For example:

```html
<h1 style="color: red;">Hello World!</h1>
```

2. Internal CSS: Add CSS to HTML elements with the `<style>` tag. For example:

```html
<style>
   h1 {
      color: red;
   }
</style>
```

3. External CSS: Add CSS to HTML elements with the `<link>` tag. For example:

```html
<link rel="stylesheet" href="style.css" />
```

And I recommend you to use the third way. Because it's easy to manage and reuse.

To style an element, we use the selector of the element. For example, to style the `<h1>` element, we use the selector `h1`. Then we add a pair of curly braces `{}` after the selector. Inside the curly braces, we add the CSS properties and their values. For example:

```css
h1 {
   color: red;
}
```

The CSS property is the name of the style you want to apply to the selected element. The CSS value is the value of the CSS property. For example, the CSS property is `color` and the CSS value is `red`.

To know more the properties of CSS, you can read [here](https://www.w3schools.com/cssref/).

## 4. CSS Selectors

Hmmm, we have learned how to style an element. But what if we want to style multiple elements? We can use CSS selectors to select multiple elements. There are many types of CSS selectors. We will learn about them later. For now, we will learn about the most basic selectors.

### 4.1. Universal Selector `*`

The universal selector selects all elements in the document. For example:

```css
* {
   color: red;
}
```

Ok, now all elements in the document will have the color red. So crazy, right?

### 4.2. Type Selector

The type selector selects elements based on the element name. For example:

```css
h1 {
   color: red;
}
```

Now, all `<h1>` elements will have the color red.

### 4.3. Class and ID Selector

The class selector selects elements based on the value of their class attribute start with `.`. For example:

```css
.heading_1 {
   color: red;
}
```

And the ID selector selects elements based on the value of their id attribute start with `#`. For example:

```css
#heading_2 {
   color: red;
}
```

Try other selectors in [here](https://www.w3schools.com/cssref/css_selectors.asp).

## 5. CSS Box Model

Each and every element on a webpage can be seen as a rectangular box and each box can have a width, height, padding, border, and margin. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

<img src="assets/cssbox.png" width=400px align="center">

-  Content: text, images, etc.
-  Padding: transparent area around the content, inside of the box.
-  Border: a border that goes around the padding and content
-  Margin: space between boxes
-  Fill area: the area that is filled with the background color or background image which include the padding and the border but not the margin.

---

Tada! You have finished the crash course of HTML and CSS. Now, you can move on to the chapter II and learn about DOM and Events if you feel more familiar with HTML and CSS

( ﾉ ﾟｰﾟ)ﾉ Next Chapter in here: [II. DOM and Events Fundamentals](https://github.com/kztera/javascript-study/blob/main/ii-DOM-and-events-fundamentals/dom-n-events-fundamentals.md)

<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/U4dLVG7d5KsqnN8pBG/video" width="480"></iframe></div>
