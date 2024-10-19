const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getTodoListFetch = async () => {
  try {
    const response = await fetch(`${baseUrl}/lists`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const postTodoListFetch = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/lists`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteTodoList = (id) => {
    return fetch(`${baseUrl}/lists/${id}`,
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

