document.querySelector('#request').addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const summary = [
    'Pedido de contacto | Care & Welfare', '',
    'Nome: ' + fields.get('nome'),
    'Exploração ou empresa: ' + fields.get('empresa'),
    'Email: ' + fields.get('email'),
    'Área de interesse: ' + fields.get('area'), '',
    'Objetivo', fields.get('objetivo')
  ].join('\n');
  const url = URL.createObjectURL(new Blob([summary], {type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'pedido-care-welfare.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#request-status').textContent = 'Resumo preparado para descarregar.';
});
