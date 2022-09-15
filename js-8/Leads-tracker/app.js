let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener('click', function () {

    let myData = inputEl.value;
    myLeads.push(myData);
    console.log(myLeads);
    renderLeads();
    inputEl.value = '';
})

function renderLeads() {

    let listItems = '';

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += '<li><a target="_blank" href="' + myLeads[i] +'">' + myLeads[i] + '</li></a>';
        listItems += `
        <li>
            <a target="_blank" href=" ${myLeads[i]} ">
                ${myLeads[i]} 
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