export default function QuestionCard({i,q,exp,setAns}){
  return(
    <div className="card">
      <h3>{i+1}. {q}</h3>
      <p style={{opacity:.85}}>السبب: {exp}</p>
      <select onChange={e=>setAns(a=>{const n=[...a];n[i]=+e.target.value;return n;})}>
        <option value="0">غير متأكد</option>
        <option value="1">نعم</option>
        <option value="0">لا</option>
      </select>
    </div>
  );
}
