// 团队页面专属功能
document.addEventListener('DOMContentLoaded', function() {
  // 为导航链接添加平滑滚动
  const roleLinks = document.querySelectorAll('.role-link');
  
  if (roleLinks.length > 0) {
    roleLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // 计算偏移量（考虑固定导航栏高度）
          const offset = 100;
          const targetPosition = targetElement.offsetTop - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // 更新URL哈希（但不触发跳转）
          history.pushState(null, null, targetId);
        }
      });
    });
    
    // 检查初始哈希并滚动到对应位置
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }
  
  // 为成员卡片添加悬停效果
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
