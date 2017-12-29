

let txt = document.getElementById('txt');
let list = document.getElementById('list');

// console.log(txt.value)


document.getElementById('todoForm').addEventListener('submit',function(e) {
    e.preventDefault();
    let li = document.createElement('LI');
    li.className = 'list-group-item'
    li.innerHTML = txt.value;
    list.appendChild(li);
    // delete Button

    let delBtn = document.createElement('BUTTON');
    delBtn.innerHTML = 'Delete';
    delBtn.className = 'btn btn-secondary float-right'
    delBtn.setAttribute('onClick', 'remov(this)')
    li.appendChild(delBtn)

    let editBtn = document.createElement('BUTTON');
    editBtn.innerHTML = 'Edit';
    editBtn.className = 'btn btn-info float-right'
    editBtn.setAttribute('onClick', 'edit(this)');
    li.appendChild(editBtn);

    txt.value = '';
    txt.focus();
})

function remov(d) {
        d.parentNode.style.display = 'none';
        console.log(d.parentNode);
}

function edit(e) {
    
    let val = prompt('Edit Todo');
    e.parentNode.firstChild.nodeValue = val;
}