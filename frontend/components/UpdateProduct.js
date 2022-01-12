import Form from "./styles/Form";
import { useForms } from "../lib/useForms";
import { useMutation, useQuery } from "@apollo/client";
import DisplayError from "../components/ErrorMessage";
import { FIND_SINGLE_PRODUCT } from "../Graphql/queries/ProductsQueries";
import { UPDATE_SINGLE_PRODUCT_MUTATION } from "../Graphql/mutations/UpdateSingleProductMutation";

const UpdateProduct = ({ id }) => {
  const { data, error, loading } = useQuery(FIND_SINGLE_PRODUCT, { variables: id });
  const [submit, { loading: updateLoading }] = useMutation(UPDATE_SINGLE_PRODUCT_MUTATION);
  if (error) return <DisplayError error={error} />;
  const { inputs, changeHandler } = useForms(
    data?.Product || {
      name: "",
      description: "",
      price: "",
    }
  );
  if (loading) return <h2>loading ...</h2>;
  if (updateLoading) return <h2>loading ...</h2>;

  return (
    <Form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          const {
            data: { updateProduct },
          } = await submit({
            variables: { id: id.id, name: inputs.name, price: inputs.price, description: inputs.description },
          });
        } catch (error) {
          console.log("UpdateProduct Error !", error);
        }
      }}
    >
      <fieldset disabled={loading} aria-busy={loading}>
        <label>
          Description
          <textarea name="description" id="description" onChange={changeHandler} value={inputs.description} />
        </label>
        <label>
          Name
          <input name="name" id="name" type="text" placeholder="Name" value={inputs.name} onChange={changeHandler} />
        </label>
        <label>
          Price
          <input name="price" id="price" type="number" placeholder="price" value={inputs.price} onChange={changeHandler} />
        </label>
        <button type="submit">+ Update Product</button>
      </fieldset>
    </Form>
  );
};

export default UpdateProduct;
