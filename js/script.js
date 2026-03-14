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


// DISCORD APPLICATION SUBMISSION

function submitApplication(dept){

const name = document.getElementById("name").value
const age = document.getElementById("age").value
const discord = document.getElementById("discord").value
const experience = document.getElementById("experience").value
const reason = document.getElementById("reason").value

const webhook = "https://discord.com/api/webhooks/1482376616377061538/jpoKkcrTzCyFr8ewvVRRe34-R9aFP8u31xaqkOqN4v5eoRhcQmV7dws609TMqheTAnBu"

fetch(webhook, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: "Application Bot",
embeds: [
{
title: dept + " Application",
color: 65535,
fields: [
{name:"Name", value:name},
{name:"Age", value:age},
{name:"Discord", value:discord},
{name:"Experience", value:experience},
{name:"Reason", value:reason}
]
}
]
})
})

alert("Application submitted!")

}
