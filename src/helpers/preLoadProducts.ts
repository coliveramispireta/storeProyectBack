import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experimenta poder y elegancia con el iPhone 11: captura momentos impresionantes con su sistema de cámara dual, disfruta de un rendimiento excepcional y sumérgete en una brillante pantalla Liquid Retina. ¡Descubre un mundo de posibilidades en la palma de tu mano!",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/sku16870025_01/public",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Abraza la eficiencia y la sofisticación con el MacBook Air: el diseño ligero se encuentra con un rendimiento potente, la impresionante pantalla Retina da vida a tu trabajo y la duración de la batería durante todo el día te mantiene productivo dondequiera que vayas. Eleva tu experiencia informática con el MacBook Air.",
    image:
      "https://rymportatiles.com.pe/cdn/shop/files/MacBook-Air-A2681-2_0b395418-4263-4908-8532-1b07f2dcb8fb.jpg?v=1696021829&width=1214",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Libera tu creatividad y productividad con el iPad Pro: un rendimiento potente, una impresionante pantalla Liquid Retina y una duración de la batería durante todo el día hacen del iPad Pro la herramienta perfecta para el trabajo y el juego. Transforma tus ideas en realidad con el iPad Pro.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2021?wid=1150&hei=1150&fmt=jpeg&qlt=95&.v=1674663706569",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Mantente conectado y saludable con el Apple Watch Series 6: sigue tus entrenamientos, controla tu salud y mantente en contacto con las personas e información que más te importan. Experimenta el futuro de la salud y el bienestar con el Apple Watch Series 6.",
    image:
      "https://i5.walmartimages.com/seo/Apple-Watch-Series-6-GPS-Cellular-44mm-Space-Gray-Aluminum-Case-with-Black-Sport-Band-Regular_5de04241-90ef-4d86-8e65-96c4aa997577.3881622b75ac5f0a57f3ceb4d41e814e.jpeg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Sumérgete en el sonido con los AirPods Pro: la cancelación activa de ruido, el modo de transparencia y el ajuste personalizable hacen que los AirPods Pro sean el compañero perfecto para la música, las llamadas y todo lo demás. Eleva tu experiencia de audio con los AirPods Pro.",
    image:
      "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Eleva tu experiencia de audio en casa con el HomePod mini: sonido envolvente, asistente inteligente y centro de hogar inteligente hacen del HomePod mini la adición perfecta a tu hogar. Disfruta de un mundo de música, noticias y más con el HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/i/images/overview/hero_homepod_blue__eobtqej8h9me_large.png",
    categoryId: 6,
    stock: 10,
  },
];


export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
