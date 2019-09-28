// the following method is very slow.

var fibonacci = function(n){
	return n<2 ? n : fibonacci(n-1) +  fibonacci(n-2);
};
for(var i = 0;i <=35; i+=1){
	console.log(i+':'+fibonacci(i));
}
//======================
