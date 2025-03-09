type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400">
      {children}
    </button>
  );
}
