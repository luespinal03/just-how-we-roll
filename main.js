/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range) // Math.ceil rounds it up to the next number without passing the max number.;
    return result;
}



/*******************
 * YOUR CODE BELOW *
 *******************/


/*******************
 * QUERY SELECTORS *
 *******************/

let button_d6 = document.querySelector("#d6-button");
let image_d6 = document.querySelector("#d6-roll");
let resetButton = document.querySelector('#reset-button');
let mean_d6 = document.querySelector('#d6-rolls-mean');

/*******************
 * EVENT LISTENERS *
 *******************/


// on click run d6RollFunction()
image_d6.addEventListener('click', function () {
    d6RollFunction(6);
})

// on click run resetFunction from line 56
resetButton.addEventListener('click', resetFunction);



/******************
 * RESET FUNCTION *
 ******************/
resetFunction(); // auto running so when the player starts everything up it sets everything up again and again
function resetFunction() {

    console.log("Reset button clicked!");

    // Empty all global roll arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    // change dice buttons to starting images
    image_d6.src = 'images/start/d6.png'; // relative path
    mean_d6.innerText = 'N/A';

    /*
     ****************************  Double 6 dice ***********************************
     */

    let imageDouble6 = document.querySelector('#double-d6-roll-1');
    imageDouble6.src = 'images/start/d6.png';

    let imageDouble62 = document.querySelector('#double-d6-roll-2');
    imageDouble62.src = 'images/start/d6.png';
    // change text in our mean areas to N/A

    let doubleD6Mean = document.querySelector('#double-d6-rolls-mean');
    doubleD6Mean.innerText = 'N/A';

    /*
     ****************************  D12 dice ***********************************
     */

    let image_d12 = document.querySelector('#d12-roll');

    image_d12.src = 'images/start/d12.jpeg';

    let d12Mean = document.querySelector('#d12-rolls-mean');

    d12Mean.innerText = 'N/A';


    /*
     ****************************  D20 dice ***********************************
     */

    let img_d20 = document.querySelector('#d20-roll');
    img_d20.src = 'images/start/d20.jpg';
    let d20Mean = document.querySelector('#d20-rolls-mean');
    d20Mean.innerText = 'N/A';

};


/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
function d6RollFunction() {
    console.log('Single d6 clicked!')
    let result = getRandomNumber(6); // line 14
    console.log(result); // shows my results on browser console

    if (result === 1) {
        image_d6.src = 'images/d6/1.png';
    } else if (result === 2) {
        image_d6.src = 'images/d6/2.png';
    } else if (result === 3) {
        image_d6.src = 'images/d6/3.png'
    } else if (result === 4) {
        image_d6.src = 'images/d6/4.png'
    } else if (result === 5) {
        image_d6.src = 'images/d6/5.png'
    } else if (result === 6) {
        image_d6.src = 'images/d6/6.png'
    }

    sixes.push(result);
    console.log(sixes);

    findingMean6(sixes);
}




/*******************
* 
D6 DOUBLE ROLL SECTION

***********************/
let imageDouble6 = document.querySelector('#double-d6-roll-1');

imageDouble6.src = 'images/start/d6.png';

let imageDouble62 = document.querySelector('#double-d6-roll-2');

imageDouble62.src = 'images/start/d6.png';

let doubleD6Mean = document.querySelector('#double-d6-rolls-mean');

doubleD6Mean.innerText = 'N/A';

let doubleD6Buttons = document.querySelector('#double-d6-buttons');

doubleD6Buttons.addEventListener('click', function () {
    console.log('Double D6 clicked!')
    let result1 = getRandomNumber(6);
    let result2 = getRandomNumber(6);
    console.log(result1);
    console.log(result2);

    if (result1 === 1) {
        imageDouble6.src = 'images/d6/1.png';

    } else if (result1 === 2) {
        imageDouble6.src = 'images/d6/2.png';

    } else if (result1 === 3) {
        imageDouble6.src = 'images/d6/3.png';

    } else if (result1 === 4) {
        imageDouble6.src = 'images/d6/4.png';

    } else if (result1 === 5) {
        imageDouble6.src = 'images/d6/5.png';

    } else if (result1 === 6) {
        imageDouble6.src = 'images/d6/6.png';
    }

    /* 
     ******** SECOND DICE ********
     */



    if (result2 === 1) {
        imageDouble62.src = 'images/d6/1.png';
    } else if (result2 === 2) {
        imageDouble62.src = 'images/d6/2.png'
    } else if (result2 === 3) {
        imageDouble62.src = 'images/d6/3.png'
    } else if (result2 === 4) {
        imageDouble62.src = 'images/d6/4.png'
    } else if (result2 === 5) {
        imageDouble62.src = 'images/d6/5.png'
    } else if (result2 === 6) {
        imageDouble62.src = 'images/d6/6.png'
    }
    finalResult = result1 + result2
    doubleSixes.push(finalResult);
    console.log(doubleSixes);

    findingDoubleMean6(doubleSixes); // function by the math section
})


/*******************
* 
D12 DICE ROLL SECTION

***********************/

