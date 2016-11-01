import assert from 'assert'



function add(value){
    if (value == ""){
        return 0
    }
    return value
}

suite('String Calculator testing', function () {
    suite('without init number',function(){
        test('Empty value will return 0', function() {
            let input = '';

            let sum = add(input);

            assert.equal(0, sum);
        });
    })

    suite('one init number',function(){
        test('1 value will return 1', function() {
            let input = 1;

            let sum = add(input);

            assert.equal(1, sum);
        });
    })

});