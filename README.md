<!-- CODENAME: BANANA -->

# Project Overview

## Quill Café

Grab a beverage and connect through poetry <3

## Project Description

Quill Café is built with React.js and Airtable which allows the user to choose a mood icon on the homepage. Upon choosing a mood, the user is directed to a collection of poetry that corresponds with that mood. The collection will be a combination of famous poetry, as well as user input poetry. Additionally, on the homepage, the user can choose to either add their own poetry or add their favorite poetry from other poets. Each option will lead to a form where the user can input the poem, name of poet, genre(mood) and an image url. 

## Wireframes
![Quill Cafe (2)](https://user-images.githubusercontent.com/84357702/123556307-754ce680-d758-11eb-87f0-54c7baa69f73.jpg)

## Component Hierarchy
![Quill Cafe Hierarchy](https://user-images.githubusercontent.com/84357702/123530210-ed1e0100-d6c5-11eb-9a30-0f933b78f64d.jpg)

## API and Data Sample


Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
"https://api.airtable.com/v0/apprFbDJnZkyhLIR1/mood?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer YOUR_API_KEY"
EXAMPLE RESPONSE
{
    "records": [
        {
            "id": "recYaYBDi5ojfdlvl",
            "fields": {
                "mood": "melancholy",
                "poem": "Chewie hasn’t touched his food I hope he’ll be o.k.. It hasn’t been the same for him Since Leia passed away.  He’s a melancholy Wookie as anyone can s...",
                "author": "John F McCullagh",
                "title": "Melancholy Wookie"
            },
            "createdTime": "2021-06-26T13:29:05.000Z"
        },
        {
            "id": "reclUlfP7lH5ohmbu",
            "fields": {
                "poem": "Real depression is when you stop loving the things you love.",
                "title": "Real Depression",
                "author": "Atticus",
                "mood": "melancholy"
            },
            "createdTime": "2021-06-26T13:29:05.000Z"
        },
        {
            "id": "recdm4q0sz2X9etVa",
            "fields": {
                "poem": "So, we’ll go no more a roving So late into the night, Though the heart be still as loving, And the moon be still as bright.  For the sword outwears it...",
                "title": "So We'll Go No More a Roving",
                "author": "Lord Byron",
                "mood": "melancholy"
            },
            "createdTime": "2021-06-26T13:29:05.000Z"
        }
    ],
    "offset": "recdm4q0sz2X9etVa"
```

### MVP/PostMVP

#### MVP 

- Home page with clickable icons that route to each path
- Get and post poems, poets and genre from Airtable
- Display all poems page
- Use forms to create poems and assign them to appropriate genre
- Navbar

#### PostMVP  
- Hero's Image on homepage
- Drop down search bar on display all page that finds poems via genre
- add links to forms in navbar
- create footer
- add a "read more" button on poetry renders

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 25| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 29| Project Approval/Core Application Structure/Airtable Setup | Incomplete
|June 30| Psudocode / actual Code / Components / Get, Set, Put Data | Incomplete
|July 01| June 30 cont'd / CSS Components| Incomplete
|July 02| CSS Component cont'd / MVP  | Incomplete
|July 02| MVP | Incomplete
|July 06| Advanced CSS / final touches | Incomplete
|July 07| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs| hrs | hrs |
| Airtable setup | H | 2hrs| hrs | hrs |
| Clickable icons | H | 2hrs| hrs | hrs |
| Navbar | H | 1hrs| hrs | hrs |
| Data population pg1 | H | 2hrs| hrs | hrs |
| Data population pg2 | H | 2hrs| hrs | hrs |
| Data population pg3 | H | 2hrs| hrs | hrs |
| Data population pg4 | H | 2hrs| hrs | hrs |
| Data population pg5 | H | 2hrs| hrs | hrs |
| Data population pg6 | H | 2hrs| hrs | hrs |
| Data population pg7 | H | 2hrs| hrs | hrs |
| Data population pg8 | H | 2hrs| hrs | hrs |
| Data population pg9| H | 2hrs| hrs | hrs |
| Form creation pg1 | H | 2hrs| hrs | hrs |
| Form creation pg2 | H | 2hrs| hrs | hrs |
| Component CSS pg1 | H | 2hrs| hrs | hrs |
| Component CSS pg2 | H | 2hrs| hrs | hrs |
| Component CSS pg3 | H | 2hrs| hrs | hrs |
| Component CSS pg4 | H | 2hrs| hrs | hrs |
| Component CSS pg5 | H | 2hrs| hrs | hrs |
| Component CSS pg6 | H | 2hrs| hrs | hrs |
| Component CSS pg7 | H | 2hrs| hrs | hrs |
| Component CSS pg8 | H | 2hrs| hrs | hrs |
| Component CSS pg9 | H | 2hrs| hrs | hrs |
| Responsive CSS  | H | 3hrs| hrs | hrs |
| Advanced CSS | H | 2hrs| hrs | hrs |
| Final Touches / Deploy | H | 2hrs| hrs | hrs |
| Total | H | 54hrs| hrs | hrs |

## SWOT Analysis

### Strengths:
I am going into project 2 with a much better design plan and method. I know exactly what I want my app to look like and what I want it to execute. I feel more organized and focused. I know what homework/labs/code snippets to reference if I need. I have resources for the things I want to execute that we did not learn.

### Weaknesses:
I am not too keen on using class components. I feel like I can, but it will take extra time because it's not something I've completely absorbed yet. I am also nervous about using CSS Components but know I need to in order to execute some of the design I want to implement. 

### Opportunities:
This project is a wonderful way for me to showcase what I've learned over the last two weeks with General Assembly's Software Engineering Intensive. I am very curious about React and what I can do with it. I am enjoying front-end designing and I love what we've done so far with React. 

### Threats:
I tend to get sidetracked by styling. Last project I spent more time on CSS and designing than anything else. I have a hard time sticking with one decision and change my mind often until it feels right. This can result in countless hours of research and looking at images/fonts/gradient colors/etc. I also didn't keep track of time last project and want to do better this time. 
