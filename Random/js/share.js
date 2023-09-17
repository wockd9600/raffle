function shareTwitter() {
    const sendText = "";
    const sendUrl = getSendUrl();

    // console.log(sendUrl)
    window.open(`https://twitter.com/intent/tweet?text=${sendText}%0D%0A&&url=${sendUrl}`);
}

function shareFacebook() {
    const sendUrl = getSendUrl();

    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sendUrl}`);
}

function shareBand() {
    const sendTitle = '';
    const sendUrl = getSendUrl();

    window.open(`http://www.band.us/plugin/share?body=${sendTitle}&route=${sendUrl}`);
}

function shareKakao() {
    const type = window.location.pathname;
    const sendTitle = type == '/' ? '랜덤 숫자 뽑기' : '랜덤 단어 뽑기';
    const sendUrl = getSendUrl();

    if (!Kakao.isInitialized()) {
        Kakao.init('3838744547ef55fd808cecb936193a5b');
    }

    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
        container: '#btnKakao',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id 
        objectType: 'feed',
        content: {  // 여기부터 실제 내용이 들어갑니다. 
            title: sendTitle, // 본문 제목
            description: '뽑기 결과를 확인하세요!',  // 본문 바로 아래 들어가는 영역?
            imageUrl: 'https://raffleuz.com/img/preview.jpg', // 이미지
            link: {
                mobileWebUrl: sendUrl,
                webUrl: sendUrl,
            }
        },
    });


}

// 뽑기가 끝나면 생성
function shareKakaoOfResult() {
    const sendTitle = '뽑기 결과'
    const sendUrl = getSendUrl();

    if (!Kakao.isInitialized()) {
        Kakao.init('3838744547ef55fd808cecb936193a5b');
    }

    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
        container: '#btnKakaoOfResult',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id 
        objectType: 'feed',
        content: {  // 여기부터 실제 내용이 들어갑니다. 
            title: sendTitle, // 본문 제목
            description: '뽑기 결과를 확인하세요!',  // 본문 바로 아래 들어가는 영역?
            imageUrl: 'https://raffleuz.com/img/result_preview.jpg', // 이미지
            link: {
                mobileWebUrl: sendUrl,
                webUrl: sendUrl,
            }
        },
        /* 공유하면 소셜 정보도 같이 줄 수 있는데, 이 부분은 기반 서비스마다 적용이 쉬울수도 어려울 수도 있을듯 합니다. 전 연구해보고 안되면 제거할 예정 (망할 google  blogger...) */
        // social: {  
        //     likeCount: 286,
        //     commentCount: 45,
        //     sharedCount: 845
        // },
        // buttons: [
        //     {
        //         title: '웹으로 보기',
        //         link: {
        //             mobileWebUrl: 'https://developers.kakao.com',
        //             webUrl: 'https://developers.kakao.com'
        //         }
        //     },
        //     {
        //         title: '앱으로 보기',
        //         link: {
        //             mobileWebUrl: 'https://developers.kakao.com',
        //             webUrl: 'https://developers.kakao.com'
        //         }
        //     }
        // ]
    });


}

function shareUrl() {
    const sendUrl = getSendUrl();

    const t = document.createElement("textarea");
    document.body.appendChild(t);

    t.value = sendUrl;
    t.select();
    document.execCommand('copy');

    document.body.removeChild(t);

    alert('링크가 복사 되었습니다.');
}

function getSendUrl() {
    const result = document.getElementById('resultUrl').innerHTML;
    if (result == '') return `https://${window.location.host}${window.location.pathname}`;

    // const currentUrl = window.location.href;
    const host = window.location.host;
    const type = window.location.pathname;
    const pathName = type == '/' ? '/randomnumberresult' : type + 'result';

    const doubleencode = encodeURIComponent(result);

    return `https://${host}${pathName}?query=${doubleencode}`;
}
