const assert = require('assert');
const axios = require('axios');

describe('Prueba Unitaria de Hola Mundo', function() {
  it('debería mostrar "Hola Mundo"', async function() {
    // Realizar una solicitud HTTP GET a la página web
    const response = await axios.get('URL_DE_TU_PAGINA');

    // Verificar que la respuesta tenga el código de estado 200 (OK)
    assert.strictEqual(response.status, 200);

    // Verificar que el cuerpo de la respuesta contiene "Hola Mundo"
    assert.ok(response.data.includes('Hola Mundo'));
  });
});
