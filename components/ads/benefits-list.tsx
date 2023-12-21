export default function BenefitsList() {
  return (
    <section id="benefits-list" className="body-font bg-slate-900 text-white">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap justify-around text-center">
          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-3xl font-bold text-white sm:text-4xl">Free Shipping</h2>
            <p className="leading-relaxed">Over $100</p>
          </div>

          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-3xl font-bold text-white sm:text-4xl">
              30 Day Return Policy
            </h2>
          </div>

          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-3xl font-bold text-white sm:text-4xl">24/7</h2>
            <p className="leading-relaxed">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
