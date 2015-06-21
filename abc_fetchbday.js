/*
		VBForums Beautifier v1.03
			by, Akhilesh.B.Chandran	
			Website: www.akhileshbc.com
			VBForums url: http://www.vbforums.com/member.php?104212-akhileshbc
*/
$(function(){
	var vbf_validuser = $('ul.isuser').length>0?true:false;
	if(vbf_validuser)
	{
		var vbf_friends = new Array();
		$('ol.friends_list li a.username').each(function(i, ele){
			vbf_friends.push( $(ele).text() );
			
		});
		
		chrome.storage.local.set({"VBFfriends" : JSON.stringify(vbf_friends)}, function(){
			var timg = chrome.extension.getURL("/images/bdayicon.png");
			var top_box = '<div class="vbf_top_right_updatebox"><img src="'+timg+'" /> Updated Friends DB!!</div>';
			$('body').prepend(top_box);
		});
	}
});