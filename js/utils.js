export const fetchAPI = async (uri, method, data) => {
    if (uri && method && data) {
        let dataResponse;

        switch (uri) {
            case uri == "POST":
                const postResponse = await fetch(
                    uri,
                    method,
                    data,
                );

                dataResponse = await postResponse.json();
                break;
            case uri = "PUT":
                const putResponse = await fetch(
                    uri,
                    method,
                    data,
                );

                dataResponse = await putResponse.json();
        }

        return dataResponse;
    } else if (uri & !method & !data) {
        const response = await fetch(
            uri,
            method,
            data,
        );

        const data = await response.json();
        return data
    }
}