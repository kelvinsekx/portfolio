---
title: "Installation of Deno with Powershell"
date: "2020-05-16"
---

Hello, deno is becoming popular and it only makes sense to deal with it while it is still fresh now. In this regard, I made my first step by trying to install deno on my windows laptop and this is how I did mine. Thanks for following me.

##**Step 1**

Go to your ***<b style="font-weight:900; color:forestgreen">start</b>*** menu, and ***<b style="font-weight:900;color:forestgreen">search</b>*** for ***<b style="font-weight:900;color:forestgreen">powershell</b>*** or ***<b style="font-weight:900;color:forestgreen">windowpowershell</b>***, and click the ***<b style="font-weight:900;color:forestgreen">windows Powershell ISE (*86)</b>** GUI.


##**Step 2**

In the Powershell console, Copy and Paste this code 

```javascript
{
    Get-Host | Select-object Version
    // this should print out the version of your powershell

    //_________
    // Version
    // 5.0.10240.17443
}
```

##**NOTE**

If your version is less than Version --5, I would advise you opt for another means to install, may be the use of choco, so as to avoid unnecessary stress. For me I hate stress, since I am a lazy developer

##**Step 4**
Copy and paste the code below after you confirmed your version is --5

```javascript
{
   iwr https://deno.land/x/install/install.ps1 -useb | iex

   //after some seconds, your deno sould have landed on your system...YEEPY
}
```

##**Step 4**

After you confirmed it downloaded, type deno and enter in the powershell console like I did below

```javascript
{
   C:\Users\kelvin>deno
    Deno 1.0.0
    exit using ctrl+d or close()
}
```
##**Last Step**

This works well inyour powershell console but try it out in other Command Line, did you notice it seems not to work??

Alright. to solve that is simple, just restart your computer and everything should be fine now.

For further reading check: <a href= "https://deno.land/">deno's land</a>
****
 <h3 style="color:#349077">
**Joke Time : dedicated to Bukunmi**
</h3>

If a female tiger is called tigress,
what is a female dog called??

***
 <h3 style="color:#349077">
**What if I interview you : little quick questions I try and answer myself**
</h3>

LastWEEK RE:

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
 Hope you enjoyed the ride, I would be sharing my Github link on my silly works on deno soon. Thanks for reading. Remember to be you, a great individual. 


