const axios = require('axios');

class twitterApi {
    constructor(bearer_token) {
        this.bearer_token = bearer_token;
        this.options = {
            'method': 'GET', //this class only works with read only, no privileged endpoints
            'headers': {
                'Authorization': 'Bearer ' + bearer_token
            }
        };
    }

    get_followers(id) {
        this.options.url = `https://api.twitter.com/2/users/${id}/followers`;
        return this;
    }

    get_following(id) {
        this.options.url = `https://api.twitter.com/2/users/${id}/following`;
        return this;
    }

    get_user(id) {
        this.options.url = `https://api.twitter.com/2/users/${id}`;
        return this;
    }

    get_blocking(id) {
        this.options.url = `https://api.twitter.com/2/users/${id}/blocking`
        return this;
    }
    
    get_mutes(id) {
        this.options.url = `https://api.twitter.com/2/users/${id}/muting`
        return this;
    }

    //ids = up to 100 comma-separated user IDs.
    get_users(ids) {
        this.options.url = `https://api.twitter.com/2/users?ids=${ids}`;
        return this;
    }

    get_user_by_username(username) {
        this.options.url = `https://api.twitter.com/2/users/by/username/${username}`;
        return this;
    }

    //usernames = up to 100 comma-separated usernames
    get_users_by_username(usernames) {
        this.options.url = `https://api.twitter.com/2/users/by?usernames=${usernames}`;
    }

    async now() { //returns a thenable promise, that data you want is in .data, https status code in .status
        return axios(this.options);
    }
}
