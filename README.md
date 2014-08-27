remisass
========

Responsive Minimalistic grid sass framework for modern browsers
(@media and :nth-of-type support is requred)

See <a href="http://work.wellagain.lt/remisass/">demo page</a> for visual representation


Do not edit .css files directly. They all are compiled by ruby from SASS (.scss) files (SASS 3.4.1 version recommended).


Use sass watch in **scss** folder instead:

	compile with indentation:
		sass --watch .:../

	compile compressed:
		sass --watch .:../ --style compressed

	recompile all style files:
		sass --watch .:../ --style compressed --force --update


For more information on SASS read http://sass-lang.com/
