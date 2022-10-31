class getData {
    _token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
    _data_link = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${this._token}`;

    async fetchJobList() {
        let data = await fetch(`${this._data_link}`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Error ${data.status.text}:${data.status}`);
        }
        return await data.json()
    }

    async fetchJob(jobId) {
        let data = await fetch(`${this._data_link}`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Error ${data.status.text}:${data.status}`);
        }
        var info =null;
        await data.json().then((data) => {
           data.map((item) => {
                if (item.id === jobId) return info = item;
            })
        })
        return info;
    }
}

export { getData }