import * as React from 'react';

/** UiLab Switch — controlled toggle; accent track when on, squared thumb. */
export interface SwitchProps {
  /** On/off state (controlled). @default false */
  checked?: boolean;
  /** Called with (checked, event) on toggle. */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Disabled state. @default false */
  disabled?: boolean;
  /** Optional trailing label. */
  label?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
