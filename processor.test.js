const { processTransactions } = require('./processor');

describe('processTransactions', () => {
  const mockData = [
    { id: '1', tipo: 'Crédito', monto: '100.00' },
    { id: '2', tipo: 'Débito', monto: '50.00' },
    { id: '3', tipo: 'Crédito', monto: '200.00' },
    { id: '4', tipo: 'Débito', monto: '75.00' },
    { id: '5', tipo: 'Crédito', monto: '150.00' },
  ];

  test('calcula el balance final correctamente', () => {
    const result = processTransactions(mockData);
    expect(result.balance).toBe('325.00');
  });

  test('identifica la transacción con mayor monto', () => {
    const result = processTransactions(mockData);
    expect(result.highestTransaction).toEqual({ id: '3', amount: 200.00 });
  });

  test('cuenta las transacciones por tipo', () => {
    const result = processTransactions(mockData);
    expect(result.count).toEqual({ Crédito: 3, Débito: 2 });
  });

  test('maneja un array vacío sin errores', () => {
    const result = processTransactions([]);
    expect(result.balance).toBe('0.00');
    expect(result.highestTransaction).toEqual({ id: null, amount: 0 });
    expect(result.count).toEqual({ Crédito: 0, Débito: 0 });
  });

  test('ignora transacciones inválidas (tipo desconocido)', () => {
    const mockData = [
      { id: '1', tipo: 'Crédito', monto: '100.00' },
      { id: '2', tipo: 'X', monto: '200.00' },
      { id: '3', tipo: 'Débito', monto: '50.00' }
    ];
    const result = processTransactions(mockData);
    expect(result.balance).toBe('50.00');
    expect(result.count).toEqual({ Crédito: 1, Débito: 1 });
  });

  test('ignora transacciones con monto inválido', () => {
    const mockData = [
      { id: '1', tipo: 'Crédito', monto: 'abc' },
      { id: '2', tipo: 'Débito', monto: '50.00' }
    ];
    const result = processTransactions(mockData);
    expect(result.balance).toBe('-50.00');
    expect(result.count).toEqual({ Crédito: 0, Débito: 1 });
  });
});