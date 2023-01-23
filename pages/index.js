import dynamic from "next/dynamic";

const Impress = dynamic(() => import("../components/Impress"), { ssr: false });

export default function Home() {
  return <Impress />;
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
