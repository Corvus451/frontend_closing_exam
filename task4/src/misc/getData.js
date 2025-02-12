const getAllCat = async()=> {

    const response = await fetch("/api/cats");
    const list = await response.json();

    return list;
}

export default getAllCat;