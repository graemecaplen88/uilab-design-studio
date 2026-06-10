import * as React from 'react';

/**
 * UiLab Input — labelled text field with mono uppercase label and an accent
 * focus ring.
 *
 * @startingPoint section="Forms" subtitle="Labelled input with hint & error" viewport="700x180"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Mono uppercase field label. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — turns the field and message to the stop colour. */
  error?: React.ReactNode;
  /** Input type. @default "text" */
  type?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
