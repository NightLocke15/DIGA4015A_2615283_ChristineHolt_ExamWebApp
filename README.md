# The Character Collection

## App Theme:

This is a Dungeons and Dragons (2014) Character creator app. Users/players can create
and store all their characters in one place and access the rules of the game at any time.
- **Character Creator:**

The character creator will provide 2 ways to create a character: guided or unguided.
Guided creation is for new players who need help in creating their characters. The
app will provide relevant information as the player moves through the creation
process. Unguided is for players who have played before. The creation process will
not provide information unless it is requested, thus, the information will still always
be accessible.

- **Character List:**

The app will provide a page where the user’s characters are all stored. When
accessing one of the characters, the player will be taken to a character sheet
viewer/editor, where the users can view or edit their character sheet.

- **Rules:**

The rules of the game will be accessible to anyone using the app. This will be
possible in two ways: by going to the rules tab or by accessing the rules directly in
the character sheet viewer/editor. The players will either be able to manually
traverse through the rules under the rules tab or use the search function to access a
certain section of the rules. They will also be able to access it when viewing their
character sheet by using the rule search function that will bring up certain sections
of the rules or by clicking the more information button on any section of their
character sheet.

## User Research:

*Personas:*

New Dungeons and Dragons (2014) Player:
- Demographics:
   - Age range: 12+
   - Gender: Any
   - Device Accessibility: Mobile/Computer
- Goals:
   - Learning how to create a character in Dungeons and Dragons (2014).
   - Learning how to play Dungeons and Dragons (2014).
   - Learning how to use each of the elements on the character sheet in the Dungeons
and Dragons (2014) game.
- Frustrations:
   - The rules of the game are quite hard to keep track of, especially the rules about
elements found on the character sheet.
   - The paper character sheet has many pages, and it is hard to make changes and
keep track of the location of certain notes or possessions.
   - Some of the roles pertain to quite a few calculations, and it is necessary to keep
track of what to add or subtract.
- Key Behaviours:
   - Using the app to look up rules about certain behaviours and choices.
   - Use the app to create a character through a guided process.
   - Use the app to keep track of their created characters.
   - Using the app to keep track of their character, level, XP, spells, items, personality,
friends, enemies, statistics, etc.
   - Use the app to make rolls (saving throws, checks, etc).
Experienced Dungeons and Dragons (2014) Player:
- Demographics:
   - Age range: 12+
   - Gender: Any
   - Device Accessibility: Mobile/Computer
- Goals:
   - Creating characters for the Dungeons and Dragons (2014) campaigns they will be
playing in.
   - Storing all their characters in one place.
   - Getting a refresher on how to play the game and/or how to create a character.
   - Have access to the rules of the game to get a refresher whenever needed.
- Frustrations:
   - The paper character sheet easily becomes dirty when erasing and rewriting
statistics, items and/or notes.
   - Keeping all characters in one place can become hard when characters pile up.
   - Having to constantly look up rules for a refresher either online or in books can
become frustrating.
   - Having to do all the calculations manually can become tedious.
- Key Behaviours:
   - Use the app to keep track of all their characters.
   - Use the app to create new characters.
   - Using the app in gameplay when having to roll dice or keep track of items and
other elements.
   - Using the app to refresh their knowledge on gameplay whenever needed.

## User Stories:

*New Player creating character:*
As a new Dungeons and Dragons player, I would like to create a character for a
campaign in an easily understandable way through a guided process.
- Create a character with short sections of information provided alongside each step
of the creation process.
- These rules and information should also be accessible when viewing and/or editing
the character sheet.

*New Player learning to play the game:*
As a new Dungeons and Dragons player, I would like to learn about the rules of the game
while I create a character or while I am playing.
- The rules should be easily accessible and traversable through a search function.
- These rules should be accessible either by going to the rules section of the app or by
searching for them directly in the character sheet viewer/editor.

*Experienced player creating a character:*
As an experienced Dungeons and Dragons (2014) player, I would like to create a
character for a campaign quickly and efficiently.
- The character creator should have an option to be filled in unguided.
- The guidance should, however, be accessible at any time whenever the user needs
to be reminded of a certain piece of information.

