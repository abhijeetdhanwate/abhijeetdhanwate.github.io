const body = document.getElementById('generate-btn').addEventListener('click', changeBG);
const copyBtn = document.getElementById('copy').addEventListener('click', copyColHex);
const reset = document.getElementById('reset').addEventListener('click', resetToOriginal);

// Change body background
function changeBG(){
    changeCopyBtnText("Copy", "#efefef", "black");
    var col = "#";
    const charSet = '123456789ABCDEF';
    const charLen = charSet.length;
    for (var i = 0; i < 6; i++){
        col += charSet.charAt(Math.floor(Math.random() * charLen)); 
    }

    document.querySelector('body').style.backgroundColor = col;
    document.getElementById('bgColVal').innerText = col;
}

// Copy Button
function copyColHex(){
    const bgCol =  document.getElementById('bgColVal').innerText;
    var textarea = document.createElement('textarea');
    textarea.value = bgCol;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    changeCopyBtnText("Copied", "gray", "white");
}

// copy button text to "copied" <--> "copy"
function changeCopyBtnText(text, bg, col){
    const copied = document.getElementById('copy').innerText = text;
    document.getElementById('copy').style.backgroundColor = bg;
    document.getElementById('copy').style.color = col;
}

// Reset Page 
function resetToOriginal(){
    document.querySelector('body').style.backgroundColor = "#fff"
    document.getElementById('bgColVal').innerText = "Color Code appears here..";
    changeCopyBtnText("Copy", "#efefef", "black");
}

  