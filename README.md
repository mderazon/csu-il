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

## Requirements ##
- [Node.js](http://nodejs.org/)

## Installation and running ##
Download a local copy of the code. 
Install dependencies with `npm` :
    
    $ npm install
Fire up the server :

    $ node server.js
    Listening on port 8888 in development mode
Open your browser at `http://localhost:8888`.

## Adding lessons ##
For simplicity, lessons are written in [Markdown](http://daringfireball.net/projects/markdown/syntax) and rendered to HTML on the fly. If Markdown syntax is not enough, you can use standard HTML tags like `<img>` or `<table>` inside the Markdown file and it should work just fine.

Once you're done, put your lesson with all the image files (if you have) in `/lessons` under it's own folder. Next, update `lessons.json` and add your lesson there. That's it, your done !

**What if I don't know all of the stuff you're talking about ?**

If you wrote a good lesson or improved an existing one but you don't know how to add it, don't worry just send it over to `csu-il@outlook.com` and we'll add it. Just don't send us PDF documents because it will make it hard for us to copy/paste.
