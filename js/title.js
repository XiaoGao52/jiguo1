
function code() {
    clearInterval(timer)
    var btn_ = document.querySelector('button');
    var num = 60;
    var timer;
    timer = setInterval(function () {
        num--;
        console.log(num);
        btn_.innerHTML = `${num}秒后重新发送`
        btn_.style.fontSize = '12px'
        if (num == 0) {
            btn_.innerHTML = '重新获取验证码'
            clearInterval(timer);
            num = 60;
        }
    }, 1000)
}


// 登录注册
if (sessionStorage.getItem('key')) {
    document.querySelector('.box3').children[1].innerHTML = localStorage.getItem('usname');
    // sessionStorage.removeItem('key');
    document.querySelector('.titimg').children[0].src = `http://q1.qlogo.cn/g?b=qq&nk=${localStorage.getItem('QQ')}&s=100`
    document.querySelector('.dlzc').style.display = 'none'
    document.querySelector('.titimg').style.display = 'block'
} else {
    document.querySelector('.titimg').style.display = 'none'

    document.querySelector('.dlzc').style.display = 'block'
}
document.querySelector('.titimg').onmouseover = function () {
    document.querySelector('.box4').style.display = 'block'
    var li_ = document.querySelector('.box4').children[0].children[0];
    li_.onclick = function () {
        sessionStorage.removeItem('key')
        location.reload();
    }
}
document.querySelector('.titimg').onmouseout = function () {
    document.querySelector('.box4').style.display = 'none';
    console.log(1);

}
