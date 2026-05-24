"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const heroImages = [

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2000&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2000&auto=format&fit=crop",

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % heroImages.length);

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  const categories = [

    {
      title: "MEN",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "WOMEN",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "HOODIES",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "T-SHIRTS",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "PANTS",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  return (

    <main className="bg-[#f5f1eb] min-h-screen text-[#1f1f1f]">

      {/* TOP BAR */}

      <div className="bg-black text-[#f1dfcc] text-sm px-10 py-3 flex justify-between">

        <p>FREE SHIPPING ON ORDERS OVER $100</p>

        <p>NEW COLLECTION IS OUT NOW ✨</p>

        <p>GET 10% OFF YOUR FIRST ORDER | CODE: WELCOME10</p>

      </div>

      {/* NAVBAR */}

      <header className="bg-[#fcfaf7] px-14 py-7 flex justify-between items-center border-b border-[#e7ddd1] sticky top-0 z-50">

        <div>

          <h1 className="text-5xl font-black leading-none">
            BODY&KOKY
          </h1>

          <p className="tracking-[10px] text-sm mt-2 text-[#8b7765]">
            STORE
          </p>

        </div>

        <nav className="flex gap-10 text-lg font-medium">

          <a href="#" className="hover:text-[#c69b74] transition">HOME</a>

          <a href="/shop" className="hover:text-[#c69b74] transition">
  SHOP
</a>

          <a href="#" className="hover:text-[#c69b74] transition">NEW ARRIVALS</a>

          <a href="#" className="hover:text-[#c69b74] transition">COLLECTIONS</a>

          <a href="#" className="hover:text-[#c69b74] transition">SALE</a>

          <a href="#" className="hover:text-[#c69b74] transition">CONTACT</a>

        </nav>

        <div className="flex items-center gap-5">

          <input
            type="text"
            placeholder="Search for products..."
            className="border border-[#d9cab9] bg-[#f8f4ef] rounded-full px-6 py-3 w-[260px] outline-none"
          />

          <div className="flex gap-4 text-3xl">

            <span className="cursor-pointer hover:scale-110 transition">👤</span>

            <span className="cursor-pointer hover:scale-110 transition">♡</span>

            <span className="cursor-pointer hover:scale-110 transition">🛒</span>

          </div>

        </div>

      </header>

      {/* HERO */}

      <section className="relative h-[760px] overflow-hidden">

        {heroImages.map((img, index) => (

          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${
              current === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />

        ))}

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70"></div>

        {/* LEFT CONTENT */}

        <div className="absolute left-[90px] top-1/2 -translate-y-1/2 text-white z-10 max-w-[650px]">

          <p className="tracking-[12px] text-[18px] mb-6 text-[#e7cdb0]">
            NEW SEASON
          </p>

          <h1 className="text-[105px] leading-[0.9] font-black mb-8">

            Discover Your
            <br />
            Perfect Style

          </h1>

          <p className="text-[28px] text-[#e8ddd1] leading-relaxed mb-10">

            Luxury fashion inspired by modern streetwear.
            <br />
            Elegant. Premium. Timeless.

          </p>

          <div className="flex gap-5">

            <button className="bg-[#d2ab83] hover:bg-[#f4e1cf] transition-all duration-300 text-black px-12 py-5 rounded-md text-[22px] font-bold shadow-2xl">

              SHOP NOW

            </button>

            <button className="border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition-all duration-300 px-12 py-5 rounded-md text-[22px] font-semibold">

              EXPLORE

            </button>

          </div>

        </div>

        {/* PREMIUM CARD */}

        <div className="absolute bottom-12 right-12 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-7 text-white shadow-2xl w-[350px]">

          <p className="text-[#e6c9aa] text-sm tracking-[6px] mb-3">
            BODY&KOKY EXCLUSIVE
          </p>

          <h3 className="text-4xl font-bold mb-4">
            Fashion
            <br />
            Reimagined
          </h3>

          <p className="text-[#e7ddd1] leading-relaxed mb-6">
            Premium collections designed for modern lifestyle and luxury vibes.
          </p>

          <div className="flex gap-8">

            <div>

              <h4 className="text-3xl font-bold text-[#e6c9aa]">
                10K+
              </h4>

              <p className="text-sm text-[#ddd]">
                Happy Clients
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-bold text-[#e6c9aa]">
                2026
              </h4>

              <p className="text-sm text-[#ddd]">
                New Collection
              </p>

            </div>

          </div>

        </div>

        {/* DOTS */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">

          {heroImages.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition ${
                current === index
                  ? "bg-[#f4dcc4] scale-125"
                  : "border border-white"
              }`}
            />

          ))}

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="grid grid-cols-5 gap-5 px-14 py-10">

        {categories.map((item, index) => (

          <div
            key={index}
            className="relative h-[320px] overflow-hidden rounded-2xl group shadow-xl"
          >

            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">

              <h3 className="text-4xl font-bold mb-6">
                {item.title}
              </h3>

              <button className="bg-[#e3c3a2] hover:bg-white transition-all duration-300 text-black px-8 py-3 rounded-md font-semibold shadow-lg">

                SHOP NOW

              </button>
ء
            </div>

          </div>

        ))}

      </section>

    </main>

  );

}