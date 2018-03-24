// 队列是遵循先进先出(FIFO)原则的一组有序的项
// 队列在尾部添加新元素，在顶部删除元素
// 类比于生活中的排队买票

// 实现 队列

function Queue(){
    let items=[];
    this.enqueue=(e)=>{items.push(e)};   // 向队列尾部添加一个新元素
    this.dequeue=()=>items.shift();      // 移除队列顶部第一个元素，并返回该元素
    this.front=()=>items[0];             //查看队列顶部第一个元素，不改变队列
    this.isEmpty=()=>items.length==0;    // 判断队列是否为空，空为true
    this.size=()=>items.length;          // 返回队列包含的元素个数
    this.print=()=>{console.log(items.toString())};  // 打印队列元素
}

let queue=new Queue();

// 实现优先队列 即优先级高的排在队首
// 实现优先队列有两种方法：1.先设置优先级，级别高的排在前面  2.正常插入队列，删除时优先级高的先被删除
// 下例通过第一种方法实现

function PriorityQueue(){
    let items=[];
    // 用于创建新元素 由于需要优先级顺序所以采用构造函数的形式而非通过参数传入一个值
    function QueueElement(element,priority){
        this.element=element;
        this.priority=priority;
    }

    this.enqueue=(element,priority)=>{
        let queueElement=new QueueElement(element,priority);

        let added=false;
        for(let i=0;i<items.length;i++){     // 队列为空或优先级最小不满足此条件 执行here处的语句
            if(queueElement.priority>items[i].priority){
                items.splice(i,0,queueElement);
                added=true;
                break;
            }
        }

        if(!added){    // here
            items.push(queueElement);
        }
    };

    this.print=()=>{for(let i=0;i<items.length;i++){
        console.log(`${items[i].element} - ${items[i].priority}`);
    }};
    // 其它方法同Queue
    this.dequeue=()=>items.shift();      // 移除队列顶部第一个元素，并返回该元素
    this.front=()=>items[0];             //查看队列顶部第一个元素，不改变队列
    this.isEmpty=()=>items.length==0;    // 判断队列是否为空，空为true
    this.size=()=>items.length;          // 返回队列包含的元素个数
}

let priorityQueue=new PriorityQueue();


// 循环队列实现击鼓传花
// 击鼓传花：
// 一群葫芦娃围一圈，有一个花球，按顺序把花球尽快传递给旁边的娃，某一时刻停止时，花球在谁的手里谁就淘汰，直至只剩一个娃

function hotPotato(nameList,num){
    let queue=new Queue();
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }

    while(queue.size()>1){
        let eliminated='';
        for(var i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated=queue.dequeue();
        console.log(`${eliminated}在击鼓传花游戏中被淘汰`);
    }
    let winner=queue.dequeue();
    console.log(`最后获得胜利的娃是：${winner}`);
    return winner;
}

hotPotato(['liu','li','zhang','zhao','gao','wang','wu'],5);