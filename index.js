
function send() {

    let strFIO = document.getElementById("inputFIO").value;
    let stringFIO = strFIO.trim();
    let checkbox = document.getElementById("flexRadioDefault1");

    if (stringFIO !== "" && checkbox.checked) {
        stringFIO = stringFIO.split(" ");
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
    }
    else {
        strFIO = "username";
    }

    let strComment = document.getElementById("inputComment").value;
    let changedComment = strComment.replace(/viagra/gmi, "***");
    changedComment = changedComment.replace(/xxx/gmi, "***");
    let userAva = document.getElementById("basic-url").value;

    if (userAva.trim() === "") {
        let randomAva = Math.round(Math.random() * 10);
        userAva = `assets/${randomAva}.jpg`;
    }

    document.getElementsByClassName("chat")[0].classList.toggle("hiddenOn");
    document.getElementById("avatar").src = userAva;
    document.getElementById("fio").textContent = strFIO + " " + new Date();
    document.getElementById("comment").value = changedComment;

}


// Задание со звёздочкой

function formatDate() {

    let starDate = document.getElementById("starCom").value;
    let now = new Date();
    let diff = (now.getTime() - starDate.getTime()) / 1000;
    switch (diff) {
        case diff < 2:
            document.getElementById("date").value = "прямо сейчас";
            break;
        case diff >= 2 && diff <= 30:
            document.getElementById("date").value = ("30 секунд назад");
            break;
        case diff > 30 && diff <= 300:
            document.getElementById("date").value = ("5 минут назад");
            break;
        default:
            document.getElementById("date").value = (formatDate(date));
    }

}