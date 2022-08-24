/*
https://posting-apollo.tistory.com/55
https://ldrerin.tistory.com/397
https://www.codingfactory.net/12593
@ 뽑기를 누른다

@ 선물상자가 흔들린다

1. 랜덤 숫자를 발생시킨다.
2. 당첨 결과를 보낸다.

@ 임의의 초 후에 뽑기 결과가 나타난다

1. 결과에 따른 이미지를 띄운닫.

*/

const init = {
    arr: null,
    checkList: null,
    last: -1,
    now: 0,
    setInit: function(arr, l) {
        this.arr = arr;
        this.checkList = [false, false, false, false]
        this.last = l;
        this.now = 1;
        return;
    },
    compareArr: function(temp) { return JSON.stringify(this.arr) === JSON.stringify(temp)},
    countNow: () => this.last++,
    isDone: () => this.last === this.now,
}

document.getElementById('get_result').addEventListener('click', () => {
    const temp = document.getElementById('ir').value.split('\n').filter((e) => e != '');
    
    if (temp.length == 0) {
        alert("내용을 입력해주세요.");
        return;
    }

    if (!init.compareArr(temp)) {
        const isRaffle = init.last == -1 ? true : confirm("내용이 달라졌습니다. 다시 뽑겠습니까?");
        
        if (isRaffle) init.setInit(temp, temp.length);
    }

    const raffle_type = document.querySelector('input[type=radio][name=raffle_type]:checked').value;
    const raffle_count = document.getElementById('raffle_count').value;
    
    if (raffle_count > init.last) {
        alert("추첨수가 너무 큽니다.");
        return;
    }

    
    // instant_raffle();
});