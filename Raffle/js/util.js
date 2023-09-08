const startRaffle = (data) => {
    const { arr, box, result_number, duplicate, length } = data;
    const checked = new Array(length).fill(false);
    const shuffleIndex = [...Array(length).keys()].map(x => x + 1);


    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleIndex[i], shuffleIndex[j]] = [shuffleIndex[j], shuffleIndex[i]];
    }



    for (let i = 0; i < result_number; i++) {
        const span = document.createElement('span');
        span.classList.add('span')
        span.innerText = '';
        box.appendChild(span);

        (function (i) {
            setTimeout(() => {
                const span = document.getElementsByClassName('span')[i];

                let speed = 40;
                const j = 700;

                let index = shuffleIndex[i];

                const interval = setInterval(() => {
                    do {
                        index = index < length - 1 ? index + 1 : 0;
                        span.innerText = arr[index];
                    } while (checked[index]);
                }, speed);

                setTimeout(() => {
                    if (duplicate) checked[index] = true;
                    clearInterval(interval);

                    operateButton();
                }, 4000 + i * j);
            }, 100);
        })(i);
    }
}

export {
    startRaffle
}