*Experienced player refreshment on rules:*
As an experienced Dungeons and Dragons (2014) player, I would like to have easy
access to the rules of the game when I need to be reminded how something works.
- Experienced players often also need refreshers on the rules of the game.
- These players should also be able to access the rules about their character sheet or
other sections of the game easily by accessing them in the rules section of the app
or directly from the character sheet viewer/editor.

## Information Architecture:

**Sitemap:**

The Sitemap for each of the pages and the information contained within them:

![Web App Sitemap](/src/READMECONTENT/sitemap.png)

**User Flow:**

Flow that the user could follow when using the web application:

![User Flow](/src/READMECONTENT/userflowP1.png)
![User Flow](/src/READMECONTENT/userflowP2.png)

## Wireframes:

Wireframes of all the pages in the application on desktop. 

![Home Before Login Dark](/src/READMECONTENT/homeBeforeLogD.png)
![Home Before Login Light](/src/READMECONTENT/homeBeforeLogL.png)

1. **Website Logo:**
This is the logo for the website. It will be visible on all the pages in the header. When
clicked on, it will take the user back to the home page (after logging in, to the
homepage that contains links to the rest of the site).

2. **Home Page Before Log In:**
This is the page the user will see before logging into the app. It contains the splash
screen with a welcome message, a button that will take the user to the log-in page,
and a link that will take the user to the create a new account page if they do not have
an account already.

3. **Profile Picture and Log In Link Before Log In:**
The profile picture will be blank before the user logs in, and next to it there will be a
link that takes the user to the log-in page. This will change after the user has logged
in.

4. **Log In Button:**
The log-in button will be red to pull the user’s attention with the words “Log In”
clearly in white to indicate the purpose of the button. This button will take the user to
the login page.

5. **Create New Account Link:**
In the case that the user does not have an existing account, this link will take them
to the “Create a New Account” page, where they will be able to create a new account
and log in to use the app.

6. **Footer With Legal Notice:**
The API I will be using contains content owned by Wizards of the Coast, however, it is
published under an Open Gaming License, which allows people to use the content
in a specific manner. In the case of “fan sites”, there are some legal statements that
must be found on the page, including the statement included here (This will be found
on each page; some of the below wireframes do not contain them as it is expected
users will scroll on those pages) (Wizards of the Coast, 2017). There will be further
information on this on the “About” page.

![Web App Sitemap](/src/READMECONTENT/loginD.png)
![Web App Sitemap](/src/READMECONTENT/loginL.png)

7. **Email Address Log In:**
On the log-in page, the user will be required to enter the correct email address in the
input field.

8. **Password Log In:**
The user will also need to enter the correct password in the input field. This and the
above email address input field (if entered correctly) will allow the user to enter and
use the application.

9.**Forgot Password Link:**
In the case that the user has forgotten their password, this link will take them to a
page that will allow them to change their password (it will look almost identical to
the “Create a New Account” page below). The link is coloured blue, following the
convention for hyperlinks (Melchor, 2025), and catches the eye because it is
different from the rest of the colour palette.

10. **Log In Button:**
This button is visually consistent with the log-in button on the “Home” page. After
filling in the relevant information, this will log the user in and allow them access to
the rest of the app.

11. **Create a New Account Link:**
This link takes the user to the create a new account page in the case that they
clicked the log-in button on the home page and they do not already have an account.

![Web App Sitemap](/src/READMECONTENT/creatAccD.png)
![Web App Sitemap](/src/READMECONTENT/creatAccL.png)

12. **Enter a Username:**
In this input field, the user can enter any username that they would like to use. It will
be checked against the already used usernames, and if it is not in use, the user will
be allowed to take it. If it is in use, the app will let the user know by shaking the input
box and showing a piece of text stating that the username has been taken. The user
will have to choose a new username to be able to create an account.

13. **Enter an Email Address:**
In this input field, the user will have to enter a valid email address to be able to
create a new account. If it is not valid, the app will let the user know similarly to how
an invalid username is shown.

14. **Enter a Password:**
In this input field, the user will have to choose a password. The password will have to
satisfy all the requirements given on the page before the user will be able to create
the account.

