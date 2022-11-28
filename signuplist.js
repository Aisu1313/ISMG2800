//Code to load setup function when page is loaded//
"use strict";
window.addEventListener('load', setup);

//Variable declarations//
var Button1 = document.getElementById("button1");
var Item1 = document.getElementById('item1');
var Button2 = document.getElementById("button2");
var Item2= document.getElementById('item2');
var Button3 = document.getElementById("button3");
var Item3= document.getElementById('item3');
var Button4 = document.getElementById("button4");
var Item4= document.getElementById('item4');
var Button5 = document.getElementById("button5");
var Item5= document.getElementById('item5');
var Button6 = document.getElementById("button6");
var Item6= document.getElementById('item6');
var Side = document.getElementById('side');

//Global Array//
var Btns = [];





//The setup function to run when page is loaded//
function setup() {
    var Btns = document.querySelectorAll(".btn");
    
  
    for(let i=0; i< 6; i++) {
       




        
//addItem(e) function to add items to signup list on page//
        Btns[i].addEventListener("click", addItem)}
//attempt at addItems Function//

            function addItem(e){
                //check if event is in signedup
                if(Btn.some((item)=> item.id === id)){
                    alert("Event already signed up!")
                }else{
                    var item = e.find((e) => e.id === id);


                }
                Btns = e.target;
                let found = false;


//Attempt to increase quantity of event when event is added more than once//
                for (let i = 0; i < Btns.length; i++) {
    if (items[i]._id === data._id) {
        items[i].qty++;
        found=true;
        break;
     } 
}   

};

              
//Event Listeners to add items to signup aside element when button is clicked//               
                
            button1.addEventListener("click", function addItem(e){
                Side.innerHTML += Item1.innerHTML;


//Attempt at extra feature=Trying to create a total number of events added on button click//
                var input1 = document.getElementById("button1").value;  
                var a = parseFloat(input1);
                total += a;
                document.getElementById("Output").innerHTML = total;
                let num = NaN || 0;
      document.getElementById("Output").innerHTML += num +"";
      document.getElementById("Output").innerHTML +=typeof num
            });
            button2.addEventListener("click", function addItem(e){
                
                Side.innerHTML += Item2.innerHTML;
                var input1 = document.getElementById("button2").value;  
                var a = parseFloat(input1);
                total += a;
                document.getElementById("Output").innerHTML = total;
                let num = NaN || 0;
      document.getElementById("Output").innerHTML += num +"";
      document.getElementById("Output").innerHTML +=typeof num
            });
            button3.addEventListener("click", function addItem(e){
                Side.innerHTML += Item3.innerHTML;
                var input1 = document.getElementById("button3").value;  
                var a = parseFloat(input1);
                total += a;
                document.getElementById("Output").innerHTML = total;
                let num = NaN || 0;
      document.getElementById("Output").innerHTML += num +"";
      document.getElementById("Output").innerHTML +=typeof num
            });
            button4.addEventListener("click", function addItem(e){
                Side.innerHTML += Item4.innerHTML;
                
                var input1 = document.getElementById("button4").value;  
                var a = parseFloat(input1);
                total += a;
                document.getElementById("Output").innerHTML = total;
                let num = NaN || 0;
      document.getElementById("Output").innerHTML += num +"";
      document.getElementById("Output").innerHTML +=typeof num
            });
            button5.addEventListener("click", function addItem(e){
                Side.innerHTML += Item5.innerHTML;
                var input1 = document.getElementById("button5").value;  
                var a = parseFloat(input1);
                total += a;
                document.getElementById("Output").innerHTML = total;
                let num = NaN || 0;
      document.getElementById("Output").innerHTML += num +"";
      document.getElementById("Output").innerHTML +=typeof num
            });
            button6.addEventListener("click", function addItem(e){
                Side.innerHTML += Item6.innerHTML;
                var input1 = document.getElementById("button6").value;  
                var a = parseFloat(input1);
                total += a;
                document.getElementById("Output").innerHTML = total;
                let num = NaN || 0;
      document.getElementById("Output").innerHTML += num +"";
      document.getElementById("Output").innerHTML +=typeof num
            }
            );
            ;

            var total = 0;
button.onclick = function () {
    var inputTall = document.getElementById("inputTall").value;
    var a = parseFloat(inputTall);
    total += a;
    document.getElementById("pOutput").innerHTML = total;
}
        };;
        
    

    



   




           
            
            


 

 

   

 





