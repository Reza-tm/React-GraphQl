import { useEffect, useState } from "react";

export const useForms = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const changeHandler = (e) => {
    let { value, name, type, files } = e.target;
    if (type == "number") value = parseInt(value);
    if (type == "file") [value] = files;
    setInputs({ ...inputs, [name]: value });
  };
  const clearForm = () => {
    const cleared = Object.entries(inputs).map(([key, value]) => [key, ""]);
    setInputs(Object.fromEntries(cleared));
  };

  return { inputs, changeHandler, clearForm };
};
