
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