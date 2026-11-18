export const metadata = {
  title: 'Chat',
  description:
    'Chat with Income N Filing.',
  alternates: { canonical: '/chat' },
  openGraph: { images: [{ url: '/og/default.png', width: 1200, height: 630 }], url: '/chat', title: 'Chat', description: 'Chat with Income N Filing.' },
  robots: { index: false, follow: false },
};

export default function Layout({ children }) {
  return children;
}
