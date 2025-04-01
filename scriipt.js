// let string="";
// let display =document.getElementById('inputbox');
// let buttons =document.querySelectorAll('button'); 
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string);
//             document.value =string;    
//         }
//         else if(e.target.innerHTML=='C'){
//       string=" "
//      document.querySelector('input').value=string;
//         }
//         else{
//         console.log(e.target)
//         string=string+e.target.innerHTML;
//         document.querySelector('input') .value=string;  
//         }
//      });
// });
let string = "";
let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Safely evaluate the expression
                string = eval(string);
                display.value = string;  // Corrected this line
            } catch (error) {
                display.value = "Error";  // In case of an invalid expression
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            display.value = string;  // Clear the input box
        } else {
            string += e.target.innerHTML;
            display.value = string;  // Display updated string
        }
    });
});
