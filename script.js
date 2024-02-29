document.addEventListener('DOMContentLoaded', function() {
    const formJujubinhas = document.querySelector('#jujubinhas');
    const formFreegells = document.querySelector('#freegells');
    const subtotalJujubinhas = document.querySelector('#subtotal-jujubinhas');
    const subtotalFreegells = document.querySelector('#subtotal-freegells');
  
    const precoJujubinhas = 1.00;
    const precoFreegells = 2.00;
  
    formJujubinhas.addEventListener('input', function() {
      const quantidade = parseInt(formJujubinhas.value);
      subtotalJujubinhas.textContent = (quantidade * precoJujubinhas).toFixed(2);
      calcularTotal();
    });
  
    formFreegells.addEventListener('input', function() {
      const quantidade = parseInt(formFreegells.value);
      subtotalFreegells.textContent = (quantidade * precoFreegells).toFixed(2);
      calcularTotal();
    });
  
    function calcularTotal() {
      const totalJujubinhas = parseFloat(subtotalJujubinhas.textContent);
      const totalFreegells = parseFloat(subtotalFreegells.textContent);
      const total = totalJujubinhas + totalFreegells;
      document.querySelector('#total').textContent = total.toFixed(2);
    }
  });


