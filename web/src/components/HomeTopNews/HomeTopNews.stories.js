// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <HomeTopNews {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import HomeTopNews from './HomeTopNews'

export const generated = () => {
  return <HomeTopNews />
}

export default {
  title: 'Components/HomeTopNews',
  component: HomeTopNews,
}
