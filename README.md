## Computer Science Unplugged IL ##

Website: [http://www.csunplugged.org.il](http://www.csunplugged.org.il)

Based on [Computer Science Unplugged](http://www.csunplugged.org/) program. Designed to help teach basic principals of computer science to kids (but also grown ups).

All of the lessons are in Hebrew, most of them were translated by [Benny Chor](http://www.tau.ac.il/~bchor/) and [Shimon Schocken](http://shimonschocken.com/).



## Contribution ##


Wanna contribute to the project ? Yay !!

The website is powered by [Node.js](http://nodejs.org/), [Harpjs](http://harpjs.com/) and [Twitter bootstrap](http://getbootstrap.com/). Feel free to fork the repository and hack on it. When your'e done, send us a pull request and we'll add the change.

**What we need ?**

- Help with **design**, i'm bad at css and aesthetics.
- Going through the lessons and constantly improve them.
- Anything else, checkout the Github [issues page](https://github.com/mderazon/csu-il/issues)

## Requirements ##
- [Node.js](http://nodejs.org/)

## Installation and running ##
Download a local copy of the code.
Go to the project root folder and enter:

    $ npm install
    $ node app.js

When it's done you can open your browser at `http://localhost:8080`.

## Adding lessons ##
For simplicity, lessons are written in [Markdown](http://daringfireball.net/projects/markdown/syntax) and rendered to HTML on the fly. If Markdown syntax is not enough, you can use standard HTML tags like `<img>` or `<table>` inside the Markdown file and it should work just fine.
- Put the lesson file in `/public/lessons` with all the other lessons files.
- Lessons file names should be all lowercase with `-` instead of spaces. For example `binary-numbers.md`. Harpjs knows how to take a markdown file and turn it into html automatically.
- Put any additional resources (lesson images for example) in a dedicated folder under lessons folder. Name the folder same as the lesson file. For example, `/public/lessons/binary-numbers`. Every lesson folder needs to contain a `thumbnail.png` file which is like the lesson logo that is shown on the lessons list page.
- Each lesson should be added to `/public/lessons/_data.json` file. Look at the format of previous lessons there and just add an entry.
Markdown is basically just plain text, therefor you can write it in any text editor (like notepad). Some text editors give you syntax highlighting as well. Few examples are [Notepad++](http://notepad-plus-plus.org/), [MdCharm](http://www.mdcharm.com/)

**What if I don't know all of the stuff you're talking about ?**

If you wrote a good lesson or improved an existing one but you don't know how to add it, don't worry just send it over to [contact@csunplugged.org.il](mailto:contact@csunplugged.org.il) and we'll add it. Just don't send us PDF documents because it will make it hard for us to copy/paste.
