// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Pagination {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Pagination from './Pagination'

export const generated = () => {
  return <Pagination />
}

export default {
  title: 'Components/Pagination',
  component: Pagination,
}
