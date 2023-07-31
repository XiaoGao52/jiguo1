var bigs = document.getElementsByClassName('top')[0]

axios({
    method: 'get',
    url: 'http://127.0.0.1:3000/report/hot'
}).then(function (res) {

    showData(res.data);
    // console.log(res.data);
})

function showData(data) {
    // console.log(data);

    var str = ''

    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        str += `
        <div class="arr">
        <img src="${data[i].img}" alt="">
       <div class="sum">
       <p>${data[i].text} </p>
       <span><img src="../img/tx.jpg"></span>
       <span>${data[i].uName}</span>
      <span>${data[i].totalnum}</span>
      <span class="review">3</span>
      <span class="revi">3</span>
       </div>
    </div>`
        bigs.innerHTML = str;
        // console.log(str);
    }

}
var big = document.getElementsByClassName('two')[0]

axios({
    method: 'get',
    url: 'http://127.0.0.1:3000/report/new'
}).then(function (res) {

    shoData(res.data);
    // console.log(res.data);
})

function shoData(data) {
    // console.log(data);

    var str = ''

    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        str += `
        <div class="arry">
        <img src="${data[i].img}" alt="">
       <div class="sums">
       <p>${data[i].text} </p>
       <span><img src="../img/tx.jpg"></span>
       <span>${data[i].uName}</span>
      <span>${data[i].totalnum}</span>
      <span class="review">3</span>
      <span class="revi">3</span>
    </div>
    </div>`
        big.innerHTML = str;
    }
}


var z1 = document.getElementsByClassName('z1');
console.log(top);
var a = document.getElementsByTagName('a');
console.log(a);


for (var i = 0; i < a.length; i++) {
    a[i].setAttribute('index', i);

    // console.log(a[i]);
    a[i].onclick = function () {

        var index = this.getAttribute('index');
        // console.log(index);


        for (var j = 0; j < a.length; j++) {
            a[j].className = '';
            a[index].className = 'on';
        }

        for (var k = 0; k < z1.length; k++) {
            z1[k].style.display = 'none'
            z1[index].style.display = 'block'
        }

    }
}





