import assert from 'assert'

function add(str){
    if (!str){
        return 0
    } else {
        let result = 0
        for (let i of str.split(',')){
            result += parseInt(i);
        }
        return result
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

    suite('when input is numbers', function () {
        test('for 1,2 as input string it will return 3', function() {
            let input = '1,2';
            let sum = add(input);
            assert.equal(3, sum);
        });
    });
});