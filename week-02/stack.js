export default class Stack {
	
  #items;  // #表此類別中私有的物件，只能在此類別中使用

  constructor() {
    
    this.#items = [];  
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element); //使用push來添加元素

  }

  // 移除並回傳 stack 頂部的元素
  pop() {
	if (this.isEmpty()) {
        return ("Empty");       
      }
      return this.#items.pop(); //使用pop來移除元素
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.isEmpty()) {
        return ("Empty");
      }
      return this.#items[this.#items.length-1]; 
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return  this.#items.length ===0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items=[];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items);
  }
}