remisass
========

Semantic responsive SCSS framework for modern browsers


Why to consider?
---------------
- Don't ever compile what you never use: `%placeholders` insdead of outputed `.class`.
- Pre-build placeholders for grid sizes (e.g. `%s-2-12`), buttons and form elements. 
- Intelligent grid behaviour for smaller screens (e.g. 12 columns become 6, then 4, then 1).
- Generate grid placeholders for your own grid, for any column numbers you want (fancy `%s-3-6`? easy!).
- Benefit from other little snippets and one-liners for faster coding.

See <a href="http://work.wellagain.lt/remisass/">demo page</a> for visual presentation.


Give it a try
---------------
To start using, make sure you have SASS Sass 3.4.1 (Selective Steve) installed.

Use sass watch in `scss` folder for outputing in `css` folder:

compile with indentation:
`sass --watch .:../`

compile compressed:
`sass --watch .:../ --style compressed`

recompile all style files:
`sass --watch .:../ --style compressed --force --update`


For more information on SASS read http://sass-lang.com/
