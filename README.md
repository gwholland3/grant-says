# Pre-work - *Grant Says*

**Grant Says** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Grant Holland**

Time spent: **3** hours spent in total

Link to project: https://grant-says.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Game buttons no longer have an outline around them when clicked

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/c2bdc010-8c63-44c5-9e67-0a2e51f9c79e%2Fproject_gif.gif?v=1616643451910)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    * https://www.doctormix.com/blog/note-to-frequency-chart
    * https://www.rapidtables.com/web/css/css-color.html
    * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
    * https://www.w3schools.com/js/js_arrays.asp
    * w3schools.com/tags/tag_img.asp
    * https://stackoverflow.com/questions/6305141/show-child-div-on-mouse-hover-of-parent-needs-javascript
    * https://www.w3schools.com/CSSref/pr_class_float.asp
    * https://stackoverflow.com/questions/13998677/html-css-button-positioning
    * https://www.w3schools.com/CSSref/pr_class_display.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    One challenge I encountered was when I was trying to add images to the game buttons. 
    I wanted to have each button show a picture of which note was being played on a staff. 
    However, when I tried to add an image as the content of a specific button, it made the button change position, which didn't look very clean.
    I was having a really hard to figuring out why that was happening, especially since making the image smaller seemed to make the button shift position even more.
    
    To overcome this, I tried searching online for this sort of behavior, and I didn't have too much luck. 
    Eventually, however, I found a Stack Overflow question about a similar issue and saw someone recommend using the CSS `float` property on the child elements.
    After experimenting with this for a bit, I found that styling the game buttons with `float: left` caused them to stop shifting when I added an image.
    I don't think this was the best way to solve this problem, nor do I understand fully why it worked, but it did work with no noticable side effects, so I stuck with it.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    After working on this project, I'm curious what additional languages or tools most web developers use to make their websites more powerful and their development process easier.
    For example, I've heard of JavaScript tools such as React or Express, and CSS extensions like Sass.
    
    I also really want to know more about what exactly happens when someone uses a web browser to make a get request to a website. 
    Too much of that process is just a black box in my mind, and I'd really love to understand the internals better.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

    If I had some more time for this project, the first thing I would do is implement the clock that times the player on every turn, and make sure my game displays the time live to the player.
    
    I would also like to reexamine my CSS stylesheet and see if I could somehow simplify it, since there are a lot of redundant or very similar rules in it. 
    For example, I had to have three rules for every button, so every time I wanted to add a new button I would have to do a lot of copy-pasting. 
    Especially when I added the images to the buttons, the styling to make them show when their button was clicked had a near identical selector to the rule controlling the button's behavior.
    



## License

    Copyright Grant Holland

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
