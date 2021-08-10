function getUniqueLengths(n) {
    const maxLength = 10 + n;
    let arr = new Array();
    let i = 0;

    while(arr.length < n) {
        let currentLength = Math.floor(Math.random() * maxLength + 1);
        if(arr.indexOf(currentLength) == -1){
            arr.push(currentLength);
            i++;
        }
    }
    return arr;
}

function createArrays(n) {
    const maxNumber = 50;
    let newArrays = new Array();
    let arraysLenghts = new Array();

    arraysLenghts = getUniqueLengths(n);
    for(let i = 0; i < n; i++) {
        let tmpArr = new Array();
        for(let j = 0; j < arraysLenghts[i]; j++) {
            currentNumber = Math.floor(Math.random() * maxNumber + 1);
            tmpArr.push(currentNumber);
        }
        newArrays.push(tmpArr);
    }

    document.getElementById("unsortarr").innerHTML = "<br>Массивы со случайными числами<br>" + newArrays.join('<br>');
    for(let i = 0; i < n; i++) {
        if((i + 1) % 2 == 0) {
            for(let j = 0; j < arraysLenghts[i] - 1; j++) {
                for(let k = 0; k < arraysLenghts[i] - j - 1; k++) {
                    if(newArrays[i][k] > newArrays[i][k + 1]) {
                        let tmp = newArrays[i][k];
                        newArrays[i][k] = newArrays[i][k + 1];
                        newArrays[i][k + 1] = tmp;
                    }
                }
            }
        }
        else{
            for(let j = 0; j < arraysLenghts[i] - 1; j++) {
                for(let k = 0; k < arraysLenghts[i] - j - 1; k++) {
                    if(newArrays[i][k] < newArrays[i][k + 1]) {
                        let tmp = newArrays[i][k];
                        newArrays[i][k] = newArrays[i][k + 1];
                        newArrays[i][k + 1] = tmp;
                    }
                }
            }
        }
    }
    return newArrays;
}

document.getElementById("run").onclick = function() {
    let n = Number(document.getElementById("amountArrays").value);
    if(!(Number.isInteger(n) && n > 0)) {
        alert("Введите натуральное число");
        return;
    }

    let sortArrays = Array();
    sortArrays = createArrays(n);
    document.getElementById("sortarr").innerHTML = "<br>Отсортированные массивы<br>" + sortArrays.join('<br>');
}