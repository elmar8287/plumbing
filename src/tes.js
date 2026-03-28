import React, { useState, useEffect, memo } from "react";
import { Routes, Route } from "react-router-dom";

import logo from "./data/MATANATO_LOGO.PNG";
import instants from "./data/klarna.webp";
import business from "./data/payment_ways.webp";

// ================= Pixel =================
function Pixel({ service }) {
  useEffect(() => {
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      fbq("init", "YOUR_PIXEL_ID");
      fbq("track", "PageView", { service });
    } else {
      fbq("track", "PageView", { service });
    }
  }, [service]);

  const trackLead = () => {
    if (window.fbq) {
      fbq("track", "Lead", { service });
    }
  };

  window.trackLead = trackLead;

  return null;
}

// ================= Header =================
function Header() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Book now", path: "#leadform" },
    { title: "Pay in Installments", path: "#leadform" },
    { title: "Why us?", path: "#whywe" },
  ];

  return (
    <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl md:flex">
        <div className="flex justify-between">
          <a href="/">
            <img src={logo} width={70} height={40} alt="Matanato Plumbing" />
          </a>

          <button onClick={() => setState(!state)} className="md:hidden">
            ☰
          </button>
        </div>

        <ul className={`${state ? "block" : "hidden"} md:flex`}>
          {navigation.map((item, idx) => (
            <li key={idx}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="py-6">
        <div className="max-w-screen-xl mx-auto md:flex">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold">
              Plumbing Issue? — <span className="text-red-700">We Fix It Today.</span>
            </h1>

            <p>
              Fast plumbing service for{" "}
              <b>leaks, clogged drains, water heaters, toilets & more.</b>
              Same-day service available.
            </p>

            <div className="flex gap-3">
              <a href="tel:+13468002250" className="bg-red-700 text-white px-5 py-3 rounded">
                Call Now
              </a>

              <a
                href="https://wa.me/13468002250"
                target="_blank"
                className="bg-green-500 text-white px-5 py-3 rounded"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <img src={business} className="hidden md:block" alt="plumbing service" />
        </div>
      </header>
    </>
  );
}

// ================= About =================
function About() {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto md:flex">
        <img src={instants} className="hidden md:block" alt="payments" />

        <div>
          <h3 className="text-red-700">Flexible payment options</h3>
          <h2 className="text-3xl font-bold">Fix Now — Pay Later</h2>

          <p>Don’t let plumbing problems get worse because of cost.</p>

          <div className="bg-gray-200 p-4 rounded">
            <h4 className="font-bold">As low as $25/month</h4>
            <ul>
              <li>✔ Pay in 4 installments</li>
              <li>✔ Quick approval</li>
              <li>✔ No upfront payment</li>
            </ul>

            <a href="#leadform" className="bg-red-700 text-white px-4 py-2 block mt-3 text-center">
              Check Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= Benefits =================
function Benefits() {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">
        Small Leak Today — Big Damage Tomorrow
      </h2>

      <p className="mt-4">
        A leaking pipe or clogged drain won’t fix itself.
      </p>

      <p className="text-red-700 text-xl mt-2">
        Fix it now before it gets worse.
      </p>
    </section>
  );
}

// ================= WhyWe =================
function WhyWe() {
  const benefits = [
    { title: "🚰 Same-Day Service", desc: "We fix urgent plumbing issues fast." },
    { title: "💰 Transparent Pricing", desc: "No hidden fees ever." },
    { title: "🧰 Skilled Plumbers", desc: "Experienced professionals." },
    { title: "🛠 All Plumbing Jobs", desc: "Leaks, drains, heaters, toilets." },
  ];

  return (
    <section id="whywe" className="py-10">
      <h2 className="text-center text-2xl font-bold">Why Choose Us?</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {benefits.map((item, i) => (
          <div key={i} className="p-4 shadow rounded">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================= CTA =================
function CTA() {
  return (
    <section className="bg-gray-900 text-white text-center py-10">
      <h3>Need a plumber today?</h3>
      <p>Fast service. Pay later.</p>

      <a href="#leadform" className="bg-white text-black px-5 py-2 mt-4 inline-block">
        Book Now
      </a>
    </section>
  );
}

// ================= LeadGen =================
const LeadGen = memo(() => (
  <section id="leadform" className="py-6">
    <h2 className="text-2xl text-center mb-4">Book in 30 seconds</h2>

    <form
      action="https://formsubmit.co/9ea20dd43ccb96c2127e1c12150aeeda"
      method="POST"
      onSubmit={() => window.trackLead && window.trackLead()}
      className="max-w-xl mx-auto space-y-4"
    >
      <input type="hidden" name="_next" value="https://plumbing.matanato.com/thank-you" />

      <input name="name" placeholder="Name" required className="w-full p-3 border" />
      <input name="phone" placeholder="Phone" required className="w-full p-3 border" />
      <input name="zip" placeholder="ZIP code" required className="w-full p-3 border" />
      <textarea name="issue" placeholder="Describe your plumbing issue" required className="w-full p-3 border" />

      <label>
        <input type="checkbox" name="installments" /> Pay in installments
      </label>

      <button className="w-full bg-red-700 text-white py-3">Book Now</button>
    </form>
  </section>
));

// ================= ThankYou =================
function ThankYou() {
  useEffect(() => {
    if (window.fbq) fbq("track", "Lead");
  }, []);

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p>We will call you shortly.</p>
    </div>
  );
}

// ================= App =================
export default function App() {
  return (
    <>
      <Pixel service="Plumbing" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LeadGen />
              <Benefits />
              <About />
              <WhyWe />
              <CTA />
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}