import assert from 'assert'

function hasDelimiters(str){
    let result = 0;
    for (let value of str.split(/,|\n/)){
        result += parseInt(value);
    }
    return result;
}

function add(str){
    if (!str){
        return 0
    }
    return hasDelimiters(str);
}

suite('String Calculator testing', function () {
    suite('when input is empty', function () {
        test('for empty as input string it will return 0', function() {
            let input = '';
            let sum = add(input);
            assert.equal(0, sum);
        });
    });

    suite('when input is several numbers', function () {
        test('for 1,2,3 as input string it will return 6', function() {
            let input = '1,2,3';
            let sum = add(input);
            assert.equal(6, sum);
        });
    });

    suite('when input string has several delimiters', function () {
        test('for 1\\n2,3 as input string it will return 6', function() {
            let input = '1\n2,3';
            let sum = add(input);
            assert.equal(6, sum);
        });
    });

});