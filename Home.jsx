import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Home() {
  const { t, lang } = useLang()
  const nav = useNavigate()

  const isAr = (lang || 'ar') === 'ar'

  return (
    <section className="home">
      <div className="container">
        <div className="homeGrid">
          {/* Main Card */}
          <div className="card homeMain">
            <div className="homeBadge">{isAr ? 'تقييم هندسي مبدئي' : 'Preliminary Engineering Assessment'}</div>

            <h1 className="homeTitle">
              {isAr ? 'JSRAI — أداة تقييم سلامة المنشآت' : 'JSRAI — Structural Safety Assessment Tool'}
            </h1>

            <p className="homeSubtitle">
              {isAr ? (
                <>
                  أداة احترافية لتقييم السلامة الإنشائية للمنشآت الخرسانية المسلحة في الأردن،
                  مع الاستناد إلى مبادئ كود <strong>ACI 318</strong> ومراعاة الاعتبارات الزلزالية المعتمدة محليًا.
                  الهدف هو تقديم <strong>تقييم أولي</strong> يساعد في تحديد الحاجة إلى الفحص التفصيلي أو التدعيم.
                </>
              ) : (
                <>
                  A professional tool for preliminary assessment of reinforced-concrete structures in Jordan,
                  referencing <strong>ACI 318</strong> principles and local seismic considerations.
                  It provides an <strong>initial screening</strong> to guide decisions on detailed inspection or retrofit needs.
                </>
              )}
            </p>

            <div className="homeActions">
              <button className="btn btnPrimary" onClick={() => nav('/assessment')}>
                {t.hero.start}
              </button>
              <button className="btn btnGhost" onClick={() => nav('/how')}>
                {t.nav.how}
              </button>
              <button className="btn btnGhost" onClick={() => nav('/method')}>
                {t.nav.method}
              </button>
            </div>

            <div className="homeKpis">
              <div className="card kpi">
                <h3>{isAr ? 'تقييم سريع ومنظم' : 'Fast & Structured'}</h3>
                <p>
                  {isAr
                    ? 'أسئلة مصممة لتغطية أهم المؤشرات الظاهرة والمؤثرة على السلامة، مع تقسيم واضح وسهل.'
                    : 'Questions designed to cover key visible indicators affecting safety, presented in a clear structure.'}
                </p>
                <span className="badge">{isAr ? 'Screening' : 'Screening'}</span>
              </div>

              <div className="card kpi">
                <h3>{isAr ? 'نتائج وتوصيات هندسية' : 'Results & Recommendations'}</h3>
                <p>
                  {isAr
                    ? 'مخرجات واضحة بدون تهويل: هل يلزم فحص تفصيلي؟ هل التدعيم محتمل؟ وما أهم الأسباب المؤثرة.'
                    : 'Clear outputs without exaggeration: need for detailed inspection, potential retrofit, and key drivers.'}
                </p>
                <span className="badge">{isAr ? 'Professional' : 'Professional'}</span>
              </div>

              <div className="card kpi">
                <h3>{isAr ? 'مرجعية كود وزلازل الأردن' : 'Code & Seismic Reference'}</h3>
                <p>
                  {isAr
                    ? 'توجيه مبني على مبادئ ACI 318 ومفهوم الأداء الزلزالي المتوافق مع بيئة الأردن.'
                    : 'Guidance grounded in ACI 318 principles and seismic performance concepts relevant to Jordan.'}
                </p>
                <span className="badge">{isAr ? 'ACI / Seismic' : 'ACI / Seismic'}</span>
              </div>
            </div>

            <div className="homeNote">
              <strong>{isAr ? 'تنبيه مهم:' : 'Important note:'}</strong>{' '}
              {isAr
                ? 'هذه الأداة تقدم تقييمًا مبدئيًا ولا تغني عن الكشف الهندسي الموقعي أو الاختبارات التفصيلية.'
                : 'This tool provides a preliminary assessment and does not replace on-site inspection or detailed testing.'}
            </div>
          </div>

          {/* Side Card */}
          <aside className="card2 homeSide">
            <h3 className="sideTitle">{isAr ? 'لماذا JSRAI؟' : 'Why JSRAI?'}</h3>

            <ul className="sideList">
              <li>
                {isAr
                  ? 'يساعد في اتخاذ قرار أولي: متابعة وصيانة، فحص تفصيلي، أو تدعيم محتمل.'
                  : 'Supports initial decisions: maintenance, detailed inspection, or potential retrofit.'}
              </li>
              <li>
                {isAr
                  ? 'يركّز على مؤشرات ميدانية واضحة (تشققات، عمر، مقاومة تقريبية، ظروف التحميل...).'
                  : 'Focuses on practical field indicators (cracks, age, approximate strength, loading conditions...).'}
              </li>
              <li>
                {isAr
                  ? 'يُظهر أسباب النتيجة بشكل مفهوم للمستخدم.'
                  : 'Explains the main drivers behind the result in a user-friendly way.'}
              </li>
            </ul>

            <div className="sideActions">
              <button className="btn btnPrimary" onClick={() => nav('/assessment')}>
                {isAr ? 'ابدأ التقييم الآن' : 'Start Assessment'}
              </button>
              <button className="btn btnGhost" onClick={() => nav('/privacy')}>
                {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </button>
            </div>

            <div className="sideFooter">
              <div className="sideHint">
                {isAr
                  ? 'مصمم للمباني في الأردن وبأسلوب واضح للمهندسين وغير المهندسين.'
                  : 'Designed for structures in Jordan and explained clearly for engineers and non-engineers.'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
