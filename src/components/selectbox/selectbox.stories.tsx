import type {Meta, StoryFn, StoryObj} from '@storybook/react'
import { useState } from 'react';

import { Selectbox } from './Selectbox'

const meta: Meta<typeof Selectbox> = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  args: {
    idProp: '1',
    label: 'Default label',
    disabled: false,
    value: 'rus',
  },
  component: Selectbox,
  tags: ['autodocs'],
  title: 'Components/Selectbox',
}

export default meta
type Story = StoryObj<typeof meta>

/** Default selectbox with a label. */
export const Primary: Story = {
  args: {
    idProp: 'country-select',
    name: 'country',
    label: 'Выберите страну',
    options: [
      { label: 'Украина', value: 'ua' },
      { label: 'Польша', value: 'pl' },
      { label: 'Германия', value: 'de' },
      { label: 'Франция', value: 'fr' },
      { label: 'Италия', value: 'it' },
      { label: 'Испания', value: 'es' },
      { label: 'Нидерланды', value: 'nl' },
      { label: 'Бельгия', value: 'be' },
    ],
  },
}
/** Default selectbox without a label. */
export const PrimaryWithoutLabel: Story = {
  args: {
    idProp: 'country-select',
    name: 'country',
    label: '',
    options: [
      { label: 'Украина', value: 'ua' },
      { label: 'Польша', value: 'pl' },
      { label: 'Германия', value: 'de' },
      { label: 'Франция', value: 'fr' },
      { label: 'Италия', value: 'it' },
      { label: 'Испания', value: 'es' },
      { label: 'Нидерланды', value: 'nl' },
      { label: 'Бельгия', value: 'be' },
    ],
  },
}
/** Disabled selectbox with a label. */
export const Disabled: Story = {
  args: {
    idProp: 'country-select',
    name: 'country',
    label: 'Выберите страну',
    disabled: true,
    options: [
      { label: 'Украина', value: 'ua' },
      { label: 'Польша', value: 'pl' },
      { label: 'Германия', value: 'de' },
      { label: 'Франция', value: 'fr' },
      { label: 'Италия', value: 'it' },
      { label: 'Испания', value: 'es' },
      { label: 'Нидерланды', value: 'nl' },
      { label: 'Бельгия', value: 'be' },
    ],
  },
}
/** Default a language selectbox without a label. */
export const PrimaryLanguage: StoryFn<typeof Selectbox> = () => {
  const [value, setValue] = useState('rus');

  return (
    <Selectbox
      idProp="country-select"
      name="country"
      label=""
      value={value}
      onValueChange={setValue}
      placeholder="Select language"
      options={[
        { label: 'Russian', value: 'rus', icon: 'Flag-Russia' },
        { label: 'English', value: 'eng', icon: 'Flag-United-Kingdom' },
      ]}
    />
  );
};