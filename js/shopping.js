var box201_ = document.querySelector('.box201').children[0]
var box301_ = document.querySelector('.box301').children[0]
// console.log(box201_);
var a_ = document.querySelector('.box204').children[0].children[0]
var a2_ = document.querySelector('.box304').children[0].children[0]
var box204_ = document.querySelector('.box204');
var box304_ = document.querySelector('.box304')

axios.get('http://127.0.0.1:3000/guid/new', {

}).then(function (res) {
    // console.log(res.data);
    var str = '';
    var num = 0;
    var str1 = ''
    for (var item of res.data) {
        num++;
        // console.log(item);
        if (num < 9) {
            str += `
        <li><a href=''>
        <img src=${item.img} alt="">
        <div class="box202">
            <p>${item.text}</p>
            <p><span>${item.like}</span><span>${item.like}</span></p>
        </div>
    </a>
    <div class="box203">
    </div>
</li>
        `
        }
        box201_.innerHTML = str;
        if (num > 7) {
            str1 += `
        <li><a href=''>
        <img src=${item.img} alt="">
        <div class="box202">
            <p>${item.text}</p>
            <p><span>${item.like}</span><span>${item.like}</span></p>
        </div>
    </a>
    <div class="box203">
    </div>
</li>
        `
            a_.onclick = function () {
                box201_.innerHTML = str + str1;
                box204_.style.display = 'none'
            }
        }


    }
})

// 排他法
var box1_ = document.querySelector('.box1').children;
var arry = [box1_[1], box1_[2]];
var box2_ = document.querySelector('.box2')
var box3_ = document.querySelector('.box3')
var arry1 = [box2_, box3_]

for (var i = 0; i < arry.length; i++) {
    arry[i].setAttribute('index', i)
    arry[i].onclick = function () {
        for (var j = 0; j < arry1.length; j++) {
            arry[j].classList.remove('active');
            this.classList.add('active')
            arry1[j].style.display = 'none';
            arry1[this.getAttribute('index')].style.display = 'block'
        }

    }
}
// 导购
axios.get('http://127.0.0.1:3000/guid/hot', {

}).then(function (res) {
    console.log(res.data);
    var str = '';
    var num = 0;
    var str1 = ''
    for (var item of res.data) {
        num++;
        if (num < 9) {
            str += `
        <li><a href=''>
        <img src=${item.img} alt="">
        <div class="box202">
            <p>${item.text}</p>
            <p><span>${item.like}</span><span>${item.like}</span></p>
        </div>
    </a>
    <div class="box203">
    </div>
</li>
        `
        }
        box301_.innerHTML = str;
        if (num > 7) {
            str1 += `
        <li><a href=''>
        <img src=${item.img} alt="">
        <div class="box202">
            <p>${item.text}</p>
            <p><span>${item.like}</span><span>${item.like}</span></p>
        </div>
    </a>
    <div class="box203">
    </div>
</li>
        `
            a2_.onclick = function () {
                box301_.innerHTML = str + str1;
                box304_.style.display = 'none'
            }
        }


    }
})

