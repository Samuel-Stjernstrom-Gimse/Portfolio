const phoneNumber = document.getElementById('phonePic')
const numberPhone = document.getElementById('numberPhone')
let numberBool = false
phoneNumber.addEventListener('click', () => {
	numberBool = !numberBool
	if (numberBool) {
		numberPhone.style.visibility = 'visible'
	} else {
		numberPhone.style.visibility = 'hidden'
	}
})

const email = document.getElementById('email')
const mail = document.getElementById('mail')
let mailBool = false
email.addEventListener('click', () => {
	mailBool = !mailBool
	if (mailBool) {
		mail.style.visibility = 'visible'
	} else {
		mail.style.visibility = 'hidden'
	}
})
