const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList()||[];

chaptersArray.forEach(addChapter => {
    displayList(addChapter);
});

button.addEventListener('click',function() {
    if (input.value.trim() !== '') {
        chaptersArray.push(input.value.trim());
        localStorage.setItem('chapters', JSON.stringify(chaptersArray));
        addChapter(input.value.trim());
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;  
    list.appendChild(li);
}

function setChapterList(chaptersArray) {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapterList(chapter) {
    const index = chaptersArray.indexOf(chapter);   
    chapter = chapter.slice(0, -1);

    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(chaptersArray);
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



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

chaptersArray = getChapterList();

