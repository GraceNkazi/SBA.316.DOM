//Cache at least one element using selectElementById.

const app = document.getElementById("app");
console.log(app);


//Cache at least one element using querySelector or querySelectorAll.

const paras = document.querySelectorAll("p");
for (let p of paras) console.log(p.innerText);


//Use the parent-child-sibling relationship to navigate between elements at least once 
const emEl = document.querySelector("em");
console.log(emEl);

//Iterate over a collection of elements to accomplish some task.

const appEl = document.querySelector("#app");
console.log(appEl);


//Create at least one element using createElement.// Use appendChild and/or prepend to add new elements to the DOM.


const rows = 2
const cols = 3

const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < cols; c++) {
        const td = document.createElement("td");

        tr.appendChild(td);
    }
    table.appendChild(tr);
}
app.appendChild(table);


//Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 

let elements = ["1", "2", "3"];

let elementsEl = document.querySelector('#elements')

let fragment = new DocumentFragment();
elements.forEach((lelements) => {
    let li = document.createElement('li');
    li.innerHTML = elements;
    fragment.appendChild(li);
})

elementsEl.appendChild(fragment);


//Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.


document.querySelector("h2").textContent = "Elements"

//Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

document.querySelector("h1").style.color = "red"


//Modify at least one attribute of an element in response to user interaction.
const button = document.querySelector("button");

button.setAttribute("name", "submit");
button.setAttribute("disabled", "");

//Register at least two different event listeners and create the associated event handler functions.

//Use at least two Browser Object Model (BOM) properties or methods.
window.alert(" This is me"); 

//Include at least one form and/or input with HTML attribute validation.
const form = document.querySelector('#email');
