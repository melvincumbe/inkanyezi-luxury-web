import { Link } from "react-router-dom";
import { Badge } from "./badge";
import { CartButton } from "./cart-button";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  isExclusive?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-sm bg-gray-100 group-hover:opacity-90 transition-opacity">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
        {product.isExclusive && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-luxury-gold text-luxury-black font-montserrat text-xs">
              Exclusive
            </Badge>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <div>
            <h3 className="font-playfair text-sm font-medium text-luxury-black">
              <Link to={`/products/${product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 font-montserrat text-xs text-gray-600 uppercase tracking-wider">{product.brand}</p>
          </div>
          <p className="font-montserrat text-sm font-medium text-luxury-black">${product.price.toLocaleString()}</p>
        </div>
        <CartButton product={product} />
      </div>
    </div>
  );
}
