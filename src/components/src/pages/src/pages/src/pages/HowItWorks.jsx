import React from "react";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-3xl font-bold mb-3">{t("howTitle")}</h2>
        <p className="text-lg opacity-80 mb-6">{t("howText")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-bold mb-2">1) جمع المعلومات</h3>
            <p className="text-sm opacity-80">
              30 سؤالًا دقيقة تغطي: العمر، النظام الإنشائي، الانتظام، القص، التدهور، ومؤشرات الزلازل.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-bold mb-2">2) حساب النقاط</h3>
            <p className="text-sm opacity-80">
              كل سؤال له 3 خيارات (0/1/2). تُجمع النقاط ثم تُحوّل لنسبة.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-bold mb-2">3) النتيجة والتوصيات</h3>
            <p className="text-sm opacity-80">
              النتيجة تُصنّف إلى آمن / يحتاج مراجعة / خطر مرتفع، مع توصيات واضحة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
