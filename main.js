// Task 1

let myCountryList = [
    {
        country: "Україна",
        capital: "Київ",
        count: 40000000
    },
    {
        country: "Грузія",
        capital: "Тбілісі",
        count: 10000000
    },
    {
        country: "Великобританія",
        capital: "Лондон",
        count: 100000000
    },
    {
        country: "США",
        capital: "Вашингтон",
        count: 300000000

    }];
myCountryList.forEach(item => item.count = `${item.count / 1000000} млн.`);
let list;
let innerList = "";

const showList = () => {
    let button = document.querySelector("#listButton");
    if (list) {
        list.remove();
        list = "";
        innerList = "";
        button.innerHTML = "Show list";
    }
    else {
        list = document.createElement('ul');
        list.setAttribute("id", "countryList");
        button.after(list);
        button.innerHTML = "Hide list";
        myCountryList.forEach(item => {
            for (key in item) {
                innerList += `<li>${key} : <span>${item[key]}</span></li>`;
            }
            innerList += `<br>`;
        })
        list.innerHTML = innerList;
        let x;
        x = document.querySelectorAll('li');
        x[0].lastChild.classList.add('blueYellow');
        x[1].lastChild.classList.add('blueYellow');

    }

}

// Task 2
let modalBG;
let modalWindow;
let modalInfo;
let modalClose;
const showModal = () => {
    let button = document.querySelector("#modalButton");
    modalBG = document.createElement('div');
    modalBG.classList.add('modalBG');
    button.after(modalBG);
    modalWindow = document.createElement('div');
    modalWindow.classList.add('modalWindow');
    modalBG.append(modalWindow);
    modalInfo = document.createElement('div');
    modalInfo.classList.add('modalInfo');
    modalWindow.prepend(modalInfo);
    modalInfo.innerText = "This is modal message";
    modalClose = document.createElement('button');
    modalClose.classList.add('modalClose');
    modalClose.innerText = "Close";
    modalWindow.append(modalClose);
    modalClose.setAttribute("onclick", "closeModal()");
}
const closeModal = () => {
    modalBG.remove();
}

// Task 3
let itemsList;
let items;
let item;
let colors;
let color;
let currentItem;
let currentColor;
const changeColor = () => {
    let button = document.querySelector("#colorsButton");
    if (itemsList) {
        itemsList.remove();
        itemsList = "";
        button.innerHTML = "Show colors";
    }
    else {
        itemsList = document.createElement('div');
        button.after(itemsList);
        button.innerHTML = "Hide colors";
        itemsList.classList.add('itemsList');

        items = document.createElement('div');
        items.classList.add('items');

        colors = document.createElement('div');
        colors.classList.add('colors');

        itemsList.append(items);
        itemsList.append(colors);

        items.prepend('Choose item');
        colors.prepend(`Choose color`);
        for (let i = 0; i < 5; i++) {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerText = `Item ${i + 1}`;
            item.setAttribute('onclick', 'chooseItem(this)')
            items.append(item);

            let color = document.createElement('div');
            color.classList.add('color');
            color.setAttribute("style", `background : ${colorGenerator()}`);
            color.setAttribute('onclick', 'getColor(this)');
            colors.append(color);
        }


    }
}
const colorGenerator = () => {
    return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)});`;
}
function chooseItem(elem) {
    resetBorder();
    currentItem = elem;
    currentItem.style.border = "2px solid red";

}
function getColor(elem) {
    currentColor = elem.style.background;
    currentItem.style.background = currentColor

}
function resetBorder() {
    let x = document.querySelectorAll(".item");
    for (let i = 0; i < x.length; i++) {
        x[i].style.border = "2px solid black";
    }
}
