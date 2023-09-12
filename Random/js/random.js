function addValueResultUrl(value) {
    document.getElementById('resultUrl').innerHTML += encodeURIComponent(value);
}

function getShuffledArr(arr) {
    const shuffledArr = [...arr];
    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }

    return shuffledArr;
}

function getObjForStartRaffle(arr) {
    const length = arr.length;

    const temp_result_number = parseInt(document.getElementById('result_number').value);
    const result_number = temp_result_number > 0 ? temp_result_number : 1;

    if (length < result_number) {
        alert('너무 많이 뽑습니다.');
        return false;
    } else if (length === result_number) {
        alert(`${length}개 중에 ${length}개를 뽑으면 전부 뽑게 됩니다.`);
        return false;
    }

    downButton();

    const viewNow = parseInt(document.querySelector('input[name="raffle_type"]:checked').value);
    const duplicate = document.getElementById('duplicate').checked;
    const box = document.getElementsByClassName('result_box')[0];
    
    const shuffledArr = getShuffledArr(arr);

    box.innerHTML = '';

    return {
        arr: shuffledArr,
        length,
        result_number,
        duplicate,
        box,
        viewNow,
    }
}
