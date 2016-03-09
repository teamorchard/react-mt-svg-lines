react-mt-svg-lines
==================

### Bring your SVGs to life

![GIF Demo]('showcase.gif')

[Live Demo](http://moarwick.github.io/react-mt-svg-lines)

A React.js wrapper component that lets you trigger "animated lines" in your SVGs. Use it to add visual interest to icons, diagrams, loading spinners, or just any fun stuff!


### How it works
The component wraps an SVG and injects CSS required to animate the `stroke-dashoffset` property on every* `path` element within. For a description of the technique, see this [article](https://css-tricks.com/svg-line-animation-works/).


### Installation
```
npm install react-mt-svg-lines --save
```

### Usage
Require `MtSvgLines` into your component...
```js
import MtSvgLines from 'react-mt-svg-lines';
// or...
var MtSvgLines = require('react-mt-svg-lines');
```

In your JSX, wrap it around any valid SVG... 
```js
<MtSvgLines animate={ true } duration={ 250 }>
  <svg viewBox="0 0 100 100">
    <path stroke="green" strokeWidth="10" fill="none" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5"/>
  </svg>
</MtSvgLines>
```
BOOM!


### Props

##### `className: string`
Your custom CSS class to be applied to the `span` wrapper. Default is `"mt-svg"`.

##### `animate: string || number || bool`
Your animation "trigger key":

* `false` renders the SVG instantly (default)
* `true || string` triggers animation immediately
* `number` triggers animation after a delay, per the passed in value (ms)  
* `"hide"` hides the SVG (rendered with `opacity: 0`)

If you need to re-trigger the animation, simply pass in a new `string` or `number` (different from the last value). You can generate it, e.g. `String( Date.now() )`. Have a look at the [DemoPage](https://github.com/moarwick/react-mt-svg-lines/blob/master/src/components/DemoPage.js) code. 

##### `duration: number`
Desired duration of one full cycle of the entire animation, across all paths (ms). Default is `1000`.

##### `stagger: number (0-100)`
Delay between the start times of each path, in SVGs with multiple paths. Default is `0`.

##### `timing: string`
Desired CSS "timing function" type: `"ease" || "ease-in" || "ease-out" || "ease-in-out" || "linear" || "step-start" || "step-end"`. Default is `"ease"`.

##### `options: string`
Any additional valid CSS [`animation`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) shorthand props, specifically `iteration-count || direction || fill-mode || play-state`. Default is `"forwards"` (play once and stop), but feel free to experiment. For example, the spinner example is set to `"6 alternate-reverse both"`.

> All other `props` are passed through to the wrapper `span`
 

### Getting Fancy
What if you don't want the animation applied to *ALL* of the path elements inside your SVG? Add a data attribute of `data-mt=skip` to any path and it will draw instantly. So will other SVG shapes (see below).


### Current Caveats
* The technique only applies to SVG `path` elements with a `stroke` defined. Other SVG primitives, e.g. circles, rectangles, polylines, will render instantly.
* The path elements should sit at the same nesting level within the SVG structure. Otherwise, the generated CSS rules will not target correctly. Also, the order matters. You can edit your SVGs manually, or try [svgo](https://github.com/svg/svgo).
* You should always specify the `viewBox` on your SVG, so that you can render it at any size. By default, the SVG content will expand to fill its container, but you can give it a `width` (either in finite units, or percentage).

 
