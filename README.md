# Interbank CLI - Procesamiento de Transacciones Bancarias

## Introducción

Aplicación CLI en Node.js que lee un archivo CSV con transacciones bancarias, calcula el balance final, identifica la transacción más grande y cuenta los tipos de transacción.

## Instrucciones de Ejecución

1. Clonar el repositorio.
2. Tener instalado Node.js v14 o superior
3. Instalar las dependencias:
   ```bash
   npm install
   ```
5. Ejecutar la aplicación con:
   ```bash
   node index.js
   ```
5. Ejecutar pruebas unitarias:
   ```bash
   npm test
   ```

## Enfoque y Solución

- Usé `csv-parser` para leer el archivo línea por línea.
- Sumar y restar montos según el tipo de transacción.
- Seguir el ID de la transacción con el monto más alto.
- Contar transacciones por tipo usando un objeto.

## Estructura del Proyecto

```
interbank-cli/
├── data.csv                # Archivo de entrada con transacciones bancarias
├── index.js                # Archivo principal, ejecuta la CLI y genera el reporte
├── processor.js            # Módulo que contiene la lógica para procesar transacciones
├── processor.test.js       # Archivo con pruebas unitarias usando Jest
├── package.json            # Configuración del proyecto Node.js y dependencias
├── README.md               # Documentación del proyecto y cómo ejecutarlo
└── .gitignore              # Ignora node_modules y otros archivos no deseados
```

## Resultado de Ejemplo

```
Reporte de Transacciones
---------------------------------------------
Balance Final: 325.00
Transacción de Mayor Monto: ID 3 - 200.00
Conteo de Transacciones: Crédito: 3 Débito: 2
```
