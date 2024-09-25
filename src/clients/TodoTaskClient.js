
export const getTodoListFetch = (url) => {
    fetch(url,
        {
            headers: {
                'Accept': 'application/json',
            },
            method: "GET",
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            return data
        })
        .catch((error) => {
            console.error('Error:', error);
            throw Error(error)
        });
}

export const postTodoListFetch = (url, data) => {
    fetch(url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            return data
        })
        .catch((error) => {
            console.error('Error:', error);
            throw Error(error)
        });
}
