$(document).ready(function() {
  $("#butta").click(function() {
    $("#letteranalysis").toggleClass("invisible");
    $("#upperdlighter").addClass("upperdstandard");
    $("#butta").css('background-color', '#CC7E3D');
    $("#butt1").css('background-color', '#EFD6AE');
  });
  $("#butt1").click(function() {
    $("#letteranalysis1").toggleClass("invisible");
    $("#upperdlighter").addClass("upperdlight");
    $("#upperdlighter").removeClass("upperdstandard");
    $("#butt1").css('background-color', '#CC7E3D');
    $("#butta").css('background-color', '#EFD6AE');
  });
  $("#buttb").click(function() {
    $("#letteranalysis2").toggleClass("invisible");
    $("#lowerdlighter").addClass("upperdstandard");
    $("#buttb").css('background-color', '#CC7E3D');
    $("#butt2").css('background-color', '#EFD6AE');
  });
  $("#butt2").click(function() {
    $("#letteranalysis3").toggleClass("invisible");
    $("#lowerdlighter").addClass("upperdlight");
    $("#lowerdlighter").removeClass("upperdstandard");
    $("#butt2").css('background-color', '#CC7E3D');
    $("#buttb").css('background-color', '#EFD6AE');
  });
});
