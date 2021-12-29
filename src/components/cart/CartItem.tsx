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
    <div className="flex justify-evenly shadow-md p-2 md:grid md:grid-cols-9 text-left gap-4">
      <img
        className="justify-self-start h-24"
        src={cover_url}
        alt="book cover"
      />
      <div className="col-span-6 text-gray-600">{title}</div>
      <div className="text-gray-600 justify-self-end">{quantity}</div>
      <div className="text-gray-800 justify-self-end">{price} zl</div>
    </div>
  );
}
