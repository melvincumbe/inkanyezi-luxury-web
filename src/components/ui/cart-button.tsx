
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/components/ui/product-card";

export function CartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      variant="outline"
      size="sm"
      className="w-full mt-2 font-montserrat text-sm"
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Adicionar ao Carrinho
    </Button>
  );
}
