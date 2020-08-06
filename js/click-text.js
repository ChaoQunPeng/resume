function KeClickEffect(params) {
  const defaultHoverStrArray = [
    "(〃'▽'〃)",
    "(｀・ω・´)",
    "( • ̀ω•́ )✧",
    "(￣.￣)o",
    "(￣▽￣)",
    "(灬°ω°灬) "
  ]
  // 暂时就只给body
  let element = document.body;
  let hoverStrArray;

  if (params.hoverStrArray && params.hoverStrArray.length) {
    hoverStrArray = params.hoverStrArray;
  } else {
    hoverStrArray = defaultHoverStrArray;
  }

  element.onmousedown = function (e) {
    let left = e.screenX;
    let top = e.screenY;
    let div = document.createElement("DIV");
    
    const divStyle = {
      width: '100px',
      height: '30px',
      lineHeight: '30px',
      textAlign: 'center',
      position: 'fixed',
      zIndex: 100,
      opacity: 1,
      top: 0,
      fontWeight: 'bold',
      userSelect: 'none',
      transition: 'all .3s linear',
    }

    for (const styleKey in divStyle) {
      div['style'][styleKey] = divStyle[styleKey];
    }

    div.textContent = hoverStrArray[Math.floor(Math.random() * 6)];
    div.style.color = generateRGBColor();
    div.style.textShadow = `0 0 1px ${generateRGBColor()}`;
    // 想要居中点话，就往左边移一点，就是div容器的宽度
    // element.clientWidth 这个地方不知道要不要那样子在最边上就把悬浮框往旁边挤
    div.style.left = left + 'px';
    // 或是往上一点
    div.style.top = top - 130 + 'px';

    element.appendChild(div);

    let opacity = 1;
    // 1 -= 0.2 这不是变量啊。 错误
    // 要这样opacity-=0.2;
    let timer = setInterval(() => {
      div.style.top = (top -= 30) + 'px';
      div.style.opacity = opacity -= 0.2
    }, 100);

    setTimeout(() => {
      div.remove();
      clearInterval(timer);
    }, 1000);
  }
}

function generateRGBColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = 'rgba(' + r + ',' + g + ',' + b + ',1)';
  return color;
}

// export {
//   KeClickEffect
// }