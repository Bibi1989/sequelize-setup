export const bookValidation = (body) => {
  const error = [];
  const { title, price, description } = body;
  if (!title) {
    error.push({ title: "Title field should not be empty" });
  }
  if (!price) {
    error.push({ price: "Price field should not be empty" });
  }
  if (!description) {
    error.push({ description: "Description field should not be empty" });
  }

  return {
    error,
    body,
  };
};
