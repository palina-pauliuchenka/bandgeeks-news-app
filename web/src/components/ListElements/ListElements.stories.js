// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ListElements {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ListElements from './ListElements'

export const generated = () => {
  return <ListElements />
}

export default {
  title: 'Components/ListElements',
  component: ListElements,
}
