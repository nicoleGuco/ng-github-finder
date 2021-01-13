# ng-github-finder
GitHub finder - live search bar of GitHub users

## Setup
First of all please make sure you have node.js installed

brew:
```
brew install node
```
website: [node](https://nodejs.org/en/)

Install the dependencies please run:
```
npm i 
```

## Run
To get the app running:

```
npm start 
```
## Requests limit
Because in the end this isn't yet a production ready project the Octokit requests I'm making are unauthenticated so there is a limit of 60 requests a min.
