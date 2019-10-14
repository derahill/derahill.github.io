
// $('#frogid').click(function() {
//  $("#itemtag").addclass("invisible");
// });
// https://codereview.stackexchange.com/questions/134106/changing-color-on-button-click
$(document).ready(function() {
    $("button").click(function(){
        var color = clicked ? 'red' : 'blue';
        $("butta").css('background-color', 'red');
        clicked = !clicked;
      });
});
