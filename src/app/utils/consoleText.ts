function getLetterCount(str: string, prevLen: number, reverse?: boolean): number {
  let x = reverse ? -1 : 1;
  const letter = str.charAt(prevLen);

  if (reverse && letter === '>') {
    while (str.charAt(prevLen - (-x)) !== '<') x -= 1;
  } else if (!reverse && letter === '<') {
    while (str.charAt(prevLen + x) !== '>') x += 1;
  }

  return x;
}

function substringParser(str: string, len: number): string {
  const res = str.substring(0, len);
  return res.replace(/</gi, '').replace(/>/gi, '');
}

function consoleText(words: string[], id: string, colors: string[] = ['#fff']): void {
  const cons = document.getElementById(id);
  const target = document.getElementById(`${id}-text`);
  let letterCount = 1;
  let x = 0;
  let waiting = false;
  let visible = true;
  let reverse = false;

  if (!target || !cons) return;
  target.setAttribute('style', `color:${colors[0]}`);

  window.setInterval((): void => {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      reverse = false;
      target.innerHTML = substringParser(words[0], letterCount);

      window.setTimeout((): void => {
        const usedColor = colors.shift() || '#fff';
        const usedWord = words.shift() || '';

        colors.push(usedColor);
        words.push(usedWord);
        x = getLetterCount(words[0], letterCount);
        target.setAttribute('style', `color:${colors[0]}`);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      reverse = true;

      window.setTimeout((): void => {
        x = getLetterCount(words[0], letterCount, true);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      x = getLetterCount(words[0], letterCount, reverse);
      target.innerHTML = substringParser(words[0], letterCount);
      letterCount += x;
    }
  }, 120);

  window.setInterval((): void => {
    if (visible === true) {
      cons.className = 'console-underscore hidden';
      visible = false;
    } else {
      cons.className = 'console-underscore';
      visible = true;
    }
  }, 400);
}

export default consoleText;
