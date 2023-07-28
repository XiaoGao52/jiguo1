
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
if (sessionStorage.getItem('key')) {
    document.querySelector('.box3').children[1].innerHTML = localStorage.getItem('usname');
    sessionStorage.removeItem('key');
    document.querySelector('.dlzc').style.display = 'none'
    document.querySelector('.titimg').style.display = 'block'
} else {
    document.querySelector('.titimg').style.display = 'none'

    document.querySelector('.dlzc').style.display = 'block'
}
