import axios from 'axios'
import {isDev} from './utils/global'

const MockImageReturn = {
    image_idx: "109",
    image_url: "/Users/odeds/Downloads/unnamed%20(2).png"
}

const mockRequest = mockResponse => {
    return new Promise((res) => {
        setTimeout(() => res(mockResponse), 1000);
    });
}

export const snapshot = approved => {
    if (isDev) {
        return mockRequest(MockImageReturn);
    } else {
        return axios.post('http://localhost:5000/', {approved}).then(res => {
            console.log("snapshot got ", res);
            return res.data;
        });
    }

}

export const sendMail = ( email, imageId) => {
    console.log('mailing', email, 'image', imageId);
    if (isDev) {
        return mockRequest({});
    } else {
        return axios.post('http://localhost:5000/mailto', {imageId, email}).then(res => {
            console.log("registered");
            return res.data;
        });
    }
}

export const getGallery = () => {
    
    const count = 10;
    if (isDev) {
        return mockRequest([1,[2],3,4,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]);
    } else {
        return axios.post('http://localhost:5000/gallery', {count}).then(res => {
            console.log("got images", res.data);
            return res.data;
        });
    }

}