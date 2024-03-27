export default function AnimationHeartSkull() {
  return (
    <div className="flex items-center gap-2 p-8">
      <div className="flex flex-col">
        <p>DD</p> <p className="text-center">+</p> <p>WU </p>
      </div>
      <span>=</span>
      <div
        className="h-10 w-10 justify-center bg-contain bg-no-repeat animate-imageChange"
        alt="alternating image of a heart and a skull to represent the relationship between designers and developers"
      />
    </div>
  );
}
