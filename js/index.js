axios.get('http://127.0.0.1:3000/useing/public', {

}).then(function (res) {
    var ul_ = document.querySelectorAll('.swiper-slide')[1].children[0]
    var ul1_ = document.querySelectorAll('.swiper-slide')[2].children[0]
    var ul2_ = document.querySelectorAll('.swiper-slide')[3].children[0]
    // console.log(ul1_);
    var str = '';
    var num = 0;
    for (var item of res.data) {
        num++;
        if (num < 5) {
            str += `
            <li>
            <a href="">
                <img src=${item.img} alt="">
                <div>
                    <p>
                        ${item.text}
                    </p>
                    <span>${item.totalnum}台</span>&nbsp;&nbsp;
                    <span>${item.num}台</span>
                    <p><span>${item.apply}</span>申请</p>
                    <p>剩余时间两天</p>
                    <span>${item.info_ty}</span>
                </div>
            </a>
        </li>
            `
            ul_.innerHTML = str;

        } else if (num == 5) {
            str = ''
        }
        else if (num > 5 && num < 10) {

            // console.log(num);
            str += `
            <li>
            <a href="">
                <img src=${item.img} alt="">
                <div>
                    <p>
                        ${item.text}
                    </p>
                    <span>${item.totalnum}台</span>&nbsp;&nbsp;
                    <span>${item.num}台</span>
                    <p><span>${item.apply}</span>申请</p>
                    <p>剩余时间两天</p>
                    <span>${item.info_ty}</span>
                </div>
            </a>
        </li>
            `
            ul1_.innerHTML = str;
        } else if (num == 10) {
            str = ''
        }
        else if (num > 10 && num < 14) {

            // console.log(num);
            str += `
            <li>
            <a href="">
                <img src=${item.img} alt="">
                <div>
                    <p>
                        ${item.text}
                    </p>
                    <span>${item.totalnum}台</span>&nbsp;&nbsp;
                    <span>${item.num}台</span>
                    <p><span>${item.apply}</span>申请</p>
                    <p>剩余时间两天</p>
                    <span>${item.info_ty}</span>
                </div>
            </a>
        </li>
            `
            ul2_.innerHTML = str;
        }
    }
})

// 发现酷玩
axios.get('http://127.0.0.1:3000/play/new', {

}).then(function (res) {
    // console.log(res.data);
    var str = ''
    var num = 0;
    for (var item of res.data) {

        // console.log(item);
        for (var item1 of item) {
            num++;
            // console.log(item1);
            if (num < 17) {
                str += `
            <li>
                        <img src=${item1.img} alt="">
                        <div class="box502">
                            <p>${item1.description}</p>
                            <span>${item1.text}</span>
                            <p>${item1.price}<span>${item1.like}</span><span>${item1.like}</span></p>
                        </div>
                    </li>
            `
            }
        }
    }
    // console.log();
    document.querySelector('.box501').children[1].innerHTML = str

})
// 点击加载更多

var str2 = ''
var box502_ = document.querySelector('.box502').children[0]
box502_.onclick = function () {
    axios.get('http://127.0.0.1:3000/play/hot', {

    }).then(function (res) {
        // console.log(res.data);
        for (var item of res.data) {

            for (var item1 of item) {
                str2 += `
            <li>
                        <img src=${item1.img} alt="">
                        <div class="box502">
                            <p>${item1.description}</p>
                            <span>${item1.text}</span>
                            <p>${item1.price}<span>${item1.like}</span><span>${item1.like}</span></p>
                        </div>
                    </li>
            `
            }
        }
        // console.log();
        document.querySelector('.box501').children[2].innerHTML = str2
        box502_.parentNode.style.display = 'none'
    })

}
//返回最上面

var box6_ = document.querySelector('.box6')
window.onscroll = function () {
    // var client_ = document.documentElement.clientHeight;
    var client1_ = document.documentElement.scrollTop;

    if (client1_ > 0) {
        box6_.style.display = 'inline-block'
    }
    if (client1_ == 0) {
        box6_.style.display = 'none'
    }
}
for (var item of document.querySelector('.box302').children[0].children) {
    item.onclick = function () {
        location.href = '../public/conceal.html'
    }
}