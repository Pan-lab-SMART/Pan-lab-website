// 团队页面专属功能
document.addEventListener('DOMContentLoaded', function() {
  // ========== 角色分类导航滚动高亮 ==========
  const roleLinks = document.querySelectorAll('.role-link');
  const sections = document.querySelectorAll('section[id]');

  if (roleLinks.length > 0 && sections.length > 0) {
    // 平滑滚动到对应区域
    roleLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const offset = 80; // header height
          const targetPosition = targetElement.offsetTop - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          history.pushState(null, null, targetId);
        }
      });
    });

    // 滚动时高亮当前分类
    const highlightLink = () => {
      let current = '';
      const scrollY = window.scrollY + 120;

      sections.forEach(section => {
        if (section.offsetTop <= scrollY) {
          current = section.getAttribute('id');
        }
      });

      roleLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', highlightLink, { passive: true });
    highlightLink();

    // 初始哈希滚动
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    }
  }

  // ========== 成员卡片悬停效果 ==========
  const portraits = document.querySelectorAll('.portrait');
  portraits.forEach(portrait => {
    portrait.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });

    portrait.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
});
