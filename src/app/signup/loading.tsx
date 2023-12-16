import { ImSpinner4 } from 'react-icons/im';

export default function Loading() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-7">
      <ImSpinner4 style={{ width: 100, height: 100 }} />
      <h3 className="text-3xl font-extrabold uppercase text-orange-700">
        Loading...
      </h3>
    </section>
  );
}
