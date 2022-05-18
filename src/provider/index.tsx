import { ReactNode } from "react";
import { CartProvider } from "./cart-provider";
import { ProductProvider } from "./product-provider";
import { LightDarkProvider } from "./LightDark";
import { AuthProvider } from "./auth";

interface ChildrenProps {
  children: ReactNode;
}

const Provider = ({ children }: ChildrenProps) => {
  return (
      <CartProvider>
        <LightDarkProvider>
          <AuthProvider>
            <ProductProvider>{children}</ProductProvider>
          </AuthProvider>
        </LightDarkProvider>
      </CartProvider>
  );
};

export default Provider;
