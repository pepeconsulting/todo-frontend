// export const getTodoListFetch = async (url) => {
//     return fetch(url,
//         {
//             headers: {
//                 'Accept': 'application/json',
//             },
//             method: "GET",
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             return data
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             throw Error(error)
//         });
// }

export const getTodoListFetch = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    });
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
    const responseData = await response.text();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
