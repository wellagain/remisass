remisass
========
**re**sponsive, **mi**nimalistic, **SASS**  

Semantic responsive SCSS grid framework for modern browsers


Key features
------------
- **Semantics first**: no need to compile what you never use: `%placeholders` insdead of outputed `.class`;
- **Pre-build placeholders** for grid sizes (e.g. `%s-2-12`, meaning 2 columns of 12), buttons and form elements;
- Generate grid placeholders for **your own grid**, for any column numbers you want (fancy `%s-3-6`? Easy!);
- **Intelligent grid behaviour** for smaller screens (e.g. 12 columns become 6, then 4, then 1 when resizing);
- Choose how your grid is outputed, using **inline-block** (default), **flexbox** or **floats** as your grid output setting;
- Normalize, centered content, sticky footer, responsive tables and other layout snippets available;
- Dealing with **vendor prefixes** without post-processor? Use mixins for css3 features or build your own for as many vendors as you need to.


See [demo page](http://work.wellagain.lt/remisass/) for visual presentation.

Structure
---------
- `commons` - reusable partials
 - `css3` -  Not using autoprefixer? Use these one-liners for css3 features
 - `layout` - layout-specific snippets, reset, grid and helpers
 - `utilities` - utilities (math) and shorthands
- `css` -  files for css compiling (table of contents). The order of includes is important.
- `project` - project-specific styles
 - `guides` - Colors, sizes, typography and RWD breakpoints
 - `layout` - All components for your project's layout


Give it a try
---------------
To start using, make sure you have SASS Sass 3.4.1 (Selective Steve) or higher installed.

Use sass watch in `scss` folder for outputing in `css` folder:

compile compressed:
`sass --watch .:../ --style compressed`

For more information on SASS read http://sass-lang.com/

Put all project-specific styles in `project` folder, but edit `commons` on your own risk!
