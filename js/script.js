/* Author: 

*/
// FADING SCRIPT FOR MAIN PAGE WHEN CLICKING CONTACT
jQuery(document).ready(function() {
  jQuery(".content").hide();
  //toggle the componenet with class msg_body
  jQuery(".heading").click(function()
  {
    jQuery(this).next(".content").slideToggle(100);
  });
});





















