---
---

---

## What is Dom?

- Stands for Document Object Model.
- Like a normal JS object the HTML document too has a wide variety of properties and methods that can manipulate those properties
- We may use JS to access those properties and use those methods to cause change in the structure outlook and style of the HTML document and hence see effect on the webpage too
- JS is a very useful Lang as it provides such unique capability of handling the contents and elements of a HTML document dynamically
- **eg:** toggling of navigation bar, showing of prompts, occurrence of certain events followed by specific cues etc.

---

## The DOM Tree

- DOM can be explained as a tree of nodes
- The HTML elements used in our webpages are the various nodes of the DOM tree.
- The top level Nodes/ parent node of all the other nodes is the `<html>` element.
- The nodes in the DOM Tree have either Parent-child or sibling-sibling relations among them.
- If I was not lazy, then I should have added a tree/graph diagram showing the relations among the diff nodes in the DOM Tree.

```js
//The DOM tree graph goes here
```

- Although the attributes of an HTML element **(Class name, id name, CSS styles etc.)** are also considered the nodes of the DOM hierarchy , they don't participate in the parent child or sibling relations so they cannot be directly accessed through DOM but should be accessed with the properties of the properties of the element node.

**Note:** **The DOM object itself is the property of the Window object which is actually the TOP level object that represents the Tab opened in the Browser**

---

## Event Listeners

- Event Listeners are one of the most frequently used js structures which add functionality and interactivity to an otherwise very static html page.
- Event listeners are the structures that are triggered on the onset of events/incidents (such as:**Button presses,elments load,Key presses**).
- The event listeners can be divided into catagories such as:-
  1. load events
  2. key-down events
  3. click events
  4. Reveal events etc.

---

## Event Probagation

- When an event Occours it needs to propagate through each node of the DOM tree before it is registered by the document/DOM
- Even Probagation refers to how the even propagates through the whole DOM model before it reaches its final destination , It can be imagined as currrent traveling through an electrical circuit
- It consists 3 phases:
  1. Event Capturing
  2. Event Target
  3. Event Bubbling
- If I was not lazy then i must have included a phase diagram showing the 3 phases:

```js
//The Event Probagation Phase diagram goes here
```

#### 1. Phase-1 (Capturing)

- Starts from the highest level of the DOM i.e the Document node
- The probagation then **Trickles** down to the lowest node till it reaches the Target node
- When it **trickles** down , it notifies all the nodes that something has triggered an event

#### 2. Phase-2 (Target)

- The target node can be imagined as the second phase of the event probagation
- It is the node that triggers an event to occour

#### 3. Phase-3 (Bubbling)

- Event Bubbling is the reverse of the event Capturing
- The probagation starts from the Target node to the highest level DOM node notifying every nodes in-between the exact node which triggered the event.
- Here probagation occours upwards

---

## Event Delegation

- It allows users toapped a single event listener to a parent element that affs it to all of its present and future descendants taht match a selector
- For instance, instead of creating event listeners for each li-element of an ul element, you may delegate event listener for all the li-elements of a ul element at once
- This shortens our code and also provides dynamic capabilities to our code

---
