const inputEl = document.getElementById('input');
const itemContainer = document.querySelector('.item-container');



const addItem = () => {
    if(inputEl.value === ''){
        alert('You must add a message before adding to the page');
    } else{
        const li = document.createElement('li');
        li.innerHTML = inputEl.value;
        itemContainer.appendChild(li);
        
        const span = document.createElement('span');
        span.innerHTML = '&times;';
        li.appendChild(span);
        memoryUpdate();
    }
    inputEl.value = '';
}

itemContainer.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        memoryUpdate();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        memoryUpdate();
    }
});


function memoryUpdate() {
    localStorage.setItem('Data', itemContainer.innerHTML);
}

itemContainer.innerHTML = localStorage.getItem('Data');