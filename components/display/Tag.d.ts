import * as React from 'react';

/**
 * UiLab Tag / Badge — uppercase mono label for verticals, categories,
 * statuses and metadata.
 */
export interface TagProps {
  children: React.ReactNode;
  /** Fill treatment. @default "soft" */
  variant?: 'solid' | 'soft' | 'outline';
  /** Colour tone (defaults to the surface's accent). @default "accent" */
  tone?: 'accent' | 'sky' | 'summer' | 'sun' | 'jacaranda';
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
