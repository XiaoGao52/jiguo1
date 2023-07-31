// 


// 接口
// axios.get('')

// 排他法
// 1
// var trial = document.getElementsByClassName('trial');
// var trial = document.querySelector('.trial');


// var shoufa = document.querySelector('.')

// 外部排他法1
var a1 = document.getElementsByTagName('a');
// console.log(a1);
var shoufa = document.getElementsByClassName('shoufa');
// console.log(shoufa);

for (var i = 0; i < a1.length; i++) {

    a1[i].setAttribute('index', i);

    a1[i].onclick = function () {
        // console.log(this);

        var index = this.getAttribute('index');
        // console.log(index);

        // console.log(index);

        for (var j = 0; j < a1.length; j++) {
            a1[j].className = '';
            a1[index].className = 'nei';
        }
        for (var k = 0; k < shoufa.length; k++) {
            shoufa[k].style.display = 'none';
            shoufa[index].style.display = 'block';
        }
    }
}

// 内部排他法
// 大众
var a2 = document.getElementsByTagName('a');
// console.log(a2);

var port = document.getElementsByClassName('port');
// console.log(port);
var arry = [a2[2], a2[3], a2[4], a2[5]]

for (var i = 0; i < arry.length; i++) {
    arry[i].setAttribute('index', i)
    // console.log(arry[i]);
    arry[i].onclick = function () {
        for (var j = 0; j < arry.length; j++) {
            port[j].style.display = 'none'
            port[this.getAttribute('index')].style.display = 'block'
        }
    }
}


// 导师体验

// var a3 = document.getElementsByTagName('a');
var port1 = document.getElementsByClassName('port');
var port2 = [port1[4], port1[5], port1[6], port1[7]]
console.log(port2);
var b1 = [a2[6], a2[7], a2[8], a2[9]]
console.log(b1);




// 加载更多点击事件

var hui = document.querySelector('.port');
// console.log(hui);
var jia = document.querySelector('.jia');

jia.onclick = function () {
    hui.style.height = '1900px';
    jia.style.display = 'none';
}


// 申请接口

// var prot1 = document.getElementsByClassName('port')[1];
// console.log(prot1);