15. **Confirm Password:**
As a final confirmation of the password, to ensure that the password is typed in
correctly, there is the “Confirm Password” input. After this is typed in correctly, the
user would be able to create a new account.

16. **Create a New Account Button:**
This button will create a new account for the user if all the input fields are filled out
with the correct information. It is visually consistent with the log-in button found on
the “Log In” page and the Home Page before log-in.

17. **Log In Link:**
In the case that the user accessed the “Create a New Account” page when they
already have a profile, they can use this link to access the “Log In” page.

![Web App Sitemap](/src/READMECONTENT/homeD.png)
![Web App Sitemap](/src/READMECONTENT/homeL.png)

18. **Navigation Bar:**
The navigation bar will give the logged in user access to all the pages the app has to
offer. When on a certain page, the button in the navigation bar will be surrounded by
a red border, to help the user know where they currently are on the app.

19. **Profile Picture and Username Link after Log In:**
The profile picture will show the user’s chosen profile picture (if they have one) along
with their username (which will also be used in the welcome message on the Home
Page). These will be clickable and will bring up a settings drop-down menu (as
shown in the “About” page wireframe below).

20. **Navigation Tabs:**
On the “Home” page (after logging in), three tabs will be present that take the user to
the most important pages: their list of characters, the character creator and the
rules page. These are the main functions of the app, so they would be the most
important. The other pages are accessible through the Navigation bar at the top of
the page.

![Web App Sitemap](/src/READMECONTENT/createD.png)
![Web App Sitemap](/src/READMECONTENT/createL.png)

21. **Users Pick from the Options:**
In this wireframe is an example of the four skill proficiencies that the user would
have to choose for a Rogue build. The Whole creation process will look similar, some
with input fields, other with choices. For this example, the users will interact with
each drop-down menu to choose a skill.

22. **Guided Character Creation:**
In the guided character creation process, the user will have short snippets of rules
that explain each element to them. This can be toggled on and off throughout the
character creation process. Each section of the character creation process will have
a similar looking block with a rule snippet.

![Web App Sitemap](/src/READMECONTENT/characterListD.png)
![Web App Sitemap](/src/READMECONTENT/characterListL.png)

23. **Character List:**
This page will contain each of the user’s characters that they have created up until
this point. They will be able to interact with one of the tiles and access the character
sheet to view or edit it.

![Web App Sitemap](/src/READMECONTENT/characterD.png)
![Web App Sitemap](/src/READMECONTENT/characterL.png)

24. **The Character Sheet:**
This sheet contains all the information the user would need to play the game, from
basic information like their character name to the spells that they can use in the
case that they are a magic-using character. Each of these sections contains a
different set of information that the user would be able to move and arrange as they
see fit. It also contains an edit button, which will allow the user to edit specific
elements by opening them up in the character creator section.

25. **Move and Info Buttons:**
These two buttons can be found on each of the sections in the character sheet. The
move button (the three lines) will enable the user to move the section around on a
grid so they can arrange the sheet in a manner that they see fit. The information
button (the “I” with a circle around it) will pop out a block that provides information
on that section of the character sheet (this block will look like the block found on the
character creator wireframe; however, it will pop out to the side). This gives the user
access to the rules and more information at any time.

26. **Combined Information Part 1:**
This small section with right and left arrows will contain sections where the user can
type in information on their character’s personality, ideals, bonds, and flaws. Each
of these will look the same as the one shown, just with a different heading.

27. **Combined Information Part 2:**
This section will contain all the information that the player would not always need
immediate access to. The spellcasting section will look as it is shown above;
however, the features and traits and character sections will mostly be text that is
entered by the player. These will look like the above-mentioned “Combined
Information Part 1”.

![Web App Sitemap](/src/READMECONTENT/rulesD.png)
![Web App Sitemap](/src/READMECONTENT/rulesL.png)

28. **Rule Search Bar:**
This search bar enables the user to search for a specific rule that can be found in the
rules section. When searching a rule, the page will change to what is represented in
the below wireframe, showcasing that rule.

29. **Rule Category Selection:**
The main categories in the rule section are also made available. When clicked the
page will change to what is represented in the below wireframe and will show the
rule section that was chosen.
Figure 9: Representation of the "Rules" page when a certain section of the rules has been accessed.

