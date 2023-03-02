// Планировщик задач   
let array = [];
function pushTask() {
    let task = document.getElementById("task").value;
    let fieldTask = document.getElementById("fieldTask");
    let taskHTML = "";
    array.push(task);
    array.forEach((item) => {
        taskHTML = taskHTML + `<li class="list-group-item">
         <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
            ${item}
        </li>`
    })
    fieldTask.innerHTML = taskHTML;
    document.getElementById("task").value = "";
    document.getElementById("clear").disabled = false;
}

function clearTasks() {
    let fieldTask = document.getElementById("fieldTask").innerHTML = `Нет задач`;
    array.length = 0;
    document.getElementById("clear").disabled = true;
}


// Задание со звёздочкой
function numberProgram() {
    let inputNumber = document.getElementById("inputNumber").value.trim();
    let array = inputNumber.split('');
    document.getElementById("numerals").textContent = array;
    document.getElementById("numeralsNumber").textContent = array.length;
    let sum = 0;
    array.forEach((element) => {
        sum = sum + Number(element);
    })
    document.getElementById("numeralsSum").textContent = sum;
    document.getElementById("numeralsReverse").textContent = array.reverse();
}