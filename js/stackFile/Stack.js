function Stack() {
    var items = [];

    // 向栈里添加新的元素
    this.push = function(element) {
        items.push(element);
    };

    // 从栈顶弹出元素
    this.pop = function() {
        return items.pop();
    };

    // 查找栈顶元素
    this.peek = function() {
        return items[items.length-1];
    };

    // 判空
    this.isEmpty = function() {
        return items.length == 0;
    };

    // 返回长度
    this.size = function() {
        return items.length;
    };

    // 移除栈里所有的元素，清空栈
    this.clear = function() {
        items = [];
    };

    // 输出栈里元素
    this.print = function(){
        console.log(items.toString());
    };

};

// 测试

    var stack = new Stack();

    stack.push(5);
    stack.push(8);
    stack.push(11);
    stack.push(15);
    console.log(stack.size());
    stack.print();