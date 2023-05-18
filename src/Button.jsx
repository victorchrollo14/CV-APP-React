
function Button({children, cname}) {
    return(
        <button className={`${cname} btn`}>{children}</button>
    )
}

export function AddButton() {
    return (
        <Button cname={"add-btn"}>Add</Button>
    )
}

export function DeleteButton() {
    return (
        <Button cname={"del-btn"}>Delete</Button>
    )
}