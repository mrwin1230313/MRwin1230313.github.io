// 获取按钮元素
const btn = document.getElementById('btn');

// 给按钮添加点击事件
btn.addEventListener('click', function() {
    // 弹出提示框
    alert('你点击了按钮！这是JS实现的交互～');
    // 改变按钮文字
    btn.textContent = '我被点击啦';
    // 改变按钮颜色
    btn.style.backgroundColor = '#e74c3c';
});