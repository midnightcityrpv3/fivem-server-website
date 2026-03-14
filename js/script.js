function showForm(department){

document.querySelectorAll(".department").forEach(form=>{
form.classList.remove("active")
})

document.getElementById(department).classList.add("active")

document.querySelectorAll(".tab").forEach(tab=>{
tab.classList.remove("active")
})

event.target.classList.add("active")

}
