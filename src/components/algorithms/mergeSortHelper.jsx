export default function mergeSortHelper(mainArray ,startIdx ,endIdx, auxiliaryArray,animation){

    var midIdx = Math.floor((startIdx+endIdx)/2);

    if (startIdx === endIdx) {
        return ;
    }
    mergeSortHelper(auxiliaryArray ,startIdx ,midIdx, mainArray,animation);
    mergeSortHelper(auxiliaryArray ,midIdx+1 ,endIdx, mainArray,animation);

    merge(mainArray,auxiliaryArray,startIdx,midIdx,endIdx,animation);

    return animation;
}

function merge(mainArray,auxiliaryArray,startIdx,midIdx,endIdx,animation,) {

    let i = startIdx;
    let j = midIdx+1;
    let k = startIdx;

    while(i <= midIdx && j <=endIdx){
        animation.push(["position",i,j]);
        animation.push(["deposition",i,j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            animation.push(["change value",k,auxiliaryArray[i]]);
            
            animation.push([k, auxiliaryArray[i]]);
            mainArray[k] = auxiliaryArray[i];
            k++;
            i++;
        }else{
            animation.push(["change value",k,auxiliaryArray[j]]);
            animation.push([k, auxiliaryArray[j]]);
      mainArray[k] = auxiliaryArray[j];
            k++;
            j++;
            
        }
    }


    while(i <= midIdx ) {
        animation.push(["position",i,i]);
        animation.push(["deposition",i,i]);
        animation.push(["change value",k,auxiliaryArray[i]]);
        animation.push([k, auxiliaryArray[i]]);
        mainArray[k] = auxiliaryArray[i];
        k++;
        i++;
        
    }
    while (j <=endIdx) {
        animation.push(["position",j,j]);
        animation.push(["deposition",j,j]);
        animation.push(["change value",k,auxiliaryArray[j]]);
        
        animation.push([k, auxiliaryArray[j]]);
    mainArray[k] = auxiliaryArray[j];
        k++;
        j++;
        
    }

}