# Documentation - Using components

You can import a component from FDS in your project in two ways:

```jsx
import Icon from '@flaconi/typescript-common/components/atoms/Icon/Icon';
import { Icon } from '@flaconi/typescript-common/components';
```

The difference is that the first one will only import a single `Icon` component, but the second one will include ALL components from `build/lib/components` in the build. It is recommended to only import the components you need to reduce the bundle size.