![Web App Sitemap](/src/READMECONTENT/showRuleD.png)
![Web App Sitemap](/src/READMECONTENT/showRuleL.png)

30. **Rule Search Bar:**
The search bar is also accessible when a certain set of rules has been accessed. It
has the same function as the above search bar, so search for a specific set of rules.

31. **Rule Category Selection:**
The rule categories are also accessible when viewing a certain set of rules. There are
a few subsections for the character section, as it is quite a large section. Clicking on
one of these sections will access that section.

32. **Rule Showcase:**
On the right side of the page, the rule section chosen will be showcased, making it
accessible to the users

![Web App Sitemap](/src/READMECONTENT/aboutD.png)
![Web App Sitemap](/src/READMECONTENT/aboutL.png)

33. **About Section:**
This section of the app will show three things: A section telling the user about the
creator of the app, a section where the user can contact the creator to report bugs,
problems or suggestions, and a section that shows legal information on the usage of
the Open Game License content that the API uses and which is used to create this
application (Wizards of the Coast, 2017)

34. **Dropdown Settings Menu:**
When the user clicks on the “Username” in the right top corner of the page, a small
drop-down menu will appear, letting the user change the theme of the website, the
font used, access their account settings or log out. These things have been put in a
small drop-down menu because the settings available to the user are few. These
options are given to the user to give them control over their experience of the
application.

![Web App Sitemap](/src/READMECONTENT/settingD.png)
![Web App Sitemap](/src/READMECONTENT/settingL.png)

35. **Account Settings:**
In the account settings section, the user will be able to change their email address,
username or password. They will also be able to delete their account permanently.
This gives the user control over their account, even though the account does not
require much.

**Other Notes on Wireframes:**

- The background is a solid colour with shapes in a different hue on top. This is for two
reasons:
   - Stylistic choice: The shapes represent the shapes of the dice used in tabletop
roleplaying games.
   - Pragmatic choice: The shapes are to break up the background to minimise eye
strain, especially in the light theme. The shapes are simple, as to not draw too
much attention, but they break up the background.
- Everything that is interactable will react in some way when the mouse hovers over
the element. For example, the scale will enlarge, or the background colour will
change.
- The interactable elements (especially on the character sheet) fall into two
categories:
   - Interactable buttons that are often bordered in red
   - Non-interactable text sections (unless when editing) that are showcased with a
line under the information.

## Visual Design:

**Style Guide:**

![Web App Sitemap](/src/READMECONTENT/styleGuide.png)

- *Typography:*
For the typography, only two fonts are used. “Koulen” is used for headings and most
buttons (especially in the character sheet section). “Sunflower” is used for
everything else. Both fonts are easy to read, as they are simple without any extra
unnecessary decorations. It is important to use fonts that are easy to read to make
the app accessible and easy to use.

- *Colour Palette:*
I have kept the colour palette simple in both the dark and light themes. The colours
used are contrasting, making it easy to see for anyone with colour blindness. The
text needs to stand out so it is easy to read. This is why the text on the page is always
white on dark backgrounds and black on light backgrounds, making everything easy
to read and see.

- *Interactive Elements:*
1. **Buttons:**
The “Log In” and “Create Account” buttons are red, making them stand out
against the background. These two buttons are important when accessing the
app in the beginning, so they must attract the user’s attention.

2. **Text Inputs:**
All the text inputs have placeholder text that prompts the user to fill in the
relevant information. They are made up of a text input, a red border, and a drop
shadow, making it stand out against the background.

3. **Drop Down Menus:**
Although the drop-down menus look like the text inputs, they have one key
difference: a downward arrow, indicating that it is a drop-down menu the user
can access.

4. **Character Sheet Elements:**
All the elements on the character sheet have a similar format. The interactable
elements (buttons) are bordered in red. These can be clicked to add to them,
subtract from them, or in some cases, “roll a dice” when this action is called
upon in the game. Some parts are purely a line that contains information that
cannot be directly changed (unless it is being edited).

