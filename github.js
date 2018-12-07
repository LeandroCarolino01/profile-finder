class Github {
    constructor() {
        this.client_id = 'c3f422bf4eda92475da7';
        this.client_secret = 'fb7676ed247b7d004783fcedc7d7073db383fe59';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}