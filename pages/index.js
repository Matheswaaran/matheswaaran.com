import dynamic from 'next/dynamic'

const HomeSections = dynamic(
  () => import('../components/HomeSections'),
  {ssr: false}
);

export default function Home() {
  return (
    <HomeSections/>
  );
}
