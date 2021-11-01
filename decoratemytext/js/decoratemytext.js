window.onload = onLoadEvent;

function onLoadEvent() {
    var btnDecorate = document.getElementById("bigger");
    var chkbling = document.getElementById("bling");
    var btnigpay = document.getElementById("igpay");
    var btnmalkovich = document.getElementById("malko");
    btnDecorate.onclick = textDecorationTimer;
    chkbling.onchange = bling;
    btnigpay.onclick = igpayAtinlay;
    btnmalkovich.onclick = malkovitch;
}

function textDecorationTimer() {  
    setInterval(textDecoration, 500);   
}

function textDecoration(){
    var t = document.getElementById("text");
    var style = window.getComputedStyle(t, null).getPropertyValue('font-size');
    var fsize = parseInt(style);
    t.style.fontSize = (fsize + 2) + "pt";

}

function bling() {
    var checkbox = document.getElementById("bling");
    if(checkbox.checked == true) {
        var t = document.getElementById("text");
        t.style.fontWeight = "bold";
        t.style.color = "green";
        t.style.textDecoration = "underline";
        //var bimage = document.getElementsByName("body");
        //bimage.style.backgoundImage = url("/img/100.jpg");
        document.body.style.backgroundImage = "url('../img/100.jpg')";


    }
    else {
        var t = document.getElementById("text");
        t.style.fontWeight = "normal";
        document.body.style.backgroundImage = "";
        t.style.textDecoration = "none";

    }
}

function igpayAtinlay() {
    var inputText = document.getElementById("text");
    var inputTextVal = inputText.value;
    const inpArray = inputTextVal.split(" ")
    var output = "";
    for(var i = 0; i<inpArray.length; i++){
        let s = inpArray[i];
        let pre = "";
        for(let j = 0; j<s.length; j++) {
            let c = s.charAt(j);            
            if(isVowel(c)){
                output +=  s.substring(j, s.length).trim() + (pre + "ay") + " ";
                break;        
            }
            else {
                pre += c;
            }
        }

    }
    inputText.value = output;

}

function isVowel(ch) {
    if(ch === 'a' || ch === 'e' || ch === 'i' ||
    ch === 'o' || ch === 'u') 
    return true;
    else
    return false;

}

function malkovitch() {
    var inputText = document.getElementById("text");
    var inputTextVal = inputText.value;
    const inpArray = inputTextVal.split(" ")
    var output = "";
    for(var i = 0; i<inpArray.length; i++){
        let s = inpArray[i];
            if(isMalkovitch(s)){
                output += "Malkovich ";                       
            }
            else {
                output += s + " ";
            }
    }
    inputText.value = output;
    
}

function isMalkovitch(word) {
    if(word.length >= 5) {
        return true;
    }
    else {
        return false;
    }

}
