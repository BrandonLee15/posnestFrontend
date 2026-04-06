import Heading from "@/components/ui/Heading";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="text-center">
        <Heading>producto no encontrado</Heading>

        <p>regresa a la pagina <Link className="text-green-400" href='/admin/products?page=1'>anterior</Link></p>

    </div>
  )
}
