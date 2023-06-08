// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Slider {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Slider from './Slider'

export const generated = () => {
  return <Slider />
}

export default {
  title: 'Components/Slider',
  component: Slider,
}
