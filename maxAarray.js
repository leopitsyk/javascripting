var numbers= [11, 220, 33, 56, 44 ];
var max= numbers[0];
for (var i=1;i<numbers.length;i++ ){
	if (max<numbers[i]){
		 max=numbers[i];
	}
 		
}
console.log(max);