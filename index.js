const avatar = document.getElementById("image")
console.log(avatar)
const id = document.getElementsByTagName(".rad input")
console.log(id)
// const btn = document.getElementsByTagName("#submit")

function img1 (){
        avatar.src="pngegg.png";
    }

function img2 (){
        avatar.src="pngwing.com.png";
    }

function img3 (){
        avatar.src="pngegg (1).png";
    }    




const Name = document.getElementById('name')
const mobile = document.getElementById('mobile')
const form = document.getElementById('form')
const errorElement = document.getElementsByClassName('formError')
// const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []

  if (Name.length <= 2) {
    messages.push('Name must be longer than 2 characters')
  }

  if (mobile.value.length != 10) {
    messages.push('Number must have 10 digits')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})