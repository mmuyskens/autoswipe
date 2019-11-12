var numba = 1;
var doshit = function(){
    document.querySelector('[aria-label="Like"]').click();
    console.log(numba);
    numba++;
    setTimeout(doshit, 100);
};
setTimeout(doshit, 100);
