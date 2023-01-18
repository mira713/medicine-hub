import axios from "axios";

//https://capsule-web-server.onrender.com/users

export const postUserData = (userData) => {
    return axios.post(`https://capsule-web-server.onrender.com/users`, {
        ...userData,
    });
};


export const fetchUser = () => {
    return axios.get(`https://capsule-web-server.onrender.com/users`);
};

export const fetchProduct = ({ limit, sort, page }) => {
    return axios
        .get(
            `https://capsule-web-server.onrender.com/products?_page=${page}&_limit=${limit}&${sort}`
        )
}

export const fetchSingleProduct = ({ id }) => {
    return axios.get(`https://capsule-web-server.onrender.com/products/${id}`);
}

export const CarouselData = ({ category }) => {
    return axios
        .get(`https://capsule-web-server.onrender.com/${category}?_page=1&_limit=10`)
}

export const fetchCategoryData = ({ category, page, limit, sort }) => {
    
    return axios
        .get(
            `https://capsule-web-server.onrender.com/${category}?_page=${page}&_limit=${limit}&${sort}`
        )
}
