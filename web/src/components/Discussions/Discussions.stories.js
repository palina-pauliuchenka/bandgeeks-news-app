// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Discussions {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Discussions from './Discussions'

export const generated = () => {
  return <Discussions />
}

export default {
  title: 'Components/Discussions',
  component: Discussions,
}
