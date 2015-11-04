remisass
========
**re**sponsive, **mi**nimalistic, **SASS**  

Semantic responsive SCSS grid framework for modern browsers


Key features
------------
- **Semantics first**: no need to compile what you never use: `%placeholders` insdead of outputed `.class`.
- **Pre-build placeholders** for grid sizes (e.g. `%s-2-12`, meaning 2 columns of 12), buttons and form elements.
- Generate grid placeholders for **your own grid**, for any column numbers you want (fancy `%s-3-6`? Easy!).
- **Intelligent grid behaviour** for smaller screens (e.g. 12 columns become 6, then 4, then 1 when resizing).
- Benefit from other little **snippets and one-liners** for faster coding (e.g. for positioning, animation and gradient).
- Dealing with **vendor prefixes** without post-processor? Use mixins for css3 features or build your own for as many vendors as you need to.
- Resets, centered content, sticky footer and other layout snippets available.
- **Flexbox** based grid can be changed to inline-block based layout, which older browser support is just great!

See [demo page](http://work.wellagain.lt/remisass/) for visual presentation.

Structure
---------
- `commons` - reusable partials
 - `css3` -  one-liners for css3 features, also dealing with vendor prefixes
 - `layout` - layout-specific snippets, reset, grid and helpers
 - `utilities` - utilities (math) and shorthands
- `css` -  files for css compiling (table of contents). The order of includes is important.
- `project` - project-specific styles
 - `guides` - Colors, sizes, typography and RWD breakpoints
 - `layout` - All components for your project's layout


Give it a try
---------------
To start using, make sure you have SASS Sass 3.4.1 (Selective Steve) installed.

Use sass watch in `scss` folder for outputing in `css` folder:

compile compressed:
`sass --watch .:../ --style compressed`

For more information on SASS read http://sass-lang.com/

Put all project-specific styles in `project` folder, but edit `commons` on your own risk!
