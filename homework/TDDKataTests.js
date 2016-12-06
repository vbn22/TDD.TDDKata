import assert from 'assert'




function get_numbers(str){
    let delimiters =  str.match(/\/\/(.*)\n/);
    if (delimiters == null){
        return str.split(/,|\n/);
    } else {
        let new_str = str.replace(delimiters[0],'');
        return new_str.split(delimiters[1]);
    }
}

function check_negative(str){
    let error_values = []
    for (let i of get_numbers(str)){
        let number = parseInt(i);
        if (number < 0){
            error_values.push(i)
        }
    }
    if (error_values.length > 0){
        throw new Error('negatives not allowed, negatives values:'+','.join(error_values));
    }
}

function add_numbers(str){
    let result = 0;
    check_negative(str);
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
            assert.equal(1+2, sum);
        });
    });

    suite('when input is several numbers', function () {
        test('for 1,2,3 as input string it will return 6', function() {
            let input = '1,2,3';
            let sum = add(input);
            assert.equal(1+2+3, sum);
        });
    });

    suite('when input contain several delimiters', function () {
        test('for 1\n2,3 as input string it will return 6', function() {
            let input = '1\n2,3';
            let sum = add(input);
            assert.equal(1+2+3, sum);
        });
    });

    suite('when input contain custom delimiters', function () {
        test('for //;\\n1;2;3 as input string it will return 6', function() {
            let input = '//;\n1;2;3';
            let sum = add(input);
            assert.equal(1+2+3, sum);
        });
    });

    suite('when input contain negative values', function () {
        test('for //;\\n-1;-2;3 as input string it will throw exception', function() {
            let input = '//;\n-1;-2;3';
            assert.throws( function() { add(input); }, Error );

        });
    });
});