function Spinner() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-[conic-gradient(transparent_10%,_#e2e8f0)] [mask:radial-gradient(farthest-side,transparent_calc(100%-8px),_#000_0)] animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
}

export default Spinner;
