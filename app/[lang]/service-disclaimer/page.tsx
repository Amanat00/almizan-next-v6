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
          title: 'إخلاء مسؤولية الخدمة',
          intro:
            'الميزان مركز مستقل للطباعة وإنجاز المعاملات وليس جهة حكومية.',
          sections: [
            {
              heading: 'لا توجد صفة حكومية',
              body:
                'ذكر أسماء الجهات أو الأنظمة مثل ICP أو MOHRE أو RAKEZ يوضح نوع الخدمة فقط ولا يعني أي اعتماد أو انتماء حكومي ما لم يُذكر خلاف ذلك رسمياً.',
            },
            {
              heading: 'القرارات والرسوم',
              body:
                'الموافقة والأهلية والرسوم والغرامات ومدة المعالجة تحددها الجهة المختصة.',
            },
            {
              heading: 'الاستفسار قبل الدفع',
              body:
                'تأكد من نطاق الخدمة والرسوم والمستندات المطلوبة مع فريقنا قبل المتابعة.',
            },
          ],
        }
      : lang === 'ur'
        ? {
            title: 'سروس ڈسکلیمر',
            intro:
              'ال میزان ایک آزاد ٹائپنگ اور ڈاکیومنٹس کلیئرنگ سینٹر ہے، سرکاری ادارہ نہیں۔',
            sections: [
              {
                heading: 'سرکاری وابستگی نہیں',
                body:
                  'ICP، MOHRE یا RAKEZ جیسے اداروں یا نظاموں کا نام صرف متعلقہ سروس کی وضاحت کے لیے استعمال ہوتا ہے اور خود بخود سرکاری منظوری یا وابستگی ظاہر نہیں کرتا۔',
              },
              {
                heading: 'فیصلے اور فیس',
                body:
                  'منظوری، اہلیت، سرکاری فیس، جرمانے اور پراسیسنگ ٹائم متعلقہ ادارے طے کرتے ہیں۔',
              },
              {
                heading: 'ادائیگی سے پہلے تصدیق',
                body:
                  'آگے بڑھنے سے پہلے سروس کے دائرہ کار، فیس اور مطلوبہ دستاویزات ہماری ٹیم سے کنفرم کریں۔',
              },
            ],
          }
        : {
            title: 'Service Disclaimer',
            intro:
              'Al Mizan is an independent typing and documents clearing center and is not a government authority.',
            sections: [
              {
                heading: 'No implied government affiliation',
                body:
                  'References to authorities or systems such as ICP, MOHRE or RAKEZ describe the type of assistance requested. They do not by themselves imply official endorsement, affiliation or authority.',
              },
              {
                heading: 'Decisions and fees',
                body:
                  'Approvals, eligibility, official fees, fines and processing times are set by the relevant authority or service provider.',
              },
              {
                heading: 'Confirm before payment',
                body:
                  'Please confirm the service scope, applicable fees and required documents with our team before proceeding.',
              },
            ],
          };

  return <LegalPage lang={lang} {...data} />;
}