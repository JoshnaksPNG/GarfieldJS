# [GarfieldJS](https://www.npmjs.com/package/randomwikipediajs) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JoshnaksPNG/RandomWikipediaJS/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/garfieldjs.svg?style=flat)](https://www.npmjs.com/package/garfieldjs)
 JS Wrapper To Retrieve Garfield Comic Raw URL

## Usage
 GarfieldJS provides 5 asyncronous functions that return promises containing the URL of the desired strip, as well as 3 dates of notable garfield strips

```jsx
const { getGarfield, todayGarfield, randomGarfield, randomThreePanel, randomSunday, FIRST_GARFIELD, PIPE_COMIC, WINDOW_COMIC } = require("garfieldjs");

// Log the URL of March 3rd, 1999's Garfield strip ( Note: Months start at 0 (January) )
getGarfield(new Date(1999, 2, 3)).then(s => console.log("March 3rd, 1999 URL: " + s));

// Log the URL of Today's Garfield strip
todayGarfield().then(s => console.log("Today URL: " + s));

// Log the URL of a Random Garfield strip
randomGarfield().then(s => console.log("Random URL: " + s));

// Log the URL of a Random Sunday (long) Garfield strip
randomSunday().then(s => console.log("Sunday URL: " + s));

// Log the URL of a Random 3-Panel (not Sunday) Garfield strip
randomThreePanel().then(s => console.log("Three Panel URL: " + s));

// Log the URL of the first ever Garfield strip
getGarfield(FIRST_GARFIELD).then(s => console.log("First URL: " + s));

// Log the URL of the famed pipe strip
getGarfield(PIPE_COMIC).then(s => console.log("Pipe URL: " + s));

// Log the URL of the famed window strip
getGarfield(WINDOW_COMIC).then(s => console.log("Window URL: " + s));
```
