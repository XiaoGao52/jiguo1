
// 排他法

var yao1 = document.getElementsByTagName('a');
// console.log(yao1);
var box2 = document.getElementsByClassName('zuixin');
// console.log(box2);


for (var i = 0; i < yao1.length; i++) {

    yao1[i].setAttribute('index', i);

    yao1[i].onclick = function () {
        // console.log(this);

        var index = this.getAttribute('index');
        // console.log(index);

        // console.log(index);

        for (var j = 0; j < yao1.length; j++) {
            yao1[j].className = '';
            yao1[index].className = 'nei';
        }
        for (var k = 0; k < box2.length; k++) {
            box2[k].style.display = 'none';
            box2[index].style.display = 'block';
        }
    }
}


// 
var zuixin = document.querySelector('.zuixin')
var jiaright = document.querySelector('.jiazai1')

jiaright.onclick = function () {
    zuixin.style.height = '2100px';
    jiaright.style.display = 'none';
}


// // 点击事件

// var bao = document.querySelector('.bao');

// //  为每一个盒子添加点击事件

// bao.forEach(box => {
//     box.addEventlistener('click', () => {

//         // 移除所有盒子的边框
//         bao.forEach(box => {
//             box.classlist.remove('bao');
//         });
//         //  为当前点击的盒子添加边框样式
//         box.classlist.add('bao');
//     })

// });
