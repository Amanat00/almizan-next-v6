import type { Lang } from '@/lib/content';
import { business, t, ui } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function MapBlock({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const embed = 'https://www.google.com/maps?q=Al+Manama+-+Ras+Al+Khaimah+Rd,+Al+Nakheel,+Ras+Al-Khaimah,+United+Arab+Emirates&output=embed';
  return <div className={`map-card ${compact ? 'map-card-compact' : ''}`}>
    <iframe title="Al Mizan Typing & Documents Clearing location" src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    <div className="map-info">
      <span className="service-icon tone-lime"><Icon name="map" size={20}/></span>
      <div><small>{t(ui.common.address,lang)}</small><strong>{t(business.address,lang)}</strong></div>
      <a href={business.maps} target="_blank" rel="noreferrer">{t(ui.common.map,lang)} <Icon name="external" size={15}/></a>
    </div>
  </div>;
}
