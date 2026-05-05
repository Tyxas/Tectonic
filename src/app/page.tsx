"use client";
import { useEffect } from "react";

import React from 'react';

export default function Home() {
  
  useEffect(() => {
    const nav = document.querySelector('nav');
    if(nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          nav.style.borderBottomColor = '#2A2A2A';
        } else {
          nav.style.borderBottomColor = '#1E1E1E';
        }
      });
    }

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const img = card.querySelector('.product-img-placeholder svg');
        if (img) {
          img.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        }
      });
      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.product-img-placeholder svg');
        if (img) img.style.transform = '';
      });
    });
  }, []);

  return (
    <>
      

{/*  NAV  */}
<nav>
  <div className="nav-logo">TEC<span>·</span>TONIC</div>
  <ul className="nav-links">
    <li><a href="#products">Kolekcija</a></li>
    <li><a href="#custom">Individualūs</a></li>
    <li><a href="#about">Apie mus</a></li>
    <li><a href="#contact">Kontaktai</a></li>
  </ul>
  <a href="#custom" className="nav-cta">Užsakyti →</a>
</nav>

{/*  HERO  */}
<section className="hero">
  <div className="hero-left">
    <div className="hero-eyebrow">Šokių rūbai · Electro dance costumes</div>

    <h1 className="hero-headline">
      <span>JUDĖK</span>
      <span className="line-accent">RYŠKIAI.</span>
      <span className="line-stroke">DRĄSIAI.</span>
    </h1>

    <p className="hero-sub">
      Rūbai sukurti šokiui — ne tik parodymui. Nuo Tectonic iki sceninių kostiumų: kiekviena detalė tarnauja jūsų judėjimui.
    </p>

    <div className="hero-actions">
      <a href="#products" className="btn-primary">Peržiūrėti kolekciją →</a>
      <a href="#custom" className="btn-ghost">Individualus užsakymas</a>
    </div>

    <div className="hero-stats">
      <div>
        <div className="stat-val">200<span>+</span></div>
        <div className="stat-label">Klientų</div>
      </div>
      <div>
        <div className="stat-val">48<span>h</span></div>
        <div className="stat-label">Sąmata</div>
      </div>
      <div>
        <div className="stat-val">100<span>%</span></div>
        <div className="stat-label">Individualūs</div>
      </div>
    </div>
  </div>

  <div className="hero-right">
    <div className="hero-visual">
      <img src="/images/hero.png" alt="Cyberpunk Dancer" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
    </div>

    <div className="hero-badge">
      <div className="badge-label">Kolekciją rengia</div>
      <div className="badge-val">TECTONIC® 2025</div>
    </div>
  </div>
</section>

{/*  MARQUEE  */}
<div className="marquee-strip">
  <div className="marquee-inner">
    <span>Electro Dance</span><span className="accent">✦</span>
    <span>Tectonic Style</span><span className="accent">✦</span>
    <span>Šokių Rūbai</span><span className="accent">✦</span>
    <span>Individualūs Kostiumai</span><span className="accent">✦</span>
    <span>Made in Lithuania</span><span className="accent">✦</span>
    <span>Free Movement</span><span className="accent">✦</span>
    <span>Stage Ready</span><span className="accent">✦</span>
    <span>Electro Dance</span><span className="accent">✦</span>
    <span>Tectonic Style</span><span className="accent">✦</span>
    <span>Šokių Rūbai</span><span className="accent">✦</span>
    <span>Individualūs Kostiumai</span><span className="accent">✦</span>
    <span>Made in Lithuania</span><span className="accent">✦</span>
    <span>Free Movement</span><span className="accent">✦</span>
    <span>Stage Ready</span><span className="accent">✦</span>
  </div>
</div>

{/*  PRODUCTS  */}
<section className="products" id="products">
  <div className="section-label"><span className="section-num">01</span> Kolekcija</div>

  <div className="products-header">
    <h2 className="section-headline">
      ŠIOS<br />
      SEZONO<br />
      <span>KOLEKCIJA.</span>
    </h2>
    <p className="section-desc">
      Kiekvienas rūbas sukurtas kartu su šokėjais. Testuotas scenoje, varžybose ir repeticijoje. Medžiaga juda kartu su jumis.
    </p>
  </div>

  <div className="products-grid">
    {/*  Card 1  */}
    <div className="product-card">
      <div className="product-img-placeholder p1">
        <img src="/images/product_1.png" alt="Product 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag new">Nauja</div>
      </div>
      <div className="product-info">
        <div className="product-style">Tectonic / Electro</div>
        <div className="product-name">Vertex Jacket</div>
        <div className="product-footer">
          <div className="product-price">89€</div>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>

    {/*  Card 2  */}
    <div className="product-card">
      <div className="product-img-placeholder p2">
        <img src="/images/product_2.png" alt="Product 2" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag custom">Individualus</div>
      </div>
      <div className="product-info">
        <div className="product-style">Sceninis / Stage</div>
        <div className="product-name">Circuit Bodysuit</div>
        <div className="product-footer">
          <div className="product-price">120€</div>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>

    {/*  Card 3  */}
    <div className="product-card">
      <div className="product-img-placeholder p3">
        <img src="/images/product_3.png" alt="Product 3" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag sale">-20%</div>
      </div>
      <div className="product-info">
        <div className="product-style">Treniruotė / Training</div>
        <div className="product-name">Frequency Pants</div>
        <div className="product-footer">
          <div className="product-price">64€</div>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>

    {/*  Card 4  */}
    <div className="product-card">
      <div className="product-img-placeholder p4">
        <img src="/images/product_4.png" alt="Product 4" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag new">Nauja</div>
      </div>
      <div className="product-info">
        <div className="product-style">Tectonic / Electro</div>
        <div className="product-name">Pulse Top</div>
        <div className="product-footer">
          <div className="product-price">55€</div>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>

    {/*  Card 5  */}
    <div className="product-card">
      <div className="product-img-placeholder p5">
        <img src="/images/product_5.png" alt="Product 5" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      </div>
      <div className="product-info">
        <div className="product-style">Varžybos / Competition</div>
        <div className="product-name">Seismic Set</div>
        <div className="product-footer">
          <div className="product-price">145€</div>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>

    {/*  Card 6  */}
    <div className="product-card">
      <div className="product-img-placeholder p6">
        <img src="/images/product_6.png" alt="Product 6" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag custom">Komanda</div>
      </div>
      <div className="product-info">
        <div className="product-style">Crew / Komanda</div>
        <div className="product-name">Formation Kit</div>
        <div className="product-footer">
          <div className="product-price">nuo 75€</div>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  CUSTOM ORDERS  */}
