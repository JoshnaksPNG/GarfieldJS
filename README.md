# GarfieldJS
 JS Wrapper To Retrieve Garfield Comic Raw URL

## Examples
 GarfieldJS provides 5 asyncronous functions that return promises containing the URL of the desired strip, as well as 3 dates of notable garfield strips

```jsx
const { getGarfield, todayGarfield, randomGarfield, randomThreePanel, randomSunday, FIRST_GARFIELD, PIPE_COMIC, WINDOW_COMIC } = require("garfieldjs");

// Log the URL of March 3rd, 1999's Garfield strip ( Note: Months start at 0 (January) )
getGarfield(new Date(1999, 2, 3)).then(s => console.log("March 3rd, 1999 URL: " + s));

// Log the URL of Today's Garfield strip
todayGarfield().then(s => console.log("tod " + s));

// Log the URL of a Random Garfield strip
randomGarfield().then(s => console.log("rand " + s));

// Log the URL of a Random Sunday (long) Garfield strip
randomSunday().then(s => console.log("sun " + s));

// Log the URL of a Random 3-Panel (not Sunday) Garfield strip
randomThreePanel().then(s => console.log("three " + s));

// Log the URL of the first ever Garfield strip
getGarfield(FIRST_GARFIELD).then(s => console.log("first " + s));

// Log the URL of the famed pipe strip
getGarfield(PIPE_COMIC).then(s => console.log("pipe " + s));

// Log the URL of the famed window strip
getGarfield(WINDOW_COMIC).then(s => console.log("window " + s));
```
