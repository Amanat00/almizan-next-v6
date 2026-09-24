'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';

export function Gallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((v) => v === null ? 0 : (v + 1) % images.length);
      if (e.key === 'ArrowLeft') setOpen((v) => v === null ? 0 : (v - 1 + images.length) % images.length);
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKey);
    return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', onKey); };
  }, [open, images.length]);

  return <>
    <div className="gallery-grid">
      {images.slice(0,6).map((src, i) => (
        <button key={src} className={`gallery-item gallery-item-${i+1}`} onClick={() => setOpen(i)} aria-label={`Open office photo ${i+1}`}>
          <Image src={src} alt={`Al Mizan office view ${i+1}`} fill sizes="(max-width: 800px) 50vw, 33vw" />
          <span className="gallery-zoom"><span>+</span></span>
        </button>
      ))}
    </div>
    {open !== null && <div className="lightbox" role="dialog" aria-modal="true">
      <button className="lightbox-backdrop" onClick={() => setOpen(null)} aria-label="Close gallery"/>
      <div className="lightbox-frame">
        <Image src={images[open]} alt={`Al Mizan office large view ${open+1}`} fill sizes="95vw" priority/>
      </div>
      <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close"><Icon name="close"/></button>
      <button className="lightbox-nav lightbox-prev" onClick={() => setOpen((open - 1 + images.length) % images.length)} aria-label="Previous image">‹</button>
      <button className="lightbox-nav lightbox-next" onClick={() => setOpen((open + 1) % images.length)} aria-label="Next image">›</button>
      <div className="lightbox-counter">{open + 1} / {images.length}</div>
    </div>}
  </>;
}
