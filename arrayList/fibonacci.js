// 求斐波那契数列的前20个数字，已知第一个数是0，第二个数是1
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for(var i=2; i<20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
for(var i=0;i<20;i++) {
    console.log(fibonacci[i]);
}
