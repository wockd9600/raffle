function addValueResultUrl(value) {
    document.getElementById('tempResultUrl').innerHTML += encodeURIComponent(value);
}

function addColorOfBtnLotter() {
    const raffle_btn = document.getElementsByClassName('btn-lottery')[0];
    raffle_btn.classList.remove('btn-cancel');
    raffle_btn.innerHTML = '뽑기';
}

function cancelRaffle() {

    document.getElementById('tempResultUrl').innerHTML = '';
    const box = document.getElementsByClassName('result_box')[0];

    box.innerHTML = '';

    const span = document.createElement('span');
    span.classList.add('span');
    span.classList.add('cancel-text');
    span.innerText = '취소했습니다.';

    box.appendChild(span);

    addColorOfBtnLotter();
    displayKakaoBtn();
}

function displayKakaoBtn() {
    const btn1 = document.getElementById('btnKakao');
    const btn2 = document.getElementById('btnKakaoOfResult');

    btn1.classList.add('dib');
    btn1.classList.remove('dn');
    btn2.classList.add('dn');
    btn2.classList.remove('dib');
}

function displayKakaoBtnOfResult() {
    const btn1 = document.getElementById('btnKakao');
    const btn2 = document.getElementById('btnKakaoOfResult');

    btn2.classList.add('dib');
    btn2.classList.remove('dn');
    btn1.classList.add('dn');
    btn1.classList.remove('dib');
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