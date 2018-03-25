// 树
// 一个树结构包含一系列存在父子关系的节点，每个节点都有一个父节点(除了顶部第一个节点即根节点)以及零个或多个子节点
// 位于树顶部的节点叫做根节点，它没有父节点
// 树中每个元素都叫做节点，至少有一个子节点的节点称为内部节点，没有子元素的节点称为外部节点或叶节点
// 子树：子树是由树中某个节点和它的后代构成
// 节点有一个属性叫做深度，深度取决于它的组件节点的数量
// 树的高度：树的高度取决于所有节点中深度的最大值
// 二叉树：二叉树的节点最多只能有两个子节点，一个左侧子节点，另一个是右侧子节点
// 二叉搜索树（BST）：二叉搜索树是二叉树的一种，它只允许你在左侧节点存储比父节点小的值，在右侧节点存储比父节点大或等于的值

// 实现二叉搜索树
function BinarySearchTree(){
    function Node(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
    var root=null;

    this.insert=(key)=>{     // 向树中插入一个键
        var newNode=new Node(key);
        if(root===null){
            root=newNode;
        }else{
            insertNode(root,newNode);   // 一个辅助函数 详情见下面定义
        }
    };

    function insertNode(node,newNode){   // 插入一个键的辅助函数
        if(newNode.key<node.key){
            if(node.left===null){
                node.left=newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    }
    
    this.inOrderTraverse=(callback)=>{ // 中序遍历(从小到大访问BST) 适用于排序 参数为对节点的操作 树的遍历有三种方法：中序遍历、先序遍历、后序遍历
        inOrderTraverseNode(root,callback);  // 辅助函数
    };
    function callback(value){
        console.log(value);
    }
    function inOrderTraverseNode(node,callback){
        if(node!==null){   // 停止递归的判断条件
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    };


    this.preOrderTraverse=(callback)=>{   // 中序遍历 先访问节点本身再分别访问其左子节点、右子节点  适用于打印一个结构化的文档
        preOrderTraverseNode(root,callback);
    };
    function preOrderTraverseNode(node,callback){  // 中序遍历辅助函数
        if(node!==null){
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    };

    this.postOrderTraverse=(callback)=>{  // 后序遍历 先访问节点的左子节点 再访问右子节点 然后再访问节点本身 
        postOrderTraverseNode(root,callback);
    };
    function postOrderTraverseNode(node,callback){   // 后序遍历辅助函数
        if(node!==null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    };
    this.min=()=>{   // 返回树中最小值 即BST中最左边的叶子节点
        return minNode(root);
    };
    function minNode(node){
        if(node){
            while(node&&node.left!==null){
                node=node.left;
            }
            return node.key;
        }
        return null;
    };

    this.max=()=>{   // 返回树中最大值 即BST中最右边的叶子节点
        return maxNode(root);
    };
    function maxNode(node){
        if(node){
            while(node&&node.right!==null){
                node=node.right;
            }
            return node.key;
        }
        return null;
    };

    this.search=(key)=>{    // 判断树中是否存在某值
        return searchNode(root,key);
    };
    function searchNode(node,key){
        if(node===null){
            return false;
        }
        if(node.key>key){
            searchNode(node.left,key);
        }
        else if(node.key<key){
            searchNode(node.right,key);
        }else{
            return true;
        }
    };

    this.remove=(key)=>{
        root=removeNode(root,key);
    };
    function removeNode(node,key){
        if(node===null){
            return null;
        }
        if(key<node.key){
            node.left=removeNode(node.left,key);
        }else if(key>node.key){
            node.right=removeNode(node.right,key);
        }
        else{
            // 情况一 要删除的节点是一个叶节点(无左右子节点)
            if(node.left===null&&node.right==null){
                node=null;
                return node;
            }
            // 情况二 要删除的节点是只有一个子节点的节点
            if(node.left==null){
                node=node.right;
                return node;
            }
            else if(node.right==null){
                node.node.left;
                return node;
            }
            // 情况三 要删除的节点既有做左节点又有右节点
            // 步骤一 找到需要删除的节点后，需要找到它右边子树中最小的节点
            // 步骤二 将这个右子树最小的节点的值赋给要删除节点的值，实现删除节点的作用
            // 步骤三 由于这个最小节点还被原来的父节点所引用着 所以需要删除这个最小节点
            // 步骤四 向要删除的这个节点的父节点返回更新后节点的引用
            var aux=findMinNode(node.right);
            node.key=aux.key;
            node.right=removeNode(node.right,aux.key);
            return node;
        }
    }
    function findMinNode(node){
        while(node&&node.left!==null){
            node=node.left;
        }
        return node;
    }

    this.getRoot=()=>root;
}