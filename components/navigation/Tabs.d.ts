import * as React from 'react';

interface TabItem { value: string; label: React.ReactNode; count?: number; }

/** UiLab Tabs — mono uppercase nav with an accent underline on the active tab. */
export interface TabsProps {
  /** Tab definitions. */
  items: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Called with the new value on change. */
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
