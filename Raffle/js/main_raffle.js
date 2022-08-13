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
document.getElementById('get_result').addEventListener('click', () => {
    alert('꽝');
});

const vibration = (target) => {
    target.classList.add("vibration");
  
    setTimeout(function() {
      target.classList.remove("vibration");
    }, 2900);
  }