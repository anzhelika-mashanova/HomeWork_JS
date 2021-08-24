function onClickHandler(event) {
    fetch("https://jsonplaceholder.typicode.com/todos ")
        .then(res => res.json())
        .then(date => handleToDos(date))
        .catch((error)=> console.log(error));
}
function handleToDos(todos){
    for (item of todos){

        if (item.completed == true){
            addToDo(item,'green');
        }else {
            addToDo(item,'yellow');
        }
    }
}
function addToDo(todo, color) {
    let html = todoItems.innerHTML.replace("{{color}}",color).replace("{{id}}", todo.id).replace("{{title}}", todo.title);
    todoList.insertAdjacentHTML("beforeend", html);
}