<section className="custom-section" id="custom">
  <div className="custom-visual">
    <div className="custom-grid-art" style={{ opacity: 1, background: 'transparent' }}>
      <img src="/images/custom.png" alt="Custom Tailoring" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
    </div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
    <div className="custom-center">
      <div className="custom-circle">
        <div className="custom-circle-text">JŪSŲ<br />DIZAINAS<br />JŪSŲ<br />TAISYKLĖS</div>
      </div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }}>
        Individualus · Custom · Unikalus
      </div>
    </div>
  </div>

  <div className="custom-content">
    <div className="section-label"><span className="section-num">02</span> Individualūs užsakymai</div>
    <h2 className="section-headline">
      TAVO<br />
      JUDĖJIMAS,<br />
      <span>TAVO RŪBAS.</span>
    </h2>

    <div className="custom-steps">
      <div className="step">
        <span className="step-num">01 —</span>
        <div className="step-content">
          <h4>Susisiekite</h4>
          <p>Aprašykite šokio stilių, renginį ir pageidavimus. Atsakysime per 24 val.</p>
        </div>
      </div>
      <div className="step">
        <span className="step-num">02 —</span>
        <div className="step-content">
          <h4>Dizaino konsultacija</h4>
          <p>Kartu sukursime eskizą. Spalvos, medžiaga, siluetas — viskas pagal jus.</p>
        </div>
      </div>
      <div className="step">
        <span className="step-num">03 —</span>
        <div className="step-content">
          <h4>Siuvimas</h4>
          <p>Rankomis siuvamas rūbas su tiksliu matavimų pritaikymu.</p>
        </div>
      </div>
      <div className="step">
        <span className="step-num">04 —</span>
        <div className="step-content">
          <h4>Pristatymas</h4>
          <p>Gausite laiku prieš pasirodymą. Visoje Lietuvoje ir ES.</p>
        </div>
      </div>
    </div>

    <div style={{ marginTop: "48px" }}>
      <a href="#contact" className="btn-primary">Pradėkime →</a>
    </div>
  </div>
