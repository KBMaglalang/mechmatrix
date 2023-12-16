import { Suspense } from 'react';

// components
import FooterMenu from 'components/layout/footer-menu';

// constants and functions
import { getMenu } from 'lib/shopify';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const copyrightDate = 2023;
  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 ';
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="text-sm text-neutral-500 ">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6  border-neutral-200 px-6 py-12 text-sm  md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        {/* footer menu from shopify */}
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>

      {/* website copyright */}
      <div className="border-t border-neutral-200 py-6 text-sm ">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
