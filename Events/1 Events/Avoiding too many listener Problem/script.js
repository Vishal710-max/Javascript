

//  => Avoiding the "Too Many Event Listeners" Problem
//  - A common performance issue in JavaScript applications occurs when too many event listeners are attached, potentially causing memory leaks and sluggish performance.

//  - Why Too Many Listeners Are Bad
//      Memory leaks: Unremoved listeners keep elements in memory
//      Performance issues: Each listener consumes resources
//      Unexpected behavior: Duplicate listeners firing multiple times

let paras = document.querySelectorAll('p');

// In this why we are creating 4 listeners for 4 paras to avoid it we can add only one event listener
// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', function() {
//         alert("You have click on para: " + (i+1))
//     })
// }


// One event listener (Best practices)

function alertPara(event) {
     console.log(event);

     if (event.target.nodeName === 'SPAN')
        alert("You have click on para: " + event.target.textContent);
}

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }


// Remove all the mapping  of 4 paras
// Directly apply to div i.e container

let div = document.getElementById("wrapper");
div.addEventListener('click', alertPara);