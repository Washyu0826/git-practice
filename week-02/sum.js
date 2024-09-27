// 加總輸入陣列元素之函式

// 法一
function sum1(ary) {
	return ary.reduce((acc,val) => {
        return acc + val;},0);
}

console.log(sum1([1, 5, 3, 2])); // 11

// 法二
const sum2 = (ary) => {
    return ary.reduce((acc,val) => acc +val,0);
  }
    
console.log(sum2([1, 5, 3, 7])); // 16

// 輸入為n，輸出1+2+..n 之加總函式

// 法一
function sumtotal(n) {
    return (n*(n+1)/2);
}
// 法二
function generateAry(n) {
    if (n <= 0) { return [];} 
    return generateAry(n - 1).concat(n); 
}
function sumtotal(n) {
    return generateAry(n).reduce((acc, curr) => acc + curr, 0);
}
