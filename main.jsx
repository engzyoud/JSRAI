import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// التعديل: حاولنا ننادي ملف الـ CSS من المسار المباشر
// إذا كان ملف الـ CSS عندك اسمه مختلف (مثلاً index.css)، غير الاسم تحت فقط
try {
  import('./global.css');
} catch (e) {
  console.log("CSS file not found, loading without global styles");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
