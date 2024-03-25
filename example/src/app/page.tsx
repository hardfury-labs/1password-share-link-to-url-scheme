'use client';

import dynamic from 'next/dynamic';

const Converter = dynamic(() => import('./components/converter'), { ssr: false });

export default function Index() {
  return <Converter />;
}
