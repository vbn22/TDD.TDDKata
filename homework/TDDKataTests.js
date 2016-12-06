import assert from 'assert'


function get_numbers(str){
    let delimiters = /,|\n/;
    return str.split(delimiters);
}

function add_numbers(str){
    let result = 0;
    for (let i of get_numbers(str)){
        result += parseInt(i);
    }
    return result
}

function add(str){
    if (!str){
        return 0;
    } else {
        return add_numbers(str);
    }

}

suite('String Calculator testing', function () {
    suite('when input is empty', function () {
        test('for empty as input string it will return 0', function() {
            let input = '';
            let sum = add(input);
            assert.equal(0, sum);
        });
    });

    suite('when input is two numbers', function () {
        test('for 1,2 as input string it will return 3', function() {
            let input = '1,2';
            let sum = add(input);
            assert.equal(3, sum);
        });
    });

    suite('when input is several numbers', function () {
        test('for 1,2,3 as input string it will return 6', function() {
            let input = '1,2,3';
            let sum = add(input);
            assert.equal(6, sum);
        });
    });

    suite('when input contain several delimiters', function () {
        test('for 1\n2,3 as input string it will return 6', function() {
            let input = '1\n2,3';
            let sum = add(input);
            assert.equal(6, sum);
        });
    });
});