</section>

{/*  INSTAGRAM / SOCIAL  */}
<section className="social-section" id="social">
  <div className="section-label"><span className="section-num">03</span> Instagram</div>

  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
    <h2 className="section-headline" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
      SCENOJE.<br />
      REPETICIJOJE.<br />
      <span>GYVENIME.</span>
    </h2>
    <p className="section-desc">
      Realūs šokėjai, realūs rūbai. Sekite mūsų kolekciją Instagram.
    </p>
  </div>

  <div className="social-grid">
    <div className="social-item">
      <div className="social-placeholder">
        <svg viewBox="0 0 60 60" width="40" height="40"><circle cx="30" cy="22" r="10" fill="none" stroke="#00E5FF" strokeWidth="1.5"/><line x1="18" y1="38" x2="42" y2="38" stroke="#00E5FF" strokeWidth="1.5"/><line x1="30" y1="32" x2="30" y2="38" stroke="#00E5FF" strokeWidth="1.5"/><line x1="10" y1="48" x2="50" y2="48" stroke="#333" strokeWidth="0.5"/></svg>
      </div>
      <div className="social-overlay"><span>@tectonic.lt</span></div>
    </div>
    <div className="social-item">
      <div className="social-placeholder">
        <svg viewBox="0 0 60 60" width="40" height="40"><ellipse cx="30" cy="20" rx="10" ry="12" fill="none" stroke="#FF2D6B" strokeWidth="1.5"/><line x1="18" y1="36" x2="14" y2="54" stroke="#FF2D6B" strokeWidth="1.5"/><line x1="42" y1="36" x2="46" y2="54" stroke="#FF2D6B" strokeWidth="1.5"/><line x1="18" y1="36" x2="42" y2="36" stroke="#F0EEE8" strokeWidth="1.5"/></svg>
      </div>
      <div className="social-overlay"><span>@tectonic.lt</span></div>
    </div>
    <div className="social-item">
      <div className="social-placeholder">
        <svg viewBox="0 0 60 60" width="40" height="40"><circle cx="30" cy="18" r="9" fill="none" stroke="#00E5FF" strokeWidth="1.5"/><line x1="12" y1="36" x2="20" y2="52" stroke="#00E5FF" strokeWidth="1.5"/><line x1="48" y1="36" x2="40" y2="52" stroke="#00E5FF" strokeWidth="1.5"/><line x1="12" y1="36" x2="48" y2="36" stroke="#F0EEE8" strokeWidth="1.5"/><line x1="30" y1="36" x2="30" y2="52" stroke="#F0EEE8" strokeWidth="1.5"/></svg>
      </div>
      <div className="social-overlay"><span>@tectonic.lt</span></div>
    </div>
    <div className="social-item">
      <div className="social-placeholder">
        <svg viewBox="0 0 60 60" width="40" height="40"><polygon points="30,8 52,30 30,52 8,30" fill="none" stroke="#FF2D6B" strokeWidth="1.5"/><circle cx="30" cy="30" r="8" fill="#FF2D6B" opacity="0.25"/></svg>
      </div>
      <div className="social-overlay"><span>@tectonic.lt</span></div>
    </div>
    <div className="social-item">
      <div className="social-placeholder">
        <svg viewBox="0 0 60 60" width="40" height="40"><line x1="10" y1="50" x2="50" y2="10" stroke="#00E5FF" strokeWidth="1.5"/><circle cx="18" cy="42" r="8" fill="none" stroke="#00E5FF" strokeWidth="1.5"/><circle cx="42" cy="18" r="8" fill="none" stroke="#FF2D6B" strokeWidth="1.5"/></svg>
      </div>
      <div className="social-overlay"><span>@tectonic.lt</span></div>
    </div>
  </div>

  <div className="social-handle">
    <a href="https://instagram.com" target="_blank">@tectonic.lt</a>
    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", color: "#555", letterSpacing: "0.1em" }}># TECTONICLT · #SOKIURUBAI</span>
  </div>
