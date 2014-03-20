Do not edit *.css files directly. They all are compiled by ruby from SASS (*.scss) files (SASS 3.3.2 version).
If you want to change or add something, add overriding styles in shame.css


Use sass watch in css folder instead:

	compile with indentation:
		sass --watch scss:.

	compile compressed:
		sass --watch scss:. --style compressed

	recompile all style files:
		sass --watch scss:. --style compressed --force --update



For more information on SASS read http://sass-lang.com/




