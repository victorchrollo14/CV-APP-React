export function Button({ children, cname, onClick }) {
  return (
    <button className={`${cname} btn`} onClick={onClick}>
      {children}
    </button>
  );
}

export function AddButton() {
  function addItem() {
    console.log("add");
  }

  return (
    <Button cname={"add-btn"} onClick={addItem}>
      Add
    </Button>
  );
}

export function DeleteButton() {
  function deleteItem() {}

  return (
    <Button cname={"del-btn"} onClick={deleteItem}>
      Delete
    </Button>
  );
}
