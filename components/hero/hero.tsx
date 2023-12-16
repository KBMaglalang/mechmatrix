import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center py-24">
        <Image
          className="rounded object-cover object-center"
          alt="hero"
          src="/images/hero.jpg"
          sizes="(min-width: 1024px) 66vw, 100vw"
          width={1024}
          height={600}
          priority={true}
        />
      </div>
    </section>
  );
}
