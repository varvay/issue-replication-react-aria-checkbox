# React Aria Checkbox Anomaly

## Run the Web App
As pre-requisite to run this project, you must have NPM and Vite installed on your local machine.

1. clone this project
2. execute `npm i` inside the project root directory
3. execute `npm run dev` inside the project root directory
4. observe the expected result by accesing the page under root path `/` or `/normal`
5. observe the anomaly result by accessing the page under anomaly path `/anomaly`
6. observe the workaround result by accessing the page under workaround path `/workaround`
7. observe the impact of the visually hidden wrapper by accessing the page under rootcause path `/rootcause`

## Issue Description

An unexpected behavior on the rendered document where the React Aria `Checkbox` components resides outside container somehow still took place physically but invisible when it mustn't. Such issue occurred when the container have CSS properties of `max-width`, `margin-left: auto`, `margin-right: auto` and `overflow: hidden`, and containing overflowing React Aria `Checkbox`, but not with other component such React Aria `TextField`.

The cause of the problem scouted to be the wrapper component of `VisuallyHidden` from React Aria.

Here's the snippet of the container CSS,
```
.container {
  width: 100vw;
  max-width: 80vw;
  height: 100vh;
  max-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: lightsteelblue;
}
```

Here's the comparison of the rendered page with same CSS properties but containing different component (React Aria `Checkbox` and `TextField`),

### With Checkbox
[![With Checkbox][1]][1]

### With TextField
[![With TextField][2]][2]


  [1]: https://i.sstatic.net/pVEjdsfg.png
  [2]: https://i.sstatic.net/A2QzXhl8.png