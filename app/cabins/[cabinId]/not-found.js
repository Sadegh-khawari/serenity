import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold ">
        This cabin could not be found :(
      </h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 py-3 px-6 text-lg"
      >
        Go to all cabins
      </Link>
    </main>
  );
};

export default NotFound;
