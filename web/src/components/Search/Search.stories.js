// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Search {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Search from './Search'

export const generated = () => {
  return <Search />
}

export default {
  title: 'Components/Search',
  component: Search,
}
