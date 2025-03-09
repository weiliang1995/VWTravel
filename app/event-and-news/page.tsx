export default function EventAndNews() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      <h1 className="font-hanalei text-9xl mb-12">No updated event and news</h1>
      <p className="text-3xl">
        Stay tuned. Subscribe us to get latest event, news and promotions!
      </p>
      <div className="mt-8 flex gap-4 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="border-amber-300 border-2 rounded-xl p-2 text-xl"
        />
        <button className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400">
          Subscribe
        </button>
      </div>
    </div>
  );
}
