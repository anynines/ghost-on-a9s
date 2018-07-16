# a9s CVE Security Bulletin Theme

Version 1.0 of the a9s CVE Security Bulletin Board for [Ghost](http://github.com/tryghost/ghost/).
This theme is based off [Casper by Ghost Foundation](https://github.com/TryGhost/Casper).

## Copyright & License

Copyright (c) 2013-2017 Avarteq GmbH - Released under the [MIT license](LICENSE).

## Editing & updating the theme

We use [Brunch](https://brunch.io) asset pipeline to generate the final CSS and JavaScript
files for the theme off source files. The source files can be found in `src`, the
generated files end up in `assets`. To edit the theme, you'll need:

- Yarn (1.7.0 works at the time of writing)
- Brunch (`npm install -g brunch`)

Once you're set up, install all the required dependencies using

```
$ yarn install
```

That will set up the dependencies for generating CSS and JavaScript files. Now you can use

```
$ brunch build
```

to build the assets, or

```
$ brunch watch
```

For auto-regenerating assets on update. For details of how it works, consult `brunch-config.js`
file and [Brunch documentation](http://brunch.io/docs/).

## Code quality

The theme source files are set up with [SassLint](https://github.com/sasstools/sass-lint),
[ESLint](https://eslint.org/) as well as [CSScomb](http://csscomb.com/) with anynines configuration
files for automatic code quality assurance. Before pushing, make sure your code isn't throwing
any major errors with any of those tools (some minor warnings are okay). To do that, you can
run any of the commands below:

```
$ sass-lint -v
$ eslint .
```

To use CSScomb for cleaning up your stylesheets, you can use: 

```
$ csscomb src/css
```

For quality rules, feel free to review `.eslintrc`, `.sasslintrc` and `.csscomb.json`, as well
as documentation pages for the respective tools. Enjoy!
