For the code challenge, you will be building a simple web page that will allow the user to load a .json file that follows a certain syntax but is arbitrarily nested. When that file is loaded, you will generate HTML based on the nested structure and display that HTML on the page.

For an example, visit the solution site.

To learn how to read a file locally, this article is a great start: HTML5rocks

Goals

Get as far as you can with the tasks above
Separate and clean your code so it's readable and presentable
Make multiple, clear commits to demonstrate your knowledge of git
Do not worry about designing the site in any particular format
Deploy your static site and email me the URL
Note: You may use whatever resources you want to solve the problem besides your instructors! We want you to craft together a solution as best you can. 😀

Tips

Remember Polya's Problem Solving Technique -- feel free to ask for clarification on edge cases and make sure to break apart the problem!
The above article on reading files locally has some good examples to get started but you'll likely need to read through the full article to get to the right answer
When parsing the JSON, notice that each object has the exact same structure which means you'll likely want to find a recursive solution and/or use a while loop
Sample JSON

The following files should all work with your website. Copy each code block into a separate file and then load it into the example website to see what might be rendered.
```json
[
  {
    "tag": "section",
    "content": {
      "tag": "p",
      "content": "Hello world!"
    }
  }
]
[
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "This file is a bit more complicated because:"
    }
  },
  {
    "tag": "section",
    "content": {
      "tag": "ol",
      "content": [
        {
          "tag": "li",
          "content": "There are multiple levels of nesting."
        },
        {
          "tag": "li",
          "content": "Some keys are at the same level."
        },
        {
          "tag": "li",
          "content": "The data types are mixed!"
        }
      ]
    }
  }
]
[
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "Welcome to My Page!"
    }
  },
  {
    "tag": "section",
    "content": [
      {
        "tag": "h3",
        "content": "My Favorite Things"
      },
      {
        "tag": "ul",
        "content": [
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/201/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/201'/>"
          }
        ]
      },
      {
        "tag": "p",
        "content": [
          {
            "tag": "span",
            "content": "In short, I "
          },
          {
            "tag": "strong",
            "content": "just love"
          },
          {
            "tag": "span",
            "content": " kittens!"
          }
        ]
      }
    ]
  }
]
```
