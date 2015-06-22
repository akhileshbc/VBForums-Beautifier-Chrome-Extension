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
						 '		<p><i class="fa fa-info-circle"></i> You could right click on the badge image and save it; or click on UPLOAD button to upload it to imgur server</p>' +
						 '		<a href="#" id="btnUploadUserprofileBadge"><i class="fa fa-cloud-upload"></i> Upload this badge to imgur site &nbsp; <i class="fa fa-refresh fa-spin abc_loader"></i></a>' +
						 '		<div id="imgur_BBcode">BB Code: <input type="text" value="" readonly /></div>' +
						 '		<div id="imgur_HTMLcode">HTML code: <input type="text" value="" readonly /></div>' +
						 '	</div>' +
						 '	<div class="clear"></div>' +
						 '</div>'
						 ;
						 
		$('#userprof_content_container').prepend(abc_canvas);
		
		var abc_canvas_final_image;
		var abc_profile_url = window.location.href.split("&")[0];
		var abc_total_images_loaded = 0;	//to count total number of image loaded
		
		
		function create_profile_badge() {
			var canvas = document.getElementById('abc_canvas');
			var context = canvas.getContext('2d');
			
			var abc_profile_joineddate 	= $('#view-stats_mini .stats > dd').first().text().trim(),
				abc_profile_totalposts 	= $('#view-stats .stats dd').first().text().trim(),
				abc_profile_postsperday	= $('#view-stats .stats dd:eq(1)').text().trim(),
				abc_profile_username 	= $('#userinfo .member_username').text().trim(),
				abc_profile_id			= abc_profile_url.match(/\d+/g)[0];
				
			
			var imageObj = new Image();			
			imageObj.src = 'http://www.vbforums.com/image.php?u='+abc_profile_id+'&type=thumb';	//http://www.vbforums.com/image.php?u=104212&dateline=1264930309&type=profile
			imageObj.onload = function(){ abc_total_images_loaded++; abc_generate_badge(); };
			
			var badge_bg_img = new Image();
			badge_bg_img.setAttribute('crossOrigin', 'anonymous');	// enable CORS so that the image can be used within the canvas, preventing the canvas from getting tainted
			badge_bg_img.src = profile_badge_bg;
			badge_bg_img.onload = function(){ abc_total_images_loaded++; abc_generate_badge(); };
			

			//var abc_profile_reppoints = "";
			
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
			
			var abc_generate_badge = function(){
				if( abc_total_images_loaded < 2 ) return;	// only create the image if both the profile pic and the badge bg img is loaded
			
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
				
				abc_canvas_final_image = canvas.toDataURL().split(',')[1];
			//};
			};
			
		}
		
		create_profile_badge();
		
		$('#btnUploadUserprofileBadge').on('click', function(e){ 
			e.preventDefault();
			$('#btnUploadUserprofileBadge .abc_loader').show('fadeIn');
			
			$.ajax({ 
				url: 'https://api.imgur.com/3/image',
				headers: {
					'Authorization': 'Client-ID 42ac247a52572e5'
				},
				type: 'POST',
				data: {
					'image': abc_canvas_final_image,
					'type': 'base64'
				},
				success: function(resp) { 
					if( resp.success == true )
					{				
						$('#btnUploadUserprofileBadge').hide();
						$('#imgur_BBcode input').val('[URL="'+abc_profile_url+'"][IMG]'+resp.data.link+'[/IMG][/URL]').parent().show();
						$('#imgur_HTMLcode input').val('<a href="'+abc_profile_url+'"><img src="'+resp.data.link+'" /></a>').parent().show();
						
						$('#imgur_BBcode input').select();
					}
					else
					{
						console.log(data); 
						alert("Sorry, uploading the image to imgur server failed because of some error!");
					}
					$('#btnUploadUserprofileBadge .abc_loader').hide();
				}
			});
			
		});
		
		$("#imgur_BBcode input,#imgur_HTMLcode input").focus(function() {
			$(this).select();
		});
		
		$("#imgur_BBcode input,#imgur_HTMLcode input").mouseup(function(e){
			e.preventDefault();
		});
		
	}
});