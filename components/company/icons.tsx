import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M2.5 12S5.8 5.5 12 5.5 21.5 12 21.5 12 18.2 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" />
      <path
        d="M2.8 19c.7-3.3 3-5.2 6.2-5.2s5.5 1.9 6.2 5.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="8.5" r="2.2" stroke="currentColor" />
      <path
        d="M15.8 13.9c2.5.3 4.2 1.9 4.7 4.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InfinityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M7 8.5c-2.2 0-4 1.6-4 3.5s1.8 3.5 4 3.5c2.8 0 3.5-7 6-7 2.2 0 4 1.6 4 3.5s-1.8 3.5-4 3.5c-2.8 0-3.5-7-6-7Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
      <path
        d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M4.7 7.5h14.6M4.7 16.5h14.6"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" />
      <path
        d="M9 13.5 7.5 21l4.5-2.5 4.5 2.5-1.5-7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M4 14c0-4 2-6.5 5.5-7.5M9 14c0 2.2-1.3 3.5-3.3 3.5C4.2 17.5 3 16.4 3 14.6 3 12.4 4.5 11 6.6 11c.4 0 .8 0 1.1.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 14c0-4 2-6.5 5.5-7.5M18.5 14c0 2.2-1.3 3.5-3.3 3.5-1.5 0-2.7-1.1-2.7-2.9 0-2.2 1.5-3.6 3.6-3.6.4 0 .8 0 1.1.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M5 20.5V6l7-3 7 3v14.5"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M3 20.5h18M9 9.5h1.5M13.5 9.5H15M9 13h1.5M13.5 13H15M9 20.5v-4h6v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M12 3.5c2.8 1.4 4.5 4.3 4.5 8 0 1.8-.4 3.3-1 4.5l-3.5 3-3.5-3c-.6-1.2-1-2.7-1-4.5 0-3.7 1.7-6.6 4.5-8Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="1.8" stroke="currentColor" />
      <path
        d="M8.5 16 6 15.5 6.8 12M15.5 16l2.5-.5-.8-3.5M9.5 19l1-2.5h3l1 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M12 20.5c-.3 0-.6-.1-.8-.3-1.9-1.7-3.7-3.3-5-4.9C4.6 13.6 3.5 11.9 3.5 10c0-3 2.3-5.2 5-5.2 1.5 0 2.9.8 3.5 2 .6-1.2 2-2 3.5-2 2.7 0 5 2.2 5 5.2 0 1.9-1.1 3.6-2.7 5.3-1.3 1.6-3.1 3.2-5 4.9-.2.2-.5.3-.8.3Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5h2l1-2 1.5 4 1.5-3 1 1h2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
