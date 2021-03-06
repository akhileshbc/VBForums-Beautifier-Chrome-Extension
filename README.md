# VBForums Beautifier - Chrome Extension v1.03

A Google Chrome extension that will modify the looks of VBForums.com site making it a bit prettier for the eyes. 
In v1.02, I have included a b'day notifier that will let you know if any of your friends have b'day, today when you access the home of the website.

By,
Akhilesh.B.Chandran

VBForums url: http://www.vbforums.com/member.php?104212-akhileshbc

Website: www.akhileshbc.com

---
### INSTALLATION:
- Download the zip and extract it
- Open the Extensions window in your Google Chrome by choosing: Main Menu --> More Tools --> Extensions
- Put check mark on the "Developer Mode" : http://i.imgur.com/ExOX1rA.png
- Drag and drop the extracted folder from the zip you downloaded, to the Extensions page : http://i.imgur.com/zPJC7kQ.png
- Voila! Now access vbforums.com site to see the changes

### DISCUSSIONS:
http://www.vbforums.com/showthread.php?796039-VBForums-Beautifier-A-google-chrome-extension-that-will-slightly-modifies-the-looks

### CHANGE LOG

**Version 1.03:**
+++++++++++++

1. Profile badge for users, that will be dynamically created. User can right click and save to computer and then upload it anywhere: http://i.imgur.com/GIX96aj.png
2. Fixed issue with fetching the profile pic image. I forgot to change the hardcoded profile pic (of mine) to be selected dynamically! :P
3. Added provision to upload the profile badge to imgur(free image hosting) server upon clicking a button, and the BBcode and HTMLcode for using uploaded image will be displayed to the user. Screenshots: http://i.imgur.com/ZfRnOyU.png  ||  http://i.imgur.com/pgI9JXu.png
4. Reduced the pulsing the "Rate this post" button's red color, as suggested by techgnome
5. Updated the installation guide on where to drop the folder(that too suggested by techgnome)
6. Included kfcSmitty's "Code Formatter" : http://www.vbforums.com/showthread.php?737685-JavaScript-Format-Code-on-VBForums-(Greasemonkey-tampermonkey)
What it does: Upon opening a thread details page, a red button will appear on the left most side. When clicked, it will turn GREEN color, which means that you could select any text within the post content, and it will get wrapped in [CODE] tag. 
This helps in better readability for codes posted by newbies, which they may have forgot to embed the code in any [CODE] tags
I did a few changes to improve the looks, the rest of the code of his "Code Formatter" is untouched. Screenshot: http://i.imgur.com/QmCd1rz.png

**Version 1.02:**
+++++++++++++

1. Issue with the top "Notifications" menu's submenu is fixed. Earlier the text was in white color that made it unable to read!
2. Updated the looks of the "Notifications" menu when having any notifications in it: http://i.imgur.com/c6FJgQa.png
3. Fixed the blinking alert issue on the reputation column in "Members List" page. Thanks to kfcSmitty for spotting it.
4. Removed the URL matching case for "http://vbforums.com", because it seems to be that the server has rewrite rules to always use the "www" version.
5. Fixed this error that was shown in Console window: "Denying load of jquery.min.map. Resources must be listed in the web_accessible_resources manifest key in order to be loaded by pages outside the extension."
6. Added new feature for displaying birthdays of friends in home page. When you are at home page, the right top corner will display "Update friends db". Click on it so that your friends list(you should be already logged in to your vbforums account) will be fetched and stored locally. After that, on each visit to the home page, you will be notified if any of your friends have birthday today!
7. Fixed the overlapping issue with [TT] tags. Thanks to kfcSmitty for pointing it out.
8. Added a help button in Quick Reply Box, to open up the BBcode list : http://i.imgur.com/2DA4j18.png
9. Added shadow effect on the images inserted inside the post content by users, so that it will project out : http://i.imgur.com/XVNsCOj.png

**Version 1.01:**
+++++++++++++

1. Removed the blue border around the avatar pic as suggested by kfcSmitty. Because earlier I only took the case of square avatars like mine. :P
2. Fixed the issue with not showing the Reputation popup box

**Version 1.0:**
++++++++++++

1. Arranged the logo to a bit top left: http://i.imgur.com/9nk53tH.png
2. Changed the nav bar top right corner to a new look
3. The top flash ad has been moved to the right
4. Font size for the forums in home page is increased: http://i.imgur.com/kbhTeY7.png
5. Spacing between the description and the forum title is also increased.
6. Spacing for forum stas(number of Threads & number of Posts) on each forum
7. Rounded border for each of the posts/comments in each thread
8. Flashing "Rate this post" link in each post
9. Top sub navigation was given some border and shadow to make it look sleek
10. Bottom button below reply box buttons is made a little bit rounded
11. Top & Bottom "Reply to Thread" button was changed with new bg color: http://i.imgur.com/6FTrcax.png
12. Bottom quick reply box is given a new dark bg 
13. Some bg and spacing adjustments for the title of Quick Reply Box: http://i.imgur.com/3Oz87ZU.png
14. Each post/comment in a thread is given a new title bg as well as new border color: http://i.imgur.com/Gr36jwk.png
15. Social buttons at the top of every thread is hidden
16. Results (page counts) at top right corner was given a new look 
17. Buttons below the Quick Replybox was given a bigger size and the "Post Reply" button is given a new bg color
18. [TT]...[/TT] shortcode elements will get a new look: http://i.imgur.com/Gr36jwk.png
19. A better look for the [CODE]...[/CODE] shortcode elements for a better readability: http://i.imgur.com/5bK2jwY.png
20. For not logged users, the login box's looks has been changed: http://i.imgur.com/mBiHYwK.png
21. Timer icon for the post date
22. RESOLVED threads is given a better notification: http://i.imgur.com/OeSE2ud.png
23. Thread starters username is set to bold

