import * as React from 'react';

/** UiLab Avatar — square initials chip (or circle for people). */
export interface AvatarProps {
  /** 1–2 letter initials (used when no src). */
  initials?: string;
  /** Square (modular, default) or circle. @default "square" */
  shape?: 'square' | 'circle';
  /** Pixel size. @default 40 */
  size?: number;
  /** Accent tone. @default "accent" */
  tone?: 'accent' | 'sky' | 'summer' | 'sun' | 'jacaranda';
  /** Optional image source; overrides initials. */
  src?: string | null;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
