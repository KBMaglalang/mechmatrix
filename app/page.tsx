import { Suspense } from 'react';

// components
import BenefitsList from 'components/ads/benefits-list';
import { Carousel } from 'components/carousel';
import ItemGrid from 'components/grid/item-grid';
import TopKeyboards from 'components/grid/top-keyboard';
import Hero from 'components/hero/hero';
import Footer from 'components/layout/footer';

// constants and functions

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website',
  },
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsList />

      <Suspense>
        <TopKeyboards />
        <ItemGrid />
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
