Here is my capstone project.

1.Introduction of myself: Hello everyone, my name is Vadzim, I am originally from Belarus, I worked in several states as a cable guy for the last 4 years and decided to make a career change, so here I am studying in Devmountain.

2. What did I choose for my capstone project and why? 
For my capstone project I wanted to build something useful, fun and challenging. This is why I ended up making a memory game. I think that it can be helpful for people who want to improve their visual memory and logical thinking. Each player sets their high scores, which makes it challenging. And it is a game, so it is fun.

3. Actual project presentation:
3.1. Login for existing users/create a username for new users:
When you first open the game you are on the first page where you need to login if you are an existing user or create a username if you are a new user. We can see two input fields with appropriate buttons next to them. If you try to login with a non-existing username you get an appropriate error message, when you are trying to create a username which is already taken you also will get an appropriate error message. 

3.2. After you logged in or created  a new username: After you logged in or created a new username you get to see a different view with a list of high score for all the users, instructions and two buttons (one to logout, which take you to a previous view, one to play the game which takes you to next page.

3.3. After you click “PLAY” button: You end up on the second page with a different view, here your get to choose difficulty level, read instructions if you want and press “Start the game” button to start the game.

3.4 Actual game: After you clicked “Start the game button” you end up on the last 3rd page where according to chosen difficulty level you will see a different-size set of randomly placed cards. You will see that there are two copies of each image placed in random spots. Your goal is to memorize where the pairs are during 10 seconds(this time can be adjusted). After time is up all the cards will look the same(like a facedown playing card). Game begins. Using your visual memory and logic start opening the matching pairs. If you open two  two same images one after another, then that pair of cards stys open (face up). If you clicked on a non-matching cards they will show as face up for 0.5 sec and flip face down again. The game lasts until you open all the pairs of matching pictures. Score is being calculated according to the amount of clicks. There are 3 different score columns for 3 different difficulty levels. All that info is being updated in a database if you set new high scores. 

4. What did I use to build it? To build this project I used mainly javascript. For communication between front and back end I used axios/json. For server/back end I used express, cors. As an actual database, to store my data I used PG-WEB, to operate with that database in my project I used dotenv, PostgreSQL, Sequelize,. For deployment and hosting I used Heroku.