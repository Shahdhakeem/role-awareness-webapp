'use client'
import React from 'react'

function sendPrompt(text: string) {
  window.dispatchEvent(new CustomEvent('WELCOME_SEND', { detail: { text } }))
}
export default function Welcome() {
  return (
    <section style={{maxWidth: 960, margin: '16px auto 0', padding: '0 16px'}}>
      <h2 style={{fontSize: 22, fontWeight: 700, margin: '14px 0 6px'}}>👋 Hi, I’m your Role Awareness Agent</h2>
      <p>
        I answer questions about our organizational roles using our official documents.
        Right now I give deep, practical coaching for the <strong>Chapter Lead</strong> role,
        and basic facts for other Blueprint roles — always with citations.
      </p>
      <p>Ask me anything about your role, boundaries, or how roles work together. Try one of the starters below.</p>
       <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:10}}>
        <button onClick={() => sendPrompt('Create a 60-minute Chapter Lead awareness session for all staff.')} className="btn-secondary">CL awareness (60 min)</button>
        <button onClick={() => sendPrompt('What are the top 5 responsibilities of a Chapter Lead?')} className="btn-secondary">Top 5 CL responsibilities</button>
        <button onClick={() => sendPrompt('Compare Chapter Lead vs TDM (Scrum Master).')} className="btn-secondary">CL vs TDM</button>
        <button onClick={() => sendPrompt('What changed between Chapter Lead v1.2 and v1.3?')} className="btn-secondary">CL v1.2 → v1.3</button>
        <button onClick={() => sendPrompt('How should a Chapter Lead work with Product Owners and managers?')} className="btn-secondary">CL ↔ PO / Managers</button>
        {/* Arabic example */}
        <button onClick={() => sendPrompt('ابغى جلسة توعوية لقائد الشابتر لمدة ٦٠ دقيقة لجميع الفريق.')} className="btn-secondary">جلسة CL توعوية (٦٠ دقيقة)</button>
      </div>
    </section>
  )
}
