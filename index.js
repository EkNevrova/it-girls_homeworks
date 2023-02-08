
function send() {

    let strFIO = document.getElementById("inputFIO").value;
    let stringFIO = strFIO.trim().split(" ");
    let correctName = "";
    let partOfName = "";
    let ind = "";
    stringFIO.forEach((element) => {
        partOfName = element.toLowerCase().replace(element.substr(0, 1), element.substr(0, 1).toUpperCase());
        ind = partOfName.indexOf("-");
        if (ind !== -1) {
            partOfName = partOfName.replace(partOfName.substr(ind + 1, 1), partOfName.substr(ind + 1, 1).toUpperCase());
        }
        correctName = correctName + " " + partOfName;
    })

    strFIO = correctName;
    let strComment = document.getElementById("inputComment").value;
    let changedComment = strComment.replace(/viagra/gmi, "***");
    changedComment = changedComment.replace(/xxx/gmi, "***");
    let userAva = document.getElementById("basic-url").value;

    document.getElementsByClassName("chat")[0].classList.toggle("hiddenOn");
    document.getElementById("avatar").src = userAva;
    document.getElementById("fio").textContent = correctName;
    document.getElementById("comment").value = changedComment;

}


// Задание со звёздочкой
let str;
function deleteTags(str) {
    str = document.getElementById("star").remove();
    return str;
};
console.log(deleteTags(str));