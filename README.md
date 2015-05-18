# MiniTWR
### The web site
MiniTWR is a node-based website made in occasion of the course "Introduction to Web Programming" in the University of Strasbourg. It consist of a simply form where to input the message and a table where all the messages are showed from the most recent to the oldest one. All the messages are stored in a simple JSON database (it is not a performant solution but it does work according to my small needs). But that's not all, keep reading!

What does it use ? 

* [Twitter Bootstrap] - nice front-end framework
* [Express] - fast node.js app framework
* [Jade] - clean and concise template engine 

You can find all the dependencies and their versions inside [package.json](package.json)

### The hack challenge

I wanted to make the website a bit more "stimulating" and that's why MiniTWR host a very basical (embarassing) security hole. MiniTWR encourages you to exploit it by offering a little "prize" (just a canvas animation, don't expect big things!). 

- ** Goal :** Change the title on the front page from "MiniTWR" to "Hacked"
- ** How? :** If you have no idea about how check out what is [Cross-site scripting], if you still have no idea about how to make it work try to post this message 
```javascript
<script>alert('Hacked');</script>```
what happens? 

##### Solution
A possible solution to the challenge can be found [here](public/tweets/lazy_me.txt)






[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[express]:http://expressjs.com
[Jade]:http://jade-lang.com/
[Cross-site scripting]:https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)



