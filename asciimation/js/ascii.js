// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.


"use strict";


window.onload = function() {

    var btnstart=document.getElementById("btnstart");
    var btnstop=document.getElementById("btnstop");
    var chbspeed=document.getElementById("chbspeed");
    var ddlanimations=document.getElementById("ddlanimations");
    var ddlsizes=document.getElementById("ddlsizes");

    btnstart.disabled = true;
    btnstop.disabled = true;

    btnstart.onclick=onAnimationStart;
    btnstop.onclick=onAnimationStop;
    ddlanimations.onchange=onAnimationTypeChanged;
    ddlsizes.onchange=onFontSizeChanged;
    chbspeed.onchange=onTurboChecked;
};

var currentAnimation;
var delay = 250;

const onAnimationTypeChanged  = () => {
    currentAnimation = document.getElementById("ddlanimations").value;

    if (currentAnimation != "" && !animating) {
        document.getElementById("btnstart").disabled = false;
    }
    if(currentAnimation==""){
        document.getElementById("btnstart").disabled = true;
    }
};

const onFontSizeChanged = () => {
    const size = document.getElementById("ddlsizes").value;
    document.getElementById("mytextarea").style.fontSize = size;
};

const onTurboChecked = () => {
    const checkBox = document.getElementById("chbspeed");
    delay = (checkBox.checked ? 50 : 250);
    if (animation) {
        clearInterval(animation);
        onAnimationStart();
    }
};

var animation;
var animating = false;
const onAnimationStart = () => {
    if (currentAnimation) {
        const animArray = ANIMATIONS[currentAnimation].split("=====\n");
        let currentFrame = 0;
        animation = setInterval(() => {
            document.getElementById("mytextarea").value
            = animArray[currentFrame];
            currentFrame =
            ((currentFrame === animArray.length - 1) ? 0 : currentFrame + 1);
        }, delay);
        document.getElementById("btnstart").disabled = true;
        document.getElementById("btnstop").disabled = false;
        document.getElementById("ddlanimations").disabled=true;
        animating = true;
    }
};

const onAnimationStop = () => {
    if (animation) {
        clearInterval(animation);
        document.getElementById("btnstart").disabled = false;
        document.getElementById("btnstop").disabled = true;
        document.getElementById("ddlanimations").disabled=false;
        animating = false;
    }
};