</section>

{/*  BRAND STORY  */}
<section className="story-section" id="about">
  <div className="story-left">
    <span className="story-year">TCK</span>
    <blockquote className="story-quote">
      "Rūbas turi sekti judėjimą,<br />
      ne <span>stabdyti</span> jo."
    </blockquote>
  </div>

  <div className="story-right">
    <div className="section-label"><span className="section-num">04</span> Apie mus</div>

    <p>TECTONIC gimė iš aistros šokiui ir nusivylimo rūbais, kurie varžo. Electro dance reikalauja greičio, tikslumo ir energijos — kiekvienas rūbas turi tai atspindėti.</p>

    <p>Dirbame tik su šokėjais. Ne modeliais, ne manekeno figūromis. Testuojame kiekvieną siūlę varžybose, repeticijose ir scenoje, kol gauname tai, kas tikrai veikia.</p>

    <p>Kiekvienas kostiumai siuvamas Lietuvoje, rankomis, iš elastingų aukštos kokybės audinių. Minimalūs likučiai, maksimali kokybė.</p>

    <div className="story-tags">
      <span className="story-tag">Lietuviška gamyba</span>
      <span className="story-tag">Electro Dance</span>
      <span className="story-tag">Tectonic Style</span>
      <span className="story-tag">Varžybiniai kostiumai</span>
      <span className="story-tag">Sceniniai rūbai</span>
      <span className="story-tag">Individualus siuvimas</span>
    </div>
  </div>
</section>

{/*  CTA  */}
<section className="cta-section" id="contact">
  <div className="cta-bg-text">TCK</div>
  <div className="cta-content">
    <div className="section-label" style={{ justifyContent: "center" }}><span className="section-num">05</span> Kontaktai</div>
    <h2 className="cta-headline">
      JUDĖKITE<br />
      <span>DRAUGE.</span>
    </h2>
    <p className="cta-sub">
      Ieškote individualaus kostiumo, grupės uniformos ar tiesiog norite pakonsultuotis? Susisiekite — atsakysime per 24 val.
    </p>
    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <a href="mailto:info@tectonic.lt" className="btn-primary">✉ info@tectonic.lt</a>
      <a href="https://instagram.com" className="btn-ghost">Instagram →</a>
    </div>
  </div>
</section>

{/*  FOOTER  */}
<footer>
  <div className="footer-top">
    <div className="footer-brand">
      <span className="footer-logo">TEC<span>·</span>TONIC</span>
      <span className="footer-tagline">Šokių rūbai · Electro Dance</span>
      <p style={{ fontSize: "13px", color: "#555", fontWeight: "300", lineHeight: "1.6" }}>Vilnius, Lietuva<br />info@tectonic.lt</p>
    </div>
    <div className="footer-col">
      <h5>Kolekcija</h5>
      <ul>
        <li><a href="#">Naujienos</a></li>
        <li><a href="#">Tectonic stilius</a></li>
        <li><a href="#">Sceniniai</a></li>
        <li><a href="#">Komandos</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h5>Užsakymai</h5>
      <ul>
        <li><a href="#">Individualus užsakymas</a></li>
        <li><a href="#">Pristatymas</a></li>
        <li><a href="#">Grąžinimas</a></li>
        <li><a href="#">DUK</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h5>Sekite mus</h5>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">TikTok</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <span className="footer-copy">© 2025 TECTONIC. Visos teisės saugomos.</span>
    <span className="footer-copy" style={{ color: "#333" }}>Designed to move.</span>
  </div>
</footer>



    </>
  );
}
