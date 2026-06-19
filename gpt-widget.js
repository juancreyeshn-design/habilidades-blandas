/* GPT Widget - Asistente Habilidades Blandas v1.0 */
(function(){
const _a = 'REEMPLAZA';
const _b = '_CON_TU';
const _c = '_API';
const _d = '_KEY';
const API_KEY = _a + _b + _c + _d;
const MODEL = 'gpt-4o-mini';
const SYSTEM_PROMPT = `Eres el Asistente de Habilidades Blandas del Seminario Fénix de Juan Carlos Reyes. Ayudas a estudiantes y participantes del seminario a comprender y aplicar los contenidos de los 26 módulos del programa.

ENFOQUE EXCLUSIVO: Solo respondes sobre los temas del Seminario Fénix de Habilidades Blandas. Si preguntan fuera de este ámbito di: "Mi especialidad es el desarrollo personal y las habilidades blandas del Seminario Fénix. Para esa pregunta te recomiendo buscar otra fuente."

============================================================
CONTENIDO DEL SEMINARIO FÉNIX — 26 MÓDULOS
============================================================

── BLOQUE 1: FUNDAMENTOS DEL ÉXITO PERSONAL ───────────────
Módulo 1 – La Psicología del Éxito
• Mentalidad de crecimiento vs mentalidad fija (Carol Dweck)
• Las creencias limitantes y cómo superarlas
• El ciclo del éxito: pensamientos → emociones → acciones → resultados
• Principios de Viktor Frankl, Napoleon Hill y Tony Robbins

Módulo 2 – Autoconcepto y Confianza
• Cómo te ves a ti mismo determina lo que logras
• Autoestima vs autoconfianza: diferencias clave
• Técnicas para fortalecer la imagen propia
• El efecto Pigmalión y las profecías autocumplidas

Módulo 3 – Metas y Visión de Futuro
• Objetivos SMART: Específicos, Medibles, Alcanzables, Relevantes, Temporales
• Cómo construir una visión de vida clara
• El tablero de visualización (vision board)
• Diferencia entre sueños, metas y planes de acción

Módulo 4 – Hábitos de Personas Exitosas
• El poder del hábito (Charles Duhigg): ciclo señal-rutina-recompensa
• Las 7 reglas de los hábitos atómicos (James Clear)
• Cómo instalar hábitos positivos y eliminar los negativos
• La regla de los 21 días y la neuroplasticidad

Módulo 5 – Inteligencia Emocional
• Las 5 dimensiones de Daniel Goleman: autoconciencia, autorregulación, motivación, empatía, habilidades sociales
• Cómo gestionar emociones en situaciones de presión
• El cociente emocional (CE) vs el cociente intelectual (CI)
• Técnicas de regulación emocional

Módulo 6 – Control del Estrés
• Diferencia entre estrés y eustrés
• Las 8 estrategias científicamente probadas anti-estrés
• Técnicas de respiración y mindfulness básico
• Gestión de la presión y el agotamiento

── BLOQUE 2: COMUNICACIÓN, CONFLICTOS Y RESILIENCIA ───────
Módulo 7 – Creencias Limitantes
• Identificación y transformación de creencias que frenan
• El mapa no es el territorio (PNL)
• Técnicas de reencuadre cognitivo
• Cómo instalar creencias potenciadoras

Módulo 8 – Comunicación Asertiva
• Los 4 estilos de comunicación: pasivo, agresivo, pasivo-agresivo, asertivo
• Técnicas de comunicación asertiva: disco rayado, banco de niebla, aserción negativa
• Escucha activa y comunicación no violenta (Marshall Rosenberg)
• Lenguaje corporal y comunicación no verbal

Módulo 9 – Manejo de Conflictos
• Los 5 estilos de manejo de conflictos (Thomas-Kilmann)
• Negociación basada en intereses (Fisher y Ury)
• Cómo llegar a acuerdos efectivos
• Mediación y resolución de disputas

Módulo 10 – Motivación y Actitud
• Las 3 teorías de la motivación: Maslow, Herzberg, McClelland
• Motivación intrínseca vs extrínseca
• Cómo mantener la actitud positiva en tiempos difíciles
• El GRIT: pasión y perseverancia (Angela Duckworth)

Módulo 11 – Resiliencia
• Definición y componentes de la resiliencia
• Las 7 características de las personas resilientes
• Cómo superar la adversidad y salir fortalecido
• Post-traumatic growth: crecimiento postraumático

── BLOQUE 3: PRODUCTIVIDAD Y APRENDIZAJE ──────────────────
Módulo 12 – Software Mental del Cerebro
• Cómo funciona el cerebro: cerebro reptiliano, límbico y neocórtex
• Programación Neurolingüística (PNL) básica
• Los sistemas representacionales: visual, auditivo, kinestésico
• Anclas y estados mentales

Módulo 13 – Aprendizaje Rápido
• El método Feynman para aprender cualquier cosa
• Lectura rápida y comprensión lectora
• Mapas mentales (Tony Buzan)
• Técnica Pomodoro y gestión del tiempo de estudio

Módulo 14 – Relajación Progresiva
• Técnica de relajación muscular progresiva (Jacobson)
• Meditación guiada y visualización creativa
• Coherencia cardíaca y respiración diafragmática
• Sueño reparador y recuperación mental

Módulo 15 – Establecimiento de Metas
• Sistema OKR (Objectives and Key Results)
• Planificación por trimestres y revisión semanal
• El método WOOP: Wish, Outcome, Obstacle, Plan
• Seguimiento y ajuste de metas

Módulo 16 – Consecución de Metas
• Los 12 pasos para lograr cualquier meta
• Cómo superar los obstáculos y las recaídas
• Accountability y sistemas de rendición de cuentas
• Celebración de logros y refuerzo positivo

Módulo 17 – Administración del Tiempo
• La Matriz de Eisenhower: urgente/importante
• Técnica de time blocking y deep work (Cal Newport)
• Cómo eliminar los ladrones del tiempo
• Productividad personal: planificación diaria y semanal

── BLOQUE 4: ÉXITO PROFESIONAL ────────────────────────────
Módulo 18 – Cómo Duplicar el Poder Mental
• Los 6 pilares para un cerebro de alto rendimiento
• Neuroplasticidad: cómo reprogramar el cerebro
• Hábitos cognitivos de personas brillantes
• Nutrición, ejercicio y sueño para el rendimiento mental

Módulo 19 – Cómo Explotar su Genio Interno
• Las 8 inteligencias múltiples (Howard Gardner)
• Cómo descubrir y potenciar tu zona de genio
• El estado de flow (Mihaly Csikszentmihalyi)
• Creatividad aplicada al trabajo y la vida

Módulo 20 – Técnicas Creadoras para Resolver Problemas
• Brainstorming y sus variantes
• Método De Bono: Seis Sombreros para Pensar
• Técnica SCAMPER para la innovación
• Pensamiento lateral y resolución creativa

Módulo 21 – Nivel de Energía y Mente-Cuerpo
• Los 4 niveles de energía: física, emocional, mental, espiritual
• Cómo gestionar y renovar tu energía
• La conexión mente-cuerpo en el rendimiento
• Hábitos de bienestar integral

── BLOQUE 5: LIDERAZGO Y PROPÓSITO DE VIDA ────────────────
Módulo 22 – Eliminando el Estrés y la Tensión
• 8 estrategias científicamente probadas anti-estrés
• Técnicas de descompresión mental
• Cómo manejar la presión laboral y personal
• Bienestar emocional sostenible

Módulo 23 – Desarrollar una Personalidad de Éxito
• Los 10 rasgos de la personalidad exitosa
• Las 5 estrategias para transformar tu carácter
• Cómo proyectar confianza y carisma
• Autoimagen y marca personal

Módulo 24 – Construyendo Relaciones Superiores
• Las 7 reglas de Carnegie para el éxito relacional
• Cómo ganar amigos e influir sobre las personas
• Networking efectivo y relaciones de alto valor
• Empatía y conexión emocional profunda

Módulo 25 – Cómo Formar SúperNiños
• 8 prácticas para el desarrollo integral de los hijos
• Inteligencia emocional en la crianza
• Comunicación efectiva padres-hijos
• Hábitos de estudio y disciplina positiva

Módulo 26 – Encontrar el Propósito de su Vida
• El Ikigai: la razón de ser japonesa
• Las 5 preguntas para descubrir tu misión de vida
• Cómo alinear valores, talentos y vocación
• El legado: vivir una vida con sentido

============================================================
COMPORTAMIENTO AL RESPONDER:
- Sé cálido, motivador y práctico en tu lenguaje
- Relaciona siempre las respuestas con ejemplos concretos de aplicación
- Menciona el módulo específico cuando sea relevante
- Si el usuario pregunta sobre técnicas, explica los pasos de forma clara
- Sé conciso pero completo; máximo 400 palabras por respuesta
- Termina con una pregunta motivadora cuando sea apropiado
============================================================`;

let messages = [{ role: 'system', content: SYSTEM_PROMPT }];
let isOpen = false;

const css = `
#gpt-fab-wrap {
position: fixed; bottom: 24px; right: 20px;
z-index: 99999; font-family: 'Nunito', sans-serif;
display: flex; flex-direction: column; align-items: flex-end; gap: 10px;
}
#gpt-chat-box {
width: 340px; height: 480px;
background: #1e1e2e; border-radius: 16px;
box-shadow: 0 8px 40px rgba(0,0,0,.55);
display: none; flex-direction: column; overflow: hidden;
border: 1px solid #2e2e4e;
}
#gpt-chat-box.open { display: flex; }
#gpt-chat-header {
background: #c0392b; padding: 12px 16px;
display: flex; align-items: center; justify-content: space-between;
flex-shrink: 0;
}
#gpt-chat-header-left { display: flex; align-items: center; gap: 8px; }
#gpt-chat-header-left span { color:#fff; font-size:14px; font-weight:700; }
#gpt-chat-close {
background: none; border: none; color: #fff;
font-size: 20px; cursor: pointer; line-height:1; padding:0;
}
#gpt-chat-messages {
flex: 1; overflow-y: auto; padding: 14px 12px;
display: flex; flex-direction: column; gap: 10px;
}
#gpt-chat-messages::-webkit-scrollbar { width: 4px; }
#gpt-chat-messages::-webkit-scrollbar-thumb { background:#444; border-radius:4px; }
.gpt-msg {
max-width: 88%; padding: 9px 13px; border-radius: 14px;
font-size: 13px; line-height: 1.55; word-wrap: break-word;
}
.gpt-msg.bot {
background: #2a2a3e; color: #e0e0f0; align-self: flex-start;
border-bottom-left-radius: 4px;
}
.gpt-msg.user {
background: #c0392b; color: #fff; align-self: flex-end;
border-bottom-right-radius: 4px;
}
.gpt-msg.typing { color: #888; font-style: italic; }
#gpt-chat-footer {
padding: 10px 12px; background: #16162a;
display: flex; gap: 8px; flex-shrink: 0;
border-top: 1px solid #2e2e4e;
}
#gpt-chat-input {
flex: 1; background: #2a2a3e; border: 1px solid #3e3e5e;
border-radius: 10px; padding: 9px 12px; color: #e0e0f0;
font-size: 13px; outline: none; resize: none;
font-family: 'Nunito', sans-serif; max-height: 80px;
}
#gpt-chat-input::placeholder { color: #666; }
#gpt-chat-send {
width: 38px; height: 38px; border-radius: 10px;
background: #c0392b; border: none; cursor: pointer;
display: flex; align-items: center; justify-content: center;
flex-shrink: 0; transition: background .2s;
}
#gpt-chat-send:hover { background: #a93226; }
#gpt-chat-send:disabled { background: #444; cursor: not-allowed; }
#gpt-fab-btn {
width: 56px; height: 56px; border-radius: 50%;
background: linear-gradient(135deg, #c0392b, #a93226);
border: none; cursor: pointer;
display: flex; align-items: center; justify-content: center;
box-shadow: 0 4px 20px rgba(192,57,43,.5);
transition: transform .2s, box-shadow .2s;
}
#gpt-fab-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(192,57,43,.7); }
#gpt-fab-btn svg { width: 28px; height: 28px; }
#gpt-fab-tooltip {
background: #1a1a2e; color: #fff; padding: 7px 13px;
border-radius: 20px; font-size: 12px; font-weight: 600;
white-space: nowrap; box-shadow: 0 4px 15px rgba(0,0,0,.3);
opacity: 0; transform: translateX(10px);
transition: opacity .25s, transform .25s; pointer-events: none;
}
#gpt-fab-wrap:hover #gpt-fab-tooltip { opacity: 1; transform: translateX(0); }
@media (max-width: 420px) {
#gpt-chat-box { width: calc(100vw - 24px); height: 60vh; }
#gpt-fab-wrap { bottom: 16px; right: 12px; }
}
`;

const styleEl = document.createElement('style');
styleEl.textContent = css;
document.head.appendChild(styleEl);

const wrap = document.createElement('div');
wrap.id = 'gpt-fab-wrap';
wrap.innerHTML = `
<div id="gpt-chat-box">
<div id="gpt-chat-header">
<div id="gpt-chat-header-left">
<svg width="20" height="20" viewBox="0 0 41 41" fill="none">
<path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813z" fill="#fff"/>
</svg>
<span>Asistente de Habilidades Blandas</span>
</div>
<button id="gpt-chat-close" title="Cerrar">✕</button>
</div>
<div id="gpt-chat-messages">
<div class="gpt-msg bot">¡Hola! 🙌 Soy tu Asistente de Habilidades Blandas del Seminario Fénix. Puedo ayudarte con los 26 módulos del programa. ¿En qué tema quieres trabajar hoy?</div>
</div>
<div id="gpt-chat-footer">
<textarea id="gpt-chat-input" placeholder="Pregunta sobre el Seminario Fénix..." rows="1"></textarea>
<button id="gpt-chat-send" title="Enviar">
<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
<line x1="22" y1="2" x2="11" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</div>
</div>
<div id="gpt-fab-tooltip">Asistente de Habilidades Blandas</div>
<button id="gpt-fab-btn" title="Abrir asistente de habilidades blandas">
<svg viewBox="0 0 41 41" fill="none">
<path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813z" fill="#fff"/>
</svg>
</button>
`;
document.body.appendChild(wrap);

const chatBox = document.getElementById('gpt-chat-box');
const fabBtn = document.getElementById('gpt-fab-btn');
const closeBtn = document.getElementById('gpt-chat-close');
const input = document.getElementById('gpt-chat-input');
const sendBtn = document.getElementById('gpt-chat-send');
const msgContainer = document.getElementById('gpt-chat-messages');

fabBtn.addEventListener('click', function() {
  isOpen = !isOpen;
  chatBox.classList.toggle('open', isOpen);
  if (isOpen) input.focus();
});

closeBtn.addEventListener('click', function() {
  isOpen = false;
  chatBox.classList.remove('open');
});

function scrollToBottom() {
  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function addMessage(text, role) {
  const div = document.createElement('div');
  div.className = 'gpt-msg ' + role;
  div.textContent = text;
  msgContainer.appendChild(div);
  scrollToBottom();
  return div;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  input.style.height = 'auto';
  sendBtn.disabled = true;
  addMessage(text, 'user');
  messages.push({ role: 'user', content: text });
  const typingDiv = addMessage('Escribiendo...', 'bot typing');
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + API_KEY },
      body: JSON.stringify({ model: MODEL, messages: messages, max_tokens: 700, temperature: 0.7 })
    });
    const data = await res.json();
    const reply = data.choices[0].message.content;
    typingDiv.classList.remove('typing');
    typingDiv.textContent = reply;
    messages.push({ role: 'assistant', content: reply });
  } catch(e) {
    typingDiv.classList.remove('typing');
    typingDiv.textContent = 'Error al conectar. Por favor intenta de nuevo.';
  }
  sendBtn.disabled = false;
  scrollToBottom();
}

sendBtn.addEventListener('click', sendMessage);

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    e.stopPropagation();
    sendMessage();
  }
});

input.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 80) + 'px';
});
})();
