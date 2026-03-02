"use client";

export default function FloatingButtons() {
  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        ↑
      </button>

      <a
        href="https://wa.me/628123456789"
        target="_blank"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </>
  );
}