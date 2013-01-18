[![Build Status](https://travis-ci.org/csu-il/csnc.png?branch=master)](https://travis-ci.org/csu-il/csnc.png?branch=master)

## Computer Science Unplugged IL ##

Website: [http://csu-il.heroku.com](http://csu-il.heroku.com)

Based on [Computer Science Unplugged](http://csunplugged.org/) program. Designed to help teach basic principals of computer science to kids (but also grown ups).

All of the lessons are in Hebrew, most of them were translated by [Benny Chor](http://www.tau.ac.il/~bchor/) and [Shimon Schocken](http://shimonschocken.com/).



## Contribution ##


If you want to contribute you came to the right place !

On the technical side, the website is built with [Node.js](http://nodejs.org/) and [Twitter bootstrap](http://twitter.github.com/bootstrap/). Feel free to fork the repository and hack it. when your'e done, send us a pull request here in github and we'll add the change.

**What we need ?**

- Help with **design**, i'm bad at css and aesthetics.
- Going through the lessons and constantly improve them.
- Anything else.


## Adding lessons ##


I decided the best way would be writing the lessons in HTML, since it's ubiquitous and most of the other approaches didn't have good Hebrew support. The knowledge of html required is very basic, you just have to write every paragraph with `<p>` and occasionally add `<img>`, `<table>` etc. Basic stuf...

Once you're done, put your lesson with all the image files (if you have) in `/views/lessons` under it's own folder. Next, update `/views/lessons/lessons.json` and add your lesson there. That's it, your done !

Now fire up the website with node program : 

    $ node server.js
    Listening on port 8888 in development mode

Check that everything works by going to `http://localhost:8888`

**Whats up with all of the `.ejs` files ? Where's the HTML you promised ?**

[EJS](http://embeddedjs.com/) stands for Embedded Javascript but don't worry about it. It's just like writing HTML, just rename your file ending to `.ejs` instead of `.html` and it will work. See an example for a lesson in the `/view/lessons` folder.


**What if I don't know all of the stuff you're talking about ?**

If you wrote a good lesson or improved an existing one but you don't know how to add it, don't worry just send it over to csu-il@outlook.com and we'll add it. Just don't send us PDF documents because it will make it hard for us to copy/paste.
