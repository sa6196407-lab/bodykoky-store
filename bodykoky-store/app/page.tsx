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

  return (

    <main className="bg-[#f5f1eb] min-h-screen overflow-hidden">

      {/* TOP BAR */}

      <div className="bg-black text-[#f1dfcc] text-sm px-10 py-3 flex justify-between">

        <p>FREE SHIPPING ON ORDERS OVER $100</p>

        <p>NEW COLLECTION IS OUT NOW ✨</p>

        <p>GET 10% OFF YOUR FIRST ORDER</p>

      </div>

      {/* NAVBAR */}

      <header className="bg-[#fcfaf7]/90 backdrop-blur-xl px-14 py-7 flex justify-between items-center border-b border-[#e7ddd1] sticky top-0 z-50">

        <div>

          <h1 className="text-5xl font-black text-black">
            BODY&KOKY
          </h1>

          <p className="tracking-[10px] text-sm mt-2 text-[#8b7765]">
            STORE
          </p>

        </div>

        <nav className="flex gap-10 text-lg font-medium text-black">

          <a href="#" className="hover:text-[#c69b74] transition-all">
            HOME
          </a>

          <a href="/shop" className="hover:text-[#c69b74] transition-all">
            SHOP
          </a>

          <a href="#" className="hover:text-[#c69b74] transition-all">
            COLLECTIONS
          </a>

          <a href="#" className="hover:text-[#c69b74] transition-all">
            SALE
          </a>

          <a href="#" className="hover:text-[#c69b74] transition-all">
            CONTACT
          </a>

        </nav>

        <div className="flex gap-5 text-3xl">

          <span className="cursor-pointer hover:scale-110 transition-all">
            👤
          </span>

          <span className="cursor-pointer hover:scale-110 transition-all">
            ♡
          </span>

          <span className="cursor-pointer hover:scale-110 transition-all">
            🛒
          </span>

        </div>

      </header>

      {/* HERO SECTION */}

      <section className="relative h-[920px] overflow-hidden">

        {/* BACKGROUND SLIDER */}

        {heroImages.map((img, index) => (

          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2500ms] ${
              current === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />

        ))}

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70"></div>

        {/* LEFT TEXT */}

        <div className="absolute left-[90px] top-1/2 -translate-y-1/2 z-20 text-white max-w-[650px]">

          <p className="tracking-[10px] text-[#e8cdb1] mb-6 text-lg">
            LUXURY COLLECTION 2026
          </p>

          <h1 className="text-[110px] leading-[0.9] font-black mb-8">

            Modern
            <br />
            Fashion
            <br />
            Store

          </h1>

          <p className="text-[28px] text-[#ece0d3] leading-relaxed mb-10">

            Premium clothing crafted for people
            who love luxury streetwear.

          </p>

          <div className="flex gap-5">

            <button className="bg-[#d2ab83] hover:bg-[#f3dfca] transition-all duration-300 text-black px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl">

              SHOP NOW

            </button>

            <button className="border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 px-12 py-5 rounded-2xl text-xl font-semibold">

              EXPLORE

            </button>

          </div>

        </div>

        {/* FLOATING PRODUCT CARDS */}

        <div className="absolute right-[70px] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] p-5 w-[300px] shadow-2xl hover:scale-105 transition-all duration-500">

            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[260px] object-cover rounded-2xl"
            />

            <div className="mt-5 text-white">

              <h3 className="text-3xl font-black">
                Premium Tee
              </h3>

              <p className="text-[#ddd] mt-2">
                New Streetwear Collection
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-3xl font-black">
                  $120
                </span>

                <button className="bg-[#d2ab83] text-black px-5 py-3 rounded-xl font-bold hover:bg-white transition-all">
                  Buy
                </button>

              </div>

            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] p-5 w-[300px] shadow-2xl hover:scale-105 transition-all duration-500">

            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[260px] object-cover rounded-2xl"
            />

            <div className="mt-5 text-white">

              <h3 className="text-3xl font-black">
                Luxury Hoodie
              </h3>

              <p className="text-[#ddd] mt-2">
                Oversized Premium Fit
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-3xl font-black">
                  $180
                </span>

                <button className="bg-[#d2ab83] text-black px-5 py-3 rounded-xl font-bold hover:bg-white transition-all">
                  Buy
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* DOTS */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">

          {heroImages.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                current === index
                  ? "bg-[#f3dcc6] scale-125"
                  : "border border-white"
              }`}
            />

          ))}

        </div>

      </section>

      {/* TRENDING */}

      <section className="px-14 py-24 bg-[#f8f4ef]">

        <div className="flex justify-between items-center mb-14">

          <div>

            <p className="tracking-[8px] text-[#b48b66] mb-3">
              TRENDING NOW
            </p>

            <h2 className="text-6xl font-black text-black">
              Best Sellers
            </h2>

          </div>

          <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-[#c69b74] transition-all duration-300">
            VIEW ALL
          </button>

        </div>

        <div className="grid grid-cols-4 gap-8">

          {[
            {
              name: "Street Hoodie",
              price: "$180",
              image:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
            },

            {
              name: "Premium Jacket",
              price: "$240",
              image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
            },

            {
              name: "Luxury Tee",
              price: "$120",
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
            },

            {
              name: "Classic Pants",
              price: "$150",
              image:
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
            },

          ].map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3"
            >

              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute top-4 left-4 bg-[#c69b74] text-white px-4 py-2 rounded-full text-sm font-bold">
                  NEW
                </div>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-black text-black">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  Luxury Collection
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-3xl font-black text-black">
                    {product.price}
                  </span>

                  <button className="bg-black text-white px-5 py-3 rounded-xl hover:bg-[#c69b74] transition-all duration-300">
                    Add To Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-black text-white px-14 py-20">

        <div className="grid grid-cols-4 gap-10">

          <div>

            <h2 className="text-5xl font-black mb-6">
              BODY&KOKY
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Luxury fashion brand inspired by modern premium streetwear culture.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-5">
              SHOP
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#">Men</a>

              <a href="#">Women</a>

              <a href="#">Hoodies</a>

              <a href="#">Jackets</a>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-5">
              SUPPORT
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#">Shipping</a>

              <a href="#">Returns</a>

              <a href="#">Privacy Policy</a>

              <a href="#">Contact</a>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-5">
              FOLLOW US
            </h3>

            <div className="flex gap-5 text-4xl">

              <span>📷</span>

              <span>🎵</span>

              <span>🐦</span>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 BODY&KOKY STORE — ALL RIGHTS RESERVED
        </div>

      </footer>
{/* BRANDS */}

<section className="py-16 bg-[#111] overflow-hidden relative">

  <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-transparent to-[#111] z-10"></div>

  <div className="whitespace-nowrap animate-[scroll_25s_linear_infinite] flex gap-24 text-white text-6xl font-black relative">

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      NIKE
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      ADIDAS
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      BALENCIAGA
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      ZARA
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      PRADA
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      GUCCI
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      LV
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      CHANEL
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      DIOR
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      NIKE
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      ADIDAS
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      BALENCIAGA
    </span>

    <span className="opacity-30 hover:opacity-100 hover:text-[#d2ab83] transition-all duration-300 cursor-pointer">
      ZARA
    </span>

  </div>

</section>

{/* REVIEWS */}

<section className="px-14 py-24 bg-[#f8f4ef]">

  <div className="text-center mb-16">

    <p className="tracking-[8px] text-[#b48b66] mb-3">
      CUSTOMER REVIEWS
    </p>

    <h2 className="text-6xl font-black text-black">
      What People Say
    </h2>

  </div>

  <div className="grid grid-cols-3 gap-8">

    {[
      {
        name: "Alex Morgan",
        review:
          "Best fashion store I've ever used. Premium quality and amazing designs.",
      },

      {
        name: "Sophia Lee",
        review:
          "Everything feels luxurious. The UI and products are literally perfect.",
      },

      {
        name: "Daniel Carter",
        review:
          "The clothes quality is insane and shipping was super fast.",
      },

    ].map((item, index) => (

      <div
        key={index}
        className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-all duration-500"
      >

        <div className="text-[#d2ab83] text-3xl mb-5">
          ★★★★★
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          "{item.review}"
        </p>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-[#d2ab83]"></div>

          <div>

            <h3 className="font-black text-xl">
              {item.name}
            </h3>

            <p className="text-gray-500">
              Verified Buyer
            </p>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>

{/* NEWSLETTER */}

<section className="px-14 py-24 bg-black text-white text-center relative overflow-hidden">

  <div className="absolute w-[500px] h-[500px] bg-[#d2ab83]/20 blur-[120px] rounded-full top-[-200px] left-[-100px]"></div>

  <div className="absolute w-[400px] h-[400px] bg-[#d2ab83]/10 blur-[120px] rounded-full bottom-[-200px] right-[-100px]"></div>

  <div className="relative z-10">

    <p className="tracking-[8px] text-[#d7b898] mb-4">
      JOIN BODY&KOKY
    </p>

    <h2 className="text-7xl font-black mb-6">
      Get Exclusive Offers
    </h2>

    <p className="text-xl text-gray-300 mb-10">
      Subscribe and receive premium drops before everyone else.
    </p>

    <div className="flex justify-center gap-4">

      <input
        type="text"
        placeholder="Enter your email..."
        className="w-[420px] px-6 py-5 rounded-2xl bg-white text-black outline-none"
      />

      <button className="bg-[#d2ab83] hover:bg-[#f4dfca] transition-all duration-300 text-black px-10 py-5 rounded-2xl font-black">
        SUBSCRIBE
      </button>

    </div>

  </div>

</section>

<style jsx global>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
`}</style>
    </main>

  );

}