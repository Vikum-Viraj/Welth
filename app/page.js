import Image from "next/image";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* left */}
        <div className="text-center sm:text-left">
          <div>
            <span className="text-gray-500 font-light tracking-wide mb-6">
              spott<span className="text-purple-400">*</span>
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
            Discover <br />
            create amazing
            <br />
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              event.
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Whether you&apos;re hosting or attending, Spott makes every event memorable. Join our community today.
          </p>
          <NextLink
            href="/explore"
            className="inline-flex items-center px-6 py-3 mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-full"
          >
            Get Started
          </NextLink>
        </div>
        {/* right */}
        <div>
          {/* placeholder for image or graphic */}
          <Image src="/hero.png" alt="Hero" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
