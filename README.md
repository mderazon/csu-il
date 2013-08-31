[![Build Status](https://drone.io/github.com/mderazon/csu-il/status.png)](https://drone.io/github.com/mderazon/csu-il/latest)

## Computer Science Unplugged IL ##

Website: [http://www.csunplugged.org.il](http://www.csunplugged.org.il)

Based on [Computer Science Unplugged](http://www.csunplugged.org/) program. Designed to help teach basic principals of computer science to kids (but also grown ups).

All of the lessons are in Hebrew, most of them were translated by [Benny Chor](http://www.tau.ac.il/~bchor/) and [Shimon Schocken](http://shimonschocken.com/).



## Contribution ##


Wanna contribute to the project ? Yay !!

The website is powered by Node.js, [Docpad](http://docpad.org/) and [Twitter bootstrap](http://twitter.github.com/bootstrap/). Feel free to fork the repository and hack on it. When your'e done, send us a pull request and we'll add the change.

**What we need ?**

- Help with **design**, i'm bad at css and aesthetics.
- Going through the lessons and constantly improve them.
- Anything else, checkout the Github [issues page](https://github.com/mderazon/csu-il/issues)

## Requirements ##
- [Node.js](http://nodejs.org/)

## Installation and running ##
Download a local copy of the code.  
Install Docpad with `npm` :
    
    $ npm install -g docpad
Go to the project root folder and enter:

    $ npm install
    $ docpad run
Docpad will start generating all the files. When it's done you can open your browser at `http://localhost:9778`.

## Adding lessons ##
For simplicity, lessons are written in [Markdown](http://daringfireball.net/projects/markdown/syntax) and rendered to HTML on the fly. If Markdown syntax is not enough, you can use standard HTML tags like `<img>` or `<table>` inside the Markdown file and it should work just fine.  
- Put the lesson file in `/src/documents/lessons` with all the other lessons files.
- Lessons file names should be all lowercase with `-` instead of spaces. For example `binary-numbers.html.md`. The `.html.md` file extention tells Docpad that it should convert the markdown format into html, so the end result file is `.html`. All this happens automatically and you don't have to worry about it.
- Put any additional resources (lesson images for example) in a dedicated folder under lessons folder. Name the folder same as the lesson file. For example, `/src/documents/lessons/binary-numbers`. Every lesson folder needs to contain a `thumbnail.png` file which is like the lesson logo that is shown on the lessons list page.
- Each lesson should contain a header ([meta-data](http://docpad.org/docs/meta-data)), right in the beginning of the file. This header gives Docpad (and humans) some information about the lesson but it's not shown in the result lesson page. For example :

    ```
    title: נקודות למחשבה
    description: מספרים בינאריים
    author: שמעון שוקן
    date: 2009-10-01
    layout: lesson
    tags: ['binary','math']
    ```
First fields are pretty self explanatory. `layout` field tells docpad that the type of page is a lesson page. `tags` field is an array of tags related to the lesson.  
If you're in doubt, look at one the existing lessons and do the same, it's pretty easy.

Markdown is basically just plain text, therefor you can write it in any text editor (like notepad). Some text editors give you syntax highlighting as well. Few examples are [Notepad++](http://notepad-plus-plus.org/), [MdCharm](http://www.mdcharm.com/)

**What if I don't know all of the stuff you're talking about ?**

If you wrote a good lesson or improved an existing one but you don't know how to add it, don't worry just send it over to [contact@csunplugged.org.il](mailto:contact@csunplugged.org.il) and we'll add it. Just don't send us PDF documents because it will make it hard for us to copy/paste.
