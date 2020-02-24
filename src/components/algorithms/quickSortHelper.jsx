function quickSortHelper(array,startIdx,endIdx,animation) {

    if (startIdx >= endIdx) {
        return ;       
    }

        var pIndx = partition(array, startIdx,endIdx,animation);
        
        quickSortHelper(array,startIdx,pIndx-1,animation);
        quickSortHelper(array,pIndx+1,endIdx,animation);

        
    return animation;
}

function partition(array,startIdx,endIdx,animation){

    var pivotValue = array[endIdx];
    var pIdx = startIdx;
    var tempPivotValue = pivotValue;
    var tempEndIdx = endIdx;
    animation.push(["piviotValue",endIdx,pivotValue]);
    
    for (var i = startIdx; i < endIdx; i++) {
        animation.push(["position",i,array[i]]);
        animation.push(["deposition",i,array[i]]);
        if (array[i] <= pivotValue) {
            animation.push(["swap-fore",pIdx,array[i]]);//fore element after swap
            animation.push(["swap-fore",i,array[pIdx]]);//rear element after swap
            var temp1 = array[i];
            array[i] = array[pIdx];
            array[pIdx] = temp1;
            pIdx++;
        }
    }
    animation.push(["swap-after-iteration",pIdx,array[endIdx]]);
    var temp2 = array[pIdx];
    array[pIdx] = array[endIdx];
    array[endIdx] = temp2;
    animation.push(["swap-after-iteration",endIdx,temp2]);

    animation.push(["decolor-pviot",tempEndIdx,tempPivotValue]);
    return pIdx;
}

export default quickSortHelper;