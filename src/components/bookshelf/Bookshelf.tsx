import React, { ReactElement } from "react";

interface bookTypes {
  imageSrc: string;
  title: string;
  author: string;
  pageNumber: number;
}

export default function Bookshelf(): ReactElement | null {
  return (
    <div className="flex flex-col max-w-xs">
      <img src="https://i.imgur.com/nuPBO0I.jpeg" />
      <div>Title</div>
      <div>Author</div>
      <div>Page no.</div>
      <button>Dodaj do koszyka</button>
    </div>
  );
}
