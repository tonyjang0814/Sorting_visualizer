import React, {useState} from "react";
import bubbleSortHelper from "./components/algorithms/bubbleSortHelper";
import quickSortHelper from "./components/algorithms/quickSortHelper";
import mergeSortHelper from "./components/algorithms/mergeSortHelper";
import bar from "./bar.css";
import webStyles from "./webStyles.css";


const RANGE_OF_BARS = 500;
function SortingVisualiser() {

    // const [isActive,setIsActive] = useState(false);
    var isActive = false;

    //dynamic animation time changes. Animation time depends on number of bar elements.
    const [AMIMATION_TIME,setAniTime] = useState(1.25); //1.25

    //This sets initial number of bar elements that will be shown on default screen.
    const [NUM_FOR_INITIAL_ARRAY,setNumBars] = useState(130);

    //This allows to create default array to process different types of algorithms
    const originArray = createInitialArray(NUM_FOR_INITIAL_ARRAY);

    const [initialArray,setNewArray] = useState(originArray); 
    

    function varyBarNums() {

        //create new bar elements dynamically by updating new value recieved.
        const factor = document.getElementById("myRange").value;
        setNumBars(factor);
        var freshArray = createInitialArray(factor);
        setNewArray(freshArray);

        //Change in bar element must show default color.
        defaultColor();
        
        //animation time will be varied depends on number of bar elements.
        var animationTime = (1.25*300)/ factor; 
        setAniTime(animationTime);

    }

    function createNewArray() {
        
        var newArray = createInitialArray(NUM_FOR_INITIAL_ARRAY);
        setNewArray(newArray);

        defaultColor();
    }

    function defaultColor (){
        const elements = document.getElementsByClassName("barElements");
        for (let index = 0; index < elements.length; index++) {
            var elementsStyle = elements[index].style;
            elementsStyle.backgroundColor = "#F29E4C";    
        }
    }

    function createInitialArray (barNumber) {
    
        var tempArray = [];

        for (let i = 0; i < barNumber; i++) {   
            var initialRandomNumber = Math.round((Math.random())*RANGE_OF_BARS);
            tempArray.push(initialRandomNumber);        
        }

    return tempArray;
    }

    
    function handleButtonStatus() {

        // var x = document.getElementsByClassName("algo");
        // for (let index = 0; index < x.length; index++) {
        //     x[index].disabled = true;   
        // }
        if (isActive === true) {
            var x = document.getElementsByClassName("algo");
            for (let index = 0; index < x.length; index++) {
                x[index].disabled = true;   
            }
        }else {
            var x = document.getElementsByClassName("algo");
            for (let index = 0; index < x.length; index++) {
                x[index].disabled = false;   
            } 
        }
    }


    function mergeSort() {
        //when mergerSort starts, all the button will be disabled.
        isActive = true;
        handleButtonStatus();

        var auxiliaryArray = initialArray.slice();
        const animation = [];
        mergeSortHelper(initialArray ,0 ,initialArray.length-1,auxiliaryArray, animation);

        var element = document.getElementsByClassName("barElements");
        for (var i = 0; i < animation.length; i++) {
            if (animation[i][0] === "position") {    //coloring two numbers that are being compared.
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
                const styleThree = element[three].style;  
                setTimeout(() => {
                    styleTwo.backgroundColor = "red";
                    styleThree.backgroundColor = "red";
                }, AMIMATION_TIME*i);
            }else if (animation[i][0] === "deposition") {    //coloring two numbers that are being compared.
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
                const styleThree = element[three].style;
                setTimeout(() => {
                    styleTwo.backgroundColor = "#F29E4C";
                    styleThree.backgroundColor = "#F29E4C";
                }, AMIMATION_TIME*i);
            }else if (animation[i][0] === "change value") {
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
  
                setTimeout(() => {
                    styleTwo.height = `${three}px`;
                }, AMIMATION_TIME*i);
            }
        }
        
        //Make buttons to be active here.
        setTimeout(() => {
            isActive = false;
            handleButtonStatus();
        }, AMIMATION_TIME*i);
    }

    function bubbleSort() {
        //when mergerSort starts, all the button will be disabled.
        isActive = true;
        handleButtonStatus();

        const animation = bubbleSortHelper(initialArray);
        var element = document.getElementsByClassName("barElements");

        for (var i = 0; i < animation.length; i++) {
            if (animation[i][0] === "position") {    //coloring two numbers that are being compared.
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
                const styleThree = element[three].style;
                setTimeout(() => {
                    styleTwo.backgroundColor = "red";
                    styleThree.backgroundColor = "red";
           
                }, AMIMATION_TIME*i);
            }
            else if(animation[i][0] === "deposition"){ // de-color two numbers
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
                const styleThree = element[three].style;
                setTimeout(() => {
                    styleTwo.backgroundColor = "#F29E4C";
                    styleThree.backgroundColor = "#F29E4C";
                 
                }, AMIMATION_TIME*i);
            }else if (animation[i][0] === "change") { //Assign new height if swap task is required
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
                setTimeout(() => {
                    styleTwo.height = `${three}px`;
                }, AMIMATION_TIME*i);
            }else if(animation[i][0] === "lastelement"){  //Color the last element that will not be compared again.
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  
                setTimeout(() => {
                    styleTwo.backgroundColor = "black";
                }, AMIMATION_TIME*i);
            }
        }

        //making bar elements to default color.
        setTimeout(function () {
            var y = document.getElementsByClassName("barElements");

            for (let index = 0; index < y.length; index++) {
                var yStyle = y[index].style;
                yStyle.backgroundColor = "#F29E4C";
                
            }
        },AMIMATION_TIME*i)


        //Make buttons to be active here.
        setTimeout(() => {
            isActive = false;
            handleButtonStatus();
            }, AMIMATION_TIME*i);
    }
    

    function quickSort() {
        //when mergerSort starts, all the button will be disabled.
        isActive = true;
        handleButtonStatus();

        const animation = [];
        quickSortHelper(initialArray,0,initialArray.length-1,animation);

        var element = document.getElementsByClassName("barElements");
        for (var i = 0; i < animation.length; i++) {
            if (animation[i][0] === "piviotValue") {    //coloring two numbers that are being compared.
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  

                setTimeout(() => {
                    styleTwo.backgroundColor = "#4B0082";
                    styleTwo.height = `${three}px`;
                }, AMIMATION_TIME*i);
            }else if (animation[i][0] == "decolor-pviot") {
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  

                setTimeout(() => {
                    styleTwo.backgroundColor = "#F29E4C";//orange
                }, AMIMATION_TIME*i);
            }
            else if (animation[i][0] == "position") {
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  

                setTimeout(() => {
                    styleTwo.backgroundColor = "red";
                }, AMIMATION_TIME*i);
            }
            else if (animation[i][0] == "deposition") {
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  

                setTimeout(() => {
                    styleTwo.backgroundColor = "#F29E4C";
                }, AMIMATION_TIME*i);
            }else if (animation[i][0] == "swap-fore") {
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  

                setTimeout(() => {
                    styleTwo.height = `${three}px`;
                }, AMIMATION_TIME*i);
            }
            else if (animation[i][0] == "swap-after-iteration") {
                const [one,two,three] = animation[i];
                const styleTwo = element[two].style;  

                setTimeout(() => {
                    styleTwo.height = `${three}px`;
                }, AMIMATION_TIME*i); 
            }
        }

        //Make buttons to be active here.
        setTimeout(() => {
            isActive = false;
            handleButtonStatus();
            }, AMIMATION_TIME*i);
    }



return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <a className="navbar-brand">SORTING VISUALIZER</a>
          
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <div className = "seperator"></div>
              <li className="nav-item">
              <div className = "something">
                Change Array Size and Speed!
              </div>
                <input type="range" className = "algo" id = "myRange" min="10" max="280" defaultValue = "130" onChange= {varyBarNums}></input>
              </li>
              <div className = "seperator"></div>
              <li className="nav-item active">
                <button type="button" className="btn btn-light algo" onClick = {createNewArray}>Create New Array!   
                </button>
              </li>

              <div className = "seperator"></div>
              
              <li className="nav-item">
                <button type="button" className="btn btn-light algo" onClick = {bubbleSort}>Bubble Sort</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light algo" onClick = {mergeSort}>Merge Sort</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light algo" onClick = {quickSort}>Quick Sort</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              
                <div className = "grid">
                {initialArray.map(function(value,index){
                    return(
                        <div key = {index} className = "barElements" style = {{height: `${value}px`}}>
                        </div>
                    )
                })}
                </div>
            </div>
          </div>
        </div>
      </header>
    </div>

)
}


export default SortingVisualiser;