var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

document.addEventListener("DOMContentLoaded",function(){
	var skillLevelBars=document.querySelectorAll(".skill-level-bar");
	skillLevelBars.forEach(function(skillLevelBar){
		var level=skillLevelBar.getAttribute("data-level");
		skillLevelBar.style.width=level;

	});
	
	});

	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
	  
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;
	  
		// You can perform any additional validation here before sending the data
		// For simplicity, we assume everything is valid and proceed to display a success message.
	  
		const responseMessage = document.getElementById('response-message');
		responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
	  
		// Clear the form fields after sending the message
		document.getElementById('name').value = '';
		document.getElementById('email').value = '';
		document.getElementById('message').value = '';
	  });
