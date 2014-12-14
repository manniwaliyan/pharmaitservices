jQuery(function(){
	console.log("ads");
	jQuery(".firstpane li:has(ul) > a").click(function(){ 		
	    check(jQuery(this));
	    return false;
	});
});
function hidden(a){
jQuery(a).removeClass('selected');
jQuery(a).parent().find('ul:first').slideUp();
}
function visible(b){
jQuery(b).parent().siblings().find('a').removeClass('selected');
jQuery(b).parent().parent().find('li ul:visible').slideUp();
jQuery(b).addClass('selected');
jQuery(b).parent().find('ul:first').slideDown();
}
function check(c){
if(jQuery(c).parent().find('ul:first').is(':hidden')) {
    visible(c);
}else{
    hidden(c); 
}
}
