# Documentation - Testing your changes
Before we merge your changes to master you can test them by using beta build. To do this you must do the following:
1. Create pull request
2. Wait for CI (travis) to finish it's jobs
3. Beta version number will be similar to `7.1.1-beta.0.PR_ID.TRAVIS_BUILD` - where `PR_ID` is id of your pull request on github and `TRAVIS_BUILD` is travis pull request build job id (you can check it on travis job logs)
4. You can import this beta build into your project and test your changes before merge and deploy
5. Also you can test components by visiting repo storybook for your pull request - [https://dev-de.flaconi.de/s/red/typescript-common/pr-PR_ID/](https://dev-de.flaconi.de/s/red/typescript-common/pr-PR_ID/) - where `PR_ID` is id of your pull request on github
