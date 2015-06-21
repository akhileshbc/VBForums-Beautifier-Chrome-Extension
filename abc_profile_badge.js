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

		var profile_badge_bg = chrome.extension.getURL("/images/profile_badge_design.jpg");
				
		var abc_canvas = '<div id = "abc_canvas_wrapper">' +						 
						 '	<canvas id="abc_canvas" width="413" height="105"></canvas>' +
						 '	<div class="abc_canvas_right">' + 
						 '		<p><i class="fa fa-info-circle"></i> You could right click on the badge image and save it to your computer and then upload it anywhere</p>' +
						 '	</div>' +
						 '	<div class="clear"></div>' +
						 '</div>'
						 ;
						 
		$('#userprof_content_container').prepend(abc_canvas);
		
		function create_profile_badge() {
			var canvas = document.getElementById('abc_canvas');
			var context = canvas.getContext('2d');
			
			var imageObj = new Image();
			imageObj.src = 'http://www.vbforums.com/image.php?u=104212&dateline=1264930309&type=profile';
			
			var badge_bg_img = new Image();
			badge_bg_img.src = profile_badge_bg;
			
			var abc_profile_joineddate = $('#view-stats_mini .stats > dd').first().text().trim(),
				abc_profile_totalposts = $('#view-stats .stats dd').first().text().trim(),
				abc_profile_postsperday = $('#view-stats .stats dd:eq(1)').text().trim(),
				abc_profile_username = $('#userinfo .member_username').text().trim();
				
			var abc_profile_reppoints = "";
			
			/*
			// TODO: efficiently fetch the rep points.
			$.get("usercp.php", function(data) {
				var $usercp_html = $(data);
				
				var temp_rep_line = $usercp_html.find('#latest_reputation h2').first().text();
				var temp_matches = temp_rep_line.match(/\d+/g);
				if( temp_matches.length > 0 )
					abc_profile_reppoints = temp_matches[0];
			
				console.log( abc_profile_reppoints );
			});
			*/
			
			badge_bg_img.onload = function() {
				context.drawImage(badge_bg_img, 0, 0);
				context.drawImage(imageObj, 32, 11);
				
				context.font = "bold 14px Arial";
				context.fillStyle = "#41739a";
				context.fillText(abc_profile_username, 204, 20);
				
				context.fillText(abc_profile_joineddate, 204, 38);
				
				context.fillText(abc_profile_totalposts, 204, 58);
				
				context.fillText(abc_profile_postsperday, 204, 78);
				
				// draw rep gems
				var rep_x = 103;
				$('.member_reputation .repimg').each(function(){
					context.drawImage(this, rep_x, 85);
					rep_x = rep_x + 7;	// width of single rep bar
				});
				
				/* TODO: display the actual rep points
				if( abc_profile_reppoints != "" ){
					context.font = "bold 13px Arial";
					context.fillText("(" + abc_profile_reppoints + ")", rep_x + 10, 95);
				}
				*/
			};
			
		}
		
		create_profile_badge();
	}
});