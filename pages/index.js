import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

export default function Home({ session }) {
  console.log(session);
  if (session) {
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>facebook</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* header */}
        <Header />

        <main className="flex">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widget */}

          <Widget />
        </main>
      </div>
    );
  } else {
    return <Login />;
  }
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
