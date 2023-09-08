function startRaffle(data) {
    return new Promise((resolve, reject) => {

        const { arr, box, result_number, duplicate, length, viewNow } = data;
        // const checked = new Array(length).fill(false);
        const shuffleIndex = [...Array(length).keys()].map(x => x + 1);
        const count = new Array(length).fill(0);

        for (let i = length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleIndex[i], shuffleIndex[j]] = [shuffleIndex[j], shuffleIndex[i]];
        }


        const j = viewNow ? 30 : 700;

        for (let i = 0; i < result_number; i++) {
            const span = document.createElement('span');
            span.classList.add('span')
            span.innerText = '';
            box.appendChild(span);

            (function (i) {
                
                setTimeout(() => {
                    const span = document.getElementsByClassName('span')[i];
                    
                    let speed = 40;
                    
                    let index = shuffleIndex[i];
                    
                    const interval = setInterval(() => {
                        do {
                            index = index < length - 1 ? index + 1 : 0;
                            span.innerText = arr[index];
                        } while (count[index] > 0 && duplicate);
                    }, speed);
                    


                    setTimeout(() => {
                        count[index] += 1;
                        // count[index] += 1
                        clearInterval(interval);

                    }, 4000 + i * j);
                }, 100);
            })(i);
        }

        const k = viewNow ? 500 : 0;
        setTimeout(() => {
            operateButton();
            resolve({arr, count});
            // console.log(count)
        }, 4000 + result_number * j + k);
    });
}

export {
    startRaffle
}