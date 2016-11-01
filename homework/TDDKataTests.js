import assert from 'assert'


function delimiters(str){
    let result = 0;
    for (let element of str.toString().split(/,|\n/)){
        result+= parseInt(element);
    }
    return result;
}
function add(str){
    
    if (str == ""){
        return 0
    }

    return delimiters(str)
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

    suite('new line delimiter',function(){
        test(' 1\\n2,3 value will return 6', function() {
            let input = "1\n2,3";

            let sum = add(input);

            assert.equal(6, sum);
        });
    })

});