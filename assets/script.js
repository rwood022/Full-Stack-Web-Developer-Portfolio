var resume = $("resume");



$(resume).ready(function() {
    $(resume).on("click", `a[href$="file:///Users/rebeccawood/Desktop/Resume/Web%20Developer.pdf"]`, function(){
        $(this).attr(`target`, "_blank");
    });
});
