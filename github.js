class Github {
    constructor() {
        this.client_id = 'c3f422bf4eda92475da7';
        this.client_secret = 'bd93008cc44531b3184e1aac952f17005193d6ce';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}