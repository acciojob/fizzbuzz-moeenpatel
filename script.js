//your JS code here. If required.
function fizzBuzz(){
	let arr=[];

	for(let i = 1;i<100;i++){

		if(i % 3==0  && i % 5==0){

			arr.push("FizzBuzz");
		}

		else if( i % 3 ==0){

			arr.push("Fizz");
		}
		else if(i % 5==0){
			arr.push("Buzz");
		}
		else{
			arr.push("i");
		}
		
	}
	console.log(arr);
}
fizzBuzz();