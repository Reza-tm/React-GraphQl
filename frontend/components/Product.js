import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import { formatMoney } from "../lib/formatMoney";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { DELETE_SINGLE_PRODUCT } from "../Graphql/mutations/DeleteSingleProduct";
import { ALL_PRODUCTS_QUERY } from "../Graphql/queries/ProductsQueries";
import DisplayError from "./ErrorMessage";

export default function Product({ product }) {
  const router = useRouter();
  const [submit, { loading, error }] = useMutation(DELETE_SINGLE_PRODUCT);
  const update = (cache, payload) => {
    cache.evict(cache.identify(payload.data.deleteProduct));
  };
  const deleteSingleProduct = async (event) => {
    const isConfirmed = confirm("Wana delete ?");
    try {
      const {
        data: { deleteProduct },
      } = isConfirmed && (await submit({ variables: { id: product.id }, update }));
    } catch (error) {
      console.log(error);
    }
  };
  if (error) return <DisplayError error={error}></DisplayError>;
  return (
    <ItemStyles>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
      <Title onClick={() => router.push(`/product/${product.id}`)}>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <div className="item-buttons">
        <p onClick={() => router.push({ pathname: `/update/`, query: { id: product.id } })}>Edit ✏️</p>
        <p onClick={() => deleteSingleProduct()}>Delete 🗑</p>
      </div>
    </ItemStyles>
  );
}
