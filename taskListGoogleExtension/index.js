const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const inputEl = document.getElementById("input-el");
var myLeads = [];
const ulEl = document.getElementById("ul-el")
var listItems = ""
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click", function() {
    if(inputEl.value != "") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    } 
}) 

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      inputBtn.click();
    }
  });

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    })
})

function renderLeads() {
  listItems = "";
  for (var i = 0; i < myLeads.length; i++) {
    listItems += `
      <li class='li-item'>
          ${myLeads[i]} <button class='remove-btn' data-index='${i}'>X</button> 
      </li>
    `;
  }
  ulEl.innerHTML = listItems;

  var removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var index = parseInt(btn.getAttribute('data-index'));
      remove(index);
    });
  });
}

clearBtn.addEventListener("click", function() {
        myLeads = [];
        localStorage.clear();
        renderLeads();
})

function remove(i) {
    myLeads.splice(i, 1);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
  } 