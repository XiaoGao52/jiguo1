//  // console.log(res.data.indexData.data);
//  var arr = res.data.indexData.data
//  console.log(arr);
//  //  找ul
//  var ul_ = document.getElementsByClassName('jiekou')[0];
//  // console.log(ul_);
//  //   创建一个li
//  var li_ = document.createElement('li');
//  //  把li添加到ul后边
//  ul_.appendChild(li_);
//  // console.log(ul_);

//  var str = '';
//  for (var i = 0; i < arr.length; i++) {

//      // console.log(i);
//      // console.log(arr[i].goUrl);

//      str += `<li><a href="${arr[i].goUrl}">${arr[i].txt} </a></Li>`;
//  }

//  ul_.innerHTML = str;


// 排他法
var yao1 = document.getElementsByClassName('bao');
var box2 = document.getElementsByClassName('zuixin');
// console.log(box2);


for (var i = 0; i < yao1.length; i++) {

    yao1[i].setAttribute('index', i);

    yao1[i].onclick = function () {
        // console.log(this);

        var index = this.getAttribute('index');
        // console.log(index);

        // console.log(index);

        // for (var j = 0; j < a.length; j++) {
        //     a[j].className = '';
        //     a[index].className = 'nei';
        // }
        for (var k = 0; k < box2.length; k++) {
            box2[k].style.display = 'none';
            box2[index].style.display = 'block';
        }
    }
}

