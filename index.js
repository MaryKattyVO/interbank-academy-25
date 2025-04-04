// Importamos los módulos necesarios
const fs = require('fs');
const csv = require('csv-parser');
const { processTransactions } = require('./processor');

// Creamos un arreglo vacío donde guardaremos todas las transacciones leídas
const transactions = [];

// Iniciamos la lectura del archivo data.csv como stream
fs.createReadStream('data.csv')
  .pipe(csv()) // Parseamos el contenido del CSV
  .on('data', (row) => {
    // Por cada fila leída del CSV, la agregamos al arreglo
    transactions.push(row);
  })
  .on('end', () => {
    // Una vez terminado de leer todo el archivo, procesamos las transacciones
    const report = processTransactions(transactions);

    // Mostramos el reporte en consola
    console.log('Reporte de Transacciones');
    console.log('---------------------------------------------');
    console.log(`Balance Final: ${report.balance}`);
    console.log(`Transacción de Mayor Monto: ID ${report.highestTransaction.id} - ${report.highestTransaction.amount}`);
    console.log(`Conteo de Transacciones: Crédito: ${report.count.Crédito} Débito: ${report.count.Débito}`);
  });