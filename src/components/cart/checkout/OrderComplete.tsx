import type { ReactElement } from "react";

export default function OrderComplete(): ReactElement | null {
  return (
    <div className="mt-20 text-2xl">
      <h1 className="p-4 text-4xl text-sky-600">Gratulacje!</h1>
      <p>Twoje zamowienie zostalo zlozone :)</p>
    </div>
  );
}
