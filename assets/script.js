var nuMu = $("nuMu");
var resume = $("resume");
var linkedIn = $("linkedIn");
var gitHub = $("gitHub");



//code from codeofaninja.com, 
$("#nuMu").click(function() {
    window.open("https://rwood022.github.io/YouTube_Music_FInder/");
});


$("resume").click(function() {
    document.location.href = WebDeveloperResume.pdf;
});


$("linkedIn").click(function(){
    window.open("www.linkedin.com/in/dr-rebecca-wood-7a279846");
});


$("gitHub").click(function() {
    window.open(`https://github.com/rwood022`);
});