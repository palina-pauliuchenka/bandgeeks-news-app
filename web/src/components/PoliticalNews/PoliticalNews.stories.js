// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PoliticalNews {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PoliticalNews from './PoliticalNews'

export const generated = () => {
  return <PoliticalNews />
}

export default {
  title: 'Components/PoliticalNews',
  component: PoliticalNews,
}
