const dataOperation = document.querySelectorAll(".Data");

const STATE = {
    money: 273
}

function addDataState(STATE){
    console.log(STATE.money);
}
addDataState(STATE)

dataOperation.forEach(e => {
    // отправка данных
    let btnSend = e.querySelector(".btnSend");
    if(btnSend){
        btnSend.addEventListener('click',() => {
            let date = e.querySelector(".dateSend").value;
            let opirationName = e.querySelector(".opirationName").value;
            let sum = e.querySelector(".sum").value;
            let description = e.querySelector(".description").value;
            let statusSend = btnSend.classList[1];
        })
    }
});

function updateTable(){
    // добавление tr в конец таблицы
}

// анимация блока DATA
const TIT_DATE = document.querySelectorAll(".tittleData");
const DATA_BLOCK = document.querySelectorAll(".Data");
const INFO_BLOCK= document.querySelectorAll(".Info");

function animTitDat(dataB, infoB){  
    TIT_DATE.forEach(tit => {
        tit.addEventListener('click', ()=>{
            console.log("click title");
        });
    });
}
animTitDat(DATA_BLOCK, INFO_BLOCK);