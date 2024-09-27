'use strict';
{
  const btn =document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () =>{

    const results =[{text:'凶', img:'mimi.png'},{text:'狂', img:'mimi2.png'},{text:'大吉', img:'mon.png'},
      {text:'熱盛', img:'negi.jpg'}];
   const n =Math.floor(Math.random()*results.length);

   result.innerHTML = '';

   const chosenResult = results[n]

 // テキストを表示
   const textElement = document.createElement('p');
        textElement.textContent = chosenResult.text;
        result.appendChild(textElement);

    // 画像の場合、<img>タグを作成して表示
    const img = document.createElement('img');
    img.src = chosenResult.img;  // 画像のパス
    img.alt = chosenResult.text;
    img.style.maxWidth = '200px';  // 画像サイズを調整
    result.appendChild(img);


}  );
}
