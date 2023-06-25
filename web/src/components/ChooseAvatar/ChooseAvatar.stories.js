// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ChooseAvatar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ChooseAvatar from './ChooseAvatar'

export const generated = () => {
  return <ChooseAvatar />
}

export default {
  title: 'Components/ChooseAvatar',
  component: ChooseAvatar,
}
