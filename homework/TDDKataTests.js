import assert from 'assert'

function add(str){
    if (!str){
        return 0
    }
    return 1
}

suite('String Calculator testing', function () {
    suite('when input is empty', function () {
        test('for empty as input string it will return 0', function() {
            let input = '';
            let sum = add(input);
            assert.equal(0, sum);
        });
    });
});