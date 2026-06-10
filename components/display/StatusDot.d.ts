import * as React from 'react';

/** UiLab StatusDot — colour pip + mono uppercase label (no emoji). */
export interface StatusDotProps {
  children?: React.ReactNode;
  /** Status colour. @default "go" */
  status?: 'go' | 'warn' | 'stop' | 'idle';
  /** Animated ping for live states. @default false */
  pulse?: boolean;
  style?: React.CSSProperties;
}

export function StatusDot(props: StatusDotProps): JSX.Element;
