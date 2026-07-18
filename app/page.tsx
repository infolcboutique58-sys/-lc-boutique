export default function Home() {
  return (
    <main>
      <header className="header">
        <h1>L&C Boutique</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Carrello</a>
          <a href="/checkout">Checkout</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Moda Uomo & Donna</h2>
        <p>
          Nuovi arrivi ogni settimana. Spedizioni in tutta Italia e anche
          all'estero.
        </p>

        <a className="btn" href="/shop">
          Acquista ora
        </a>
      </section>
    </main>
  );
}
