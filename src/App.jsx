import React, { useState, useEffect, memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

      fbq("init", "YOUR_PIXEL_ID"); // <- вставь свой Pixel ID
      fbq("track", "PageView", { service });
    } else {
      fbq("track", "PageView", { service });
    }
  }, [service]);

  // Можно создать функцию для отслеживания Lead
  const trackLead = () => {
    if (window.fbq) {
      fbq("track", "Lead", { service });
    }
  };

  // Экспорт функции, если понадобится вызывать вручную
  window.trackLead = trackLead;

  return null;
}

// ================= Header =================
function Header() {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Book now", path: "#leadform" },
    { title: "Pay in Installments", path: "#leadform" },
    { title: "Why we?", path: "#whywe" },
  ];

  return (
    <>
      <nav role="navigation" className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="/">
            <img
              fetchPriority="low"
              src={logo}
              width={70}
              height={40}
              alt="Laborer Logo Matanato Home Services"
              className="rounded-2xl"
            />
          </a>
          <button
            aria-label="Menu"
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
            state ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static" : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li className="text-gray-500 hover:text-red-700" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
          <li className="order-2 py-8 md:py-0">
            <a
              href="tel:+13468002250"
              className="py-8 px-5 rounded-lg font-medium text-white text-center bg-red-700 hover:bg-red-500 active:bg-red-700 duration-150 block md:py-3 md:hidden"
            >
              CALL NOW!
            </a>
          </li>
          
        </ul>
      </nav>

      <header role="banner" className="py-4">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Plumbing Issue? — <span className="text-red-700">We Fix It Today.</span>
            </h2>
            <p>
              Fast plumbing service for <span className="font-bold">leaks, clogged drains, water heaters, toilets & more.</span>{" "}
              Same-day service available.
            </p>
            <div className="items-center gap-x-3 space-y-2 sm:flex sm:space-y-0">
              <a
                href="tel:+13468002250"
                className="py-4 px-5 rounded-lg font-medium text-2xl text-white text-center bg-red-700 hover:bg-red-500 active:bg-red-700 duration-150 block md:py-3 md:inline"
              >
                Call Now!
              </a>
              <a
                href="https://wa.me/13468002250"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-5 rounded-lg font-medium text-2xl text-white text-center bg-green-500 hover:bg-green-400 active:bg-green-700 duration-150 block md:py-3 md:inline"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="flex-none mt-2 md:mt-0 md:max-w-xl">
            <img src={business} className="hidden md:block md:rounded-tl-[108px]" alt="business-usa" />
          </div>
        </div>
      </header>
    </>
  );
}

// ================= About =================
function About() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="sm:hidden lg:block p-4">
            <img src={instants} width="640" height="360" className="rounded-lg shadow-xl" alt="Partners" />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-red-700 font-semibold">Flexible payment options available</h3>
            <p className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Fix It Today — Pay Over Time</p>
            <p className="mt-3">
              Don’t let plumbing problems get worse because of cost.
            </p>
            <div className="p-4 bg-gray-200 rounded-xl shadow-xl">
              <h4 className="font-bold text-2xl mb-2">As low as $25/month for eligible customers</h4>
              <ul className="list-none p-6">
                <li>✔ Pay in 4 easy installments</li>
                <li>✔ Quick approval</li>
                <li>✔ No large upfront payment</li>
              </ul>
              <a
                href="#leadform"
                className="mt-4 block py-2 px-4 text-center text-white font-medium bg-red-700 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Check Payment Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= Benefits =================
function Benefits() {
  return (
    <section className="py-10 px-4 md:px-10 rounded-2xl shadow-md md:max-w-4xl mx-auto my-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Small Leak Today — Big Damage Tomorrow
      </h2>
      <p className="text-xl font-semibold text-center text-gray-800 mb-10">
       A leaking pipe or clogged drain won’t fix itself.
      </p>
      <p className="text-3xl font-bold text-center text-red-700 mb-10">Fix it now — before it gets worse.</p>
    </section>
  );
}

// ================= CTA =================
function CTA() {
  return (
    <section className="relative overflow-hidden py-12 mt-20 px-4 bg-gray-900 md:px-8">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
      <div className="max-w-xl mx-auto text-center relative">
        <div className="py-4">
          <h3 className="text-xl text-gray-200 font-semibold md:text-2xl">Need a plumber today?</h3>
          <h4 className="text-sm text-gray-200 mt-4">Fast service. Pay later.</h4>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
          <a
            href="#leadform"
            className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
          >
            Book Repair
          </a>
          <a
            href="tel:+13468002250"
            className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
          >
            Call now!
          </a>
        </div>
      </div>
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
    <section className="bg-gray-50 my-12 py-10 px-4 md:px-10 rounded-2xl shadow-md max-w-6xl mx-auto" id="whywe">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Customers Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================= LeadGen Form =================
const LeadGen = memo(() => (
  <section id="leadform" className="py-6 mx-2 border rounded-xl shadow-2xl px-2">
    <h2 className="text-3xl text-center mb-6">Book in 30 seconds</h2>
    <form
      action="https://formsubmit.co/9ea20dd43ccb96c2127e1c12150aeeda"
      method="POST"
      className="max-w-xl mx-auto space-y-4"
      onSubmit={() => {
      if (window.trackLead) window.trackLead();
      }}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://plumbing.matanato.com/thank-you" />
      <input type="hidden" name="_subject" value="New lead - Plumbing!" />

      <input type="name" name="name" placeholder="Name" required className="w-full p-3 border rounded" />
      <input type="phone" name="phone" placeholder="Phone" required className="w-full p-3 border rounded" />
      <input type="text" name="zip" placeholder="ZIP code" required className="w-full p-3 border rounded" />
      <textarea type="textarea" name="issue" placeholder="Describe your plumbing issue" required className="w-full p-3 border rounded" />

      <label>
        <input type="checkbox" name="installments" /> Pay in installments
      </label>

      <button className="w-full bg-red-700 text-white py-4 rounded-xl text-xl">Book Now</button>
    </form>
  </section>
));

// ================= ThankYou Page =================
function ThankYou() {
  useEffect(() => {
    if (window.fbq) fbq("track", "Lead"); // Конверсия Facebook
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Thank you!</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Your request has been received. We will contact you shortly (usually in 5-10 min)
      </p>
      <a
        href="/"
        className="py-3 px-6 bg-red-700 text-white rounded-lg hover:bg-red-500 transition"
      >
        Return Home
      </a>
    </div>
  );
}

// ================= App =================
export default function App() {
  return (
    <>
      <Pixel service="Plumbing"/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Header />
              <LeadGen />
              <Benefits />
              <About />
              <WhyWe />
              <CTA />
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}