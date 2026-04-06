import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import Link from "next/link";


export default function NewProductPage() {
  return (
    <>

        <Link
    href='/admin/products?page=1'
    className="rounder bg-gray-400 font-bold py-2 px-10"
    >volver</Link>
        <Heading>Nuevo producto</Heading>
    
    <AddProductForm>
        <ProductForm />
     </AddProductForm >
    </>
  )
}
