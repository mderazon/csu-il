[![Build Status](https://travis-ci.org/csu-il/csnc.png?branch=master)](https://travis-ci.org/csu-il/csnc.png?branch=master)

## Computer Science Unplugged IL ##

Website: [http://csunplugged.org.il](http://csunplugged.org.il)

Based on [Computer Science Unplugged](http://csunplugged.org/) program. Designed to help teach basic principals of computer science to kids (but also grown ups).

All of the lessons are in Hebrew, most of them were translated by [Benny Chor](http://www.tau.ac.il/~bchor/) and [Shimon Schocken](http://shimonschocken.com/).



## Contribution ##


If you want to contribute you came to the right place !

On the technical side, the website is powered by [Docpad](http://docpad.org/) and [Twitter bootstrap](http://twitter.github.com/bootstrap/). Feel free to fork the repository and hack it. when your'e done, send us a pull request and we'll add the change.

**What we need ?**

- Help with **design**, i'm bad at css and aesthetics.
- Going through the lessons and constantly improve them.
- Anything else.

## Requirements ##
- [Node.js](http://nodejs.org/)

## Installation and running ##
Download a local copy of the code.  
Install Docpad with `npm` :
    
    $ npm install -g docpad
Go to the project root folder and enter:

    $ docpad run
Docpad will start generating all the files. When it's done you can open your browser at `http://localhost:9778`.

## Adding lessons ##
For simplicity, lessons are written in [Markdown](http://daringfireball.net/projects/markdown/syntax) and rendered to HTML on the fly. If Markdown syntax is not enough, you can use standard HTML tags like `<img>` or `<table>` inside the Markdown file and it should work just fine.


**What if I don't know all of the stuff you're talking about ?**

If you wrote a good lesson or improved an existing one but you don't know how to add it, don't worry just send it over to `csu-il@outlook.com` and we'll add it. Just don't send us PDF documents because it will make it hard for us to copy/paste.
