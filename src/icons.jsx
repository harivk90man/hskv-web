const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const Phone = (p) => <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
export const Pin = (p) => <svg {...base} {...p}><path d="M12 21s-7-6.5-7-11.5a7 7 0 0 1 14 0C19 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
export const Clock = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
export const Arrow = (p) => <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
export const Play = (p) => <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M8 5.5v13l11-6.5z" /></svg>
export const Star = (p) => <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M12 2.8l2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 17l-5.8 3.3 1.4-6.4L2.7 9.5l6.5-.7z" /></svg>
export const Leaf = (p) => <svg {...base} {...p}><path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16z" /><path d="M4 20c4-5 8-8 12-10" /></svg>
export const Menu = (p) => <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
export const Close = (p) => <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
export const Instagram = (p) => <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>
export const WhatsApp = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.5 0 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4l-.5-.3-1.9-.9c-.3-.1-.5-.2-.6.1l-.9 1.1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.4 0-.5l-.9-2c-.2-.6-.5-.5-.7-.5h-.5z" />
  </svg>
)
