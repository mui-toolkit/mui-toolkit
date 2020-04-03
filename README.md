# mymui. 

#### mymui allows users to customize a Material-UI theme and grid layout using a dynamic visual interface. Less documentation, more creativity! 
##### Deployed on: https://mui-theme.web.app/
##### Conceptulized and built by Manny Garcia, Nelson Liu, Rana Quadri, and Alexander Wang.

## Tech Stack
- [React](https://facebook.github.io/react/)
- [Firebase](https://firebase.google.com/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [Material-UI](https://material-ui.com/)
- [Webpack](https://webpack.js.org/)
- [FileSaver](https://www.npmjs.com/package/file-saver)
- [thum.io](https://www.thum.io/)

## Local Setup

1. Run `git clone https://github.com/mui-toolkit/mui-toolkit.git` and navigate to the project folder with cd mui-toolkit
2. Run `npm install`
3. Run `npm run start` to start the app on http://localhost:3000/

## Features
- mymui provides two tools for styling and building Material-UI components quickly and easily
- Theme Styler allows the customization of a Material-UI theme with a dynamic visual interface
- Adjust color, button styling, typography, and alerts with palettes, switches, sliders + more
- Download a custom theme and apply it to your project using Material-UI's ThemeProvider
- Save and share your theme with the mymui community
- Discover user created themes via the explore page
- Star and bookmark your favorite themes
- Grid Builder follows the 12 column grid system and visualizes how Material-UI structures grid layouts and positioning
- Drag, drop, and resize grid containers, and observe the code adjust in real-time

#### Theme Styler features
![](https://media.giphy.com/media/Quyq8vrg08lNK9oKuu/giphy.gif)

#### Downloading + applying a theme
![](https://media.giphy.com/media/H6Q07q2pg6wJiekq5L/giphy.gif)

#### Grid Builder features
![](https://media.giphy.com/media/ZB2YL1oD16MjnVXOC9/giphy.gif)

#### Explore Page features
![](https://media.giphy.com/media/YRmrGM9IcowfvqUF3d/giphy.gif)

#### Dashboard features
![](https://media.giphy.com/media/f3e1HZ64ZtjzKMgPjJ/giphy.gif)

#### Admin Page features


## Project Challenges
- Managing the number of props + state of the custom theme object throughout our application — more than four dozen parameters! 
- Assigning the logic of change handlers to different selection tools within the design page
- Learning the functionality of a NoSQL database (Firestore), and the referencing of deeply nested objects
- Firebase data flow, integration of Firebase + Google Cloud functions, and how authentication interacts with database
- Implementing drag and drop functionality with vanilla Javascript rather than a library, and gaining an understanding of how implementation works under the hood
- Building social aspects ie. starring and bookmarking themes — capturing and storing interactions between users 

## Learning Takeaways
- System design and optimization of queries is essential to final user experience
- Prop threading and state management can be daunting in larger React applications
- Understanding the importance and implementation of UI frameworks with repsect to the final user experience
- Run into a problem? There's probably a library for that (but the documentation isn't always great!)

```javascript 
// example Firestore query

// in our React component we make a request for dashboard info, first finding the user and their associated themes, then subsequently making a call for each theme associated with the user.

useEffect(() => {
    const userThemes = [];
    const unsub = async () => {
      await db
        .collection("CustomizedThemes")
        .where("userId", "==", `${user.uid}`)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No matching documents.");
            return;
          }
          snapshot.forEach(theme => {
            userThemes.push({
              ...theme.data(),
              themeId: theme.id,
              userName: foundUser.username
            });
            setThemes([...userThemes]);
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
    unsub();
  }, []);
```
