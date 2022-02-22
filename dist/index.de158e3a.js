let html = document.querySelector("#html");
let style = document.querySelector("#style");
let str = `
/*
 * 你好，我是 Richard Huang
 * 接下来我要画一个太极
 * 首先，要准备一个 div
 */
#tai-chi {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}

/*
 * 接下我把 div 变成一个八卦图
 * 首先，把 div 变成一个圆
 */
#tai-chi {
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  border: none;
}

/*
 * 八卦是由阴阳形成的
 * 所以把圆变成一黑一白
 */
#tai-chi {
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}

/*
 * 加两个神秘的小球
 */
#tai-chi::before {
  width: 100px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#tai-chi::after {
  width: 100px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let str2 = "";
let n = 0;
let speed = 50;
function change() {
    setTimeout(()=>{
        if (n >= str.length) return;
        if (str[n] === "\n") str2 += "<br>";
        else if (str[n] === " ") str2 += "&nbsp;";
        else str2 += str[n];
        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n + 1);
        // 页面滚动到底部
        window.scrollTo(0, document.body.scrollHeight);
        console.log(str.substring(0, n + 1));
        n++;
        change();
    }, speed);
}
change();

//# sourceMappingURL=index.de158e3a.js.map
