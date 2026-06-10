import * as React from 'react';

/**
 * UiLab Button — Roboto Mono, uppercase, technical kicker styling.
 * One primary action per view; the accent fill is the single pop colour.
 *
 * @startingPoint section="Buttons" subtitle="Mono uppercase button, all variants" viewport="700x150"
 */
export interface ButtonProps {
  /** Button label (kept short; rendered uppercase). */
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon (e.g. a Lucide glyph). */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon. */
  iconRight?: React.ReactNode;
  /** Disabled state. @default false */
  disabled?: boolean;
  /** Native button type. @default "button" */
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
