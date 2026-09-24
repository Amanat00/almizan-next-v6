import { notFound } from 'next/navigation';

import { LegalPage } from '@/components/LegalPage';

import { isLang, type Lang } from '@/lib/content';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;

  if (!isLang(raw)) {
    notFound();
  }

  const lang = raw as Lang;

  const data =
    lang === 'ar'
      ? {
          title: 'الشروط',
          intro:
            'باستخدام هذا الموقع فإنك تقر بأن المعلومات المعروضة هي معلومات عامة عن خدمات المساعدة والطباعة.',
          sections: [
            {
              heading: 'دقة المعلومات',
              body:
                'نسعى إلى إبقاء المحتوى واضحاً، لكن متطلبات الجهات الحكومية والرسوم والأنظمة قد تتغير دون إشعار.',
            },
            {
              heading: 'نطاق الخدمة',
              body:
                'الخدمات الموضحة هي خدمات مساعدة في الطباعة وتجهيز المستندات والتنسيق، وليست وعداً بالموافقة أو نتيجة محددة.',
            },
            {
              heading: 'الروابط الخارجية',
              body:
                'قد يؤدي الموقع إلى بوابات أو خدمات خارجية لا يتحكم بها الميزان.',
            },
          ],
        }
      : lang === 'ur'
        ? {
            title: 'شرائط',
            intro:
              'اس ویب سائٹ کے استعمال سے آپ تسلیم کرتے ہیں کہ یہاں دی گئی معلومات ٹائپنگ اور معاون خدمات کے بارے میں عمومی معلومات ہیں۔',
            sections: [
              {
                heading: 'معلومات کی درستگی',
                body:
                  'ہم مواد کو واضح رکھنے کی کوشش کرتے ہیں، مگر سرکاری اداروں کی شرائط، فیس اور قواعد بغیر اطلاع تبدیل ہو سکتے ہیں۔',
              },
              {
                heading: 'سروس کا دائرہ',
                body:
                  'بیان کردہ خدمات ٹائپنگ، دستاویز تیاری اور معاونت سے متعلق ہیں اور منظوری یا مخصوص نتیجے کی ضمانت نہیں ہیں۔',
              },
              {
                heading: 'بیرونی لنکس',
                body:
                  'ویب سائٹ ایسی بیرونی پورٹلز یا خدمات سے لنک کر سکتی ہے جن پر ال میزان کا کنٹرول نہیں۔',
              },
            ],
          }
        : {
            title: 'Terms of Use',
            intro:
              'By using this website, you acknowledge that the information shown describes general typing and assistance services.',
            sections: [
              {
                heading: 'Accuracy of information',
                body:
                  'We aim to keep content clear and useful, but government requirements, fees and procedures can change without notice.',
              },
              {
                heading: 'Scope of service',
                body:
                  'The services described are typing, document-preparation and coordination assistance. They do not guarantee approval, eligibility or a specific outcome.',
              },
              {
                heading: 'External links',
                body:
                  'This website may link to external portals or services that are not controlled by Al Mizan.',
              },
            ],
          };

  return <LegalPage lang={lang} {...data} />;
}