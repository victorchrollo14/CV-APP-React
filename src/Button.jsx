export function Button({ children, cname, onClick }) {
  return (
    <button className={`${cname} btn`} onClick={onClick}>
      {children}
    </button>
  );
}

export function AddButton({onClick}) {

  return <Button cname={"add-btn"} onClick={onClick}>Add</Button>;
}

export function DeleteButton({onClick}) {
  return <Button cname={"del-btn"} onClick={onClick}>Delete</Button>;
}
