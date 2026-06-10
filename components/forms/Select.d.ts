import * as React from 'react';

interface SelectOption { value: string; label: string; }

/** UiLab Select — native select styled to match Input, with a mono chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  /** Mono uppercase field label. */
  label?: React.ReactNode;
  /** Options array; alternatively pass <option> children. */
  options?: SelectOption[] | null;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
