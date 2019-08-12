const consoleText = (words, id, colors = ['#fff']) => {
  const cons = document.getElementById('console');
  const target = document.getElementById(id);
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let visible = true;

  target.setAttribute('style', `color:${colors[0]}`);

  window.setInterval(() => {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);

      window.setTimeout(() => {
        const usedColor = colors.shift();
        const usedWord = words.shift();

        colors.push(usedColor);
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', `color:${colors[0]}`);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;

      window.setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);

  window.setInterval(() => {
    if (visible === true) {
      cons.className = 'console-underscore hidden';
      visible = false;
    } else {
      cons.className = 'console-underscore';
      visible = true;
    }
  }, 400);
};

export default consoleText;
