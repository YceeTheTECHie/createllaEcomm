export const getFaces=(page)=>
    `http://localhost:5000/api/products?_page=${page}&_limit=480`
                
export const getResult = (page) =>
    fetch(getFaces(page))
        .then((res) => res.json())
