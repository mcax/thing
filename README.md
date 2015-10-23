# Thing

The core model of generic item.

## Installation


```sh
$ npm install mcax-thing --save
```

## Usage

~~~js
var Thing = require('mcax-thing');

var data = {
        name: 'Star',
        description: 'A star is a luminous sphere of plasma.',
        sameAs: 'https://en.wikipedia.org/wiki/Star'
    };

var thing = new Thing(data);
~~~

## Tests

Run tests with Mocha

~~~sh
$ make test
~~~


## Check

- <https://schema.org/Thing>


## License

The MIT License
