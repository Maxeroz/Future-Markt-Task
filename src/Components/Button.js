export function Button({
  children,
  style,
  square,
  vector,
  vectorStyle,
  userStyle,
  mainClass,
}) {
  return (
    <div className={mainClass}>
      <button className={style}>{children}</button>
      <div className={square} style={userStyle}>
        <img src={vector} className={vectorStyle}></img>
      </div>
    </div>
  );
}
