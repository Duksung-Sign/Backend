const btns = document.querySelectorAll('.nav-btn');
const box = document.getElementById('mainBox');

// 페이지별 내용 미리 변수로 작성
const pages = {
  about: {
    title: '게임소개',
    content: `
      <p>손가락이 다섯개인 고양이 미오,<br>차별과 편견에 맞서 세상을 구하다.</p>
    `//등장인물 이미지 및 설명 추가 예정
  },
  howto: {
    title: '게임방법',
    content: `
      <ul>
        <li>기본 조작: 이동 WASD 및 화살표 방향키 </li>
        <li>상호작용: E</li>
        <li>전투시 웹캠으로 손과 얼굴을 인식합니다</li>
      </ul>
    `//게임 플레이 화면 추가
  },
  support: {
    title: '문의사항 및 오류제보',
    content: `
      <p>email: myoumyou31@gmail.com</p>
    `//홈페이지 내에서 메일 자동전송기능
  },
  play: {
    title: 'PLAY',
    content: `
      <p>게임로딩중</p>
      <!-- 실제 게임 콘텐츠로 교체 -->
    `//유니티빌드
  }
};


// 최초 화면은 PLAY
renderPage('play');

// 메뉴 버튼 클릭 이벤트
btns.forEach(btn => {
  btn.addEventListener('click', function() {
    btns.forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');

    if(this.id === 'aboutBtn') {
      renderPage('about');
    } else if(this.id === 'howtoBtn') {
      renderPage('howto');
    } else if(this.id === 'playBtn') {
      renderPage('play');
    } else if(this.id === 'supportBtn') {
      renderPage('support');
    }
  });
});

function renderPage(pageKey) {
  const page = pages[pageKey];
  box.innerHTML = `
    <div class="page-title">${page.title}</div>
    <div class="info-box">
      ${page.content}
    </div>
  `;
}




