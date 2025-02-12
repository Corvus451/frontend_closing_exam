

const DeleteButton = ({id, onDelete})=> {

    const handleDelete = ()=> {
        onDelete(id);
    }

    return (
        <button className="btn btn-danger" type="button" onClick={handleDelete}>Delete</button>
    );
}

export default DeleteButton;