// nav componet that print the mavigation bar for each page

fetch("https://matein117.github.io/MLStrengthGYM.github.io/html/components/nav.html")
    .then((Response) => Response.text())
	.then((component_html) => {
		let list_of_elements = document.getElementsByClassName("nav-component");

		for (let element of list_of_elements) {
			element.innerHTML = component_html;

		}

		const menuItemsElement = document.getElementById("menu-items");
		const menuToggleElement = document.getElementById("menu-toggle");
		menuToggleElement.addEventListener("click", (e) => {
			
			menuItemsElement.classList.toggle("show-menu-items");
		});
	});

// footer component 
fetch("https://matein117.github.io/MLStrengthGYM.github.io/html/components/footer.html")
    .then((Response) => Response.text())
	.then((component_html) => {
		let list_of_elements = document.getElementsByClassName("footer-component");

		for (let element of list_of_elements) {
			element.innerHTML = component_html;

		}
	});

// chat-box helplink

fetch("https://matein117.github.io/MLStrengthGYM.github.io/html/components/helpLink.html")
    .then((Response) => Response.text())
	.then((component_html) => {
		let list_of_elements = document.getElementsByClassName("help-link-component");

		for (let element of list_of_elements) {
			element.innerHTML = component_html;

		}
		// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
	let line = textarea.value.split('\n').length

	if(textarea.rows < 6 || line < 6) {
		textarea.rows = line
	}

	if(textarea.rows > 1) {
		chatboxForm.style.alignItems = 'flex-end'
	} else {
		chatboxForm.style.alignItems = 'center'
	}
})



// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})



// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
	if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
		dropdownMenu.classList.remove('show')
	}
})







// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()

	if(isValid(textarea.value)) {
		writeMessage()
		setTimeout(autoReply, 1000)
	}
})



function addZero(num) {
	return num < 10 ? '0'+num : num
}

function writeMessage() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	chatboxForm.style.alignItems = 'center'
	textarea.rows = 1
	textarea.focus()
	textarea.value = ''
	chatboxNoMessage.style.display = 'none'
	scrollBottom()
}

function autoReply() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Thank you for your awesome support!
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	scrollBottom()
}

function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}




	});


// FORMS

