const btn1 = document.getElementById("btn2");
const menu = document.getElementById("hamburger");


btn1.addEventListener("click", function(){
   document.getElementById("contactForm").classList.add("show");
    return btn1=true; 
})

if(btn1){
  menu.addEventListener("click", function(){
     document.getElementById("contactForm").classList.remove("show");
})}



//for form 
const form = document.getElementById("send");
const name = document.querySelectorAll("input");

 function sendEmail() {
            Email.send({
                Host: "smtp.elasticgmail.com",
                Username: "abhijitmoin12@gmail.com",
                Password: "C486FE5B41A3144DA048F8B6C7010D59D27A",
                To: 'abhijitmoin12@gmail.com',
                From: "abhijitmoin11@gmail.com",
                Subject: "Sending Email using javascript",
                Body: "Well that was easy!!",
            })
                .then(function (message) {
                    alert("mail sent successfully")
                });
        }

document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting right away
    event.preventDefault();

    let name = document.querySelector("[name='name']").value.trim();
    let email = document.querySelector("[name='email']").value.trim();
    let message = document.querySelector("[name='message']").value.trim();

    // Check if required fields are filled
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return; // Stop here if fields are empty
    }

    // Check if email format is valid
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is fine, submit the form
    alert("Form submitted successfully!");
    event.target.submit();
});