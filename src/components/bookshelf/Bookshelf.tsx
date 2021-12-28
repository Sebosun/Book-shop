import React, { ReactElement } from "react";

interface bookTypes {
  cover_url: string;
  title: string;
  author: string;
  pageNumber: number;
}

export default function Bookshelf({
  cover_url,
  title,
  author,
  pageNumber,
}: bookTypes): ReactElement | null {
  return (
    <div className="flex flex-col max-w-xs">
      <img className="object-contain h-96" src={cover_url} />
      <div>{title}</div>
      <div>{author}</div>
      <div>{pageNumber}</div>
      <button>Dodaj do koszyka</button>
    </div>
  );
}