//    this funtion is for a leave a messanger
function validateForm(){
	var name = document.forms["myForm"]["your-name"].value;
	var email = document.forms["myForm"]["your-email"].value;
	var phone = document.forms["myForm"]["your-phone"].value;
	var fax = document.forms["myForm"]["your-fax"].value;
	var message = document.forms["myForm"]["your-message"].value;

	if (name.length<1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *";
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    if (phone.length<1) {
        document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";      
    }
	if (fax.length<1) {
        document.getElementById('error-fax').innerHTML = " Please Enter Your Fax *";      
    }
    if (message.length<1) {
        document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
    }          
    if(name.length<1 || email.length<1 || phone.length<1 || message.length<1){
       	return false;
    }           
}

// this function is for registration.

function validateRegistration(){
	var username = document.forms["myRegistration"]["your-username"].value;
	var name = document.forms["myRegistration"]["your-name-registration"].value;
	var email = document.forms["myRegistration"]["your-email-registration"].value;
	var password = document.forms["myRegistration"]["your-password"].value;
	var rePassword = document.forms["myRegistration"]["your-re-password"].value;

	if (username.length<1) {
        document.getElementById('error-username').innerHTML = " Please Enter Your Username *";
    }
	if (name.length<1) {
        document.getElementById('error-name-registration').innerHTML = " Please Enter Your Name *";
    }
    if (email.length<1) {
        document.getElementById('error-email-registration').innerHTML = " Please Enter Your Email *";
    }
    if (password.length<1) {
        document.getElementById('error-password').innerHTML = " Please Enter Your Password *";      
    }
    if (rePassword.length<1) {
        document.getElementById('error-re-password').innerHTML = " Please confirm your Password *";
    }          
    if(username.length<1 || name.length<1 || email.length<1 || password.length<1 || rePassword.length<1){
       	return false;
    }            
}

// validation
// name validation
function validationName(){
	var form = document.getElementById("form-1");
	var name = document.getElementById("your-name").value;

	var text = document.getElementById("text-name");
	var pattern = /^[a-zA-Z ]*$/;
	

	if (name.match(pattern)){
		form.classList.add("name-valid");
		form.classList.remove("name-invalid");
		text.innerHTML = "valid name.";
		text.style.color = "#00ff00";
	}
	else{
		form.classList.remove("name-valid");
		form.classList.add("name-invalid");
		text.innerHTML = "only letters (please provide a valid name)";
		text.style.color = "#ff0000";
	}
	if (name == ""){
		form.classList.remove("name-valid");
		form.classList.remove("name-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00";
	}
}

// email validation
function validationEmail(){
	var form = document.getElementById("form-1");
	var email = document.getElementById("your-email").value;

	var text = document.getElementById("text-email");
	var pattern = /^([a-z0-9]+(?:[.!#$%&'*+\\/=?^_`{|}~-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;

	if (email.match(pattern)){
		form.classList.add("email-valid");
		form.classList.remove("email-invalid");
		text.innerHTML = "your email address is valid.";
		text.style.color = "#00ff00"
	}
	else{
		form.classList.remove("email-valid");
		form.classList.add("email-invalid");
		text.innerHTML = "please enter valid email address";
		text.style.color = "#ff0000"
	}
	if (email == ""){
		form.classList.remove("email-valid");
		form.classList.remove("email-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00"
	}
}

// phone

function validationPhone(){
	var form = document.getElementById("form-1");
	var phone = document.getElementById("your-phone").value;

	var text = document.getElementById("text-phone");
	var pattern = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;

	if (phone.match(pattern)){
		form.classList.add("phone-valid");
		form.classList.remove("phone-invalid");
		text.innerHTML = "your phone is valid.";
		text.style.color = "#00ff00"
	}
	else{
		form.classList.remove("phone-valid");
		form.classList.add("phone-invalid");
		text.innerHTML = "please enter valid phone";
		text.style.color = "#ff0000"
	}
	if (phone == ""){
		form.classList.remove("phone-valid");
		form.classList.remove("phone-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00"
	}
}

//fax
function validationFax(){
	var form = document.getElementById("form-1");
	var phone = document.getElementById("your-fax").value;

	var text = document.getElementById("text-fax");
	var pattern = /^(?=(\D*\d){8,10}\D*$)([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;

	if (phone.match(pattern)){
		form.classList.add("fax-valid");
		form.classList.remove("fax-invalid");
		text.innerHTML = "your fax is valid.";
		text.style.color = "#00ff00"
	}
	else{
		form.classList.remove("fax-valid");
		form.classList.add("fax-invalid");
		text.innerHTML = "please enter valid fax";
		text.style.color = "#ff0000"
	}
	if (phone == ""){
		form.classList.remove("fax-valid");
		form.classList.remove("fax-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00"
	}
}

// message

function validationMessage(){
	var form = document.getElementById("form-1");
	var message = document.getElementById("your-message").value;

	var text = document.getElementById("text-message");
	var pattern = /^[a-zA-Z0-9 ]*$/;

	if (message.match(pattern)){
		form.classList.add("message-valid");
		form.classList.remove("message-invalid");
		text.innerHTML = "your text is valid.";
		text.style.color = "#00ff00"
	}
	else{
		form.classList.remove("message-valid");
		form.classList.add("message-invalid");
		text.innerHTML = "please provide a nice text";
		text.style.color = "#ff0000"
	}
	if (message == ""){
		form.classList.remove("message-valid");
		form.classList.remove("message-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00"
	}
}

// registration 
// username

function validationUsernameRegistration(){
	let form = document.getElementById("form-2");
	let username = document.getElementById("your-username").value;

	let text = document.getElementById("r-text-username");
	let pattern = /^[a-zA-Z0-9 ]*$/;

	if (username.match(pattern)){
		form.classList.add("r-username-valid");
		form.classList.remove("r-username-invalid");
		text.innerHTML = "your username is valid.";
		text.style.color = "#00ff00"
	}
	else{
		form.classList.remove("r-username-valid");
		form.classList.add("r-username-invalid");
		text.innerHTML = "please provide a valid username";
		text.style.color = "#ff0000"
	}
	if (username == ""){
		form.classList.remove("r-username-valid");
		form.classList.remove("r-username-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00"
	}
}

// name 
// name validation
function validationNameRegistration(){
	var form = document.getElementById("form-2");
	var name = document.getElementById("your-name-registration").value;

	var text = document.getElementById("text-name-registration");
	var pattern = /^[a-zA-Z ]*$/;
	

	if (name.match(pattern)){
		form.classList.add("name-valid");
		form.classList.remove("name-invalid");
		text.innerHTML = "valid name.";
		text.style.color = "#00ff00";
	}
	else{
		form.classList.remove("name-valid");
		form.classList.add("name-invalid");
		text.innerHTML = "only letters (please provide a valid name)";
		text.style.color = "#ff0000";
	}
	if (name == ""){
		form.classList.remove("name-valid");
		form.classList.remove("name-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00";
	}
}

// email validation
function validationEmailRegistration(){
	var form = document.getElementById("form-2");
	var email = document.getElementById("your-email-registration").value;

	var text = document.getElementById("text-email-registration");
	var pattern = /^([a-z0-9]+(?:[.!#$%&'*+\\/=?^_`{|}~-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;

	if (email.match(pattern)){
		form.classList.add("email-valid");
		form.classList.remove("email-invalid");
		text.innerHTML = "your email address is valid.";
		text.style.color = "#00ff00"
	}
	else{
		form.classList.remove("email-valid");
		form.classList.add("email-invalid");
		text.innerHTML = "please enter valid email address";
		text.style.color = "#ff0000"
	}
	if (email == ""){
		form.classList.remove("email-valid");
		form.classList.remove("email-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00"
	}
}

// password

function validationPasswordRegistration(){
	let form = document.getElementById("form-2");
	let password = document.getElementById("your-password").value;

	let text = document.getElementById("r-text-password-requirements");
	let pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])(?!.*\s).{6,16}$/;


	if (password.match(pattern)){
		form.classList.add("r-password-valid");
		form.classList.remove("r-password-invalid");
		text.innerHTML = `<p class="password-valid"class>your password is valid.</p>`;
		text.style.color = "#00ff00";
	}
	else{
		form.classList.remove("r-password-valid");
		form.classList.add("r-password-invalid");
		text.innerHTML = `<ul class="password-requiredments">
		                  <li>password must contain 1 number (0-9).</li>
		                  <li>password must contain 1 uppercase letters.</li>
		                  <li>password must contain 1 lowercase letters.</li>
		                  <li>password must contain 1 symbol e.g: (/.,;['-=@]) non-alpha numeric number.</li>
		                  <li>password is 8-16 characters with no space.</li>
						  </ul>`;
						  text.style.color = "#ff0000"
	}
	
	if (password == ""){
		form.classList.remove("r-password-valid");
		form.classList.remove("r-password-invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00";
	}
}

function validatePasswordMatch() {
    let password = document.getElementById("your-password").value;
    let rePassword = document.getElementById("re-password").value;
    let passwordMatchStatus = document.getElementById("password-match-status");

    if (password === rePassword) {
        passwordMatchStatus.innerHTML = "Password match";
        passwordMatchStatus.style.color = "#00ff00";
    } else {
        passwordMatchStatus.innerHTML = "The password does not match";
        passwordMatchStatus.style.color = "#ff0000";
    }
}

