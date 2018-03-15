remisass
========
**re**sponsive, **mi**nimalistic, **SASS**  

Semantic responsive SCSS grid framework for modern browsers

[View demo](http://work.wellagain.lt/remisass/)
-----------------------------------------------

Key features
------------
- **Semantics first**: no need to compile what you never use: `%placeholders` insdead of outputed `.class`;
- **Total control of your grid** with `$columns` and `$grid-gutter` variables in settings;
- Choose how your grid is outputed, using **inline-block** (default), **flexbox** or **floats** as your grid output setting;
- Set your element grid size for all screens with one line of include: `grid(3 gap, 6 gap, 12)`;
- Intuitive control over repeating same-size elements: use `per-row(12, 6, 3, 2)` to make 12 colums collapsing to 6 on tablets, 3 on landscape and 2 on portrait mobile;
- Smart context-aware mixin for automatic grid calculations of same-size elements, based on `quantity queries`;
- Normalize, centered content, sticky footer, responsive tables and other layout snippets available;
- Use icons from available 4 icon sets as easy as `content: icon(heart)`;



See [demo page](http://work.wellagain.lt/remisass/) for visual presentation.

Structure
---------
- `commons` - reusable partials
 - `layout` - layout-specific snippets, reset, grid and helpers
 - `utilities` - utilities (math) and shorthands
- `guides` - Colors, sizes, typography and RWD breakpoints
- `layout` - All components for your project's layout
 - `elements` - Common layout elements (header, footer, etc)
 - `views` - Specific page views
- `app.scss` - file for css compiling (table of contents). The order of includes is important.


Give it a try
---------------
To start using, make sure you have SASS Sass 3.4.1 (Selective Steve) or higher installed.

Use sass watch in `scss` folder for outputing in `css` folder:

compile compressed:
`sass --watch scss:css --style compressed`

For more information on SASS read http://sass-lang.com/

