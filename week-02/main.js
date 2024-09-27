import Stack from "./stack.js";

const testStack = new Stack(3);

// 1.測試容量
try {
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.push(4); // 超過容量錯誤
} catch (e) {
    console.log(e.message); // "Stack overflow"
}

console.log("Current stack:");
testStack.print(); //  [1, 2, 3]

// 2.測試元素類型
try {
    testStack.push("four"); // 不支援字串
} catch (e) {
    console.log(e.message); // "Type Error"
}

// 3.測試完整性
console.log("Current stack size:", testStack.size()); // 3
console.log("Contains 2?", testStack.contains(2)); // true
console.log("Contains 5?", testStack.contains(5)); // false

// 4.測試 toArray 方法
console.log("Stack as array:", testStack.toArray()); //  [1, 2, 3]



