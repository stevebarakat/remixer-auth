import { useState } from "react";
import Layout from "~/components/Layout";
import FormField from "~/components/FormField";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value,
    }));
  };

  return (
    <Layout>
      <main className="main">
        <h2>Welcomem to Kudos!</h2>
        <p>Log in to give some praise.</p>

        {JSON.stringify(formData)}

        <form>
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </form>
      </main>
    </Layout>
  );
}
