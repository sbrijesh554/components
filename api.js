import axios from 'axios';

export const  saveData = (data) => {

    return axios.post('http://localhost:8081/save', {data})

}

export const fetchData = () => {
    return axios.get('http://localhost:8081/fetch');
}