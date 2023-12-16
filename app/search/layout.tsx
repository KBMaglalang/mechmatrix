import { Suspense } from 'react';

// components
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';

// constants and functions
import { sorting } from 'lib/constants';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black  md:flex-row">
        <div className="order-first w-full flex-none space-y-4 md:max-w-[125px]">
          <Collections />
          <FilterList list={sorting} title="Sort by" />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
      </div>
      <Footer />
    </Suspense>
  );
}
