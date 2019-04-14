import { userService } from '../_services/';
import { history } from '../_helpers';

export const listActions = {
    getData,
};

function getData(page){
    return dispatch => {
        let apiEndpoint = '/sightRecreation/' + (page || 1);
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            if (response) {
                dispatch(setDataDetails(response.data));
            }
        })
    };
}

export function setDataDetails(data){
    return{
        type: "GET_DATA_SUCCESS",
        data: data
    }
}