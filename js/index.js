axios.get('http://127.0.0.1:3000/useing/public', {

}).then(function (res) {
    var ul_ = document.querySelectorAll('.swiper-slide')[1].children[0]
    var ul1_ = document.querySelectorAll('.swiper-slide')[2].children[0]
    var ul2_ = document.querySelectorAll('.swiper-slide')[3].children[0]
    console.log(ul1_);
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

            console.log(num);
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

            console.log(num);
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