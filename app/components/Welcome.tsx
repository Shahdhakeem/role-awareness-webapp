// app/components/Welcome.tsx
'use client'
import React from 'react'

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
    </section>
  )
}
