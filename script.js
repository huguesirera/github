function ope() {
    var a = document.getElementById("fas");
    var b = document.getElementById("input");
    var c = document.getElementById("search");
    c.focus()
    b.style.transform = "scaleY(1)"
    a.setAttribute("class","fas fa-xmark");
    a.setAttribute("onclick","clos()");
}
function clos() {
    var a = document.getElementById("fas");
    var b = document.getElementById("input");
    b.style.transform = "scaleY(0)"
    a.setAttribute("class","fas fa-magnifying-glass");
    a.setAttribute("onclick","ope()");
}
document.addEventListener("scroll",function () {
    clos()
})
var number = 0;
var numb = 0;
var num = 0;
var array = ["C:/Users/hugues/Pictures/Screenshots/Screenshot 2025-04-22 155702.png","C:/Users/hugues/Pictures/Screenshots/Screenshot 2025-04-17 144809.png","C:/Users/hugues/Pictures/Screenshots/Screenshot 2025-04-22 155859.png"]
setInterval(() => {
    number -= 80;
    num++
    if (num >= 3) {
        num = 0;
    }
    var a = document.getElementById("move");
    var b = document.createElement("div");
    b.setAttribute("class","add")
    b.innerHTML = '<img src="'+array[num]+'" alt="">'
    a.style.marginTop = number+"vh";
    a.append(b)
}, 5000);

setInterval(() => {
    numb -= 210;
    if (num >= 3) {
        num = 0;
    }
    var a = document.getElementById("mover");
    var b = document.createElement("div");
    b.setAttribute("class","pin")
    b.innerHTML = '<img src="'+array[num]+'" alt="">'
    a.style.marginTop = numb+"px";
    a.append(b)
}, 5000);
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.getElementById("error-msg");
  
    // Basic validation
    if (name === "" || email === "" || message === "") {
      errorMsg.textContent = "Please fill in all fields.";
      return;
    }
  
    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorMsg.textContent = "Please enter a valid email address.";
      return;
    }
  
    errorMsg.textContent = ""; // clear error
  
    // Form is valid!
    alert("Thank you for your message, " + name + "!");
    document.getElementById("contactForm").reset(); // clear form
  });
