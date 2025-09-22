# Brick Discord App
A random Discord app that uses Google's Gemini API. I'll probably add random stuff to it later (maybe).

## How to run locally

- git clone the project:
```shell
git clone https://github.com/ReactorFailure/HenryTheBrick.git
```

- Download necessary dependencies **(make sure you have Node.js and NPM installed 🤢)**:
```shell
npm install
```
- Rename `example.env` to `env` and paste in your app's token and client id, as well as your Google Gemini API key.

- Deploy slash commands (you can skip this step if you already loaded the commands):
```shell
node deploy.js
```

- Run the app:
```shell
node .
```

## Dev branch
The dev branch is where I test things before pushing it to the `master` branch.

