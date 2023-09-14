const stopFunc = function (e) { e.preventDefault(); e.stopPropagation(); return false; };

const downButton = () => {
    const all = document.querySelectorAll('*');
    for (let idx in all) {
        const el = all[idx];
        if (el.addEventListener) {
            el.addEventListener('click', stopFunc, true);
        }
    }

    const cancelButton = document.getElementsByClassName('cancel')[0];
    console.log(cancelButton)
    if (cancelButton.removeEventListener) cancelButton.removeEventListener('click', stopFunc, true);
}

const operateButton = () => {
    const all = document.querySelectorAll('*');
    for (let idx in all) {
        const el = all[idx];
        if (el.removeEventListener) el.removeEventListener('click', stopFunc, true);
    }
}


// const showMenu = (type) => {
//     document.getElementById('main_raffle').style.display = 'none';
//     document.getElementById('instant_raffle').style.display = 'none';
//     document.getElementById('slow_raffle').style.display = 'none';
//     console.log(type)
//     document.getElementById(`${type}_raffle`).style.display = 'block';
// }