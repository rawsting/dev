import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { SnackbarItem } from '../SnackbarItem';

export default {
  title: 'App Components/Snackbar/SnackbarItem',
};

export const JustAMessage = () => (
  <SnackbarItem message="File uploaded successfully" />
);

JustAMessage.storyName = 'message only';

export const WithOneAction = () => (
  <SnackbarItem
    message="Changes saved"
    actions={[{ text: 'Undo', handler: action('save file retry') }]}
  />
);

WithOneAction.storyName = 'with one action';

export const WithActions = () => (
  <SnackbarItem
    message="Unable to save file"
    actions={[
      { text: 'Retry', handler: action('save file retry') },
      { text: 'Abort', handler: action('abort file save') },
    ]}
  />
);

WithActions.storyName = 'with actions';