5. **Delete Account Buttons:**
These buttons look a little bit different because they have a very important
function. They are made up of contrasting colours to the background to show
their importance and the urgency when they are clicked.

6. **Toggles:**
These are used in some sections of the character sheet to indicate proficiency in
a certain skill or statistic. They are “toggled” when the circle is filled with a light
red.

7. **Move and Information Buttons:**
These are found on each section in the character sheet. They are made up of a
red border, to indicate that they are interactable, as well as two icons that spark
familiarity.

- *Branding and Imagery:*
There will not be many (if any) images on this app, as the main element that is used
is numbers and statistics, and the aim is to focus on this. This is why the branding is
simply the name of the app. The only other image would be the character profile
picture, should they choose to have one. The icons used are familiar, even though
there are not many. The downward arrow indicates a drop down, the three lines
indicate that it is interactable and will move the element, and the “I” in a circle
indicates that more information will be provided.

## Accessibility:

To ensure that my web app is accessible to all users, I have done some reading on some
best practices when creating a web app. Mehul Mohan (2023) describes some of these
practices the best, thus, I have based my decisions on some of the things they have
mentioned:

- *Semantic HTML*
To make my app usable by individuals who use screen readers, this is an important
step. Use descriptive tags that convey the structure of each page and the purpose of
each element on the page.

- *Contrast*
The theme of the app must have enough contrast that anyone can use it. Viewing my
wireframes in a browser and setting the screen to each type of colour blindness
shows that no matter which type of colour blindness someone has, they will be able
to view and use my app, as the contrast between the colours used is sufficient in
both themes.

- *ARIA labels*
Using these labels makes my site more accessible to a wider range of people, as it
can be used to make the app more accessible with the use of custom controls,
making the usage of each element clearer, etc. This is a very important addition in
making my app more accessible.

- *Keyboard Accessibility*
This is to ensure that the app is usable by people who prefer to use their keyboards
to use web apps for a variety of reasons, including limited motor functions. It would
be important to enable users to navigate and use the web app using certain keys on
their keyboard.

## Responsiveness:

It is important that users with all devices can use my app. The usage on desktop is
shown above in the wireframes. The following are some notes on responsiveness for
other screen types:

- *Tablets*
If the tablet has a large enough screen, the layout will be very similar to the desktop
layout. However, if it is a tablet with a smaller screen, it will be closer to the layout
that will be found on a mobile screen (as discussed below).

- *Mobile phones*
For mobile phones, there will be a few differences in layout because of the smaller
screen. Some of these differences are:
   - The navigation bar will be added to a burger menu in the top right corner of the
screen.
   - The user profile picture and username will be added to the burger menu.
   - The character sheet will not be laid out the same. Instead, the most important
information will be at the top, and the rest will be available when scrolling down.
   - The functionality to move around elements in the character sheet will be limited
as there is limited space. It might even not be possible to move around the
elements for the sake of ease because of the smaller screen size.

Other than the above-mentioned changes, it is the aim to keep most of the functionality
the same as on desktop.

## Performance:

The aim is to keep the performance of the app good. To achieve this, I have made some
of the following decisions:

- *Limited image use*
There is little to no images in use in my design. This will improve performance, as
there will not be many images that need loading.

- *Optimising images*
The images that I do use (mostly for backgrounds and profile pictures) will be added
in optimised formats to reduce loading time.

- *Simplistic design*
The website has a relatively sleek and clean design. This means limited elements
and not much information to load, which will improve performance.

## References:

Dungeons and Dragons (5th edition). (2014). [Board Game]. Wizards of the Coast.

Melchor, L.O. (2025) ‘Why Are Hyperlinks Blue? The Short Story’. The Daily Egg. 20
February. Available at: https://www.crazyegg.com/blog/why-hyperlinks-are-blue/
(Accessed: 15 April 2025).

Mohan, M. (2023) ‘7 Best Practices for Building Accessible Web Applications’.
Codedamn News. 20 March. Available at: https://codedamn.com/news/frontend/7-
best-practices-accessible-web-applications (Accessed: 15 April 2025).

Fan Content Policy (2017) Wizards of the Coast. Available at:
https://company.wizards.com/en/legal/fancontentpolicy (Accessed: 15 April 2025).
