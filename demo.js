const panels = {
  rondas: { metrics: [['8 de 10','Parques com ronda'],['2','Ocorrências abertas']], rows: [['Parque Sul','Ronda pendente'],['Parque Norte','Verificar água'],['Parque Poente','Ronda concluída']] },
  animais: { metrics: [['1,08 kg/dia','Ganho médio diário'],['1 de 3','Grupos abaixo da meta']], rows: [['Grupo A','Dentro da meta'],['Grupo B','Rever evolução'],['Grupo C','Dentro da meta']] },
  tarefas: { metrics: [['3','Intervenções abertas'],['1','Prioridade alta']], rows: [['Bebedouro do Parque Norte','Prioridade alta'],['Vedação do Parque Sul','Agendada'],['Portão do Parque Poente','Em execução']] }
};
const demoButtons = document.querySelectorAll('[data-demo]');
for (const button of demoButtons) {
  button.addEventListener('click', () => {
    const panel = panels[button.dataset.demo];
    for (const item of demoButtons) item.setAttribute('aria-pressed', String(item === button));
    const metrics = panel.metrics.map(([value,label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join('');
    const rows = panel.rows.map(([label,value]) => `<li><span>${label}</span><b>${value}</b></li>`).join('');
    document.querySelector('#demo-output').innerHTML = `<div class="metrics">${metrics}</div><ul class="rows">${rows}</ul>`;
  });
}
