/**
 * Clade Logo Icon - Phylogenetic Tree Design
 * Represents evolutionary relationships and musical ancestry
 * Smart, elegant, fun for all ages
 */

interface CladeIconProps {
  className?: string;
  size?: number;
}

export function CladeIcon({ className = "", size = 24 }: CladeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clade logo"
    >
      <circle cx="128" cy="128" r="98" stroke="#5B2B82" strokeWidth="12" />
      <path
        d="M128 198V132"
        stroke="#6FA57A"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M128 132C128 132 100 112 74 112M128 132C128 132 156 112 182 112"
        stroke="#6FA57A"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74 112V78M182 112V78"
        stroke="#6FA57A"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M128 118C118 108 104 100 92 98"
        stroke="#5B2B82"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M128 118C138 108 152 100 164 98"
        stroke="#5B2B82"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M92 98C78 94 62 92 48 96"
        stroke="#5B2B82"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M164 98C178 94 194 92 208 96"
        stroke="#5B2B82"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="48" cy="96" r="9" fill="#5B2B82" />
      <circle cx="208" cy="96" r="9" fill="#5B2B82" />
      <circle cx="74" cy="70" r="10" fill="#6FA57A" />
      <circle cx="182" cy="70" r="10" fill="#6FA57A" />
      <circle cx="128" cy="198" r="10" fill="#6FA57A" />
      <path
        d="M154 128C154 114 142 104 128 104C114 104 102 114 102 128C102 142 114 152 128 152"
        stroke="#5B2B82"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Simplified ancestor badge icon
 * Used to mark foundational/influential songs
 */
export function AncestorBadge({ className = "", size = 16 }: CladeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Common Ancestor - Influential Track"
    >
      {/* Compact tree structure */}
      <path
        d="M8 14V8M8 8L5 6M8 8L11 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="4" r="1.5" fill="currentColor" />
      <circle cx="11" cy="4" r="1.5" fill="currentColor" />
      <circle cx="8" cy="14" r="1.5" fill="currentColor" />
      
      {/* Sparkle effect for "influential" */}
      <path
        d="M8 2L8.5 3.5L10 4L8.5 4.5L8 6L7.5 4.5L6 4L7.5 3.5L8 2Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

/**
 * Animated Clade Logo for header/branding
 */
export function CladeLogoAnimated({ className = "", size = 32 }: CladeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clade logo"
    >
      <g className="animate-pulse-subtle">
        <circle cx="128" cy="128" r="98" stroke="#5B2B82" strokeWidth="12" />
        <path
          d="M128 198V132"
          stroke="#6FA57A"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M128 132C128 132 100 112 74 112M128 132C128 132 156 112 182 112"
          stroke="#6FA57A"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74 112V78M182 112V78"
          stroke="#6FA57A"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M128 118C118 108 104 100 92 98"
          stroke="#5B2B82"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M128 118C138 108 152 100 164 98"
          stroke="#5B2B82"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M92 98C78 94 62 92 48 96"
          stroke="#5B2B82"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M164 98C178 94 194 92 208 96"
          stroke="#5B2B82"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="48" cy="96" r="9" fill="#5B2B82" />
        <circle cx="208" cy="96" r="9" fill="#5B2B82" />
        <circle cx="74" cy="70" r="10" fill="#6FA57A" />
        <circle cx="182" cy="70" r="10" fill="#6FA57A" />
        <circle cx="128" cy="198" r="10" fill="#6FA57A" />
        <path
          d="M154 128C154 114 142 104 128 104C114 104 102 114 102 128C102 142 114 152 128 152"
          stroke="#5B2B82"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
