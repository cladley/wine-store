import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Colin",
      email: "admin@example.com",
      role: "admin",
      password: hashSync("123456", 10),
    },
    {
      name: "Kat",
      email: "kat@example.com",
      role: "user",
      password: hashSync("123456", 10),
    },
  ],
  wines: [
    {
      name: "Ozzy Red",
      slug: "ozzy-red",
      category: "red",
      image: "/images/ozzy-white.webp",
      region: "Australia",
      description: "A great fruity red",
      price: 12.99,
      rating: 3.8,
      isFeatured: false,
    },
    {
      name: "The Society's Chardonnay",
      slug: "society-chardonnay",
      image: "/images/ozzy-white.webp",
      category: "white",
      region: "Australia",
      description: "A great fruity white",
      price: 12.99,
      rating: 3.9,
      isFeatured: false,
    },
    {
      name: "Baccolo Appassimento",
      slug: "baccolo-appassimento",
      image: "/images/it40701_baccolo-appassimento-rosso-veneto-2022_1.webp",
      category: "red",
      region: "Italy",
      description: "Medium body red with rich choco flavours",
      price: 18.5,
      rating: 4.2,
      isFeatured: false,
    },
    {
      name: "Ansonica Bianco",
      slug: "ansonica-bianco",
      image: "/images/ansonica-bianco.webp",
      category: "white",
      region: "Italy",
      description: "Light and fresh. Great for a summers eve",
      price: 9.99,
      rating: 3.8,
      isFeatured: false,
    },
  ],
};

export default sampleData;
