import type { ReactElement } from "react";

export default function OrderComplete(): ReactElement | null {
  return (
    <div className="text-2xl mt-20">
      <h1 className="text-4xl p-4 text-sky-600">Gratulacje!</h1>
      <p>Twoje zamowienie zostalo zlozone :)</p>
    </div>
  );
}
