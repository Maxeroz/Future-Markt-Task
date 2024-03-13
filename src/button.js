export function Button({
  children,
  style,
  square,
  vector,
  vectorStyle,
  userStyle,
}) {
  return (
    <div className="full_btn">
      <button className={style}>{children}</button>
      <div className={square} style={userStyle}>
        <img src={vector} className={vectorStyle}></img>
      </div>
    </div>
  );
}
