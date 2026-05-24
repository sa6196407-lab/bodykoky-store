export default function ShopPage() {

  const products = [
    {
      id: 1,
      name: "Premium Hoodie",
      oldPrice: "$240",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "Luxury T-Shirt",
      oldPrice: "$160",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Modern Jacket",
      oldPrice: "$320",
      price: "$240",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "Classic Pants",
      oldPrice: "$200",
      price: "$150",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 5,
      name: "Street Hoodie",
      oldPrice: "$260",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 6,
      name: "Elegant Fit",
      oldPrice: "$230",
      price: "$175",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 7,
      name: "Luxury Jacket",
      oldPrice: "$340",
      price: "$260",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 8,
      name: "Oversized Tee",
      oldPrice: "$150",
      price: "$110",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (

    <div className="min-h-screen bg-[#f7f3ee] px-10 py-10">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-14">

        <div>

          <p className="tracking-[7px] text-[#b48b66] text-sm mb-3">
            BODY&KOKY STORE
          </p>

          <h1 className="text-6xl font-black text-black">
            SHOP COLLECTION
          </h1>

        </div>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search products..."
            className="border border-[#ddd] bg-white px-5 py-4 rounded-2xl outline-none w-[280px] shadow-sm"
          />

          <button className="bg-black text-white px-7 rounded-2xl hover:bg-[#c8a27a] transition-all duration-300">
            Search
          </button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="flex gap-4 mb-10">

        <button className="bg-black text-white px-6 py-3 rounded-full">
          ALL
        </button>

        <button className="bg-white px-6 py-3 rounded-full hover:bg-[#e9d5c1] transition">
          HOODIES
        </button>

        <button className="bg-white px-6 py-3 rounded-full hover:bg-[#e9d5c1] transition">
          JACKETS
        </button>

        <button className="bg-white px-6 py-3 rounded-full hover:bg-[#e9d5c1] transition">
          T-SHIRTS
        </button>

        <button className="bg-white px-6 py-3 rounded-full hover:bg-[#e9d5c1] transition">
          PANTS
        </button>

      </div>

      {/* PRODUCTS */}

      <div className="grid grid-cols-4 gap-7">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden">

              <img
                src={product.image}
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* SALE BADGE */}

              <div className="absolute top-4 left-4 bg-[#c8a27a] text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg">
                SALE
              </div>

              {/* FAVORITE */}

              <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-11 h-11 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg">
                ♥
              </button>

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <h2 className="text-[25px] font-black text-black">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-2">
                Premium Luxury Collection
              </p>

              {/* PRICE */}

              <div className="flex items-center gap-3 mt-5">

                <span className="text-3xl font-black text-black">
                  {product.price}
                </span>

                <span className="text-gray-400 line-through text-lg">
                  {product.oldPrice}
                </span>

              </div>

              {/* BUTTON */}

              <button className="w-full mt-6 bg-black text-white py-4 rounded-2xl font-semibold hover:bg-[#c8a27a] transition-all duration-300 shadow-lg">

                Add To Cart

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}