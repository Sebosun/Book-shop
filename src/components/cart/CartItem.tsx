import type { ReactElement } from "react";

interface cartTypes {
  title: string;
  cover_url: string;
  price: number;
  quantity: number;
}

export default function CartItem({
  title,
  cover_url,
  price,
  quantity,
}: cartTypes): ReactElement | null {
  return (
    <div className="flex gap-4 justify-evenly p-2 text-left shadow-md md:grid md:grid-cols-9">
      <img
        className="justify-self-start h-24"
        src={cover_url}
        alt="book cover"
      />
      <div className="col-span-6 text-gray-600">{title}</div>
      <div className="justify-self-end text-gray-600">{quantity}</div>
      <div className="justify-self-end text-gray-800">{price} zl</div>
    </div>
  );
}
