let isRaffling = false;

const getIsRaffling = () => isRaffling;
const setIsRafflingTrue = () => isRaffling = true;
const setIsRafflingFalse = () => isRaffling = false;

function startRaffle(data) {
    return new Promise((resolve, reject) => {

        setIsRafflingTrue();

        const { arr, box, result_number, duplicate, length, viewNow } = data;
        // const checked = new Array(length).fill(false);
        const shuffleIndex = [...Array(length).keys()].map(x => x + 1);
        const count = new Array(length).fill(0);

        for (let i = length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleIndex[i], shuffleIndex[j]] = [shuffleIndex[j], shuffleIndex[i]];
        }


        const j = viewNow ? 30 : 1500;

        for (let i = 0; i < result_number; i++) {
            const span = document.createElement('span');
            span.classList.add('span')
            span.innerText = ' ';
            box.appendChild(span);

            (function (i) {
                
                setTimeout(() => {
                    const span = document.getElementsByClassName('span')[i];
                    
                    let speed = 30;
                    
                    let index = shuffleIndex[i];
                    
                    const interval = setInterval(() => {
                        if (!isRaffling) {
                            clearInterval(interval);
                            if (i == result_number - 1) reject('cancel');
                            return 0
                        }

                        do {
                            index = index < length - 1 ? index + 1 : 0;
                            span.innerText = arr[index];
                        } while (count[index] > 0 && !duplicate);
                    }, speed);
                    


                    setTimeout(() => {
                        if (!isRaffling) return 0;

                        count[index] += 1;
                        // count[index] += 1
                        clearInterval(interval);

                        if (i == result_number - 1) {
                            operateButton();
                            resolve({ arr, count });
                        }

                    }, 4000 + i * j);
                }, 100);
            })(i);
        }
    });
}


function displayRaffleResult(data) {
    return new Promise((resolve, reject) => {

        downButton();

        const { arr, box, duplicate, length, viewNow, result } = data;
        // const checked = new Array(length).fill(false);
        const shuffleIndex = [...Array(length).keys()].map(x => x + 1);
        const count = new Array(length).fill(0);

        for (let i = length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleIndex[i], shuffleIndex[j]] = [shuffleIndex[j], shuffleIndex[i]];
        }

        const shuffledIndexesOfResult = result.map(value => shuffleIndex.indexOf(value));


        const j = viewNow ? 30 : 1500;

        for (let i = 0; i < result.length; i++) {
            const span = document.createElement('span');
            span.classList.add('span');
            span.innerText = ' ';
            box.appendChild(span);

            (function (i) {
                
                setTimeout(() => {
                    const span = document.getElementsByClassName('span')[i];
                    
                    let speed = 30;
                    
                    let index = shuffleIndex[i];
                    
                    const interval = setInterval(() => {
                        do {
                            index = index < length - 1 ? index + 1 : 0;
                            span.innerText = arr[index];
                        } while (count[index] > 0 && !duplicate);
                    }, speed);
                    


                    setTimeout(() => {
                        span.innerText = result[i];
                        count[shuffledIndexesOfResult[i]] += 1;
                        // count[index] += 1
                        clearInterval(interval);

                    }, 4000 + i * j);
                }, 100);
            })(i);
        }

        const k = viewNow ? 500 : 0;
        setTimeout(() => {
            operateButton();
            resolve({});
            // console.log(count)
        }, 4000 + result.length * j + k);
    });
}

export {
    startRaffle,
    displayRaffleResult,
    setIsRafflingFalse,
    getIsRaffling,
}