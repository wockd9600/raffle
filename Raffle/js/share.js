function shareTwitter() {
    const sendText = "뽑기 결과입니다.";
    const sendUrl = getSendUrl();
    window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`);
}

function shareFacebook() {
    const sendUrl = getSendUrl();

    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sendUrl}`);
}

function shareBand() {
    const sendTitle = '뽑기 결과입니다.';
    const sendUrl = getSendUrl();

    window.open(`http://www.band.us/plugin/share?body=${sendTitle}&route=${sendUrl}`);
}

// 뽑기가 끝나면 생성
function shareKakao() {
    const sendTitle = '뽑기 결과입니다.';
    const sendUrl = getSendUrl();

    if (!Kakao.isInitialized()) {
        Kakao.init('3838744547ef55fd808cecb936193a5b');
    }

    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
        container: '#btnKakao',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id 
        objectType: 'feed',
        content: {  // 여기부터 실제 내용이 들어갑니다. 
            title: '딸기 치즈 케익', // 본문 제목
            description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',  // 본문 바로 아래 들어가는 영역?
            imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png', // 이미지
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com'
            }
        },
        social: {  /* 공유하면 소셜 정보도 같이 줄 수 있는데, 이 부분은 기반 서비스마다 적용이 쉬울수도 어려울 수도 있을듯 합니다. 전 연구해보고 안되면 제거할 예정 (망할 google  blogger...) */
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845
        },
        buttons: [
            {
                title: '웹으로 보기',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com'
                }
            },
            {
                title: '앱으로 보기',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com'
                }
            }
        ]
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
    return encodeURIComponent("devpad.tistory.com/")
}