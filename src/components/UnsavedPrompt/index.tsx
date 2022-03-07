import { Prompt, useIntl } from 'umi';

const UnsavedPrompt = ({ show }: { show?: boolean }) => {
  const intl = useIntl();

  return (
    <Prompt
      when={show}
      message={intl.formatMessage({
        id: 'unsaved_changes',
      })}
    />
  );
};

export default UnsavedPrompt;
