# tal-config [![Build Status](https://travis-ci.org/bbcrd/tal-config.png?branch=master)](https://travis-ci.org/bbcrd/tal-config)

> Device configuration package for [TAL](http://fmtvp.github.io/tal/) Node.js backend ([`node-tal`](https://github.com/bbcrd/node-tal)) or any backend, really.

It is basically JSON files with a couple of JavaScript helpers to access them quickly.

# Install

```bash
npm install --save tal-config
```

# Usage

## Get a device configuration

The [connect middleware](http://www.senchalabs.org/connect/) will automatically update the HTTP response
MIME-Type as well as populating a `res.locals.tal` object (see below).

```js
var config = require('tal-config');

console.log(config.getJSON('devices', 'panasonic-tv_2013')); // -> TAL JSON config for Panasonic HbbTV 2013's model
```

## Serving a TAL application with Node.js

Use it in conjunction with [`node-tal`](https://github.com/bbcrd/node-tal) to make your Connect/Express routes
SmartTV compliant!

```js
var express = require('express');
var app = express();
var tal = require('tal');
var talConfig = require('tal-config');

app.get('/tvApp', tal.middleware(talConfig));

app.listen();
```

# Testing

Simply run the tests using the following command.

```bash
npm test
```

If you add a feature and don't have any knowledge in testing, propose your code anyway. Explain what you want to achieve,
what are the edge cases and we'll do our best to fill the blanks.

# License

> Copyright 2014 British Broadcasting Corporation

> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
> You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and limitations under the License.