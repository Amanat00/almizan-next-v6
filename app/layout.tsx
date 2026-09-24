import type { Metadata } from 'next';
import { DM_Sans, Noto_Naskh_Arabic, Noto_Nastaliq_Urdu, Space_Grotesk } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans-local',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk-local',
  preload: true,
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-noto-naskh-local',
  preload: false,
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-noto-nastaliq-local',
  preload: false,
});

export const metadata: Metadata = {
  title: { default: 'Al Mizan Typing & Documents Clearing | Ras Al Khaimah', template: '%s | Al Mizan RAK' },
  description: 'Typing, document clearing, visa, Emirates ID, MOHRE, business setup and government-service assistance in Ras Al Khaimah, UAE.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = `${dmSans.variable} ${spaceGrotesk.variable} ${notoNaskh.variable} ${notoNastaliq.variable}`;
  return <html lang="en" className={fontClasses} suppressHydrationWarning><head>
    <script dangerouslySetInnerHTML={{__html: `try{const s=localStorage.getItem('almizan-theme');const d=s==='dark'||(s!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}`}} />
  </head><body>{children}</body></html>;
}
