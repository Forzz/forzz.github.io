export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden hidden md:block"
    >
      {/* Верхний левый — индиго */}
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-indigo-500/[0.07] dark:bg-indigo-500/[0.09] blur-3xl" />
      {/* Нижний правый — фиолетовый */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full bg-violet-500/[0.06] dark:bg-violet-500/[0.08] blur-3xl" />
      {/* Центр — очень слабый highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-indigo-400/[0.03] dark:bg-indigo-400/[0.04] blur-3xl" />
    </div>
  );
}
