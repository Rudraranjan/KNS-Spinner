let container = document.querySelector(".box");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 2000);


let gifts = ['Rs 50/sqft Cash Discout', 'Rs 100/sqft Cash Discount', 'Rs 150/sqft Cash Discount', 'One Plus 10 Pro', 'I-Pad Pro', 'Smartify Home Automation', 'IKEA Shopping Spree', 'Gold 10 gms' ];

var random;

// function getRandomNumber(min,max){
//   let step1 = max - min +1;
//   let step2 = Math.random() * step1;
//   let result = Math.floor(step2) + min;
// }

// btn.onclick = function(){
//   spiningWheel();
// }



function  spiningWheel () {
  wheel.play();
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 2000);
  random = gifts[Math.floor(Math.random() * gifts.length)];
  document.getElementById("hd_discount_value").value = random;

  setTimeout(function(){
    applause.play();
    Swal.fire({
        title: 'Hurray.....',
        html: "Congratulation! You Won " + random,
        confirmButtonColor: ' #FFFFFF',
        confirmButtonText: `<a href="/indextwo.html?random=${random}">Claim Now</a>`
      })
}, 5000);


getRandom();

}

function getRandom() {
  var test = random;
  // alert(test);
  return test;
}



// sendmail function in below

function sendMail(params){


  var tempParams={
    
      
      from_name: document.getElementById("namePerson").value,
      to_name: document.getElementById("plotNo").value,
      message: document.getElementById("gift").value,
  };

  emailjs.send("service_1ju0qrl","template_njemxve",tempParams,"tgKZ8U5sUYerEF38w")
  .then(function(res){
      alert("success",res.status);
  })

}