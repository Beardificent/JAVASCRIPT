(function() {

    // select the target
    let target = document.getElementById("target");

    // select the buttons with their ids
    let btnOne = document.getElementById("part-one");
    let btnTwo = document.getElementById("part-two");
    let btnThree = document.getElementById("part-three");
    let btnFour = document.getElementById("part-four");

    // get the data-min of each button with LET b/c it will increment on each click - should you use CONST, it wont work because its a constant - can't change
    let btnOneMin = btnOne.getAttribute("data-min");
    let btnTwoMin = btnTwo.getAttribute("data-min");
    let btnThreeMin = btnThree.getAttribute("data-min");
    let btnFourMin = btnFour.getAttribute("data-min");

    // get the data-max of each button
    const btnOneMax = btnOne.getAttribute("data-max");
    const btnTwoMax = btnTwo.getAttribute("data-max");
    const btnThreeMax = btnThree.getAttribute("data-max");
    const btnFourMax = btnFour.getAttribute("data-max");

    // listen to the first btn click and update the target and its btn value and the data-min as well.
    btnOne.addEventListener("click", ()=> {
        if (btnOneMin < btnOneMax) {
            btnOneMin++;
            btnOne.innerHTML = btnOneMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;

        }
    });

    // ""
    btnTwo.addEventListener("click", ()=> {
        if (btnTwoMin < btnTwoMax) {
            btnTwoMin++;
            if (btnTwoMin < 10) {
                btnTwoMin = `0${btnTwoMin}`
            }
            btnTwo.innerHTML = btnTwoMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    // ""
    btnThree.addEventListener("click", ()=> {
        if (btnThreeMin < btnThreeMax) {
            btnThreeMin++;
            if (btnThreeMin < 10) {
                btnThreeMin = `0${btnThreeMin}`
            }
            btnThree.innerHTML = btnThreeMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

    // ""
    btnFour.addEventListener("click", ()=> {
        if (btnFourMin < btnFourMax) {
            btnFourMin++;
            if (btnFourMin < 10) {
                btnFourMin = `0${btnFourMin}`
            }
            btnFour.innerHTML = btnFourMin;
            target.innerHTML = `0${btnOneMin} ${btnTwoMin} ${btnThreeMin} ${btnFourMin}`;
        }
    });

})();