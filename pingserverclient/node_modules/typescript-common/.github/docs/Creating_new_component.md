# Documentation - Creating new component

There are a few things that you __must__ remember when creating new component
1. Make sure that similar component is not already implemented. Maybe you can extend and save some time.
2. Make sure you create it in right directory (atoms/molecules/organisms) - you can read more about atomic design [here](http://atomicdesign.bradfrost.com/table-of-contents/)
3. Each component should have structure like this:
```jsx
MyComponent
|- MyComponent.jsx // main component file
|- MyComponent.test.js // tests for component
|- MyComponent.data.js // test/storybook data
|- MyComponent.style.js // styles for component
|- MyComponent.story.md // readme for storybook
|- MyComponent.story.js // storybook file
```
4. Before creating a pull request make sure your tests are passing

## Templates

Template components can be found under:
- `src/components/templates`

The following script is available which uses these templates to create new components based on their type and name:
- `tools/script-template.sh`

For example:
- `./tools/script-template.sh --type atom --name Widget` 

## Workflow
1. Designers prepare UI elements in Invision app - atoms/molecules/organism with all variants (hove, active, inactive, disabled), also they should consult it with some developers to avoid painful solutions because of technical restrictions of actual browser behaviour. The logic for components should also be introduced before start working on it.
2. We create the tickets with all informations needed (designs, logic, etc)
3. Developers implements elements from Invision into FDS
4. Designers are checking implementation in storybook
5. If needed developers are fixing components
6. Then the code review is done by flaconi
7. Then the new version of FDS is released with release notes
8. All teams can use the new version

## Definitions:

### Atoms
- They are basic components that represent html elements like inputs, buttons, headings, links, paragraphs, etc.
- They MUST NOT contain business logic
- They MUST NOT be connected to the gateway
- They should be tested and should use static type checking for the props (so the developers will know what data is allowed)
- They should be presented in storybook so developers and designers will see how basic elements will looks like
- They should use styling from styled-components theme, so the styling could be easily replaced

### Molecules
- They are combination of atoms
- They MUST NOT contain business logic
- They MUST NOT be connected to the gateway
- They should be tested and should use static type checking for the props (so the developers will know what data is allowed)
- They should be presented in storybook so developers and designers will see how basic elements will looks like
- They should use styling from styled-components theme, so the styling could be easily replaced

### Organisms
- They are combination of molecules and/or atoms
- They can contain business logic, but it should be kept separate and tested
- They can be connected to the gateway
- They should be ready to use with some config parameters
