import type { Lang } from '@/lib/content';
import { business } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function WhatsAppFloat({ lang }: { lang: Lang }) {
  const text = encodeURIComponent(lang === 'ar' ? 'مرحباً، أحتاج مساعدة في إحدى خدماتكم.' : lang === 'ur' ? 'السلام علیکم، مجھے آپ کی ایک سروس کے بارے میں مدد چاہیے۔' : 'Hello, I need help with one of your services.');
  return <a className="whatsapp-float" href={`https://wa.me/${business.whatsapp}?text=${text}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Al Mizan"><Icon name="whatsapp" size={31}/><span>WhatsApp</span></a>;
}
