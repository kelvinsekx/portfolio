---
title: "Elegancy with the for...loop using for-in loop and for-of loop as a case study"
date: "2020-05-13"
lastupdated: "2020-08-24"
description: "for loop for-in loop javascript loop kelvinsekx write on loop"
---

Today, we will be discussing the famous for loops. Sadly, nerdy developers I know only resort to the use of for loop after alternatives like recursion have failed them (which can be very rare) or they have exhausted other elegant ones like map, every, array.from and the likes.

Whatever, this still doesnot deny the fact that for-loop is our quick MESSIAH when it comes to LOOP.

##**For-in Loop**

For-in loop is one of the elegant means of looping through all properties is an object. It syntax is below. The most elegant reason I use for-in loop is because of its obvious skip for the variable keyword
```javascript
{
  for(variable in object){
      //statements
  }
  for(x in [12,3,4,"molowo"]){
      console.log(x) // returns 0,1,2,3,4
  }
}
```

##**For-of Loop**

 Yay!!, this is even more eleganter(permit me to use the word) in looping through and dumping property values of an iterable(i.e it returns the value of each property) 

```javascript
{
    for(variable in iterable){
        //statement
    }
    for(x in [12,3,4,5, "oshomo"]){
        console.log(x) // return 12,3,4,5,oshomo
    }
}
```

##**BONUS**

Do you know you can apply a similar syntax like pattern of for-in loop with your usual loop on javascript??
I also just got to know that I can gracefully skip the variable keyword in the usual for...lop. Check this out
```javascript
{
  for(x=0;x<[1,2,3,4,4]; x++){
      console.log(x) // Everything works just fine even without declaring the x as a variable.
  }

  //THE USUAL WAY WOULD HAVE BEEN
  for(let x = 0;x<[1,2,3,4,4]; x++){...}
}
```

For further reading check these MDN docs: <a href= "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for..in loop</a> and <a href= https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>for..in loop</a> 
****
 <h3 style="color:#349077">
**Joke Time : dedicated to my little cousin, genesis**
</h3>

Sing this nursey rhyme along with me
- Tinko, tinko, little star
- Howwa wonder whats so high
- Up abovedaa world so hi
- Like a diamond in the sky

***
 <h3 style="color:#349077">
**What if I interview you : little quick questions I try and answer myself**
</h3>

In javaScript, we donot have access to a utility function like Range() in python. Replecate this, Range(stop, start, step), by following the instructions below:
- Your function name should be called Range
- the function, Range, should take three arguments of stop, start and step
- start has a default value of 0, and step default value is 1
- Lastly, execute this function with a recursion. 
So that

```javascript
{
    Range(5) // returns 0,1,2,3,4
    Range(5,2) //returns 2,3,4
    Range(10,2,3) //returns 2,5,8
}
```


#### Closing Note:
 Hope you sang along and I didnot spoil your favourite ryhme, thanks for reading. Remember to be you, a great individual.


