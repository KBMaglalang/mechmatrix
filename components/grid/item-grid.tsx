// components
import HomepageGridItem from './grid-item';

// constants and functions
import { getCollectionProducts } from 'lib/shopify';

export default async function ItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items',
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2] || !homepageItems[3]) return null;

  const [firstProduct, secondProduct, thirdProduct, fourthProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl py-24">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 mt-4 text-3xl font-light">Best Sellers</h1>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-4 md:grid-rows-2">
        <HomepageGridItem size="half" item={firstProduct} priority={true} />
        <HomepageGridItem size="half" item={secondProduct} priority={true} />
        <HomepageGridItem size="half" item={thirdProduct} />
        <HomepageGridItem size="half" item={fourthProduct} />
      </div>
    </section>
  );
}
