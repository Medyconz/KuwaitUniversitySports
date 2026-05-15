type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({ className = '', title = 'K.U Sports' }: LogoMarkProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="72" fill="#f8fafc" />
      <g transform="translate(48 34)">
        <path d="M208 16c44 42 88 42 132 0l48 82c-25 6-30 20-26 42 10 78-1 142-38 191-28 37-66 60-116 74-50-14-88-37-116-74-37-49-48-113-38-191 4-22-1-36-26-42l48-82c44 42 88 42 132 0Z" fill="#ffffff" stroke="#050505" strokeWidth="18" strokeLinejoin="round" />
        <clipPath id="kuShieldClip">
          <path d="M208 42c42 34 83 34 124 0l34 58c-20 9-25 26-22 48 9 67-2 120-32 160-24 32-58 53-104 66-46-13-80-34-104-66-30-40-41-93-32-160 3-22-2-39-22-48l34-58c41 34 82 34 124 0Z" />
        </clipPath>
        <g clipPath="url(#kuShieldClip)">
          <rect x="44" y="38" width="328" height="344" fill="#069bd5" />
          <path d="M44 38h328L44 382Z" fill="#050505" />
          <circle cx="126" cy="118" r="72" fill="#ffd800" />
          <g stroke="#ffd800" strokeWidth="20" strokeLinecap="round">
            <path d="M126 28v180M36 118h180M62 54l128 128M190 54 62 182M226 40 60 236M260 78 94 274" />
          </g>
          <path d="M230 38 62 318" stroke="#ffd800" strokeWidth="28" />
        </g>
        <g transform="translate(218 158)">
          <circle cx="70" cy="70" r="58" fill="#050505" />
          <polygon points="70,26 102,48 90,84 50,84 38,48" fill="#f8fafc" />
          <polygon points="32,52 50,84 30,104 12,78" fill="#f8fafc" />
          <polygon points="108,52 128,78 110,104 90,84" fill="#f8fafc" />
          <polygon points="50,84 90,84 102,116 70,134 38,116" fill="#f8fafc" />
          <circle cx="70" cy="70" r="58" fill="none" stroke="#050505" strokeWidth="8" />
        </g>
        <g fill="none" stroke="#050505" strokeWidth="10" strokeLinecap="round">
          <path d="M52 176H-10v170" />
          <path d="M-10 346c34-4 66-10 96-19" />
          <path d="M6 196v142M28 196v138M50 196v132" />
          <path d="M-4 220c30 8 58 14 85 18M-4 254c28 7 54 12 79 15M-4 288c25 5 49 9 72 11" />
          <path d="M360 180c62 18 92 74 74 129-16 49-68 75-123 58" />
          <path d="M365 209c31 28 47 68 45 112M346 258c32-1 61 6 85 22M329 319c34-12 65-12 94 0" />
        </g>
        <text x="208" y="152" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="900" fill="#050505" direction="rtl">جامعة الكويت</text>
        <text x="208" y="350" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="31" fontWeight="900" fill="#050505" direction="rtl">الأنشطة الرياضية</text>
      </g>
      <text x="256" y="472" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="58" fontWeight="900" fill="#050505" letterSpacing="2">K.U SPORTS</text>
    </svg>
  );
}
