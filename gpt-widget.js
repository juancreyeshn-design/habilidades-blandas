/* GPT Widget - Asistente Habilidades Blandas v3.0 - Contextual por Módulo */
(function(){

const WORKER_URL = 'https://habilidades-blandas-proxy.juancreyes-hn.workers.dev';
const MODEL = 'claude-haiku-4-5';

// Detectar módulo actual por el título de la página
const pageTitle = document.title || '';
const pagePath = window.location.pathname || '';

// Mapa de módulos con sus quick-replies específicos
const MODULE_DATA = {
  'modulo1': { nombre: 'Psicología del Éxito', preguntas: ['¿Qué es la mentalidad de crecimiento?','¿Cómo cambiar mis creencias?','Explícame el ciclo del éxito'] },
  'modulo2': { nombre: 'Autoconcepto y Confianza', preguntas: ['¿Cómo mejorar mi autoconcepto?','¿Qué es la autoestima?','Ejercicios para ganar confianza'] },
  'modulo3': { nombre: 'Metas y Visión de Futuro', preguntas: ['¿Cómo definir mis metas?','¿Qué es la visualización?','Cómo construir mi visión de vida'] },
  'modulo4': { nombre: 'Hábitos de Personas Exitosas', preguntas: ['¿Cómo crear un hábito?','Hábitos de personas exitosas','¿Qué es el efecto compuesto?'] },
  'modulo5': { nombre: 'Inteligencia Emocional', preguntas: ['¿Qué es la inteligencia emocional?','¿Cómo gestionar mis emociones?','Empatía y autoconocimiento'] },
  'modulo6': { nombre: 'Control del Estrés', preguntas: ['Técnicas para reducir el estrés','¿Qué es el cortisol?','Cómo manejar la presión'] },
  'modulo7': { nombre: 'Creencias Limitantes', preguntas: ['¿Cómo identificar creencias limitantes?','¿Cómo eliminar bloqueos mentales?','Ejemplos de creencias limitantes'] },
  'modulo8': { nombre: 'Comunicación Asertiva', preguntas: ['¿Qué es la asertividad?','Cómo decir no con respeto','Técnicas de comunicación efectiva'] },
  'modulo9': { nombre: 'Manejo de Conflictos', preguntas: ['¿Cómo resolver conflictos?','Estilos de manejo de conflictos','Negociación win-win'] },
  'modulo10': { nombre: 'Motivación y Actitud', preguntas: ['¿Cómo mantenerme motivado?','¿Qué es el GRIT?','Teorías de la motivación'] },
  'modulo11': { nombre: 'Resiliencia', preguntas: ['¿Qué es la resiliencia?','Cómo superar la adversidad','Las 7 características de personas resilientes'] },
  'modulo12': { nombre: 'Software para el Cerebro', preguntas: ['¿Cómo funciona el cerebro?','¿Qué es la PNL?','Cómo reprogramar mi mente'] },
  'modulo13': { nombre: 'Aprendizaje Rápido', preguntas: ['Técnicas de estudio efectivo','¿Cómo aprender más rápido?','Método Feynman explicado'] },
  'modulo14': { nombre: 'Relajación Progresiva', preguntas: ['¿Cómo hacer relajación progresiva?','Beneficios de la meditación','Técnicas de respiración'] },
  'modulo15': { nombre: 'Establecimiento de Metas', preguntas: ['¿Qué son las metas SMART?','5 claves para mis metas','Cómo priorizar mis objetivos'] },
  'modulo16': { nombre: 'Consecución de Metas', preguntas: ['Los 12 pasos hacia mis metas','¿Cómo mantener el enfoque?','Del deseo a la realidad'] },
  'modulo17': { nombre: 'Administración del Tiempo', preguntas: ['Técnicas de gestión del tiempo','¿Qué es la matriz de Eisenhower?','Cómo eliminar procrastinación'] },
  'modulo18': { nombre: 'Poder Mental', preguntas: ['¿Cómo duplicar mi poder mental?','Los 6 pilares del cerebro','Cómo mejorar mi concentración'] },
  'modulo19': { nombre: 'Genio Interno', preguntas: ['¿Cómo descubrir mi genio?','¿Qué es la zona de flujo?','Cómo desarrollar mi creatividad'] },
  'modulo20': { nombre: 'Solución de Problemas', preguntas: ['Técnicas de resolución creativa','¿Qué es el brainstorming?','Los 6 Sombreros de De Bono'] },
  'modulo21': { nombre: 'Energía Mente-Cuerpo', preguntas: ['¿Cómo aumentar mi energía?','Gestión de energía emocional','Conexión mente-cuerpo'] },
  'modulo22': { nombre: 'Eliminando el Estrés', preguntas: ['8 estrategias anti-estrés','¿Cómo reducir la tensión?','Mindfulness para principiantes'] },
  'modulo23': { nombre: 'Personalidad de Éxito', preguntas: ['Los 10 rasgos de personalidad exitosa','Cómo transformar mi carácter','¿Qué es la integridad?'] },
  'modulo24': { nombre: 'Relaciones Superiores', preguntas: ['Las 7 reglas de Carnegie','¿Cómo hacer amigos?','Cómo influir en las personas'] },
  'modulo25': { nombre: 'SúperNiños', preguntas: ['¿Cómo educar niños exitosos?','Desarrollo emocional infantil','8 prácticas para padres'] },
  'modulo26': { nombre: 'Propósito de Vida', preguntas: ['¿Qué es el Ikigai?','¿Cómo encontrar mi propósito?','Las 5 preguntas de la misión de vida'] },
};

// Detectar módulo actual
function detectarModulo() {
  for (const key of Object.keys(MODULE_DATA)) {
    if (pagePath.includes(key) || pageTitle.toLowerCase().includes(MODULE_DATA[key].nombre.toLowerCase().split(' ')[0].toLowerCase())) {
      return { key, ...MODULE_DATA[key] };
    }
  }
  return { key: 'general', nombre: 'Habilidades Blandas', preguntas: ['¿De qué trata este módulo?','Resúmeme los puntos clave','¿Cómo aplico esto en mi vida?'] };
}

const modulo = detectarModulo();

const SYSTEM_PROMPT = `Eres el Asistente de Habilidades Blandas del Seminario Fénix de Juan Carlos Reyes. Ayudas a estudiantes y participantes a comprender y aplicar los temas del seminario en su vida personal y profesional.

MÓDULO ACTUAL: ${modulo.nombre}

ENFOQUE: Cuando estás en un módulo específico, prioriza responder sobre ese tema. Usa ejemplos prácticos, ejercicios aplicables y conecta con otros módulos cuando sea relevante. Si preguntan sobre algo fuera del seminario, redirige amablemente al contenido.

ESTILO: Cálido, motivador, práctico. Usa ejemplos concretos. Respuestas concisas (máx 200 palabras) a menos que pidan más detalle.`;

// =================== ESTILOS ===================
const style = document.createElement('style');
style.textContent = `
  #hb-chat-btn {
    position: fixed; bottom: 24px; right: 24px; z-index: 9998;
    background: linear-gradient(135deg, #8b1a3a, #b83255);
    color: white; border: none; border-radius: 50px;
    padding: 14px 20px; cursor: pointer; font-size: 15px; font-weight: 600;
    box-shadow: 0 4px 20px rgba(139,26,58,0.4);
    display: flex; align-items: center; gap: 8px;
    transition: all .3s ease; font-family: 'Segoe UI', sans-serif;
    white-space: nowrap;
  }
  #hb-chat-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(139,26,58,0.5); }
  #hb-chat-btn .hb-pulse {
    width: 8px; height: 8px; background: #4ade80; border-radius: 50%;
    animation: hbPulse 2s infinite;
  }
  @keyframes hbPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
  #hb-chat-box {
    position: fixed; bottom: 90px; right: 24px; z-index: 9999;
    width: 360px; max-height: 520px;
    background: white; border-radius: 16px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.18);
    display: none; flex-direction: column; overflow: hidden;
    font-family: 'Segoe UI', Arial, sans-serif;
    border: 1px solid rgba(139,26,58,0.1);
  }
  #hb-chat-box.open { display: flex; animation: hbSlideUp .3s ease; }
  @keyframes hbSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  #hb-chat-header {
    background: linear-gradient(135deg, #8b1a3a, #b83255);
    color: white; padding: 14px 16px;
    display: flex; align-items: center; justify-content: space-between;
  }
  #hb-chat-header .hb-header-info h4 { margin: 0; font-size: 14px; font-weight: 700; }
  #hb-chat-header .hb-header-info span { font-size: 11px; opacity: .8; }
  #hb-chat-close {
    background: rgba(255,255,255,.2); border: none; color: white;
    border-radius: 50%; width: 28px; height: 28px; cursor: pointer;
    font-size: 16px; display: flex; align-items: center; justify-content: center;
    transition: .2s;
  }
  #hb-chat-close:hover { background: rgba(255,255,255,.35); }
  #hb-chat-msgs {
    flex: 1; overflow-y: auto; padding: 16px 14px; display: flex;
    flex-direction: column; gap: 10px; min-height: 180px;
  }
  .hb-msg { max-width: 88%; padding: 10px 13px; border-radius: 12px; font-size: 13.5px; line-height: 1.5; }
  .hb-msg.bot { background: #f5f0f5; color: #2d2d2d; align-self: flex-start; border-bottom-left-radius: 4px; }
  .hb-msg.user { background: linear-gradient(135deg,#8b1a3a,#b83255); color: white; align-self: flex-end; border-bottom-right-radius: 4px; }
  .hb-msg.typing { color: #999; font-style: italic; }
  #hb-quick-replies {
    display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 14px 6px;
    border-top: 1px solid #f0edf3;
  }
  .hb-qr {
    background: #f5f0f5; border: 1px solid #d4607a; color: #8b1a3a;
    border-radius: 20px; padding: 5px 12px; font-size: 11.5px; cursor: pointer;
    transition: .2s; font-family: inherit;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;
  }
  .hb-qr:hover { background: #8b1a3a; color: white; }
  #hb-chat-footer {
    padding: 10px 12px; border-top: 1px solid #f0edf3;
    display: flex; gap: 8px; align-items: center;
  }
  #hb-chat-input {
    flex: 1; border: 1.5px solid #ddd; border-radius: 22px;
    padding: 9px 14px; font-size: 13.5px; outline: none;
    font-family: inherit; resize: none; line-height: 1.4;
    max-height: 80px; overflow-y: auto;
    transition: border-color .2s;
  }
  #hb-chat-input:focus { border-color: #b83255; }
  #hb-send-btn {
    background: linear-gradient(135deg,#8b1a3a,#b83255);
    border: none; color: white; border-radius: 50%;
    width: 38px; height: 38px; cursor: pointer; font-size: 16px;
    display: flex; align-items: center; justify-content: center;
    transition: .2s; flex-shrink: 0;
  }
  #hb-send-btn:hover { transform: scale(1.1); }
  #hb-send-btn:disabled { opacity: .5; cursor: not-allowed; transform: none; }
  @media(max-width:420px){
    #hb-chat-box{width:calc(100vw - 32px);right:16px;bottom:80px;}
    #hb-chat-btn{right:16px;bottom:16px;padding:12px 16px;font-size:14px;}
  }
`;
document.head.appendChild(style);

// =================== HTML ===================
const btn = document.createElement('button');
btn.id = 'hb-chat-btn';
btn.innerHTML = `<span class="hb-pulse"></span>💬 Asistente IA`;
btn.title = `Chat - Módulo: ${modulo.nombre}`;
document.body.appendChild(btn);

const box = document.createElement('div');
box.id = 'hb-chat-box';
box.innerHTML = `
  <div id="hb-chat-header">
    <div class="hb-header-info">
      <h4>🎓 Asistente Habilidades Blandas</h4>
      <span>${modulo.nombre}</span>
    </div>
    <button id="hb-chat-close">✕</button>
  </div>
  <div id="hb-chat-msgs">
    <div class="hb-msg bot">¡Hola! Soy tu asistente para el módulo <strong>${modulo.nombre}</strong>. ¿En qué te puedo ayudar? 😊</div>
  </div>
  <div id="hb-quick-replies">
    ${modulo.preguntas.map(p => `<button class="hb-qr">${p}</button>`).join('')}
  </div>
  <div id="hb-chat-footer">
    <textarea id="hb-chat-input" placeholder="Escribe tu pregunta..." rows="1"></textarea>
    <button id="hb-send-btn">➤</button>
  </div>
`;
document.body.appendChild(box);

// =================== LÓGICA ===================
const msgs = document.getElementById('hb-chat-msgs');
const input = document.getElementById('hb-chat-input');
const sendBtn = document.getElementById('hb-send-btn');
const history = [];

btn.addEventListener('click', () => { box.classList.toggle('open'); if(box.classList.contains('open')) input.focus(); });
document.getElementById('hb-chat-close').addEventListener('click', () => box.classList.remove('open'));

document.querySelectorAll('.hb-qr').forEach(qr => {
  qr.addEventListener('click', () => enviar(qr.textContent));
});

input.addEventListener('keydown', e => { if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); enviar(input.value.trim()); } });
sendBtn.addEventListener('click', () => enviar(input.value.trim()));

input.addEventListener('input', () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 80) + 'px'; });

function addMsg(text, role) {
  const d = document.createElement('div');
  d.className = 'hb-msg ' + role;
  d.innerHTML = text.replace(/\n/g, '<br>');
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
  return d;
}

async function enviar(text) {
  if (!text) return;
  addMsg(text, 'user');
  input.value = '';
  input.style.height = 'auto';
  sendBtn.disabled = true;
  history.push({ role: 'user', content: text });
  const typing = addMsg('Escribiendo...', 'bot typing');
  try {
    const res = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, system: SYSTEM_PROMPT })
    });
    const data = await res.json();
    const reply = data?.content?.[0]?.text || 'Lo siento, no pude procesar tu mensaje.';
    typing.remove();
    addMsg(reply, 'bot');
    history.push({ role: 'assistant', content: reply });
  } catch(e) {
    typing.remove();
    addMsg('Error al conectar. Por favor recarga la página e intenta de nuevo.', 'bot');
  }
  sendBtn.disabled = false;
}

})();
