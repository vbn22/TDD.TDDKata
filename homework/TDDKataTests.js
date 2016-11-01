import assert from 'assert'



function add(input){
    let result = 0;
    if (input == ""){
        return 0
    }
    for (let element of input.toString().split(',')){
        result+= parseInt(element);
    }
    return result
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

    suite('two init numbers',function(){
        test(' 1,2 value will return 3', function() {
            let input = "1,2";

            let sum = add(input);

            assert.equal(3, sum);
        });
    })

    suite('more that two init numbers',function(){
        test(' 1,2,3 value will return 6', function() {
            let input = "1,2,3";

            let sum = add(input);

            assert.equal(6, sum);
        });
    })

});