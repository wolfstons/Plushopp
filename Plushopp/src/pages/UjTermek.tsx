import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";

function UjTermek(){
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`A megadott termék: ${title}`);
    navigate("/admin");
  }

  return (
    <section>
      <h2>Új termék felvétele</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Termék neve:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Mentés</button>
      </form>
    </section>
  );
}

export default UjTermek;