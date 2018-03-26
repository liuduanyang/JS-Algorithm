// 排序算法

// 先创建基本结构
function ArrayList(){
    var array=[];
    this.insert=(item)=>{
        array.push(item);
    };
    this.toString=()=>array.toString();


// 从性能差到好逐一列举(由易到难)
// 冒泡排序  复杂度O(n方)
this.bubbleSort=()=>{
    var length=array.length;
    for(var i=0;i<length;i--){
        for(var j=0;j<length-1;j++){；
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
            }
        }
    }
}
// 上述算法存在一些问题 外层循环每执行一次就会确定出一个最大值 第一轮确定最大值 第二轮确定第二大值 并都已安排到正确位置
// 但 下次循环中都会在对他们进行判断 所以做出一些改进
// 改进后的冒泡排序
this.modifeedBubbleSort=()=>{
    var length=array.length;
    for(var i=0;i<length;i++){
        for(var j=0;j<length-1-i;j++){
            swap(array,j,j+1);
        }
    }
}

//选择排序  复杂度O(n方)
this.selectionSort=()=>{
    var length=array.length;
    var indexMin;
    for(var i=0;i<length;i++){
        indexMin=i;
        for(var j=i+1;j<length;j++){
            if(array[indexMin]>array[j]){
                indexMin=j;
            }
            if(indexMin!==i){
                swap(array,i,indexMin);
            }
        }
    }
}

// 插入排序  排序小型数组时此算法比选择和冒泡排序性能好
this.insertionSort=()=>{
    var length=array.length;
    var j;
    var temp;
    for(var i=1;i<length;i++){
        j=i;
        temp=array[i];
        while(j>0&&array[j-1]>temp){
            array[j]=array[j-1];
            j--;
        }
        if(array[j]!==temp){
            array[j]=temp;
        }
    }
};

// 归并排序  复杂度O(nlogn方)
this.mergeSort=()=>{
    return mergeSortRec(array);
};
function mergeSortRec(array){
    var length=array.length;
    if(length===1){
        return array;
    }
    var mid=Math.floor(length/2);
    left=array.slice(0,mid);
    right=array.slice(mid,length);
    return merge(mergeSortRec(left),mergeSortRec(right));
};
function merge(left,right){
    var result=[];
    var il=0,ir=0;
    while(il<left.length&&ir<right.length){
        if(left[il]<right[ir]){
            result.push(left[il++]);
        }else{
            result.push(right[ir++]);
        }
    }
    while(il<left.length){
        result.push(left[il++]);
    }
    while(ir<right.length){
        result.push(right[ir++]);
    }
    return result;
};

function swap(array,index1,index2){    // 交换数组两个元素位置的辅助函数
    var aux=array[index1];
    array[index1]=array[index2];
    array[index2]=aux;
}
}

function createNonSortedArray(size){   // 用于校验排序算法的函数
    var array=new ArrayList();
    for(var i=size;i>0;i++){
        array.insert(i);
    }
    return array;
}
var array=createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());
