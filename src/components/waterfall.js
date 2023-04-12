import React from "react";

const Waterfall = () => {
    const itemData = [
      {
        title: '1. 兩百字內的個人簡介。',
        content: '各位好，我是鄒柏軒 (Steward Tsou)屆的。'
      },
      {
        title: '2. 為了成為軟體工程師，們',
        content: '在過去以設計師/行銷此這'
      },
      // ... 更多數據
    ];
  
    const generateItem = (data, index) => {
      // 根據 index 生成不同的子元素
      return (
        <div className="item">
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          {index === 0 && (
            <img src="../public/assets/dall-e-dev.jpeg" alt="Dalle-dev" />
          )}
          {index === 1 && (
            <ul>
              {/* 在此處生成列表項目 */}
            </ul>
          )}
          {/* 在此處添加更多條件渲染 */}
        </div>
      );
    };
  
    return (
      <div className="waterfall">
        {itemData.map((item, index) => generateItem(item, index))}
      </div>
    );
  };
  
// const waterfall = () => {
//     let waterfall = document.createElement("div");
//     waterfall.className = "waterfall";
    
//     const generateItem = (data, index) => {
//         const item = document.createElement("div");
//         item.className = "item";
//         // item.innerHTML += data;
//         if (index === 0){
//             const imgIntro = document.createElement('img');
//             imgIntro.src = '../public/assets/dall-e-dev.jpeg';
//             imgIntro.alt = 'Dalle-dev';
//             item.appendChild(imgIntro);
//         }
//         const h2 = document.createElement("h2");
//         const p = document.createElement("p");
//         item.appendChild(h2);
//         item.appendChild(p);
//         h2.innerHTML = data.title;
//         p.innerHTML = data.content;

//         if (index === 1){
//             const ul = document.createElement('ul');
//             for( let i = 0 ; i < 4 ; i ++){
//                 const li = document.createElement('li');
//                 li.className = `li${i}`;
//                 if(i == 0){
//                     li.innerHTML = `<a href="https://github.com/steward379/zuzugo" target="_blank"><img src="../public/assets/zuzugo.svg" alt="zuzugo" id="zuzugo"/></a>
//                     <p><b>租租狗 Zuzugo【🐶】</b>這是個開源 ukai <a href="https://github.com/Yukaii/zuzugo" target="_blank"><ion-icon name="logo-github" ></ion-icon></a>使用 Git 合作。</p>`;
//                 } 
//                 ul.appendChild(li);
//             }
//             console.log(ul);
  
//             item.appendChild(ul);
//         }
//         return item;
//     };


//     const itemHTML = [
//         {
//             title : '1. 兩百字內的個人簡介。',
//             content : '各位好，我是鄒柏軒 (Steward Tsou)屆的。'
//         },
//         {
//             title : '2. </i>為了成為軟體工程師，們',
//             content : '在過去以設計師/行銷此這'
//         },
//         `
//         <h2><i>2. </i>為了成為軟體工程師，們</h2>
//         <p>在過去以設計師/行銷此這。</p>
//         <ul>
//             <li>
//                 <a href="https://github.com/steward379/zuzugo" target="_blank"><img src="../public/assets/zuzugo.svg" alt="zuzugo" id="zuzugo"/></a>
//                 <p><b>租租狗 Zuzugo【🐶】</b>這是個開源 ukai <a href="https://github.com/Yukaii/zuzugo" target="_blank"><ion-icon name="logo-github" ></ion-icon></a>使用 Git 合作。</p>
//             </li>
//             <li>
//                 <button><a href="https://steward379.github.io/news/public/" target="_blank"><ion-icon name="newspaper-outline" size="large"></ion-icon></a></button>
//                 <p><b>新聞留言練習【📰】</b>使用 Google 但讀者下載備份</p>
//             </li>
//             <li>
//                 <button><a href="https://airdrop-blog.vercel.app/" target="_blank"><ion-icon name="paper-plane-outline" size="large"></ion-icon></a></button><a href="https://github.com/steward379/airdrop-blog" target="_blank"><ion-icon name="logo-github" size="large"></ion-icon></a>
//                 <p><b>空投部落格【🪂】</b>主動查文件升e庫與後台練習 </p>
                
//             </li>
//             <li>
//                 <button><a href="https://steward379.github.io/" target="_blank"><ion-icon name="earth-outline" size="large"></ion-icon></a></button>
//                 <p><b>技術部落格【💻】</b>簡單使用 hexo 架設技術 blog，未來可能會串網域。 </p>
//             </li>
//             <li>
//                 <button><a href="" target="_blank"><ion-icon name="paper-plane-outline" size="large"></ion-icon></a></button>
//                 <p><b>chatGPT 練習【🤖️】</b>整合圖片上傳與網上他人 chatGPT+Next.js 範例，</p>
//             </li>
//         </ul>
//         `,
//         `<h2><i>3. </i>如果參與這個計畫，會怎麼安排學習時間？</h2>
//         <p>我將全身心投入這個計畫。因為有先前創品的實作。</p>
//         <ul>
//             <li><b>準備期：</b>在營隊開始前進行 <a href="https://codepen.io/murmurline" target="_blank"><ion-icon name="logo-codepen" size="large"></ion-icon></a></li>
//             <li><b>交流：</b>營隊開始後等等。</li>
//             <li><b>實作：</b>完整完合作</li>
//             <li><b>作品：</b></li>
//             <li><b>紀錄：</b></li>
//         </ul>`
//         ,
//         `<h2><i>4. </i>是否有想要加入的該公司？</h2>
//         <p>目前沒有挑選特定的公司，像是<a href="https://www.yourator.co/companies/dogcatstar" target="_blank"><button><ion-icon name="paw-outline"></ion-icon>「汪喵星球」</button></a>這間去補足，並符。

//             另一好梳理，例如<a href="https://www.yourator.co/companies/OakMega/" target="_blank"><button><ion-icon name="options-outline"></ion-icon>
//                 「OakMega 大橡科技」</button></a>，專注於合作力。
//         </p>`
//         ,
//         `<img src="./assets/depressed.jpeg" name="depressed-social" alt="depressed-social">
//         <h2><i>5. </i>請描述一件讓你產生明顯負面情緒的事情，你如何處理該情緒？</h2>
//         <p>先前在設計跟社群接案事業遇到瓶頸，沒辦法提供收入上的增長，客戶也難以維持，必須持續性想到新創意，因此
//         </p>`
//         ,
//         `<h2><i>6. </i>關於這份申請網頁，請分享一個你開發時的技術心得。</h2>
//         <p>雖然題目是靜態網站，但還是簡單使用了一些輕量的小工具如打包的 Parcel，算是
//         </p>`
//         ,
//         `<h2><i>7. </i>其他想要對我們說的事情？</h2>
//         <p>
//             <h3>Design Works...</h3>
//             <a href="https://www.behance.net/taps" target="__blank"><ion-icon name="logo-behance" size="large"></ion-icon></a>
//             <a href="https://dribbble.com/edgarexpress" target="_blank"><ion-icon name="logo-dribbble" size="large"></ion-icon></a>
//         </p>
//         <button data-more id="close"><a href="#more">⋯⋯</a></button>
//         <p><a id="more" href="#more-a">東西在這，點我收回</a>
//         </p>`
//     ];
    
//     for (let i = 0; i < 7; i++) {
//         waterfall.appendChild(generateItem(itemHTML[i % itemHTML.length], i));
//         console.log(itemHTML[i % itemHTML.length]);
//     }
      
//     console.log(waterfall);
    
//     return waterfall;
// }

export default Waterfall;