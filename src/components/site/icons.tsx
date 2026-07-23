import React from "react";

export const GithubIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const SOCIAL_ICONS = [GithubIcon, LinkedinIcon, TwitterIcon];

export const PulseMark: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Rounded Glass Container */}
    <rect
      x="1"
      y="1"
      width="38"
      height="38"
      rx="10"
      fill="var(--accent-soft)"
      stroke="var(--line)"
      strokeWidth="1.2"
    />
    {/* Clean Heartbeat / ECG Line */}
    <path
      d="M7 20H13L16 11L20 29L23 20H33"
      stroke="var(--accent)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * The signature element: a continuously animated heartbeat / ECG trace.
 * Used large in the hero "status console" and thin as a section divider —
 * it never stops moving, which is the point: the studio is always "live."
 */
export const PulseTrace: React.FC<{
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}> = ({ height = 60, color = "var(--pulse)", strokeWidth = 2.5, className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 1200 60"
    preserveAspectRatio="none"
    style={{ width: "100%", height }}
    aria-hidden="true"
  >
    <path
      d="M0,30 L300,30 L330,30 L346,8 L362,52 L378,16 L392,30 L520,30 L548,30 L562,4 L578,56 L594,12 L610,30 L1200,30"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: 1400,
        strokeDashoffset: 1400,
        animation: "bp-draw 2.4s ease forwards",
      }}
    />
  </svg>
);