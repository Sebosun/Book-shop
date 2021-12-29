const fetchBooks = async () => {
  const request = await fetch("http://localhost:3001/api/book");
  if (request.body) {
    const reader = request.body.getReader();
    const readReader = await reader.read();
    const decode = new TextDecoder().decode(readReader.value);
    return JSON.parse(decode);
  } else {
    console.error("Something went wrong");
    return false;
  }
};

export default fetchBooks;
