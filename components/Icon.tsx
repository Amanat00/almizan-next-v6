import type { IconName } from '@/lib/content';

type Props = { name: IconName; size?: number; strokeWidth?: number; className?: string };

export function Icon({ name, size = 22, strokeWidth = 1.8, className = '' }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  };

  switch (name) {
    case 'id':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="8" cy="11" r="2"/><path d="M6 16c.7-1.5 3.3-1.5 4 0M13 10h5M13 14h5"/></svg>;
    case 'plane':
      return <svg {...common}><path d="M22 2 9.5 14.5M22 2l-8 20-4.5-7.5L2 10l20-8Z"/></svg>;
    case 'briefcase':
      return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>;
    case 'home':
      return <svg {...common}><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></svg>;
    case 'heart':
      return <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M7 12h3l1.3-3 1.6 6 1.4-3H17"/></svg>;
    case 'building':
      return <svg {...common}><path d="M4 21V5l8-3 8 3v16M2 21h20M8 8h1M12 8h1M16 8h1M8 12h1M12 12h1M16 12h1M9 21v-5h6v5"/></svg>;
    case 'stamp':
      return <svg {...common}><path d="M8 3h8l-1 8a4 4 0 0 1 3 4v2H6v-2a4 4 0 0 1 3-4L8 3ZM5 21h14"/></svg>;
    case 'print':
      return <svg {...common}><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/><path d="M18 12h.01"/></svg>;
    case 'handshake':
      return <svg {...common}><path d="m8 11 2 2a2 2 0 0 0 3 0l2-2M2 12l5-5 4 1 2-1 4 1 5 5M4 10l-2 2 5 6 3-2M20 11l2 2-5 5-4-2"/></svg>;
    case 'check':
      return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'map':
      return <svg {...common}><path d="M12 22s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'arrow':
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'whatsapp':
      return <svg {...common} fill="currentColor" stroke="none" viewBox="0 0 32 32"><path d="M16.03 4.8A11.1 11.1 0 0 0 6.6 21.78L5 27.2l5.56-1.46a11.1 11.1 0 1 0 5.47-20.94Zm0 20.18c-1.77 0-3.5-.48-5.01-1.39l-.36-.21-3.3.87.88-3.21-.23-.37a9.05 9.05 0 1 1 8.02 4.31Zm4.96-6.78c-.27-.13-1.61-.79-1.86-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35a8.2 8.2 0 0 1-1.52-1.9c-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.44-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.92 2.93 4.64 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.18.16-1.29-.06-.12-.25-.18-.52-.31Z"/></svg>;
    case 'sun':
      return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
    case 'moon':
      return <svg {...common}><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>;
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case 'close':
      return <svg {...common}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case 'phone':
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z"/></svg>;
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case 'search':
      return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
    case 'chevron':
      return <svg {...common}><path d="m8 10 4 4 4-4"/></svg>;
    case 'external':
      return <svg {...common}><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>;
    case 'document':
      return <svg {...common}><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>;
    case 'users':
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'sparkle':
      return <svg {...common}><path d="m12 3 1.2 4.2L17 9l-3.8 1.8L12 15l-1.2-4.2L7 9l3.8-1.8L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15ZM19 13l.7 1.8 1.8.7-1.8.7L19 18l-.7-1.8-1.8-.7 1.8-.7L19 13Z"/></svg>;
    case 'instagram':
      return <svg {...common}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></svg>;
    case 'facebook':
      return <svg {...common}><path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.6-.1-1.5-.3-2.7-.3-2.7 0-4.3 1.6-4.3 4.5v2H8v3h3v8"/></svg>;
    case 'linkedin':
      return <svg {...common}><rect x="4" y="9" width="3" height="11" rx="1"/><circle cx="5.5" cy="5.5" r="1.7"/><path d="M11 20V9h3v1.8c.9-1.3 2-2.1 3.8-2.1 2.8 0 4.2 1.8 4.2 5V20h-3v-5.5c0-1.9-.7-3.1-2.4-3.1-1.8 0-2.6 1.2-2.6 3.3V20z"/></svg>;
    default:
      return null;
  }
}
