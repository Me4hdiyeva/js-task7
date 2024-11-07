let mode = document.querySelector(".btn");
let section = document.querySelector(".switcher")
mode.addEventListener("click", function(){
   section.classList.toggle("dark-mode");
    if (section.classList.contains("dark-mode")) {
        mode.textContent = "Change to dark mood";
        mode.style.backgroundColor = "black";
        mode.style.color = "white"
      } else {
        mode.textContent = "Change to light mood";
        mode.style.backgroundColor = "white";
        mode.style.color = "black"
      } 
    });


let num = document.querySelector("#btn-num");
function rndm(){
    let x = Math.floor(Math.random() * 1000);


    return x
}
num.addEventListener("click", function(){
let numbers = rndm();
document.getElementById("number").textContent = numbers;   
})


let data = document.querySelector("#time")
function newData(){
    let now = new Date();
    let day = now.getDate().toString().padStart(2, '0'); 
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear(); 
    let hours = now.getHours().toString().padStart(2, '0'); 
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}|${year}-${month}-${day}`;
    
}
data.addEventListener("click",function(){
    let dataTime = newData()
    document.getElementById("data-time").textContent = dataTime; 
})




let passwordInput = document.querySelector("#pass"); 
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
passwordInput.addEventListener("keyup", function() {
    const password = this.value; 
    const isValid = password.match(regex); 
    const messageElement = document.getElementById("message"); 
    if (isValid) {
        messageElement.textContent = "Strong password"; 
        messageElement.style.color = "green"; 
        
    } else {
        messageElement.textContent = "Weak password"; 
        messageElement.style.color = "red"; 
    }
});



 


let acc = document.querySelectorAll("#acc"); 
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");  
        let panel = this.nextElementSibling; 

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;  
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; 
        }

        if (this.classList.contains("active")) {
            this.textContent = "Hide text";
          
          } else {
            this.textContent = "Show text";
           
          } 
    });

}

