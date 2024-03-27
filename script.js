const list = document.querySelector('ul');
const itemTextBox = document.querySelector('input');
const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
    const newItem = itemTextBox.value;
    itemTextBox.value = '';

    const itemLi = document.createElement('li');
    const itemSpan = document.createElement('span');
    const itemButton = document.createElement('button');

    itemLi.appendChild(itemSpan);
    itemLi.appendChild(itemButton);
    itemSpan.textContent = newItem;
    itemButton.textContent = 'Delete';
    list.appendChild(itemLi);

    itemButton.addEventListener('click', () => {
        itemLi.remove();
    });
    
});
