import React from "react";
import Form from "./styles/Form";
import { useForms } from "../lib/useForms";
import { CREATE_PRODUCT_MUTATION } from "../Graphql/mutations/CreateProductMutation";
import { useMutation } from "@apollo/client";
import DisplayError from "../components/ErrorMessage";
import { ALL_PRODUCTS_QUERY } from "../Graphql/queries/ProductsQueries";
import { useRouter } from "next/router";

const CreateProducts = () => {
  const router = useRouter();
  const { inputs, changeHandler, clearForm } = useForms();
  const [submit, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION);
  return (
    <Form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          const {
            data: { createProduct },
          } = await submit({ variables: inputs, refetchQueries: [{ query: ALL_PRODUCTS_QUERY }] });
          clearForm();
          router.push({ pathname: `/product/${createProduct.id}` });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label>
          Image
          <input name="image" id="image" type="file" onChange={changeHandler} />
        </label>
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
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
};

export default CreateProducts;
