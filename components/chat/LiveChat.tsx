'use client';

import { useEffect } from 'react';

export const LiveChat = () => {
  useEffect(() => {
    const websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    
    // Do not load Crisp widget if website ID is not configured or is a placeholder
    if (!websiteId || websiteId === 'bitsotron-demo-chat-id') {
      return;
    }

    // Lazy-load Crisp Chat Widget on window load after main thread is idle
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !(window as unknown as { $crisp: unknown }).$crisp) {
        (window as unknown as { $crisp: unknown[] }).$crisp = [];
        (window as unknown as { CRISP_WEBSITE_ID: string }).CRISP_WEBSITE_ID = websiteId;

        const d = document;
        const s = d.createElement('script');
        s.src = 'https://client.crisp.chat/l.js';
        s.async = true;
        d.getElementsByTagName('head')[0].appendChild(s);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

