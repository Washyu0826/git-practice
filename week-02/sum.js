// 法一
function sum1(ary) {
	return ary.reduce((acc,val) => {
        return acc + val;},0);
}

console.log(sum1([1, 5, 3, 2])); // 11

//法二
const sum2 = (ary) => {
    return ary.reduce((acc,val) => acc +val,0);
  }
    
console.log(sum2([1, 5, 3, 7])); // 16