const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click',function() {
    const chapter = input.value.trim();

    if (chapter !== '') {
        addChapter(chapter);
        input.value = '';
        input.focus();
    }
});

function addChapter(chapter) {
    const li = document.createElement('li');
    li.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `remove ${chapter}`);
    

deleteButton.addEventListener('click',function() {
    list.removeChild(li);
    input.focus();
});    

    li.append(deleteButton);
    list.appendChild(li);
}

