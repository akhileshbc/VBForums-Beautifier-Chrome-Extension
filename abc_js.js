/*
		VBForums Beautifier v1.02
			by, Akhilesh.B.Chandran		@ 15 May 2015
			Website: www.akhileshbc.com
			VBForums url: http://www.vbforums.com/member.php?104212-akhileshbc
 */
jQuery(function($){
	// added on 21 June 2015 - for including a help button in Quick Reply Box for the BBcode list
	$('h3#quickreply_title').append('<a id="bbcodeHelpButton" title="View all BBcode list" target="_blank" href="http://www.vbforums.com/misc.php?do=bbcode#pagetitle"><i class="fa fa-question"></i></a>');
	// /added on 21 June 2015
	
	$('.forumlastpost .lastpostdate, .threadlastpost dd:nth-child(3)').prepend('<i class="fa fa-clock-o"></i> ');
	
	$('.threadtitle a').each(function(){
		var t = $(this).html().replace('[RESOLVED]', '<span class="resolved">RESOLVED</span>');
		$(this).html( t );
	});
	
	//chrome.storage.local.remove("VBFfriends", function( data ){
	//});
	
	
	
	var $home_bdays_div = $('#wgo_birthdays');
	if( $home_bdays_div.length )
	{
		var vbf_validuser = $('ul.isuser').length>0?true:false;
		var timg = chrome.extension.getURL("/images/bdayicon.png");
		var top_box = '<div class="vbf_top_right_box"><a id="vbf_top_bday_counts" href="#wgo_birthdays" title="# friend(s) of you are celebrating their birthday today!">(0)</a><img src="'+timg+'" /><a id="vbf_updatedb" href="#" title="Click here to update your friends list, thus allowing this app to notify you when there is birthday">Update Friends DB</a></div>';
		$('body').prepend(top_box);
		
		if(vbf_validuser)
		{	
			$('ul.isuser a').each(function(i, ele){
				if($(ele).text().trim().toLowerCase().indexOf("my profile")!==-1)
				{
					full_friends_link = $(ele).attr("href")+"&tab=friends&perpage=250";
					$('#vbf_updatedb').attr("href", full_friends_link);
					return false;
				}
			});
		}
		
		chrome.storage.local.get("VBFfriends", function( data ){
		
			var bdays_count = 0;
			
			if( !jQuery.isEmptyObject( data ) )
			{
				var vbf_friends = JSON.parse( data["VBFfriends"] );
				vbf_friends.push("tg35");
								
				console.log(vbf_friends);
				if ( vbf_friends.length > 0 )
				{
					
					$('#wgo_birthdays ol li a').each(function(i, ele){

						var frnd_name = $(ele).text();
						if($.inArray(frnd_name, vbf_friends) > -1)
						{

							$(ele).addClass("vbf_bottom_bd_a");
							$(ele).attr("title","Sing a birthday song for your friend { "+frnd_name+" } !");
							$(ele).parent().prepend('<img src="'+timg+'" />');
							$(ele).parent().addClass("vbf_bottom_bd_li");
							
							bdays_count++;
						}
					});
				}
			}
			
			$('#vbf_top_bday_counts').text('('+bdays_count+')');
			$('#vbf_top_bday_counts').attr('title', $('#vbf_top_bday_counts').attr('title').replace('#', bdays_count));
		
		});
	}
});