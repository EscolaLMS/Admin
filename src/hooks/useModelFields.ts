import { useState, useEffect } from 'react';

import { fields as fetchFields } from '@/services/escola-lms/fields';

type ModelFieldsState =
  | {
      state: 'initial';
    }
  | {
      state: 'loading';
    }
  | {
      state: 'loaded';
      list: EscolaLms.ModelFields.Models.Metadata;
    }
  | {
      state: 'error';
      error: string;
    };

const useModelFields = (class_type: string): ModelFieldsState => {
  const [state, setState] = useState<ModelFieldsState>({ state: 'initial' });

  useEffect(() => {
    setState({ state: 'loading' });
    fetchFields({ class_type }).then((data) => console.log(data));
  }, [class_type]);

  return state;
};

export default useModelFields;
