import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LightbulbIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M9 18h6M10 21h4M8 14.5A5.5 5.5 0 1 1 16 14.5c-.8.9-1.5 1.7-1.5 3H9.5c0-1.3-.7-2.1-1.5-3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChessIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M9 20h6M8 20c-.3-2 .3-3 1.5-3.7C10.6 15.6 11 15 11 14c-1.5 0-2.5-.6-2.5-2 0-1 .7-1.6 1.5-2-.5-.6-.8-1.1-.6-1.9.3-1.2 1.6-2.1 3-2.1.9 0 1.7.4 2.2 1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6 6.3c.9.2 1.6.9 1.9 1.8.4 1.2-.4 2.1-1 2.9-.6.8-.9 1.4-.5 2 .6 1 2 .8 2 2.8 0 1-.5 1.7-1 2.2-1 1-1 1.3-1 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="6.5" r="2" stroke="currentColor" />
      <path
        d="M12 8.5v2M8.5 20l2.7-8a1 1 0 0 1 1.6 0l2.7 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 17h5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function CubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M4 8l8 4.5L20 8M12 12.5V20.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoenixIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M12 21c-3-1-4.5-3.4-4.5-6 0-1.8 1-3 1-3s-2.3.2-3.5-1.5C3.8 8.7 4 6.5 4 6.5s2.2.3 3.3 2c.6 1 .7 2 .7 2s.3-2.5 2-4S13.5 3 13.5 3s.2 2.3 1.5 3.7c1 1 2.5 1.3 2.5 1.3s-.6 2-2.2 3c-1 .6-2.3.5-2.3.5s1.5 1 1.5 3c0 2.6-1.5 5-2.5 6.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M5.8 5.8l2.4 2.4M15.8 15.8l2.4 2.4M18.2 5.8l-2.4 2.4M8.2 15.8l-2.4 2.4"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
    </svg>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" stroke="currentColor" />
      <path d="M3.5 9h17M9 9v11" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M9 7 4 12l5 5M15 7l5 5-5 5M13.5 5 10.5 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AIIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="6" r="2" stroke="currentColor" />
      <circle cx="5.5" cy="17" r="2" stroke="currentColor" />
      <circle cx="18.5" cy="17" r="2" stroke="currentColor" />
      <path
        d="M12 8v4M12 12 7 15.5M12 12l5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M4 16 9.5 10.5 13.5 14.5 20 8M14.5 8h5.5v5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TransformIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M4.5 9a7.5 7.5 0 0 1 13-5M19.5 15a7.5 7.5 0 0 1-13 5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.5 4v4h-4M6.5 20v-4h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M2.5 12.5 6 9l4 3-2 2-3.5-2M21.5 12.5 18 9l-4 3 2 2 3.5-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12l1.7 1.6a1.6 1.6 0 0 0 2.3-2.2L11 8.3a2.5 2.5 0 0 0-3 .2L6 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path d="M6 3.5v17" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M6 4.5c2-1 4 .5 6-.5s4 .5 6-.5v9c-2 1-4-.5-6 .5s-4-.5-6 .5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path d="M12 3.5v17M7 20.5h10" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M12 6 4.5 8l3.5 6.5L12 12 4.5 8M12 6l7.5 2-3.5 6.5L12 12l7.5-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AtomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        stroke="currentColor"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.6"
        stroke="currentColor"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function DiamondIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M7 4h10l4 5.5L12 21 3 9.5 7 4Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.5h18M9 4l-2 5.5 5 11.5 5-11.5-2-5.5"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" strokeWidth={1.75} {...props}>
      <path
        d="M5 10h10M11 5l5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
