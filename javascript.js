

// document.write("Hellow World")

// console.log("name")
// console.log("age")
// console.log("address")
// console.log("height")


// let age = 20
// age = 500


// const Number=50


// document.write(age,"<br>")
// document.write(Number)

// let name="Nasra";
// let age=20;
// let address=false;
// let height=1.60;

// document.write(name,"<br>")
// document.write(age,"<br>")
// document.write(address,"<br>")
// document.write(height,"<br>")



// let element = document.getElementById("mydiv");
// element.innerHTML = "Hellow World Hafsa";
// element.style.backgroundColor ="red";
// element.style.fontSize ="20px"


// let title = document.querySelector("p")
//  title.innerHTML = "Hellow Nasra"
// console.log(element);
// let test = document.getElementsByClassName("para");
// console.log(test);
// let button = document.getElementById("mytext");
// console.log(button);

let element1 = document.querySelector("p");
let element = document.querySelector("button");
element.addEventListener("click" , () => {
    element.style.backgroundColor = "red";
    element.style.fontSize = "30px";
    element.style.border = "none";
    element.style.borderRadius = "10px";
    element1.style.color = "red";
    

})







let initialValue = 0;
// let body = document.querySelector("body");
 let value = document.querySelector(".value");
let Increment = document.querySelector(".Increment");
 let Decrement = document.querySelector(".Decrement");
  let Reset = document.querySelector(".Reset");
Increment.addEventListener("click", () => {
    initialValue++;
    value.innerHTML=initialValue
    Increment.style.backgroundColor="red";})
    
   
    //    if(initialValue==10){
    //     value.style.color ="blue"}
    //     else {
            
    //     value.style.color ="black"
    //     }
    //     if(initialValue==2){
           
    //         body.style.backgroundColor="red"
            
    //     }
    
    //      if(initialValue==3)  {
    //         body.style.backgroundColor="green"
    //      }
        
    //      if(initialValue==4)  {
    //         body.style.backgroundColor="yellow"
    //      }
         
    //      if(initialValue==5)  {
    //         body.style.backgroundColor="orange"
    //      }
    //      else if(initialValue>5){
    //         body.style.backgroundColor="aqua"
    //      }
    //      if(initialValue==25)  {
    //         body.style.backgroundColor="blue"
    //      }


    //      if(initialValue==5)  {
    //         body.style.backgroundColor="blue"
    //         // Increment.style.backgroundColor="red"
    //         Increment.style.border="none"
    //         Increment.style.borderradius="20px"
    //      }


    //      else if(initialValue>10){
    //         body.style.backgroundColor="aqua"
    //         Increment.style.backgroundColor="white"
    //      }
         
        
            
         
        
       

        
    // if(initialValue == 0){
    //     value.style.color = "red"}
  


Decrement.addEventListener("click", () => {
    if (initialValue >0){
    initialValue--;
    value.innerHTML=initialValue};
     Decrement.style.backgroundColor="green";


//     if(initialValue==10){
//         value.style.color ="blue"}
//         else{
//             value.innerHTML=initialValue
//         value.style.color ="black"
//         }
//         if(initialValue==2){
//             value.style.color ="red"}
//             else{
//                 value.innerHTML=initialValue
//             value.style.color ="black"
            
//             }
        
   
//     if(initialValue == 0){
//         value.style.color = "red"}


//         if(initialValue==2){
           
//             body.style.backgroundColor="red"
            
//         }
    
//          if(initialValue==3)  {
//             body.style.backgroundColor="green"
//          }
        
//          if(initialValue==4)  {
//             body.style.backgroundColor="yellow"
//          }
         
//          if(initialValue==5)  {
//             body.style.backgroundColor="orange"
//          }
//          else if(initialValue>5){
//             body.style.backgroundColor="aqua"
//          }
   
 }) 

Reset.addEventListener("click", () => {
    initialValue = 0;
    value.innerHTML = initialValue;
    // Reset.style.backgroundColor="orange";

    // if(initialValue == 0){
    //     value.style.color = "red"}


        
        
}) 

