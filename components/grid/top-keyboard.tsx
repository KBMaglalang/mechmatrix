// components
import HomepageGridItem from './grid-item';

// constants and functions
import { getCollectionProducts } from 'lib/shopify';

async function TopKeyboards() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'keyboards',
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl py-24">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 mt-4 text-3xl font-light">Top Selling Keyboards</h1>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-1">
        <HomepageGridItem size="half" item={firstProduct} />
        <HomepageGridItem size="half" item={secondProduct} />
        <HomepageGridItem size="half" item={thirdProduct} />
      </div>
    </section>
  );
}

export default TopKeyboards;