let image_d12 = document.querySelector('#d12-roll');
image_d12.src = 'images/start/d12.jpeg';
let d12Mean = document.querySelector('#d12-rolls-mean');
d12Mean.innerText = 'N/A';
let d12Button = document.querySelector('#d12-button');




d12Button.addEventListener('click', function () {
    console.log('d12 clicked!');
    d12RollFunction(12);
});

function d12RollFunction() {
    let result = getRandomNumber(12); // line 14
    console.log(result); // shows my results on browser console

    if (result === 1) {
        image_d12.src = 'images/numbers/1.png';
    } else if (result === 2) {
        image_d12.src = 'images/numbers/2.png';
    } else if (result === 3) {
        image_d12.src = 'images/numbers/3.png'
    } else if (result === 4) {
        image_d12.src = 'images/numbers/4.png'
    } else if (result === 5) {
        image_d12.src = 'images/numbers/5.png'
    } else if (result === 6) {
        image_d12.src = 'images/numbers/6.png'
    } else if (result === 7) {
        image_d12.src = 'images/numbers/7.png'
    } else if (result === 8) {
        image_d12.src = 'images/numbers/8.png'
    } else if (result === 9) {
        image_d12.src = 'images/numbers/9.png'
    } else if (result === 10) {
        image_d12.src = 'images/numbers/10.png'
    } else if (result === 11) {
        image_d12.src = 'images/numbers/11.png'
    } else if (result === 12) {
        image_d12.src = 'images/numbers/12.png'
    }

    twelves.push(result);
    console.log(twelves);
    finding12sMean(twelves);
}



/*******************
* 
D20 DICE ROLL SECTION

***********************/

let img_d20 = document.querySelector('#d20-roll');
img_d20.src = 'images/start/d20.jpg';
let d20Mean = document.querySelector('#d20-rolls-mean');
d20Mean.innerText = 'N/A';
let d20Button = document.querySelector('#d20-button');


d20Button.addEventListener('click', function () {
    console.log('d20 clicked!');
    d20RollFunction(20);
});

function d20RollFunction() {
    let result = getRandomNumber(20); // line 14
    console.log(result); // shows my results on browser console

    if (result === 1) {
        img_d20.src = 'images/numbers/1.png';
    } else if (result === 2) {
        img_d20.src = 'images/numbers/2.png';
    } else if (result === 3) {
        img_d20.src = 'images/numbers/3.png'
    } else if (result === 4) {
        img_d20.src = 'images/numbers/4.png'
    } else if (result === 5) {
        img_d20.src = 'images/numbers/5.png'
    } else if (result === 6) {
        img_d20.src = 'images/numbers/6.png'
    } else if (result === 7) {
        img_d20.src = 'images/numbers/7.png'
    } else if (result === 8) {
        img_d20.src = 'images/numbers/8.png'
    } else if (result === 9) {
        img_d20.src = 'images/numbers/9.png'
    } else if (result === 10) {
        img_d20.src = 'images/numbers/10.png'
    } else if (result === 11) {
        img_d20.src = 'images/numbers/11.png'
    } else if (result === 12) {
        img_d20.src = 'images/numbers/12.png'
    } else if (result === 13) {
        img_d20.src = 'images/numbers/13.png'
    } else if (result === 14) {
        img_d20.src = 'images/numbers/14.png'
    } else if (result === 15) {
        img_d20.src = 'images/numbers/15.png'
    } else if (result === 16) {
        img_d20.src = 'images/numbers/16.png'
    } else if (result === 17) {
        img_d20.src = 'images/numbers/17.png'
    } else if (result === 18) {
        img_d20.src = 'images/numbers/18.png'
    } else if (result === 19) {
        img_d20.src = 'images/numbers/19.png'
    } else if (result === 20) {
        img_d20.src = 'images/numbers/20.png'
    }

    twenties.push(result);
    console.log(twenties);
    finding20sMean(twenties);

}








/****************
 * MATH SECTION *
 ****************/


// being called inside the single dice function line 99 and passing sixes array as our parameter.
function findingMean6(mean) {
    let total = 0;
    for (let i = 0; i < mean.length; i++) {
        total += mean[i]
    }
    total = total / mean.length;
    console.log("mean");
    console.log(total);

    mean_d6.innerText = total;
}

// being called inside the double dice function line 169 and passing dobleSixes array as our parameter.
function findingDoubleMean6(mean) {
    let total = 0;
    for (let i = 0; i < mean.length; i++) {
        total += mean[i]
    }
    total = total / mean.length;
    console.log("mean");
    console.log(total);

    doubleD6Mean.innerText = total;
}

// being called inside the d12 dice function line 169 and passing dobleSixes array as our parameter.
function finding12sMean(mean) {
    let total = 0;
    for (let i = 0; i < mean.length; i++) {
        total += mean[i]
    }
    total = total / mean.length;
    console.log("mean");
    console.log(total);

    d12Mean.innerText = total;
}


function finding20sMean(mean) {
    let total = 0;
    for (let i = 0; i < mean.length; i++) {
        total += mean[i]
    }
    total = total / mean.length;
    console.log("mean");
    console.log(total);

    d20Mean.innerText = total;
}