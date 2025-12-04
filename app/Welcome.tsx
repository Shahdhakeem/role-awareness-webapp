// Example Welcome component (TypeScript/React/Next)
'use client';

import React from 'react';

type Props = { onPrompt?: (text: string) => void };

export default function Welcome({ onPrompt }: Props) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4 text-slate-900">
      {/* Optional video (≤60s, muted autoplay) */}
      {/* Remove this block if you don't want video */}
      <video
        className="w-full rounded-lg border border-slate-200"
        autoPlay
        muted
        playsInline
        controls
        poster="https://your-cdn/role-awareness-thumb.jpg"
      >
        <source src="https://your-cdn/role-awareness-intro.webm" type="video/webm" />
        <source src="https://your-cdn/role-awareness-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="text-2xl font-semibold">👋 Hi, I’m your Role Awareness Agent</h2>
      <p>
        I answer questions about our organizational roles using our official documents.
        Right now I give deep, practical coaching for the <strong>Chapter Lead</strong> role,
        and basic facts for other roles in the Blueprint — always with citations.
      </p>
      <p>
        Ask me anything about your role, boundaries, or how roles work together. Try a quick prompt:
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        <button onClick={() => onPrompt?.('Create a 60-minute Chapter Lead awareness session for all staff.')} className="px-3 py-2 rounded-md border">
          CL awareness (60 min)
        </button>
        <button onClick={() => onPrompt?.('What are the top 5 responsibilities of a Chapter Lead?')} className="px-3 py-2 rounded-md border">
          Top 5 CL responsibilities
        </button>
        <button onClick={() => onPrompt?.('Compare Chapter Lead vs TDM (Scrum Master).')} className="px-3 py-2 rounded-md border">
          CL vs TDM
        </button>
        <button onClick={() => onPrompt?.('What changed between Chapter Lead v1.2 and v1.3?')} className="px-3 py-2 rounded-md border">
          CL v1.2 → v1.3
        </button>
        <button onClick={() => onPrompt?.('How should a Chapter Lead work with Product Owners and managers?')} className="px-3 py-2 rounded-md border">
          CL ↔ PO / Managers
        </button>
      </div>

      <p className="text-sm text-slate-500">
        🇸🇦 اطرح أي سؤال عن دورك أو اطلب جلسة توعوية لقائد الشابتر — سأجيب من الوثائق الرسمية مع ذكر المصادر.
      </p>
    </div>
  );
}
