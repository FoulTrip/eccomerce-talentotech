/**
 * Realiza peticiones HTTP a una API
 * @param {string} uri - URL del endpoint
 * @param {string} method - Método HTTP (GET, POST, PUT, etc.)
 * @param {Object} data - Datos a enviar en el body (opcional)
 * @returns {Promise<Object>} Respuesta en formato JSON
 */
export const fetchAPI = async (uri, method = 'GET', data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(uri, options);

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }

    const jsonData = await response.json();
    // console.log(jsonData);

    return jsonData;
};