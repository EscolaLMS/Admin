//import { Prompt, useIntl } from 'umi';
// TODO #1023 there is no Prompt in umi anymore

import { FormattedMessage } from 'umi';

const UnsavedPrompt = ({ show }: { show?: boolean }) => {
  return show ? (
    <p>
      <FormattedMessage id="unsaved_changes" />
    </p>
  ) : (
    <></>
  );

  // return (
  //   <Prompt
  //     when={show}
  //     message={intl.formatMessage({
  //       id: 'unsaved_changes',
  //     })}
  //   />
  // );
};

export default UnsavedPrompt;
