// Función principal que procesa un array de transacciones y genera un reporte
function processTransactions(transactions) {
  // Inicializamos el balance en cero
  let balance = 0;

  // Inicializamos el registro para la transacción de mayor monto
  let highestTransaction = { id: null, amount: 0 };

  // Inicializamos el conteo de transacciones por tipo
  let count = {
    Crédito: 0,
    Débito: 0
  };

  // Recorremos cada transacción en el array
  transactions.forEach(({ id, tipo, monto }) => {
    const amount = parseFloat(monto); // Convertimos el monto a número

    // Si el monto no es un número válido, ignoramos esta transacción
    if (isNaN(amount)) return;

    // Ajustamos el balance y el conteo según el tipo
    if (tipo === 'Crédito') {
      balance += amount;
      count.Crédito++;
    } else if (tipo === 'Débito') {
      balance -= amount;
      count.Débito++;
    }

    // Verificamos si esta es la transacción con mayor monto
    if (amount > highestTransaction.amount) {
      highestTransaction = { id, amount };
    }
  });

  // Retornamos el resumen con balance, transacción mayor y conteo
  return {
    balance: balance.toFixed(2), // Formateamos el balance a 2 decimales
    highestTransaction,
    count
  };
}

// Exportamos la función para usarla en index.js y en las pruebas
module.exports = { processTransactions };