import axios from 'axios';

export const fetchJobListings = (limit, offset) => async (dispatch) => {
    try {
        const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
            limit,
            offset
        });
        console.log("response ", response)
        dispatch({
            type: FETCH_JOBS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_JOBS_FAILURE,
            payload: error.message
        });
    }
};
