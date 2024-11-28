// 경로 설정
const routes = {
  404: '/pages/404.html',
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  '/lorem': '/pages/lorem.html',
};

const handleLocation = async () => {
  // 현재 경로 저장
  const path = window.location.pathname;

  // 현재 경로 찾기
  const route = routes[path] || routes[404];

  // 현재 경로에 대한 HTML 가져오기
  const html = await fetch(route).then((data) => data.text());

  // 가져온 HTML 로드
  document.querySelector('#root').innerHTML = html;
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();

  // 브라우저 URL 업데이트
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

// 브라우저 앞 또는 뒤로 가기 버튼 클릭할 때 처리
window.onpopstate = handleLocation;

// 처음 페이지 렌더링할 때 어떤 경로로든 올바른 페이지 로드
handleLocation();
