/* 
	Thanks to kfcSmitty for this code formatter. I have edited a few things so as to improve the looks. 
	Link to his code formatter: http://www.vbforums.com/showthread.php?737685-JavaScript-Format-Code-on-VBForums-(Greasemonkey-tampermonkey)
	
	DESCRIPTION:
	Upon opening a thread details page, a red button will appear on the left most side. When clicked, it will turn GREEN color, which means that you could select any text within the post content, and it will get wrapped in [CODE] tag. 
	This helps in better readability for codes posted by newbies, which they may have forgot to embed the code in any [CODE] tags
	
	INCLUDED ON: 24 June 2015
*/
// ==UserScript==
// @name       Format Code sections
// @namespace  http://vbforums.com
// @version    0.1
// @description  Add code tags around selected text
// @match      http://www.vbforums.com/showthread.php?*
// @copyright  2012+, You
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

var codeOriginals = {};
var enabled = false;

$('body').append('<div id="enableCodeSelection"><i class="fa fa-indent"></i></div>');

$("#enableCodeSelection").click(function(e){
	if(enabled){
		enabled = false;
		//$(this).css("background-color", "red");
		$(this).removeClass('codeFormatterActivated');
		$(this).attr("title", "Code formatter is currently deactivated. Click to ACTIVATE!");
	}else{
		enabled = true;
		//$(this).css("background-color", "green");
		$(this).addClass('codeFormatterActivated');
		$(this).attr("title", "Code formatter is currently activated. Click to DEACTIVATE!");
	} //end if
});

$(window).mouseup(function (e){
    if(enabled){
        var selection = getSelectionHtml();
        var selectedText = "";
        var selectionParent;
        
        if (typeof window.getSelection != "undefined") {
            selectedText = $(selection).html();
            selectionParent = window.getSelection().anchorNode.parentElement;
        } //end if
    
        if(selectedText != ""){
            var parentText = $(selectionParent).html();
            var id = (new Date).getTime().toString();
            codeOriginals[id] = selectedText;
            
            var wrapperStart = '<div class="bbcode_container"><div class="bbcode_description">Code: (<a href="" id="' + id + 
                '" class="removeCodeStyle">Remove</a>)</div><pre class="bbcode_code" style="max-height: 372px;">';
            var wrapperEnd = '</pre></div>'
    
            var newText = wrapperStart + selectedText + wrapperEnd;
            
            //if you're inside a code element and trying to add another
            if(selectionParent.className.indexOf("postcontent") == -1){
                if(selectedText.indexOf(wrapperStart) == -1 && selectedText.indexOf(wrapperEnd) == -1){
                    return;
                } //end if
            } //end if
            
            //don't let the user select over a code window.
            if(selectedText.indexOf(wrapperStart) > -1 && selectedText.indexOf(wrapperEnd) > -1){
                return;
            } //end if
     
            $(selectionParent).html(parentText.replace(selectedText, replaceBreaks(newText)));
    
            $('.removeCodeStyle').click(function (ev){
                ev.preventDefault();
                ev.stopPropagation();
    
               $(this).closest(".bbcode_container").before(codeOriginals[$(this).attr("id")]);
               $(this).closest(".bbcode_container").remove(); 
                
               delete codeOriginals[$(this).attr("id")];
            });
            
            window.getSelection().removeAllRanges();
            
        } //end if
    } //end if
});

function replaceBreaks(selectedText){
	selectedText = selectedText.replace(/<br>/g,"").replace(/<br \/>/g,"");

    return selectedText;
} //end function

function getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container;
        } //end if
    } //end if
    return html;
}