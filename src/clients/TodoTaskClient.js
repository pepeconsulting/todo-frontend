export const getTodoListFetch = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    });
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const postTodoListFetch = async (url, data) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.text();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteTodoList = (url) => {
    return fetch(url,
        {
            method: "DELETE"
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success: ', data)
            return data
        })
        .catch((error) => {
            console.error('Error: ', error)
            throw Error(error)
        })
}
