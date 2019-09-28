// the following method is very slow.

var fibonacci = function(n){
	return n<2 ? n : fibonacci(n-1) +  fibonacci(n-2);
};
var arrayOfFib= [];
for(var i = 0;i <=3; i+=1){
    console.log(i+':'+fibonacci(i));
    arrayOfFib.push(fibonacci(i));
}

console.log(arrayOfFib);
//======================
//针对下面链接中提出的问题的解答：
//https://ask.csdn.net/questions/387801
//以下是用Javascript 计算前20个斐波那契数的代码：

var fibonacci = function(n){
	return n<2 ? n : fibonacci(n-1) +  fibonacci(n-2);
};
var arrayOfFibonacciNumbers= [];
for(var i = 0;i <=19; i+=1){
    arrayOfFibonacciNumbers.push(fibonacci(i));
}

console.log(arrayOfFibonacciNumbers);
