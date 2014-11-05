var valueForKey = require('../index');
var setValueForKey = require('../index').set;
var test = require('cached-tape');

test('should set and return the value for the key', function t(assert) {
    var object = {};
    var someValue = {a: 1, b: 2, c: 3};

    setValueForKey(object, 'some_key', someValue);

    assert.equal(valueForKey(object, 'some_key'), someValue);
    assert.end();
});
