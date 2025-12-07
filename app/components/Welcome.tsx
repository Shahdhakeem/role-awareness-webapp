'use client'
import React from 'react'

function sendPrompt(text: string) {
  // This event is captured in app/components/index.tsx (TextGeneration)
  // It fills the 'query' field and calls handleSend()
  window.dispatchEvent(new CustomEvent('WELCOME_SEND', { detail: { text } }))
}

export default function Welcome() {
  return (
    <section style={{maxWidth: 1100, margin: '16px auto 0', padding: '0 16px'}}>
      <h2 style={{fontSize: 22, fontWeight: 800, margin: '8px 0 6px'}}>
        👋 Hi, I’m your Role Awareness Agent
      </h2>

      <p style={{color:'#334155', lineHeight:1.6, marginTop: 2}}>
        I answer questions about our organizational roles using our official documents.
        Right now I give deep, practical coaching for the <strong>Chapter Lead</strong> role,
        and basic facts for other Blueprint roles — always with citations.
      </p>
      <p style={{color:'#334155', lineHeight:1.6, marginTop: 6}}>
        Ask me anything about your role, boundaries, or how roles work together.
        Try one of the starters below:
      </p>

      {/* QUICK PROMPTS */}
      <div style={{display:'flex', flexWrap:'wrap', gap:10, marginTop:12}}>
        <button
          onClick={() => sendPrompt('Create a 60-minute Chapter Lead awareness session for all staff.')}
          style={btn}
          aria-label="CL awareness (60 min)"
        >
          CL awareness (60 min)
        </button>

        <button
          onClick={() => sendPrompt('What are the top 5 responsibilities of a Chapter Lead?')}
          style={btn}
          aria-label="Top 5 CL responsibilities"
        >
          Top 5 CL responsibilities
        </button>

        <button
          onClick={() => sendPrompt('Compare Chapter Lead vs TDM')}
          style={btn}
          aria-label="CL vs TDM"
        >
          CL vs TDM 
        </button>

        <button
          onClick={() => sendPrompt('What changed between Chapter Lead v1.2 and v1.3? Provide a delta summary with sources.')}
          style={btn}
          aria-label="CL v1.2 to v1.3 changes"
        >
          CL v1.2 → v1.3 (changes)
        </button>

        <button
          onClick={() => sendPrompt('How should a Chapter Lead collaborate with Product Owners and managers?')}
          style={btn}
          aria-label="CL with PO and Managers"
        >
          CL ↔ PO / Managers
        </button>

        <button
          onClick={() => sendPrompt('ابغى جلسة توعوية لقائد الشابتر لمدة ٦٠ دقيقة لجميع الفريق.')}
          style={btn}
          aria-label="جلسة CL توعوية"
        >
          جلسة CL توعوية (٦٠ دقيقة)
        </button>
      </div>

      {/* Optional Arabic note */}
      <p style={{fontSize:12, color:'#64748b', marginTop:10}}>
        🇸🇦 أجب على أسئلتك من وثائقنا الرسمية مع ذكر المصادر. اضغط أحد الأزرار لبدء المحادثة.
      </p>
    </section>
  )
}

// simple inline style so buttons always visible without external CSS
const btn: React.CSSProperties = {
  padding: '8px 12px',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: '#ffffff',
  cursor: 'pointer',
  fontSize: 14,
  lineHeight: 1.2,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
}
