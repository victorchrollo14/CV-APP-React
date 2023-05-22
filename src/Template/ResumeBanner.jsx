const WrapperDesign = () => {
  return (
    <svg
  width={305}
  height={30}
  viewBox="0 0 305 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
    <rect x="60.5" y="0.5" width={184} height={29} stroke="white" /> 
  <line
    x1={245}
    y1="16.25"
    x2={305}
    y2="16.25"
    stroke="white"
    strokeWidth="1.5"
  />
  <line
    x1={245}
    y1="23.25"
    x2={275}
    y2="23.25"
    stroke="white"
    strokeWidth="1.5"
  />
  <line
    x1={245}
    y1="9.25"
    x2={275}
    y2="9.25"
    stroke="white"
    strokeWidth="1.5"
  />
  <line x1={60} y1="15.75" y2="15.75" stroke="white" strokeWidth="1.5" />
  <line x1={60} y1="8.75" x2={30} y2="8.75" stroke="white" strokeWidth="1.5" />
  <line
    x1={60}
    y1="22.75"
    x2={30}
    y2="22.75"
    stroke="white"
    strokeWidth="1.5"
  />
  <text x="152.5" y="15" textAnchor="middle" dominantBaseline="middle" fill="white" className="profession">Profession</text>
</svg>

  );
};

export function Banner() {
  return (
    <div className="banner">
      <h1>Kimi No Na wa</h1>
      <WrapperDesign />
    </div>
  );
}
