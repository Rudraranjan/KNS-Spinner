

function sendMail(params){
    var tempParams={
        from_name: document.getElementById("namePerson").value,
        to_name: document.getElementById("plotNo").value,
        message: document.getElementById("gift").value,
    };

    emailjs.send("service_1ju0qrl","template_njemxve",tempParams,"tgKZ8U5sUYerEF38w")
    .then(function(res){
        console.log("success",res.status);
    })

}