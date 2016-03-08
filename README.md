react-mt-svg-lines
==================

*NOTE: Still experimenting, not ready for "public consumption"...*

### Bring your SVGs to life
A wrapper component that lets you trigger "animated lines" in your SVGs. Use it add visual interest to status icons, loading spinners, schematics, or just any fun stuff!

### How it works
The component takes any SVG content as `children` and generates the required CSS to animate the `stroke-dashoffset` property on every `path` element inside (you can exclude specific paths). For a description of the technique, see [CSS-Tricks](https://css-tricks.com/svg-line-animation-works/).

### Usage
Install it in your project
```
npm install react-mt-svg-lines
```

Require it in your component
```js
import MtSvgLines from `react-mt-svg-lines`;
// or...
var MtSvgLines = require('react-mt-svg-lines');
```

Render in JSX, wrapping any SVG content..
```js
<MtSvgLines
  viewBox="0 0 100 100"
  animate={ true }
  duration={ 250 }
  timing="ease-in"
>
  <path stroke="#FFF" strokeWidth="10" fill="none" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5"/>
</MtSvgLines>
```

### Current Caveats
* The technique only works on SVG `path` elements, with a `stroke` defined
* The SVG structure should be shallow, specifically, the paths must be at the same level of nesting. Otherwise, the generated CSS rules will not work on all paths (only some will animate). To optimize your SVGs beforehand, I recommend [svgo](https://github.com/svg/svgo).
* Remember to pass your SVG's original `viewBox` prop, so that you can render your component at any size. By default, the SVG content will expand to fill its container, but you can give it a `width` (either in finite units, or percentage).

### Props
