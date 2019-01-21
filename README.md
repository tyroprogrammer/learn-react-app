# Welcome to Learn React App!

The goal of this tutorial is to quickly get you off the ground with `React` concepts. This tutorial has hands on exercises which I consider to be the most important part of this tutorial.

The way this tutorial works is that first you have to checkout this project on your computer, and run the application locally. Then open the application on a browser and you can go through the tutorial as you like.

![Learn React App](./public/Learn_React_App.gif "Learn React App")


## Checkout

Checkout the project to your computer using `git`:

```
git clone https://github.com/tyroprogrammer/learn-react-app.git
```

## Environment Setup

If you don't already have `yarn` installed on your local machine please execute below command to install `yarn`:

```
npm install -g yarn
```

### Installing Dependencies

On the root directory of the project please execute below command to install all the project dependencies:
```
yarn install
```

### Starting application

On the root directory of the project please execute below command to start the tutorial application:

```
yarn start
```
After this is complete, the application will be deployed on port `3000`. Open a browser and navigate to `localhost:3000`.

-----

## Following the tutorial

Tutorial on this application are fairly straightforward to follow. Each tutorial has one or more exercises. You'll see once you are in the tutorial.

The exercise panel has split view. The left hand side of the screen has your solution rendered and the right hand side of the screen has the target solution.
Right above the exercise panel you'll see location of exercise files.

Please open the execise file on your favorite editor (VS Code, Atom, Sublime, IntelliJ etc.) and start making changes by following the instructions. Exercise files are heavily commented. Read through the comments and you should be able to write up the solution. If you have any confusion you can refer to the solution file for that exercise. Every time you make changes to the exercise file and save it, the browser will reload automatically reflecting your changes.

### Exercise Comment Guide

Most comments in the exercise files starts with one of the below signs. This is to help you understand what you should do to the code immediately following this comments.

🏆 - **Trophy** - Describes the overall goal of the exercise. You can find this at the top of the exercise file.

💡 - **Light Bulb** - General information regarding the code immediately following this comment. You might find it throughout the code. No action is required on your part, just read them.

✏️   - **Pencil** - You are supposed to edit the code immediately following this comment. It is followed by a description of the change that you need to do.

🧭  - **Compass** - When the description of change is not enough, compass will give you more direction. You will find it alongside the pencil when more elaborate instruction is deemed necessary.

🚨 - **Alarm** - This means danger. Read the comment carefully. Usually it's used to say you shouldn't change the code immediately following this. It will create havoc.

### FAQ

<details>
    <summary>Do I need to install `yarn` or `npm` would do?</summary>
    <p>You don't really need yarn. Just use npm if you like.</p>
</details>

<details>
    <summary>Which browser should I use?</summary>
    <p>This tutorial has been tested in Chrome only so I highly recommend you use Chrome.</p>
</details>

<details>
    <summary>Which code editor should I use for exercise?</summary>
    <p>Anything really (Sublime, Atom, VS Code, IntelliJ) - its your preference.</p>
</details>

<details>
    <summary>I accidently deleted something in exercise that I shouldn't have. What should I do?</summary>
    <p>The easiest way is to just revert back to the previous version on your editor. If you want to start anew, then just checkout that particular file from github again using something like:<pre><code>git checkout HEAD --  exercise/01-helloWorld.js</code></pre>
    </p>
</details>

## Contribution

If you went through the exercise and saw some inconsistencies or if you have an idea to make the overall tutorial better please feel free to open a PR.