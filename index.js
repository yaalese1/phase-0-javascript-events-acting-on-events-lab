// Your code here

// grab correct element 
// const dodger = document.getElementById("dodger")
// dodger.style.backgroundColor = "#000000";
// dodger.style.backgroundColor = "#FF69B4"
// dodger.style.bottom = "100px"
// dodger.style.bottom = "0px"
// dodger.style.left = "0px";
// // document.addEventListener("keydown", function (event) {
// //     if (event.key === "ArrowLeft"){
// //         const leftNumbers = dodger.style.left.replace("px", "");
// //         const left = parseInt(leftNumbers, 10); 
        
// //     }
// // })

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }
//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });



  function moveDodgerRight(){
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right > 0) {
      dodger.style.right = `${right -1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
    
  })
console.log(moveDodgerRight)

