# <h1 id="top" align="center">auturge/expect-cwd</h1> #

<p align="center">
  Terminates the process if the user is acting from the wrong working directory.
</p>

[![License][license-image]][license-url]
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

<br>

## Getting Started ##

@auturge/expect-cwd is available as source code from [GitHub][github-url], or as a package on [npm][npm-url].

Install it using the follow terminal command:

> ```shell
> $ npm install @auturge/expect-cwd
> ```

<br>

----

## Using expect-cwd ##

Place the command in your npm script. For example:

```json
{
    "scripts": {
        "prepublishOnly": "expect-cwd ./dist"
    }
}
```

In this example, if I try to run ```npm publish``` from the project root, `expect-cwd` will tell me to change to the `./dist` folder, and then terminate the process.

> NOTE: This does NOT make node aware of your scripts from different folders.
>
> That is, if you put `expect-cwd` in a `package.json` script, you'll need to either be able to run that command from the target folder natively, or you'll need a `package.json` in the target folder.

<br>

----

## Contributing and Internal Documentation ##

The auturge family welcomes any contributor, small or big. We are happy to elaborate, guide you through the source code and find issues you might want to work on! To get started have a look at our [documentation on contributing][contributing].

<br>

----

## License ##

Distributed under the MIT license. See [`LICENSE`][license] for more information.

<br>

[home]: https://github.com/auturge/expect-cwd#top
[discussions]: https://github.com/auturge/expect-cwd/discussions/
[github-url]: https://github.com/auturge/expect-cwd

[auturge-github-homepage]: https://github.com/auturge/auturge#top
[contributing]: https://github.com/auturge/auturge/blob/master/docs/CONTRIBUTING.md#top

[license]: https://github.com/auturge/auturge/blob/master/LICENSE
[license-image]: http://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: http://badges.mit-license.org
[npm-image]: https://img.shields.io/npm/v/@auturge/expect-cwd.svg
[npm-url]: https://www.npmjs.com/package/@auturge/expect-cwd
[travis-image]: https://travis-ci.com/auturge/expect-cwd.svg?branch=master
[travis-url]: https://travis-ci.com/github/auturge/expect-cwd
[coveralls-image]: https://coveralls.io/repos/github/auturge/expect-cwd/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/auturge/expect-cwd?branch=master
