// 1.

function reverse(array){
	return array.reverse();
}

// 2.

function box(string){
 setTimeout(function(){
 	alert(string)
 }, 3000)

}


//3. 

var obj = [
['a', 'b', 'r', 'a'],
{array: [ 'c', 'a', 'd', 'a', 'b', 'r', 'a']}
]

var string = obj[0] + obj[1].array;
var array = []
for(let i=0;i<string.length;i++){
	if(string[i] === ','){
		string[i+1]
	}else {
		array.push(string[i])
	}
}
console.log(array.join(''))


//4.
function consonants(string){
	var array=[];
	var something = string.split('');
	for(var i = 0;i<something.length;i++){
		if(something[i] === 'a' || something[i] === 'e'){
			something[i+1]
		}else {
			array.push(something[i])
		}

	}
	console.log(array)

}
