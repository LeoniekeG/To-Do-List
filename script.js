const inputField = document.getElementById('inputfield'); 
const getButton = document.getElementById('addbutton'); 

getButton.addEventListener("click", function(){
    console.log('clicked');
    addToToDoList();
})

async function getOldToDo () {
    const data = await getData();
    data.forEach(todo => {
    const theForm = document.getElementById("tasklist");  
    const newTask = document.createElement("li"); 
    newTask.innerHTML = inputField.value;
    const img = document.createElement("img");
    img.src = "./prullenbak.png";
    theForm.appendChild(newTask);
    newTask.innerHTML = todo.desciption;
    newTask.appendChild(img);
    todo._id;
    img.addEventListener("click", function(){
        console.log('clicked');
        theForm.removeChild(newTask);
        deleteToDoFromDatabase(todo._id);
        })
    })
}
getOldToDo();

async function addToToDoList() {  
    const theForm = document.getElementById("tasklist");  
    const newTask = document.createElement("li"); 
    newTask.innerHTML = inputField.value;
    const img = document.createElement("img");
    img.src = "./prullenbak.png";
    theForm.appendChild(newTask); 
    newTask.appendChild(img);
    const toDoId = await postData(inputField.value);
    inputField.value = "";
    img.addEventListener("click", function(){
        console.log('clicked');
        theForm.removeChild(newTask);
        deleteToDoFromDatabase(toDoId);
    })
};

async function deleteToDoFromDatabase (_id) {
    await deleteData(_id);
} 