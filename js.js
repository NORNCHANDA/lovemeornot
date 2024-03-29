$(document).ready(function(){
    generate_positon();
});

function generate_positon(){
    // alert(3);
    $("#btn-no").hover(function(){
        // $(this).hide();

        var left = Math.floor(Math.random() * (90 - 1)) + 1; // randome from 1 to 100
        var top = Math.floor(Math.random() * (90 - 1)) + 1; // randome from 1 to 100

        $(this).css({
            position: "absolute",
            left: left+"%",
            top: top+"%",
          });
        
    });

    $("#btn-yes").hover(function(){
        // $(this).hide();

        $(this).addClass("btn-lg");
    });
    $("#btn-yes").mouseleave(function(){
        $(this).removeClass("btn-lg");
      });
      $("#btn-yes").click(function(){
        alert("me too!😍😍🥰");
      })
}