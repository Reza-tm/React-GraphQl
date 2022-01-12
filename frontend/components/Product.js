import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import { formatMoney } from "../lib/formatMoney";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();
  return (
    <ItemStyles>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
      <Title onClick={() => router.push(`/product/${product.id}`)}>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <div className="item-buttons">
        <p onClick={() => router.push({ pathname: `/update/`, query: { id: product.id } })}>Edit ✏️</p>
        <p onClick={() => router.push({ pathname: `/update/`, query: { id: product.id } })}>Delete 🗑</p>
      </div>
    </ItemStyles>
  );
}
