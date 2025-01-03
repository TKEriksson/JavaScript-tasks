type HelloProps = {
  onClick: () => void; 
  onClick2: () => void;
  count: number; 
  children: React.ReactNode; // Will get content between <hello> and </hello>.
};

const Hello = ({ onClick, onClick2, count, children }: HelloProps) => {
  return (
    <div>
      <b>This is a component!</b><br/><br/>
      <button className="myButton" onClick={onClick}>A button ({count} + count)</button><br/><br/>
      <button className="myButton2" onClick={onClick2}>Reset counts</button>
      <div>{children}</div>
    </div>
  )
}

export default Hello
