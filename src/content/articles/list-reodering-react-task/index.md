---
title: "reodering list with react js"
date: "2020-09-11"
lastupdated: "2020-09-11"
description: "list reorder react, list rearrange when clicked react, ol reordering"
---

Last week, I had an onine interview. I was given a task to be finished under 17 minutes. And I failed it. The good news is that after the interview, It took me 12 minutes to figure out. I am happy to share this fun work.

The task was that I re-render a clicked list to become first from any position on the array. so that if the initial list was: 

- one
- two
- three

when "two" is clicked, the list becomes:
- two
- one
- three

## Before I share the code

Before I share the code, what strucked me was that I did a funny silly error. The error was that I was trying to manipulate/modify a prop.

Instead of modifying the prop, pass it to a state. 

If you donot take anything away here. Please take this.

## **To the code**

```javascript
// index.js

import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ListItem(props) {
    // PROPS IS READONLY DONOT FORGET
    // DONOT TRY TO MANIPULATE props.items directly
    // instead pass it to a state
    const [listItems, setListItems] = useState(props.items);

    // inorder to avoid modifying the props directly,
    // I cloned the array into a new one before manipulations
    let newList = listItems.slice(0, listItems.length);

    // the method to handle onClick and every other logic that accompanies it.
    const handleClick = (item) => {
    // returns true if the item is present in the array
    if (listItems.includes(item)){
    // if true, check the position on the list
      const spot = listItems.indexOf(item)
    // then delete the item at that position
      newList.splice(spot, 1)
    }

    // if the item is present or not, make it first on the list
    newList.unshift(item);
    // ^(8!!8)^ try and console to see things live
    console.log(newList);
    // finally modify it
    setListItems(newList)
  };

    // render the items in the array as list
  return listItems.map((item, keys) => (
    <li key={`${keys}`} onClick={() => handleClick(`${item}`)}>
      {item}
    </li>
  ));
}

// here is where the props stays

function ListContainer() {
  return <ListItem items={["one", "two", "three"]} />;
}

// ========================================
// render the element to the dom

ReactDOM.render(<ListContainer />, document.getElementById("root"));


// thanks for using my code snippet. If it helps you, tell me it did. I LOVE YOu
```
**HOPE IT HELPS. IF IT DOES MAKE ME MORE HAPPY AND SAY HELLO**


