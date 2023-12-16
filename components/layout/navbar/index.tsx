import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      {/* mobile navbar */}
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>

      {/* desktop navbar */}
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          {/* company and logo */}
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <div className="ml-2 flex-none text-xl font-light uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>

          {/* menu items from shopify */}
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <Link
                  href={'/search'}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline "
                >
                  Products
                </Link>
              </li>
              {/* {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline "
                  >
                    {item.title}
                  </Link>
                </li>
              ))} */}
            </ul>
          ) : null}
        </div>

        {/* search input */}
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>

        {/* options */}
        <div className="flex items-center justify-end space-x-2 md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
