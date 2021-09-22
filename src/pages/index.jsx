import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "store";

import Form from "components/form";

export default () => {
  const { user, register } = useContext(Context);
  const history = useHistory();

  const goToUser = () => {
    history.push("/user");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  const handleClickSubmit = async (formData) => {
    await register(formData);
  };

  return (
    <section>
      <h2>Home page</h2>
      <Form handleClickSubmit={handleClickSubmit} />
      <section>
        {!user && <button onClick={goToLogin}>To login page</button>}
        {user && <button onClick={goToUser}>To user page</button>}
      </section>
    </section>
  );
};
