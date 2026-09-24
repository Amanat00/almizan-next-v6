'use client';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:'24px',fontFamily:'Arial,sans-serif',background:'#f4f7f5',color:'#10251b'}}>
          <div style={{width:'min(620px,100%)',padding:'32px',borderRadius:'24px',background:'#fff',boxShadow:'0 22px 70px rgba(15,60,40,.12)'}}>
            <strong style={{color:'#0f7a47'}}>AL MIZAN</strong>
            <h1 style={{fontSize:'clamp(28px,5vw,44px)',lineHeight:1.05,margin:'14px 0'}}>The page needs a fresh start.</h1>
            <p style={{lineHeight:1.7,color:'#526159'}}>Please retry once. The website will rebuild the current page without using a stale browser state.</p>
            <button onClick={reset} style={{marginTop:'18px',border:0,borderRadius:'999px',padding:'13px 20px',background:'#0f7a47',color:'#fff',fontWeight:800,cursor:'pointer'}}>Retry page</button>
          </div>
        </main>
      </body>
    </html>
  );
}
