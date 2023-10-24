# React Native Maps Project

Este proyecto utiliza React Native junto con la biblioteca `react-native-maps` para visualizar puntos de carga obtenidos desde una API.

## Requisitos previos

- Node.js (Recomendado versión 14.x o superior)
- npm (incluido con Node.js) o Yarn
- Expo CLI (`npm install -g expo-cli`)

## Instrucciones de instalación

1. **Clonar el repositorio:**

git clone https://github.com/agui1era/ReactNativeMaps.git

2. **Cambiar al directorio del proyecto:**

3. **Instalar las dependencias:**
Utilizando npm:

4. **Configuración del proyecto:**

Asegúrate de tener un archivo `config.js` en la raíz del proyecto con el siguiente formato:

export const API_ENDPOINT = 'https://api.openchargemap.io/v3/poi/';
export const API_KEY = 'TU_API_KEY';

Reemplaza 'TU_API_KEY' con tu clave API de OpenChargeMap.

5. **Iniciar el proyecto:**

expo start
