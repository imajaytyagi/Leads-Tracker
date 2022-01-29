// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

function renderLeads() {
    let listItem = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
        listItem += `
        <li>
            <a target='_blank' href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>
        ` 
    }
    ulEl.innerHTML = listItem
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})



