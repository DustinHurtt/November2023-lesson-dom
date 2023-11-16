console.log("JS connected")

// index.js

let paragraph = document.getElementById('paragraph');

// console.log(paragraph); // <== <p id="paragraph">What is your name?</p>
// console.dir(paragraph)

let divs = document.getElementsByTagName('div');

// console.log(divs);

let googleTag = document.getElementById('google-link')

googleTag.setAttribute('href', 'http://www.google.com')

// console.log(googleTag)

paragraph.removeAttribute('id')

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Elephant';
// console.log(h2Tag); // <== <h2></h2>

// index.js
// ...
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

let text = document.createTextNode('This text is created dynamically  ');
let dynamic = document.createElement('h3')
dynamic.appendChild(text)
parent.appendChild(dynamic)

let monkey = document.createElement('p')
monkey.innerText = 'Hi there! I am using JavaScript'

parent.insertBefore(monkey, dynamic)
 
// parent.appendChild(text);

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

let thisButton = document.getElementById('add-item-button')

let thisInput = document.createElement('input')
thisInput.setAttribute('type', 'text')

parent.insertBefore(thisInput, thisButton)

parent.removeChild(h2Tag)

let content = document.getElementById('content')

console.log("Content", content)

let list = content.querySelector('#item-list')

// let count = 1

thisButton.onclick = () => {
    console.log("list", list)
    let item = document.createElement('li')
    list.appendChild(item)
    
    item.innerText = `Item Number ${list.getElementsByTagName('li').length}`
    item.onclick = clickLi
    // count++
    console.log(item)
    console.log("clicking")
}

let sendButton = document.getElementById('send-btn');
// move the input inside the function (this step is optional):
sendButton.onclick = function() {
  let input = document.getElementsByTagName('input')[1]; // or leave it as it is, outside
  console.log(input.value);
};

let liTags = document.getElementsByTagName('li');
 
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = clickLi
}

function clickLi(e) {
    console.log(e.currentTarget.innerHTML);
}