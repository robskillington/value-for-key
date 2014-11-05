# value-for-key

When you want to get and set value for keys on objects without causing JSHint camel case errors.

If you also keep getting errors like this:

```js
  object.someField = json.some_json_key;
```

```js
  file.js: line 56, col 0, Identifier 'some_json_key' is not in camel case.
```

Then this module is for you!

Now just:

```js
  object.someField = valueForKey(json, 'some_json_key');
```

## Installation

`npm install value-for-key`

## Tests

`npm test`

## MIT Licensed
