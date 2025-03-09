import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      <h1 className="text-9xl mb-12 font-hanalei">Not Found</h1>
      <p className="text-2xl mb-8">
        The page you are looking for does not exist.
      </p>
      <p className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400">
        Redirect to <Link href="/">Home</Link>
      </p>
    </div>
  );
}
