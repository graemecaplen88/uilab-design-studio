import * as React from 'react';

/**
 * UiLab Card — raised surface with hairline border + faint lit edge.
 *
 * @startingPoint section="Display" subtitle="Raised card with eyebrow + title" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Mono uppercase kicker shown above the title. */
  eyebrow?: React.ReactNode;
  /** Display-font card title. */
  title?: React.ReactNode;
  /** Adds hover-lift + pointer for clickable cards. @default false */
  interactive?: boolean;
  /** CSS padding value. @default "var(--space-5)" */
  padding?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
