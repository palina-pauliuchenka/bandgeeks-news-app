// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Dropdown {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Dropdown from './Dropdown'

export const generated = () => {
  return <Dropdown />
}

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}
