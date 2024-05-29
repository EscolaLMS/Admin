import {
  blue,
  cyan,
  geekblue,
  gold,
  green,
  magenta,
  orange,
  volcano,
  yellow,
} from '@ant-design/colors';
import {
  CalendarOutlined,
  CaretRightOutlined,
  CloudUploadOutlined,
  CopyOutlined,
  DashboardOutlined,
  DeleteOutlined,
  DollarOutlined,
  ExportOutlined,
  FireOutlined,
  ImportOutlined,
  KeyOutlined,
  OrderedListOutlined,
  PlaySquareOutlined,
  PlusOutlined,
  ReadOutlined,
  SettingOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.css';

type CheckboxValueType = string | number | boolean;

interface Props {
  name: string;
  nameKey: string;
  assigned: boolean;
  onChange: (value: CheckboxValueType) => void;
}

const colors = {
  list: {
    color: blue.primary,
    background: blue[0],
    component: OrderedListOutlined,
  },
  update: {
    color: orange.primary,
    background: orange[0],
    component: SyncOutlined,
  },
  create: {
    color: cyan.primary,
    background: cyan[0],
    component: PlusOutlined,
  },
  add: {
    color: cyan.primary,
    background: cyan[0],
    component: PlusOutlined,
  },
  delete: {
    color: volcano.primary,
    background: volcano[0],
    component: DeleteOutlined,
  },
  read: {
    color: green.primary,
    background: green[0],
    component: ReadOutlined,
  },
  manage: {
    color: gold.primary,
    background: gold[0],
    component: SettingOutlined,
  },
  import: {
    color: blue.primary,
    background: blue[0],
    component: ImportOutlined,
  },
  export: {
    color: blue.primary,
    background: blue[0],
    component: ExportOutlined,
  },
  clone: {
    color: blue.primary,
    background: blue[0],
    component: CopyOutlined,
  },
  access: {
    color: blue.primary,
    background: blue[0],
    component: KeyOutlined,
  },
  install: {
    color: gold.primary,
    background: gold[0],
    component: PlaySquareOutlined,
  },
  upload: {
    color: blue.primary,
    background: blue[0],
    component: CloudUploadOutlined,
  },
  authored: {
    color: geekblue.primary,
    background: geekblue[0],
    component: UserOutlined,
  },
  account: {
    color: geekblue.primary,
    background: geekblue[0],
    component: UserOutlined,
  },
  term: {
    color: blue.primary,
    background: blue[0],
    component: CalendarOutlined,
  },
  use: {
    color: blue.primary,
    background: blue[0],
    component: FireOutlined,
  },
  dashboard: {
    color: magenta.primary,
    background: magenta[0],
    component: DashboardOutlined,
  },
  trigger: {
    color: blue.primary,
    background: blue[0],
    component: CaretRightOutlined,
  },
  buy: {
    color: yellow.primary,
    background: yellow[0],
    component: DollarOutlined,
  },
};

const CustomCheckbox: React.FC<Props> = ({ name, nameKey, assigned, onChange }) => {
  const [isChecked, setIsChecked] = useState(assigned);

  const titleWithoutConjunctions = name.replaceAll(/(_|-)/g, ' ').trim();
  const keyTitle = titleWithoutConjunctions.replace('self', '').trim();
  const formattedTitle =
    name !== nameKey
      ? name.replace(nameKey, '').replaceAll(/(_|-)/g, ' ')
      : titleWithoutConjunctions;
  const action = keyTitle.split(' ').slice(-1)[0];

  const handleCheckboxValueChange = () => {
    setIsChecked((prev) => !prev);
    onChange(name);
  };

  const Icon = colors[action as keyof typeof colors]?.component ?? React.Fragment;

  useEffect(() => {
    setIsChecked(assigned);
  }, [assigned]);

  return (
    <Checkbox
      name="checkbox"
      className="custom-checkbox"
      checked={isChecked}
      style={
        colors[action as keyof typeof colors]?.background && isChecked
          ? { backgroundColor: colors[action as keyof typeof colors]?.background }
          : undefined
      }
      aria-label={titleWithoutConjunctions}
      onChange={handleCheckboxValueChange}
    >
      <div className="custom-checkbox__content">
        {formattedTitle}
        <Icon style={{ color: colors[action as keyof typeof colors]?.color }} />
      </div>
    </Checkbox>
  );
};

export default CustomCheckbox;
