// 栈(Stack)是一种遵从后进先出(LIFO)的有序集合
// 新添加的和待删除的元素都保存在栈的同一端，称作栈顶，另一端叫栈底
// 类比于一摞盘子的放和取

function Stack(){
    let items=[];       // 用数组模拟栈
    this.push=(e)=>{items.push(e)};        // 向栈添加元素
    this.pop=()=>items.pop();              // 从栈移除元素
    this.peek=()=>items[items.length-1];    // 查看栈顶元素
    this.isEmpty=()=>items.length===0;     // 判断栈是否为空
    this.clear=()=>{items=[]};             // 清空栈
    this.size=()=>items.length;            // 返回栈中元素个数
    this.print=()=>{console.log(items.toString())};   // 打印栈中元素
}

var stack=new Stack();


// 应用 : 十进制转换为二进制
function divideBy2(decNumber){
    let remStack=new Stack();
    let rem;
    let binaryString='';

    if(decNumber==0){
        binaryString+=0;
        return binaryString;
    }

    while(decNumber>0){
        rem=decNumber%2;
        remStack.push(rem);
        decNumber=Math.floor(decNumber/2);
    }

    while(!remStack.isEmpty()){
        binaryString+=remStack.pop();
    }
    return binaryString;
}

var b2=divideBy2(10);

// 应用 ：十进制转换为任何进制

function baseConverter(decNumber,base){
    let remStack=new Stack();
    let rem;
    let baseString='';
    const digits='0123456789ABCDEF';

    while(decNumber>0){
        rem=decNumber%base;
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }

    while(!remStack.isEmpty()){
        baseString+=digits[remStack.pop()];
    }
    return baseString;
}

var b16=baseConverter(1000,16);
