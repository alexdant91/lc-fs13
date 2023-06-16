import { useState } from "react";

export const Form = ({ handleSubmit, number }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm((_form) => {
      return {
        ..._form,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event, form)}>
        <input
          type="text"
          name="name"
          value={form.name}
          onInput={handleInput}
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onInput={handleInput}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onInput={handleInput}
        />
        <button type="submit">Invio</button>
      </form>
      <p>Inner Form:{number}</p>
    </>
  );
};
