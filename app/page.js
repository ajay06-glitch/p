import "./globals.css";

export default function Home() {
  const products = [
    {
      name: "Ocean Flow Pendant",
      desc: "Inspired by flowing waves and crafted in textured 18KT gold.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Forest Leaf Earrings",
      desc: "Organic leaf textures with refined diamond detailing.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Molten Ring",
      desc: "Raw luxury inspired by molten gold and natural forms.",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <main>
      <section className="hero">
        <div className="heroOverlay">
          <h1>VAYRA</h1>
          <p>Modern Luxury Jewellery</p>
          <span>Inspired by nature. Crafted with textures.</span>
        </div>
      </section>

      <section className="intro">
        <p className="label">Signature Collection</p>
        <h2>Elemental Textures</h2>
        <p className="introText">
          Minimal luxury jewellery inspired by waves, leaves, bark, lava and earth.
          Crafted for modern elegance.
        </p>
      </section>

      <section className="products">
        {products.map((item) => (
          <div className="card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="cardBody">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="footer">
        <h2>Experience Modern Luxury</h2>
        <p>Instagram: @vayra.jewellery | Email: hello@vayra.com</p>
      </section>
    </main>
  );
}
