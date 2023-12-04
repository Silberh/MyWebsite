function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
}

const serviceID = "service_i67j1hf";
const templateID ="template_u7ixlz9";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
    document.getElementById("name").value ="";
    email.getElementById("email").value ="";
    subject.getElementById("subject").value ="";
    message.getElementById("message").value ="";
    console.log(res);
    alert("Your message sent successfully");
})

.catch((err) => console.log(err));