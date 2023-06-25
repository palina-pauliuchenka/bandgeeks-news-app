// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <TopNewsSlider {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import TopNewsSlider from './TopNewsSlider'

export const generated = () => {
  return <TopNewsSlider />
}

export default {
  title: 'Components/TopNewsSlider',
  component: TopNewsSlider,
}
