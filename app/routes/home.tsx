import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import Layout from "~/components/Layout";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export default function Home() {
  return (
    <Layout>
      <h2>Home Page</h2>
    </Layout>
  );
}
