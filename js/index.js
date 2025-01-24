// 菜单栏滑出功能
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay'); // 获取遮罩层

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active'); // 同时切换遮罩层的显示状态
});

// 点击遮罩层关闭侧边栏
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// 滚动时导航栏背景变化
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const heroHeight = document.querySelector('.hero-section').clientHeight; // 获取顶图的高度

    // 当滚动距离超过顶图高度时，导航栏变为白色
    if (window.scrollY > heroHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 打字机效果加载页面时自动触发
