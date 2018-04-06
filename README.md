## Enhanced-Angular-Rpg

#### Mvc C# exercise, 02/09/2018

#### By **Justin Lardani**

## Description

Enhanced-Angular-Rpg is an application created to explore the use of the Angular framework and working with Firebase. Users can create a character and fight monsters to proceed through various levels of a dynamically-created dungeon. An administrative panel is also available for creating additional items and monsters to be added to the game.

### Link to Firebase Deployment of application

* https://enhanced-angular-rpg.firebaseapp.com/

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the root of the cloned directory in a terminal capable of running npm commands.
* Run the command $ npm install.
* Create a database for this project on your Google Firebase account
* Copy the database.json file from the project directory to your database
* Create a file at the following path: /enhanced-angular-rpg/src/app/api-keys.ts
* In this file, input the following code:

    export var masterFirebaseConfig = {
      apiKey: [your api key],
        authDomain: [your authDomain],
        databaseURL: [your databaseURL],
        projectId: [your projectId],
        storageBucket: [your storageBucket],
        messagingSenderId: [your messagingSenderId]
    }


* Navigate to localhost:4200 in your browser.

## Known Bugs

No known bugs at this time.

## Support and contact details

If you have suggestions for how to help us make any additions, or if you have other feedback, please feel free to contact Justin at jlardani93@gmail.com. All feedback is welcome.

## Technologies Used

* Angular
* Node Package Manager
* Firebase
* HTML
* Bootstrap
* CSS


### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **Justin Lardani**
