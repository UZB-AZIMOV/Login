import { USERS } from "../db/server.js"
const btnOpen = document.querySelector(".btn__open")
const btnClose = document.querySelector(".btn__close")
const popap = document.querySelector(".popap")
const overlay = document.querySelector(".overlay")



const model = document.querySelector(".model")
const modelName = document.querySelector(".model__name")
const modelUsername = document.querySelector(".model__username")
const psd = document.querySelector(".model__password")
const modelPasswordConfirm = document.querySelector(".model__password-confirm")

model.addEventListener("submit", (event)=>{event.preventDefault()
let name = modelName.value
let username = modelUsername.value
let passwordConfirm = modelPasswordConfirm.value
if(psd !== passwordConfirm){
    modelPassword.style.border = "1px solid red"
    modelPasswordConfirm.style.border = "1px solid red"

    return
}

let nawUser = {
    id: new Date().getTime(),
    name,
    username ,
    password

}
console.log(nawUser)
})








console.log(USERS);


btnOpen.addEventListener("click",()=>{
    popap.style.display = "flex"
})


btnClose.addEventListener("click",()=>{
    popap.style.display = "none"
})


overlay.addEventListener("click",()=>{
    popap.style.display = "none"
})