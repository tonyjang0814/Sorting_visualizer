// The function below allows to create an array that will be used for animation.
//Such array will contain multiple types of sub arrays distingushed by the starting word such as
//position,deposition,change and lastelement
//position: this type of sub array is used for tracking two comparing number and color them.
//deposition: allows to de-color two numbers that have been completed comparing task.
//change: allows to change positions of two numbers if nesccessary.
//lastelement: allows to color the last bar element after each full iteration.

function bubbleSortHelper(initialArray) {
    var animation = [];
    var n = initialArray.length;
    var count = 0;
    for (var k = 0; k < initialArray.length; k++) {
        for (var i = 0; i < n-1; i++){
            animation.push(["position",i,i+1]);
            animation.push(["deposition",i,i+1]);
            count++;
            if (initialArray[i] > initialArray [i+1]) {
                var temp = initialArray[i];
                initialArray[i] = initialArray[i+1];
                initialArray[i+1] = temp;
                animation.push(["change",i,initialArray[i]]);
                animation.push(["change",i+1,initialArray[i+1]]);      
                count++;
                count++;
            }
        }
        n--;
        animation.push(["lastelement",i,initialArray[i-1]]);
        count++;
    }


    return animation;
}

export default bubbleSortHelper;