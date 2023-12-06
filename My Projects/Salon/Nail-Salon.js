$(document).on("scroll", function()
{
    var pageTop = 
    $(document).scrollTop();
    var pageBottom = pageTop +
    $(window).height();
    var tags = $(".tag");

    for(let i = 0 ; i < tags.length; i++){
        var tag = tags[i];

        if($(tag).positon().top < pageBottom){
            $(tag).addClass("visible");
        }else{
            $(tag).removeClass("visible");
        }
    }
});