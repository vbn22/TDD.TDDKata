import assert from 'assert'


function getCustomDelimiters(str){
    return str.match(/\/\/(.*)\n/);
}

function hasDelimiters(str){
    let result = 0;
    let delimiters = /,|\n/;
    if (str.indexOf('//') > -1){
        delimiters = getCustomDelimiters(str);
        str = str.replace(delimiters[0],'');
        delimiters = delimiters[1];
    }
    for (let value of str.split(delimiters)){
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

    suite('when delimiter is custom char (//[delimiter]\\n[numbers…])', function () {
        test('for //;\\n1;2;3 as input string it will return 6', function() {
            let input = '//;\n1;2';
            let sum = add(input);
            assert.equal(3, sum);
        });
    });

});