// 双向链表
// 双向链表的特点：链接是双向的，一个链向前一个元素，一个链向下一个元素
// 双向链表的优点：双向链表提供了两种迭代列表的方法：从头到尾，或者反过来，我们也可以访问一个特定节点的前一个或下一个元素

// 实现
function DoubleLinkedList(){
    function Node(element){
        this.element=element;
        this.prev=null;  // 指向前一个元素
        this.next=null;
    };
    let length=0;
    let head=null;  // 指向头结点
    let tail=null;  // 指向尾节点 即最后一个元素

    this.insert=(position,element)=>{   // 在任意位置插入新元素
        if(position>=0&&position<=length){
            let node=new Node(element);
            let current=head;
            let previous;
            let index=0;

            if(position===0){   // 如果要插入到表头
                if(!head){      // 如果表头为空(null)
                    head=node;
                    tail=node;
                }else{          // 如果表头非空
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }else if(position===length){   // 如果要插入到表尾最后一个元素的后面
                current=tail;
                current.next=node;
                node.prev=current;
                tail=node;

            }else{    // 如果要插入到正常位置
                while(index++<position){
                    previous=current;
                    current=current.next;
                }    
                previous.next=node;
                node.prev=previous;
                current.prev=node;
                node.next=current;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };
    
    this.removeAt=(position)=>{   // 从任意位置删除元素
        if(position>=0&&position<length){
            let current=head;
            let previous;
            let index=0;
            if(position===0){    // 如果要删除第一个元素
                head=current.next;
                if(length===1){
                    tail=null;
                }else{
                    head.prev=null;
                }
            }else if(position===length-1){   // 如果要删除最后一个元素
                current=tail;
                tail=current.prev;
                tail.next=null;
            }else{      // 删除正常位置的某个元素
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
                current.next.prev=previous;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    }
}