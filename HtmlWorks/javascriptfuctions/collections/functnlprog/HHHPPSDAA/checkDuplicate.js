
var myString ="HHHTTTT"
var array = myString.split('');
console.log(array);
    var newArray = [];
    for (var i in array){
        console.log(i)
        if(newArray.indexOf(array[i]) == -1){ ///x2 =H,T
            newArray.push(array[i])
        }
    }

    console.log(newArray)


/*
collection

key  -- in
value --of


HELLO

*/

var arrayExample =[ 'S', 'A' ,'M']
for (var i of arrayExample){
   // console.log (i);
}

var keyValueExample ={H:'3',P:"2",S:"1"};
for (var j in  keyValueExample){
    console.log (j);
    console.log (keyValueExample[j]);
    }

