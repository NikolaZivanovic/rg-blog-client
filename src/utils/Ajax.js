import _assign from "lodash/assign";


class Ajax {

    DEFAULT_OPTIONS = {
        baseURL: null,
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'to be implemented',
        },
        mode: 'cors',
    };

    getDefaultFetchOptions() {
        return this.DEFAULT_OPTIONS;
    }

    setDefaults( { baseURL, mode, headers = {} } ) {
        if (baseURL) {
            this.DEFAULT_OPTIONS.baseURL = baseURL;
        }

        if (mode) {
            this.DEFAULT_OPTIONS.mode = mode;
        }

        this.DEFAULT_OPTIONS.headers = _assign( this.DEFAULT_OPTIONS.headers, headers );
    }


    get( method ) {
        return fetch( `${this.DEFAULT_OPTIONS.baseURL}/${method}`, {
            ...this.getDefaultFetchOptions()
        });
    }

    post( method, data ) {
        return fetch(
            `${this.DEFAULT_OPTIONS.baseURL}/${method}`,
            {
                ...this.getDefaultFetchOptions(),
                method: 'post',
                body: JSON.stringify( data ),
            }
        );
    }

    put( method, data ) {
        return fetch(
            `${this.DEFAULT_OPTIONS.baseURL}/${method}`,
            {
                ...this.getDefaultFetchOptions(),
                method: 'put',
                body: JSON.stringify( data ),
            }
        );
    }

    delete( methodAndResourceToDelete ) {
        return fetch(
            `${this.DEFAULT_OPTIONS.baseURL}/${methodAndResourceToDelete}`,
            {
                ...this.getDefaultFetchOptions(),
                method: 'delete',
            }
        );
    }
}

export default Ajax;
