// 链表
// 链表不同于数组，链表中的元素在内存中并不是连续放置的，链表中每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针)组成
// 链表的好处在于，添加或移除元素时不需移动其它元素
// 链表的缺点在于，如果想要访问链表中的某个元素时，需要从表头开始迭代列表直至找到所需元素
// 类比于火车 可在任意位置插入一节车皮 拿下一节车皮 找某个车皮需要从头开始查看

// 实现
function LinkedList(){
    function Node(element){
        this.element=element;
        this.next=null;
    };
    let length=0;
    let head=null;

    this.append=(element)=>{       // 向链表尾部追加元素 有两种情况 1.链表为空 2.链表非空
        let node=new Node(element);
        let current;
        if(head===null){     // 如果链表为空，将头指针指向新插入的元素
            head=node;
        }else{      // 如果链表不为空 则找到链表的最后的元素 将该元素的next指向新插入的元素
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    };
    this.removeAt=(position)=>{   // 从链表中移除元素 有两种情况 1.位于表头 2.位于非表头
        // 检查越界值    position为要删除的元素的位置 从0开始
        if(position>-1&&position<length){
            let current=head;
            let previous;
            let index=0;

            if(position===0){   // 如果要删除表头元素
                head=current.next;
            }else{      // 删除非表头元素
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;   // current表示要删除的元素 该元素的前一个元素的next指向该元素的后一个元素 current元素会被丢弃在内存中 等待被垃圾回收器清除
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    };
    this.insert=(position,element)=>{      // 在任意位置插入元素  两种情况: 1.插入表头 2.插入非表头
        if(position>=0&&position<=length){   // 检查越界值
            let node=new Node(element);
            current=head;
            let previous;
            index=0;
            if(position===0){   // 插入的位置为表头时
                node.next=current;
                head=node;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };
    this.toString=()=>{    // 以字符串的形式返回链表 元素之间用 -> 连接
        let current=head;
        let string='';
        while(current){
            string+=current.element+(current.next?'->':'');
            current=current.next;
        }
        return string;
    };
    this.indexOf=(element)=>{     // 查找指定元素 并返回其索引 找不到则返回-1
        let current=head;
        let index=0;
        while(current){
            if(current.element===element){
                return index;
            };
            index++;
            current=current.next;
        }
        return -1;   
    };
    this.isEmpty=()=>length===0;  // 判断是否为空
    this.size=()=>length;  // 返回链表长度
    this.getHead=()=>head;  // 返回链表的表头元素
}

var linkedList=new LinkedList();