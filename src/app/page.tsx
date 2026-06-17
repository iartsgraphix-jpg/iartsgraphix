import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[180px] rounded-full pointer-events-none"></div>
      {/* HEADER */}
      <header className="border-b border-yellow-500/20 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Image
            src="/logo.png"
            alt="i Arts Graphix"
            width={110}
            height={45}
            priority
          />

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Templates</a>
            <a href="#">Categories</a>
            <a href="#">Pricing</a>
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
          </nav>

          <button className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full">
            WhatsApp
          </button>

        </div>
      </header>

      {/* HERO */}
    <section className="max-w-7xl mx-auto px-6 py-28">

  <div className="grid lg:grid-cols-2 gap-20 items-center">

    <div>

      <p className="text-yellow-400 tracking-[6px] mb-6 text-sm font-semibold">
        PREMIUM DIGITAL INVITATIONS
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        India's Most
        <br />
        <span className="text-yellow-400">
          PREMIUM
        </span>
        <br />
        Digital Invitation Studio
      </h1>

      <p className="text-gray-300 text-lg mt-8 max-w-xl">
        Wedding Invitations, Nikkah Invitations, Engagement,
        Baat Pakki, Birthday, Anniversary, Baby Shower and
        House Warming Invitations.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold">
          View Templates
        </button>

        <a
  href="https://wa.me/918055774733"
  target="_blank"
  className="mt-8 inline-block bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold"
>
  Order On WhatsApp
</a>

      </div>

    </div>
          {/* PHONE MOCKUPS */}
          <div className="flex justify-center items-center gap-4">

            <div className="overflow-hidden rounded-[30px] border border-yellow-500/30 shadow-2xl">
              <Image
                src="/phone1.jpg"
                alt="Invitation 1"
                width={180}
                height={360}
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-yellow-500/30 shadow-2xl mt-10">
              <Image
                src="/phone2.jpg"
                alt="Invitation 2"
                width={200}
                height={400}
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-yellow-500/30 shadow-2xl">
              <Image
                src="/phone3.jpg"
                alt="Invitation 3"
                width={180}
                height={360
            
                }
              />
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">
              10000+
            </h3>
            <p className="text-gray-400">
              Invitations Delivered
            </p>
          </div>

          <div className="border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">
              4.9★
            </h3>
            <p className="text-gray-400">
              Customer Rating
            </p>
          </div>

          <div className="border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">
              24 Hr
            </h3>
            <p className="text-gray-400">
              Express Delivery
            </p>
          </div>

          <div className="border border-yellow-500/20 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">
              ₹399
            </h3>
            <p className="text-gray-400">
              Starting Price
            </p>
          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-8">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {[
            "Islamic Wedding",
            "Hindu Wedding",
            "Nikkah",
            "Baat Pakki",
            "Engagement",
            "Birthday",
            "Anniversary",
            "Baby Shower",
            "House Warming",
            "Reception",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-xl p-4 text-center hover:bg-zinc-800 transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-10">
          Trending Templates Live test
    
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <Image
                src={`/template${item}.jpg`}
                alt="Template"
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">

                <h3 className="font-semibold text-lg">
                  Premium Wedding Invitation
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Luxury Digital Invitation Reel
                </p>

                <div className="mt-5">

                  <span className="text-yellow-400 font-bold">
                    ₹999
                  </span>

                  <button className="w-full bg-yellow-500 text-black py-2 rounded-xl font-semibold">
                    View
                  </button>

                </div>

              </div>

            </div>
          ))} 

        </div>

      </section>
{/* WHY CHOOSE US */}

<section className="max-w-7xl mx-auto px-6 pb-32">

  <h2 className="text-4xl font-bold text-center mb-16">
    Why Choose i Arts Graphix?
  </h2>

  <div className="grid md:grid-cols-5 gap-5">

    {[
      "Premium Quality",
      "24 Hr Delivery",
      "Unlimited Revisions",
      "WhatsApp Support",
      "Affordable Pricing"
    ].map((item) => (
      <div
        key={item}
        className="bg-[#111] border border-yellow-500/20 rounded-2xl p-6 text-center"
      >
        <h3 className="font-semibold text-yellow-400">
          {item}
        </h3>
      </div>
    ))}

  </div>

</section>

{/* INSTAGRAM STATS */}

<section className="max-w-7xl mx-auto px-6 pb-32">

  <h2 className="text-4xl font-bold text-center mb-12">
    Our Work, Our Pride
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-[#111] rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">1.2M+</h3>
      <p className="text-gray-400 mt-2">Reel Views</p>
    </div>

    <div className="bg-[#111] rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">50K+</h3>
      <p className="text-gray-400 mt-2">Followers</p>
    </div>

    <div className="bg-[#111] rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">5000+</h3>
      <p className="text-gray-400 mt-2">Happy Clients</p>
    </div>

    <div className="bg-[#111] rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">3000+</h3>
      <p className="text-gray-400 mt-2">Projects Completed</p>
    </div>

  </div>

</section>

{/* HOW IT WORKS */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    How It Works
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {[
      "Choose Template",
      "Send Details",
      "Pay Advance",
      "Get Delivery"
    ].map((step) => (
      <div
        key={step}
        className="bg-[#111] rounded-2xl border border-yellow-500/20 p-8 text-center"
      >
        <h3 className="font-semibold text-yellow-400">
          {step}
        </h3>
      </div>
    ))}

  </div>

</section>

{/* CLIENT REVIEWS */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    What Our Clients Say
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    {[
      "Amazing work and quick delivery.",
      "Premium quality invitation reels.",
      "Very professional service.",
      "Highly recommended."
    ].map((review, index) => (
      <div
        key={index}
        className="bg-[#111] rounded-2xl border border-yellow-500/20 p-6"
      >
        <p className="text-gray-300">
          "{review}"
        </p>
      </div>
    ))}

  </div>

</section>

{/* CTA */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <div className="bg-[#111] rounded-3xl border border-yellow-500/20 p-10 text-center">

    <h2 className="text-4xl font-bold">
      Ready To Create Your Dream Invitation?
    </h2>

    <p className="text-gray-400 mt-4">
      Let's make your special moments unforgettable.
    </p>

    <a
  href="https://wa.me/918055774733"
  target="_blank"
  className="bg-yellow-500 text-black px-5 py-2 rounded-full inline-block font-semibold"
>
  WhatsApp
</a>

  </div>

</section>

{/* FOOTER */}
<a
  href="https://wa.me/918055774733"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold shadow-2xl z-50 hover:scale-110 transition"
>
  WA
</a>
<footer className="border-t border-yellow-500/20 py-10">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

    <div>
      <h3 className="text-yellow-400 font-bold text-xl">
        i Arts Graphix
      </h3>

      <p className="text-gray-400 mt-3">
        Premium Digital Invitation Studio
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Categories
      </h4>

      <p className="text-gray-400">Wedding</p>
      <p className="text-gray-400">Nikkah</p>
      <p className="text-gray-400">Engagement</p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Contact
      </h4>

      <p className="text-gray-400">
        WhatsApp: 8055774733
      </p>

      <p className="text-gray-400">
        Call: 9657787747
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Instagram
      </h4>

      <p className="text-gray-400">
        @I_arts_graphix
      </p>
    </div>

  </div>

</footer>
    </main>
  );
}