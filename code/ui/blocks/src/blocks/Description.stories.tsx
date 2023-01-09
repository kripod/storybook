import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './Description';
import { Button as ButtonComponent } from '../examples/Button';
import * as DefaultButtonStories from '../examples/Button.stories';
import * as ButtonStoriesWithMetaDescriptionAsParameter from '../examples/ButtonWithMetaDescriptionAsParameter.stories';
import * as ButtonStoriesWithMetaDescriptionAsComment from '../examples/ButtonWithMetaDescriptionAsComment.stories';
import * as ButtonStoriesWithMetaDescriptionAsBoth from '../examples/ButtonWithMetaDescriptionAsBoth.stories';

const meta: Meta<typeof Description> = {
  component: Description,
  parameters: {
    controls: {
      include: [],
      hideNoControlsWarning: true,
    },
    // workaround for https://github.com/storybookjs/storybook/issues/20505
    docs: { source: { type: 'code' } },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const OfComponentAsComponentComment: Story = {
  args: {
    of: ButtonComponent,
  },
  parameters: { relativeCsfPaths: ['../examples/Button.stories'] },
};
export const OfCSFFileAsComponentComment: Story = {
  args: {
    of: DefaultButtonStories,
  },
  parameters: { relativeCsfPaths: ['../examples/Button.stories'] },
};
export const OfCSFFileAsMetaComment: Story = {
  args: {
    of: ButtonStoriesWithMetaDescriptionAsComment,
  },
  parameters: {
    relativeCsfPaths: ['../examples/ButtonWithMetaDescriptionAsComment.stories'],
  },
};
export const OfCSFFileAsParameter: Story = {
  args: {
    of: ButtonStoriesWithMetaDescriptionAsParameter,
  },
  parameters: {
    relativeCsfPaths: ['../examples/ButtonWithMetaDescriptionAsParameter.stories'],
  },
};
export const OfCSFFileAsMetaCommentAndParameter: Story = {
  args: {
    of: ButtonStoriesWithMetaDescriptionAsBoth,
  },
  parameters: {
    relativeCsfPaths: ['../examples/ButtonWithMetaDescriptionAsBoth.stories'],
  },
};
export const UnattachedOfCSFFile: Story = {
  args: {
    of: DefaultButtonStories,
  },
  parameters: {
    relativeCsfPaths: [],
  },
};
export const OfMetaAsComponentComment: Story = {
  args: {
    of: DefaultButtonStories.default,
  },
  parameters: { relativeCsfPaths: ['../examples/Button.stories'] },
};
export const OfMetaAsMetaComment: Story = {
  args: {
    of: ButtonStoriesWithMetaDescriptionAsComment.default,
  },
  parameters: {
    relativeCsfPaths: ['../examples/ButtonWithMetaDescriptionAsComment.stories'],
  },
};
export const OfMetaAsParameter: Story = {
  args: {
    of: ButtonStoriesWithMetaDescriptionAsParameter.default,
  },
  parameters: {
    relativeCsfPaths: ['../examples/ButtonWithMetaDescriptionAsParameter.stories'],
  },
};
export const OfMetaAsMetaCommentAndParameter: Story = {
  args: {
    of: ButtonStoriesWithMetaDescriptionAsBoth.default,
  },
  parameters: {
    relativeCsfPaths: ['../examples/ButtonWithMetaDescriptionAsBoth.stories'],
  },
};
export const UnattachedOfMeta: Story = {
  args: {
    of: DefaultButtonStories.default,
  },
  parameters: {
    relativeCsfPaths: [],
  },
};
export const OfStoryAsComment: Story = {
  args: {
    of: DefaultButtonStories.Primary,
  },
  parameters: { relativeCsfPaths: ['../examples/Button.stories'] },
};
export const OfStoryAsParameter: Story = {
  args: {
    of: DefaultButtonStories.Secondary,
  },
  parameters: { relativeCsfPaths: ['../examples/Button.stories'] },
};
export const OfStoryAsStoryCommentAndParameter: Story = {
  args: {
    of: DefaultButtonStories.Large,
  },
  parameters: { relativeCsfPaths: ['../examples/Button.stories'] },
};
export const UnattachedOfStory: Story = {
  args: {
    of: DefaultButtonStories.Primary,
  },
  parameters: {
    relativeCsfPaths: [],
  },
};
