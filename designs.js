// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const height = document.getElementById('inputHeight');
const weight = document.getElementById('inputWeight');
let colorPicker = document.getElementById('colorPicker');
let tableRef = document.getElementById('pixelCanvas');
//使用const进行声明，不会影响evt变量在函数中的每次赋值，也可以用let声明
const evt = [];


function makeGrid(evt) {
// 调用.preventDefault() 方法，阻止submit后，页面的自动刷新（如果此时刷新，
// 那么submit的内容将不会被提交）
 evt.preventDefault();
 for (let i=1 ; i <=height.value; i++) {
   // 获取表格所在
   // let tableRef = document.getElementById('pixelCanvas');
   // 在索引index为0处添加表格的行（需要添加实际的框后，该行才会显现）
   let newRow = tableRef.insertRow(0);
   // Insert a cell in the row at index 0 （添加实际的框）
   let newCell = newRow.insertCell(0);
   //注意下面for循环的终止条件，因为newCell是第一个单元格，所以
   // j的值不能等于weight.value
   for (let j=1 ; j<weight.value; j++) {
     // 创建一个单元格
     let td=document.createElement('td');
     // 将单元格添加到外部循环创建的行上
     newRow.appendChild(td);
     tableRef.appendChild(newRow);
     // return tableRef;
     // console.log(tableRef.color);
    }

  }
  //如果只针对页面上的table部分进行监听，当table部分发生click时，运行填色监听函数
  //则会出现页面调试部分不现实此监听
  // document.querySelector('#pixelCanvas').addEventListener('click', colorGrid);
  // tableRef.addEventListener('click', colorGrid);
  //所以对整个页面的click进行监听，在evt处筛选即可
  document.addEventListener('click', colorGrid);

}

//填色监听函数
 function colorGrid(evt) {
    // 用来test页面情况
      // console.log('color test');
      // console.log(colorPicker.value);
      // console.log(evt.target.nodeName);
//根据节点名称判断点击的是否是表格
      if (evt.target.nodeName === 'TD') {
        //对所点击的单元格进行上色
        evt.target.style.backgroundColor = colorPicker.value;
      }
//输出所点击的单元格的颜色，测试时使用
      // console.log(evt.target.style.backgroundColor);
  }


  document.addEventListener('submit', makeGrid);
