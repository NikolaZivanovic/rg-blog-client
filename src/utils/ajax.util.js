import config from '../config/config';
import Ajax from './Ajax';


const ajaxInstance = new Ajax();

export const initializeAjax = ( ) => {
    ajaxInstance.setDefaults({ baseURL: config.apiBaseURL });
};

export default ajaxInstance;
