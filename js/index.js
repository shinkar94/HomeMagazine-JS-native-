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
    btnSend.addEventListener('click',() => {
        let date = e.querySelector(".dateSend").value;
        let opirationName = e.querySelector(".opirationName").value;
        let sum = e.querySelector(".sum").value;
        let description = e.querySelector(".description").value;
        let statusSend = btnSend.classList[1];
    })
});

function updateTable(){
    // добавление tr в конец таблицы
}