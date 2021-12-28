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
    <div className="grid grid-cols-4 text-left gap-4">
      <img className="h-24" src={cover_url} alt="book cover" />
      <div className="text-gray-600">{title}</div>
      <div className="text-gray-800">{price}</div>
      <div className="text-gray-600">{quantity}</div>
    </div>
  );
}
