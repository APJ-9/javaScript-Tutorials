let myLeads = [];
// myLeads.push('def');
// myLeads = JSON.stringify(myLeads);
// console.log(typeof(myLeads),myLeads);
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById('input-btn');

// localStorage.setItem("myName","Akhil P Jose");
// console.log(localStorage.getItem("myName"));
// localStorage.clear();
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

// console.log(deleteBtn);
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    console.log(leadsFromLocalStorage);
    render(myLeads);
} else {
    console.log('no items in the array');
}

function render(leads) {

    let listItems = '';

    for (let i = 0; i < leads.length; i++) {
        // listItems += '<li><a target="_blank" href="' + myLeads[i] +'">' + myLeads[i] + '</li></a>';
        listItems += `
        <li>
            <a target="_blank" href=" ${leads[i]} ">
                ${leads[i]} 
            </a>
        </li>
        `;  //template strings or template literals
        // ulEl.innerHTML += '<li>' + myLeads[i] + '</li>';
        //Alternative way
        /*
        const li = document.createElement('li');
        li.textContent = myLeads[i];
        ulEl.append(li);
        */
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener('click', function () {

    let myData = inputEl.value;
    myLeads.push(myData);
    // console.log(myLeads);
    // console.log(typeof(myData));
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
    // localStorage.clear();
    inputEl.value = '';
});

tabBtn.addEventListener('click', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);

    })
    // console.log('hello world');
    // let myTab = 'hello akhil';
});