# Flaconi Design System - Contributing Guidlines

In order to keep our workflow clear for everyone we introduce some rules that all of us should follow.

## Creating a pull request
When you creating a pull request you are responsible to fix all the issues and request changes that will appear during code review unless someone taking over your branch/task. There are a few general rules:
- __Do not__ dismiss review without answering to question that someone asked
- __Do not__ force anyone to quick approve and merge you pull request
- Be open to suggestions from others
- If you have better approach to solve the problem add code examples or links to articles/resources so everyone can understand

### Technical requirements
1. Create your branch with a ticket number (eg. ELE-123, SN-453)
    - In case you want to add change without a ticket use `0` as a ticket number
2. Your pull request title __must__ have format: `_TYPE_(_SCOPE_): #_TICKET_NUMBER_ _DESCRIPTION_`
3. You __must__ follow good practices DRY, SOLID, YAGNI whenever and wherever you can
4. You __must__ update Documentation to match your code changes
5. You __must__ add tests for new code and update existing one if needed
6. You __must__ run `yarn test` command before commit (should be done by husky hook)
7. You __must__ use `yarn commit` command to commit changes
8. Your branch __must__ be up to date with _master_
9. You __must not__ include changes from other branches into yours
