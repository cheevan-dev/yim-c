// 간단한 애니메이션 및 사용자 인터랙션 스크립트
// Anychem Company Intro Page

document.addEventListener('DOMContentLoaded', () => {
  // 헤더 페이드인 효과
  const header = document.querySelector('header');
  header.style.opacity = 0;
  setTimeout(() => {
    header.style.transition = 'opacity 1.5s ease-in-out';
    header.style.opacity = 1;
  }, 300);

  // 포인트 카드 애니메이션 효과
  const points = document.querySelectorAll('.point');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.2 });

  points.forEach(point => {
    point.style.transform = 'translateY(50px)';
    point.style.opacity = 0;
    point.style.transition = 'all 0.8s ease';
    observer.observe(point);
  });

  // 스크롤 시 상단으로 이동 버튼 생성
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.textContent = '▲ TOP';
  scrollTopBtn.style.position = 'fixed';
  scrollTopBtn.style.bottom = '30px';
  scrollTopBtn.style.right = '30px';
  scrollTopBtn.style.padding = '10px 15px';
  scrollTopBtn.style.backgroundColor = '#004b8d';
  scrollTopBtn.style.color = '#fff';
  scrollTopBtn.style.border = 'none';
  scrollTopBtn.style.borderRadius = '8px';
  scrollTopBtn.style.cursor = 'pointer';
  scrollTopBtn.style.display = 'none';
  scrollTopBtn.style.boxShadow = '0 3px 6px rgba(0,0,0,0.2)';

  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
});
