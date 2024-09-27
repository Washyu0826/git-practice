//法一:遞迴法 時間複雜度:O(2^n) 空間複雜度:O(n)
function fib(n) {
    if (n === 1) {return 1;}
    if (n === 2) {return 1;}
    else {return fib(n - 1) + fib(n - 2);}
  }
  
  console.log(fib(1)); 
  console.log(fib(2)); 
  console.log(fib(5));
  console.log(fib(10));
  
//法二:動態規劃 時間複雜度:O(n) 空間複雜度:O(n)
function fib(n) {
    if (n === 0) {return 0;}
    if (n === 1) {return 1;}
    const dp = new Array(n + 1);
    dp[0] = 0; // F(0)
    dp[1] = 1; // F(1)
    for (let i = 2; i <= n; i++) {
       dp[i] = dp[i - 1] + dp[i - 2]; // F(n) = F(n-1) + F(n-2)
  }
}

//法三:for迴圈  時間複雜度:O(n) 空間複雜度:O(1)
function fib(n) {
    if (n === 0) {return 0;} 
    if (n === 1 || n === 2){ return 1;} 

    let a = 1; // F(1)
    let b = 1; // F(2)
    let temp;
    for (let i = 3; i <= n; i++) {
        temp = a + b; 
        a = b;        
        b = temp;     
    }
    return b; 
}



