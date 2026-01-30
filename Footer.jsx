import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerTitle">
              {isAr ? 'أداة تقييم سلامة المنشآت (JSRAI)' : 'JSRAI – Structural Safety Assessment Tool'}
            </div>
            <div className="footerSub">
              {isAr
                ? 'أداة تقييم هندسي مبدئي معتمدة على كود ACI ومفاهيم الأداء الزلزالي في الأردن.'
                : 'A preliminary engineering assessment tool based on ACI code and Jordanian seismic principles.'}
            </div>
          </div>

          <div className="footerLinks">
            <Link to="/privacy">
              {isAr ? 'سياسة الخصوصية وإخلاء المسؤولية' : 'Privacy Policy & Disclaimer'}
            </Link>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerRights">
            © {new Date().getFullYear()} JSRAI — {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </div>

          <div className="footerDev">
            DEVELOPMENT BY <strong>SUHAIB ALZYOUD</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}
