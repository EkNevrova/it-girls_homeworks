document.addEventListener("DOMContentLoaded", function () {

    let array = [
        {
            name: 'Стивен Спилберг',
            career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
            films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
            top_rated_film: 'Список Шиндлера'
        },
        {
            name: 'Кристофер Нолан',
            career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
            films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
            top_rated_film: 'Начало'
        },
        {
            name: 'Виктор Шамиров',
            career: 'Режиссер, Сценарист, Актер, Продюсер, Монтажер',
            films: 'https://www.film.ru/person/viktor-shamirov',
            top_rated_film: 'Со мною вот что происходит'
        },
        {
            name: 'Мартин МакДонах',
            career: 'Сценарист, Режиссёр, Продюсер',
            films: 'https://www.film.ru/person/martin-makdonah',
            top_rated_film: 'Три билборда на границе Эббинга, Миссури'
        },
        {
            name: 'Алексей Балабанов',
            career: 'Режиссёр, Сценарист, Актёр, Продюсер',
            films: 'https://www.film.ru/person/aleksey-balabanov',
            top_rated_film: 'Брат'
        },
        {
            name: 'Питер Фаррелли',
            career: 'Продюсер, Режиссёр, Сценарист, Актёр',
            films: 'https://www.film.ru/person/piter-farrelli',
            top_rated_film: 'Зелёная книга'
        },
        {
            name: 'Юрий Быков',
            career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
            films: 'https://www.film.ru/person/yuriy-bykov',
            top_rated_film: 'Дурак'
        },
        {
            name: 'Жан-Марк Валле',
            career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
            films: 'https://www.film.ru/person/zhan-mark-valle',
            top_rated_film: 'Далласский клуб покупателей'
        },
    ];

    let obj = {};
    let index = 0;
    let images = document.querySelectorAll("img");
    let producers = document.querySelectorAll(".card-title");
    let professions = document.querySelectorAll(".card-text");
    let movies = document.querySelectorAll(".btn");
    let topFilmsList = [];
    do {
        obj = array[index];
        images[index].src = `assets/${index}.jpg`;
        images[index].classList.add("img");
        producers[index].textContent = Object.values(obj)[0];
        professions[index].textContent = Object.values(obj)[1];
        topFilmsList.push(Object.values(obj)[3]);
        movies[index].href = Object.values(obj)[2];
        index += 1;
    } while (index <= 7);

    document.getElementsByClassName("lead")[0].textContent = topFilmsList;
});



// Задание со звёздочкой
const intersection = (...arrays) => {
    let newArray = [];
    if (arrays.length = 2) {
        arrays[0].forEach((element) => {
            if (arrays[1].includes(element)) {
                newArray.push(element);
            }
        });
    }
    else {
        arrays[0].forEach((element) => {
            if (arrays[1].includes(element) && arrays[2].includes(element)) {
                newArray.push(element);
            }
        });
    }

    return [...new Set(newArray)];
};

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']