# ACNH Villager Birthday Twins

API: https://acnhapi.com/ <br>
API Documentation: https://acnhapi.com/doc

### Concept
- Find your villager birthday twin by typing in birth month and date
- First, is background with form that says to enter b-day in middle
- After search is done:
- Shows card of villager, personality, birthday, species, gender, and catch-phrase
- Only shows one at a time when you search


### Maybe's
- Villagers K.K. Slider song that features in house (in list)
- Navbar of all the villagers, K.K. Slider Songs


### Code to reference
- personality type: `personality`
- bday: `birthday-string`
- what animal are they: `species`
- gender: `gender`
- catchphrase: `catch-phrase`
- image icon to use: `image_uri`
- english: `name-USen`

### Wireframe
![img2](images/General%20Assembly-3.jpg)

### Timeline 
1st Commit: 
- Started to do the basic outline for any project and set up all files
- Set up options for the drop down menu

2nd Commit:
- Started on my javascript to test pulling values from the api

3rd Commit:
- added css styling to make things look like my wireframe
- added a hidden form to my html so i can store my values to compare to the api
- in my js i added more info to console.log the info i am going to be using
- added a function to redirect to another result page instead of updating the same page
- added my result.html and result.js files in with basic notes/frame

4th Commit:
- added resultStyle.css to style my page
- minor updates in style.css
- updated index.html values to full name and added st, nd, rd, th
- deleted hidden form because I used the localStorage instead
- a lot of formatting issues were fixed
- made it so that each object in the function was listed separately 
- added result.js page to deal with putting that info onto result.html page

5th Commit: (had an issue pushing my commits here because I had 2 files that were 140mb each, so everything
was committed all at once, then audio files after)
-  added in CSS styling for index/result pages
- added in background music for index/result pages
- muteBtn functions for background music and minor edits
- animation for villagerInfo card

### Notes
~ I was stuck on formatting my html for a very long time, I spent about 3 hours just staring at my screen trying to center it, but
I went to office hours and Billie was able to help me. After that, I tweaked a few more things to my liking. I realized I should
probably get working on my logic so I did that. <br>
~ First big problem I ran into was linking another page after I hit the submit button, so that I could display the result on it. I also
asked Billie for help with this, but through some research and googling, I decided that `window.location.href` was the way to go. <br>
~ The next problem I had was bringing over the form value from my index.html/app.js to my result.html/result.js.
I had tried to use the query method, but it was not working for me so I used localStorage to store my value and reference it.
(This is after many hours of googling. I used another .js file as my scratch paper and copy and pasted my work to and from there. 
I tend to find it helpful for me.) <br>
~ My next blocker after that was my form value was not matching up with the API JSON file `birthday-string` value and I had a really
hard time figuring out what was wrong. I had to ask a few friends and chatGPT. Using chatGPT was interesting because it still couldn't fix my problem. It was a great tool to make me realize what was wrong instead of telling me an answer that might or might not work. After console.logging in my code after asking it several questions, I finally came to the realization that my form value formatting was
not matching up. I fixed that by adding the formatDate function in my result.js file. 
~ In between my 4th and 5th commit, I had added background music, but each file was 140mb so github wasn't taking it, but since I had committed it, it was hanging at the push portion. 
I took one audio file and went into Garageband (on Mac) and split it into 2 30 minute segments and applied it. Mark was also able to help me with pushing my project onto github. I had to
reset to a previous commit before I received an error, then was able to successfully push my entire project.


### Issues
One issue I can't seem to solve is that Google Chrome updated their policy about autoplaying audio when a page loads, so my index.html backgroundMusic doesn't play automatically unless I 
manually type it into the console. My result.html backgroundMusic loads in fine though. 
