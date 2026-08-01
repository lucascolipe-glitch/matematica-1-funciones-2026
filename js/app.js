'use strict';

const CLAVE = 'm1-funciones-2026-v1';
const TOTAL_ACTIVIDADES = 11;

const quizzes = {
  relaciones: [
    { id:'rel1', texto:'En el primer diagrama cada elemento de A tiene exactamente una flecha.', grafico:'funcion', opciones:['Sí, es función','No: un elemento tiene dos imágenes','No: un elemento no tiene imagen'], correcta:'Sí, es función', explicacion:'Cada elemento del dominio tiene una única imagen. La imagen de la relación es {a,b}.' },
    { id:'rel2', texto:'En el segundo diagrama el elemento 2 se relaciona con b y con c.', grafico:'doble', opciones:['Sí, es función','No: un elemento tiene dos imágenes','No: un elemento no tiene imagen'], correcta:'No: un elemento tiene dos imágenes', explicacion:'Una función no puede asignar dos valores distintos a un mismo elemento del dominio.' },
    { id:'rel3', texto:'En el tercer diagrama el elemento 2 del dominio no tiene flecha.', grafico:'falta', opciones:['Sí, es función','No: un elemento tiene dos imágenes','No: un elemento no tiene imagen'], correcta:'No: un elemento no tiene imagen', explicacion:'Todos los elementos del dominio deben tener exactamente una imagen.' }
  ],
  lectura: [
    { id:'lec1', texto:'Para \\(f(x)=x+1\\), ¿cuál es la raíz y el conjunto de positividad?', opciones:['Raíz −1; C⁺=(−1,+∞)','Raíz 1; C⁺=(1,+∞)','Raíz −1; C⁺=(−∞,−1)','No tiene raíz'], correcta:'Raíz −1; C⁺=(−1,+∞)', explicacion:'La recta corta el eje x en −1 y queda arriba del eje para x>−1.' },
    { id:'lec2', texto:'Para \\(f(x)=2(x-2)(x+1)\\), ¿dónde es negativa?', opciones:['(−∞,−1)∪(2,+∞)','(−1,2)','(−1/2,+∞)','Nunca'], correcta:'(−1,2)', explicacion:'La parábola abre hacia arriba y queda debajo del eje entre sus raíces −1 y 2.' },
    { id:'lec3', texto:'Para \\(f(x)=-2(x-3)^2+2\\), elegí la afirmación correcta.', opciones:['Im=[2,+∞) y crece en (3,+∞)','Im=(−∞,2] y crece en (−∞,3)','Im=ℝ y es impar','Im=(−∞,−2] y decrece en (−∞,3)'], correcta:'Im=(−∞,2] y crece en (−∞,3)', explicacion:'El vértice es (3,2), las ramas van hacia abajo y el máximo es 2.' }
  ],
  rectas: [
    { id:'rec1', texto:'Recta que pasa por \\((-1,1)\\) y \\((5,11)\\).', opciones:['\\(y=\\frac53x+\\frac83\\)','\\(y=\\frac35x+\\frac85\\)','\\(y=\\frac53x-\\frac83\\)','\\(y=-\\frac53x+\\frac83\\)'], correcta:'\\(y=\\frac53x+\\frac83\\)', explicacion:'La pendiente es (11−1)/(5−(−1))=5/3 y luego se calcula b=8/3.' },
    { id:'rec2', texto:'Pendiente \\(-\\frac13\\) y pasa por \\((3,2)\\).', opciones:['\\(y=-\\frac13x+3\\)','\\(y=-3x+11\\)','\\(y=\\frac13x+1\\)','\\(y=-\\frac13x+2\\)'], correcta:'\\(y=-\\frac13x+3\\)', explicacion:'2=−1+b, por lo tanto b=3.' },
    { id:'rec3', texto:'Paralela a \\(2y+2=3x\\) y pasa por \\((2,7)\\).', opciones:['\\(y=\\frac32x+4\\)','\\(y=-\\frac23x+\\frac{25}3\\)','\\(y=\\frac32x-4\\)','\\(y=3x+1\\)'], correcta:'\\(y=\\frac32x+4\\)', explicacion:'La recta dada tiene pendiente 3/2. Las paralelas conservan la pendiente.' },
    { id:'rec4', texto:'Perpendicular a \\(2y+x=-2\\) y con ordenada al origen 2.', opciones:['\\(y=2x+2\\)','\\(y=-2x+2\\)','\\(y=\\frac12x+2\\)','\\(y=-\\frac12x+2\\)'], correcta:'\\(y=2x+2\\)', explicacion:'La pendiente de la recta dada es −1/2; la perpendicular tiene pendiente 2.' }
  ],
  cuadraticas: [
    { id:'cua1', texto:'Para \\(y=2(x-3)^2-2\\), ¿cuál es el vértice y la imagen?', opciones:['V=(3,−2), Im=[−2,+∞)','V=(−3,−2), Im=[−2,+∞)','V=(3,2), Im=(−∞,2]','V=(−2,3), Im=ℝ'], correcta:'V=(3,−2), Im=[−2,+∞)', explicacion:'La forma canónica permite leer h=3, k=−2 y a>0.' },
    { id:'cua2', texto:'Para \\(y=-(x+8)(x+3)\\), ¿cuáles son las raíces y dónde es positiva?', opciones:['Raíces −8 y −3; C⁺=(−8,−3)','Raíces 8 y 3; C⁺=(3,8)','Raíces −8 y −3; C⁺ fuera de ellas','No tiene raíces'], correcta:'Raíces −8 y −3; C⁺=(−8,−3)', explicacion:'La parábola abre hacia abajo y queda positiva entre las raíces.' },
    { id:'cua3', texto:'Para \\(y=x^2-2x+5\\), elegí la afirmación correcta.', opciones:['V=(1,4), no tiene raíces reales y C⁺=ℝ','V=(−1,4), raíces −1 y 5','V=(1,−4), C⁻=ℝ','V=(2,5), es impar'], correcta:'V=(1,4), no tiene raíces reales y C⁺=ℝ', explicacion:'Se escribe (x−1)²+4, siempre positiva.' }
  ],
  construir: [
    { id:'con1', texto:'Vértice \\((-1,-7)\\) y pasa por \\((2,2)\\).', opciones:['\\(y=(x+1)^2-7\\)','\\(y=2(x+1)^2-7\\)','\\(y=(x-1)^2-7\\)','\\(y=-(x+1)^2-7\\)'], correcta:'\\(y=(x+1)^2-7\\)', explicacion:'Se propone y=a(x+1)²−7 y el punto (2,2) da a=1.' },
    { id:'con2', texto:'Corta al eje x solamente en \\(x=3\\) y al eje y en \\(y=4\\).', opciones:['\\(y=\\frac49(x-3)^2\\)','\\(y=4(x-3)^2\\)','\\(y=\\frac94(x-3)^2\\)','\\(y=(x+3)^2+4\\)'], correcta:'\\(y=\\frac49(x-3)^2\\)', explicacion:'Una única raíz en 3 implica vértice (3,0). Evaluar x=0 da 9a=4.' },
    { id:'con3', texto:'Raíces \\(-2\\) y \\(4\\), e imagen \\([-4,+\\infty)\\).', opciones:['\\(y=\\frac49(x+2)(x-4)\\)','\\(y=-\\frac49(x+2)(x-4)\\)','\\(y=(x+2)(x-4)-4\\)','\\(y=4(x+2)(x-4)\\)'], correcta:'\\(y=\\frac49(x+2)(x-4)\\)', explicacion:'El vértice está en x=1. Como f(1)=−9a=−4, resulta a=4/9.' }
  ],
  exponenciales: [
    { id:'exp1', texto:'Para \\(y=-2^x+1\\), ¿cuál es la imagen y la asíntota?', opciones:['Im=(−∞,1), A.H. y=1','Im=(1,+∞), A.H. y=1','Im=ℝ, A.H. x=1','Im=(−∞,0), A.H. y=0'], correcta:'Im=(−∞,1), A.H. y=1', explicacion:'−2^x es negativa y al sumar 1 queda siempre por debajo de 1.' },
    { id:'exp2', texto:'Para \\(y=2\\cdot3^x+2\\), elegí la afirmación correcta.', opciones:['Crece, Im=(2,+∞), no tiene raíz','Decrece, Im=(−∞,2)','Crece, Im=ℝ, raíz 2','Es par y su asíntota es x=2'], correcta:'Crece, Im=(2,+∞), no tiene raíz', explicacion:'El término exponencial es positivo, por eso y>2.' },
    { id:'exp3', texto:'4000 bacterias se triplican cada media hora. Modelo para t horas:', opciones:['\\(P(t)=4000\\cdot3^{2t}\\)','\\(P(t)=4000\\cdot3^{t/2}\\)','\\(P(t)=4000+3^{2t}\\)','\\(P(t)=12000t\\)'], correcta:'\\(P(t)=4000\\cdot3^{2t}\\)', explicacion:'En una hora transcurren dos períodos de media hora.' },
    { id:'exp4', texto:'Una cantidad se reduce 20% cada año. ¿Qué factor multiplica cada año?', opciones:['0,8','1,2','0,2','−0,8'], correcta:'0,8', explicacion:'Queda el 80% de la cantidad anterior: 80/100=0,8.' }
  ],
  partes: [
    { id:'par1', texto:'Para la función del laboratorio, ¿cuál es el dominio?', opciones:['(−∞,1)∪[2,3]∪[4,+∞)','ℝ','(−∞,1]∪(2,3)∪(4,+∞)','[1,4]'], correcta:'(−∞,1)∪[2,3]∪[4,+∞)', explicacion:'Se unen exactamente los intervalos indicados en las tres condiciones.' },
    { id:'par2', texto:'¿Cuál es \\(f(0)\\)?', opciones:['−4','−5','2','No está definida'], correcta:'−4', explicacion:'Como 0<1 se usa 2^x−5: 1−5=−4.' },
    { id:'par3', texto:'¿Cuál es \\(f(1{,}5)\\)?', opciones:['No está definida','−3,5','0,5','2'], correcta:'No está definida', explicacion:'1,5 no pertenece a ninguno de los intervalos del dominio.' },
    { id:'par4', texto:'En \\(x=3\\), el punto del tramo lineal debe dibujarse:', opciones:['Lleno, porque 3 está incluido','Vacío, porque 3 no está incluido','No se dibuja','Como una asíntota'], correcta:'Lleno, porque 3 está incluido', explicacion:'La condición es 2≤x≤3.' }
  ],
  transformaciones: [
    { id:'tra1', texto:'De \\(x^n\\) a \\((x-2)^n\\), el gráfico se desplaza:', opciones:['2 unidades a la derecha','2 unidades a la izquierda','2 unidades hacia arriba','No se desplaza'], correcta:'2 unidades a la derecha', explicacion:'El reemplazo x→x−2 produce una traslación horizontal hacia la derecha.' },
    { id:'tra2', texto:'De \\((x-2)^n\\) a \\((x-2)^n-1\\), el gráfico se desplaza:', opciones:['1 unidad hacia abajo','1 unidad hacia arriba','1 unidad a la izquierda','Se refleja'], correcta:'1 unidad hacia abajo', explicacion:'Restar 1 a toda la función traslada verticalmente hacia abajo.' },
    { id:'tra3', texto:'Si \\(n\\) es par y no hay desplazamiento, \\(x^n\\) es:', opciones:['Par','Impar','Ni par ni impar','Constante'], correcta:'Par', explicacion:'f(−x)=f(x) para exponentes pares.' },
    { id:'tra4', texto:'Para \\(f(x)=(x-2)^5-1\\), el punto de inflexión es:', opciones:['(2,−1)','(−2,−1)','(2,1)','(5,−1)'], correcta:'(2,−1)', explicacion:'En a(x−h)^n+k el punto de desplazamiento es (h,k).' }
  ],
  inversa: [
    { id:'inv1', texto:'\\(f(x)=(x-2)^3+1\\) es inyectiva en:', opciones:['Todo ℝ','Solo x≥2','Solo x≤2','Ningún intervalo'], correcta:'Todo ℝ', explicacion:'La cúbica es estrictamente creciente en todo ℝ.' },
    { id:'inv2', texto:'La inversa de \\(f(x)=(x-2)^3+1\\) es:', opciones:['\\(f^{-1}(x)=\\sqrt[3]{x-1}+2\\)','\\(f^{-1}(x)=(x+2)^3-1\\)','\\(f^{-1}(x)=\\sqrt{x-1}+2\\)','\\(f^{-1}(x)=\\sqrt[3]{x+1}-2\\)'], correcta:'\\(f^{-1}(x)=\\sqrt[3]{x-1}+2\\)', explicacion:'Se intercambian x e y y se despeja usando raíz cúbica.' },
    { id:'inv3', texto:'\\(f(x)=-(x-2)^2-4\\) no es inyectiva en ℝ. Una restricción válida es:', opciones:['x≥2','x∈ℝ','−4≤x≤4 solamente','x≠2'], correcta:'x≥2', explicacion:'En [2,+∞) una sola rama es estrictamente decreciente.' },
    { id:'inv4', texto:'La inversa de \\(f(x)=\\frac43x-1\\) es:', opciones:['\\(f^{-1}(x)=\\frac34(x+1)\\)','\\(f^{-1}(x)=\\frac43(x-1)\\)','\\(f^{-1}(x)=\\frac34x-1\\)','\\(f^{-1}(x)=\\frac43(x+1)\\)'], correcta:'\\(f^{-1}(x)=\\frac34(x+1)\\)', explicacion:'y=4x/3−1 ⇒ x=3(y+1)/4.' }
  ]
};

let estado = cargarEstado();
let practicaActual = null;
let racha = estado.racha || 0;
let mejorRacha = estado.mejorRacha || 0;

function estadoInicial(){ return { nombre:'', completadas:{}, respuestas:{}, personalizados:{}, racha:0, mejorRacha:0 }; }
function cargarEstado(){ try { return { ...estadoInicial(), ...(JSON.parse(localStorage.getItem(CLAVE)) || {}) }; } catch { return estadoInicial(); } }
function guardarEstado(){ estado.racha=racha; estado.mejorRacha=mejorRacha; localStorage.setItem(CLAVE, JSON.stringify(estado)); actualizarProgreso(); }
function typeset(el){ if(window.MathJax?.typesetPromise) window.MathJax.typesetPromise(el?[el]:undefined).catch(()=>{}); }
function escapar(t){ return String(t).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }
function numero(v,d=2){ if(!Number.isFinite(v)) return '—'; const n=Math.abs(v)<1e-10?0:v; return n.toLocaleString('es-AR',{maximumFractionDigits:d}); }
function mostrarToast(m){ const t=document.getElementById('toast'); t.textContent=m; t.classList.add('visible'); clearTimeout(mostrarToast.timer); mostrarToast.timer=setTimeout(()=>t.classList.remove('visible'),2400); }

function relationSvg(tipo){
  const mapas={ funcion:[['1','a'],['2','b'],['3','b']], doble:[['1','a'],['2','b'],['2','c'],['3','c']], falta:[['1','a'],['3','c']] };
  const ysL={1:42,2:88,3:134}, ysR={a:42,b:88,c:134};
  const arrows=mapas[tipo].map(([a,b])=>`<path d="M115 ${ysL[a]} C180 ${ysL[a]} 230 ${ysR[b]} 300 ${ysR[b]}" marker-end="url(#m-${tipo})"/>`).join('');
  return `<svg viewBox="0 0 420 176" role="img" aria-label="Diagrama de relación"><defs><marker id="m-${tipo}" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L0 6L8 3z" fill="#1f4e8c"/></marker></defs><ellipse cx="82" cy="88" rx="62" ry="78" fill="#eef5fc" stroke="#1f4e8c" stroke-width="3"/><ellipse cx="338" cy="88" rx="62" ry="78" fill="#f0faf6" stroke="#17725a" stroke-width="3"/><g font-family="Inter" font-weight="800" text-anchor="middle"><text x="82" y="18" fill="#1f4e8c">A</text><text x="338" y="18" fill="#17725a">B</text><text x="82" y="47">1</text><text x="82" y="93">2</text><text x="82" y="139">3</text><text x="338" y="47">a</text><text x="338" y="93">b</text><text x="338" y="139">c</text></g><g fill="none" stroke="#1f4e8c" stroke-width="3">${arrows}</g></svg>`;
}

function renderQuiz(id){
  const cont=document.getElementById(`quiz-${id}`); if(!cont) return;
  cont.innerHTML=quizzes[id].map((q,i)=>`<article class="pregunta" data-q="${q.id}">${q.grafico?`<div class="pregunta__grafico">${relationSvg(q.grafico)}</div>`:''}<p class="pregunta__enunciado"><strong>${i+1}.</strong> ${q.texto}</p><div class="opciones">${q.opciones.map(o=>`<label class="opcion opcion--tarjeta"><input type="radio" name="${q.id}" value="${escapar(o)}" ${estado.respuestas[q.id]===o?'checked':''}><span class="opcion__contenido">${escapar(o)}</span></label>`).join('')}</div><p class="explicacion" hidden></p></article>`).join('');
  cont.querySelectorAll('input').forEach(inp=>inp.addEventListener('change',()=>{ estado.respuestas[inp.name]=inp.value; guardarEstado(); }));
  typeset(cont);
}

function comprobarQuiz(id){
  let correctas=0, respondidas=0;
  quizzes[id].forEach(q=>{
    const art=document.querySelector(`[data-q="${q.id}"]`); const val=document.querySelector(`input[name="${q.id}"]:checked`)?.value;
    if(val) respondidas++;
    const ok=val===q.correcta; if(ok) correctas++;
    art.classList.toggle('correcta',ok); art.classList.toggle('incorrecta',Boolean(val)&&!ok);
    art.querySelectorAll('.opcion').forEach(l=>{ const v=l.querySelector('input').value; l.classList.toggle('correcta-marcada',v===q.correcta); l.classList.toggle('incorrecta-marcada',Boolean(val)&&v===val&&!ok); });
    const ex=art.querySelector('.explicacion'); ex.hidden=false; ex.innerHTML=ok?`<strong>Correcto.</strong> ${q.explicacion}`:`<strong>Revisá.</strong> ${q.explicacion}`;
  });
  const total=quizzes[id].length, completo=correctas===total;
  const feed=document.getElementById(`feedback-${id}`); feed.className=`retroalimentacion ${completo?'ok':'error'}`;
  feed.innerHTML=completo?`<strong>Actividad completa:</strong> ${correctas} de ${total}.`:respondidas<total?`Respondé todas las preguntas. Tenés ${correctas} correctas de ${total}.`:`Tenés ${correctas} correctas de ${total}. Revisá las explicaciones.`;
  if(completo){ estado.completadas[id]=true; marcarActividad(id,true); } else { delete estado.completadas[id]; marcarActividad(id,false); }
  guardarEstado();
  typeset(document.querySelector(`[data-actividad="${id}"]`));
}

function borrarQuiz(id){
  quizzes[id].forEach(q=>delete estado.respuestas[q.id]);
  document.querySelector(`[data-actividad="${id}"]`)?.querySelectorAll('input').forEach(i=>i.checked=false);
  document.querySelector(`[data-actividad="${id}"]`)?.querySelectorAll('.pregunta').forEach(a=>{a.classList.remove('correcta','incorrecta'); a.querySelector('.explicacion').hidden=true; a.querySelectorAll('.opcion').forEach(l=>l.classList.remove('correcta-marcada','incorrecta-marcada'));});
  const f=document.getElementById(`feedback-${id}`); f.textContent=''; f.className='retroalimentacion'; delete estado.completadas[id]; marcarActividad(id,false); guardarEstado();
}

function marcarActividad(id,ok){
  const a=document.querySelector(`[data-actividad="${id}"]`), e=document.getElementById(`estado-${id}`); if(!a||!e)return;
  a.classList.toggle('resuelta',Boolean(ok)); e.classList.toggle('ok',Boolean(ok)); e.textContent=ok?'Resuelta':'Pendiente';
}

function actualizarProgreso(){
  const n=Object.values(estado.completadas).filter(Boolean).length, p=Math.round(n/TOTAL_ACTIVIDADES*100);
  document.getElementById('progreso-texto').textContent=`${p}%`; document.getElementById('progreso-barra').style.width=`${p}%`; document.getElementById('aciertos-total').textContent=n;
  document.getElementById('resumen-nombre').textContent=estado.nombre?.trim()||'Sin completar'; document.getElementById('resumen-actividades').textContent=`${n} de ${TOTAL_ACTIVIDADES}`; document.getElementById('resumen-progreso').textContent=`${p}%`; document.getElementById('resumen-racha').textContent=mejorRacha;
  Object.keys(estado.completadas).forEach(id=>marcarActividad(id,estado.completadas[id]));
}

function graphSvg({xmin=-6,xmax=6,ymin=-6,ymax=6,curves=[],points=[],lines=[],label=''}){
  const W=680,H=420,m={l:52,r:24,t:24,b:42}, pw=W-m.l-m.r, ph=H-m.t-m.b;
  const X=x=>m.l+(x-xmin)/(xmax-xmin)*pw, Y=y=>m.t+(ymax-y)/(ymax-ymin)*ph;
  let grid='';
  for(let x=Math.ceil(xmin);x<=Math.floor(xmax);x++){ const xx=X(x); grid+=`<line x1="${xx}" y1="${m.t}" x2="${xx}" y2="${H-m.b}" class="g-grid"/>`; if(x!==0) grid+=`<text x="${xx}" y="${H-m.b+20}" class="g-tick" text-anchor="middle">${x}</text>`; }
  for(let y=Math.ceil(ymin);y<=Math.floor(ymax);y++){ const yy=Y(y); grid+=`<line x1="${m.l}" y1="${yy}" x2="${W-m.r}" y2="${yy}" class="g-grid"/>`; if(y!==0) grid+=`<text x="${m.l-10}" y="${yy+4}" class="g-tick" text-anchor="end">${y}</text>`; }
  const axes=`<line x1="${m.l}" y1="${Y(0)}" x2="${W-m.r}" y2="${Y(0)}" class="g-axis"/><line x1="${X(0)}" y1="${m.t}" x2="${X(0)}" y2="${H-m.b}" class="g-axis"/><text x="${W-m.r-4}" y="${Y(0)-8}" class="g-label">x</text><text x="${X(0)+9}" y="${m.t+14}" class="g-label">y</text>`;
  const lineHtml=lines.map(l=>{ if(l.type==='vertical') return `<line x1="${X(l.value)}" y1="${m.t}" x2="${X(l.value)}" y2="${H-m.b}" stroke="${l.color||'#b56b20'}" stroke-width="2" stroke-dasharray="8 7"/>`; return `<line x1="${m.l}" y1="${Y(l.value)}" x2="${W-m.r}" y2="${Y(l.value)}" stroke="${l.color||'#b56b20'}" stroke-width="2" stroke-dasharray="8 7"/>`; }).join('');
  const curveHtml=curves.map((c,idx)=>{
    const from=c.from??xmin,to=c.to??xmax,steps=c.steps||500; let d='',pen=false;
    for(let i=0;i<=steps;i++){ const x=from+(to-from)*i/steps, y=c.fn(x); const inside=Number.isFinite(y)&&y>=ymin-2*(ymax-ymin)&&y<=ymax+2*(ymax-ymin); if(!inside){pen=false;continue;} const cmd=pen?'L':'M'; d+=`${cmd}${X(x).toFixed(2)} ${Y(y).toFixed(2)} `; pen=true; }
    return `<path d="${d}" fill="none" stroke="${c.color||['#1f4e8c','#17725a','#b56b20','#a23f72'][idx%4]}" stroke-width="${c.width||4}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }).join('');
  const pointHtml=points.map(p=>`<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="${p.r||6}" fill="${p.open?'white':(p.color||'#b83a3a')}" stroke="${p.color||'#b83a3a'}" stroke-width="3"/>${p.label?`<text x="${X(p.x)+9}" y="${Y(p.y)-9}" class="g-point-label">${p.label}</text>`:''}`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapar(label||'Gráfico cartesiano')}"><style>.g-grid{stroke:#dce6f0;stroke-width:1}.g-axis{stroke:#24384c;stroke-width:2}.g-tick{font:12px Inter,sans-serif;fill:#536274}.g-label{font:700 15px Inter,sans-serif;fill:#24384c}.g-point-label{font:700 13px Inter,sans-serif;fill:#8a2e2e}</style><defs><clipPath id="plotClip"><rect x="${m.l}" y="${m.t}" width="${pw}" height="${ph}"/></clipPath></defs><rect x="${m.l}" y="${m.t}" width="${pw}" height="${ph}" rx="12" fill="#fff" stroke="#b9cadb"/>${grid}${axes}<g clip-path="url(#plotClip)">${lineHtml}${curveHtml}${pointHtml}</g></svg>`;
}

function actualizarLector(){
  const v=document.getElementById('lector-selector').value, g=document.getElementById('lector-grafico'), d=document.getElementById('lector-datos');
  const cfg={
    recta:{fn:x=>x+1,bounds:{xmin:-6,xmax:6,ymin:-6,ymax:6},points:[{x:-1,y:0,label:'raíz'},{x:0,y:1,label:'(0,1)'}],html:'<p><strong>Raíz:</strong> −1</p><p><strong>Crecimiento:</strong> crece en ℝ</p><p><strong>C⁺:</strong> (−1,+∞)</p><p><strong>Paridad:</strong> ni par ni impar</p>'},
    parabola:{fn:x=>2*(x-2)*(x+1),bounds:{xmin:-4,xmax:5,ymin:-6,ymax:10},points:[{x:-1,y:0},{x:2,y:0},{x:.5,y:-4.5,label:'V'}],html:'<p><strong>Raíces:</strong> −1 y 2</p><p><strong>Vértice:</strong> (0,5; −4,5)</p><p><strong>C⁻:</strong> (−1,2)</p><p><strong>Crece:</strong> (0,5,+∞)</p>'},
    canonica:{fn:x=>-2*(x-3)**2+2,bounds:{xmin:-1,xmax:7,ymin:-8,ymax:5},points:[{x:2,y:0},{x:4,y:0},{x:3,y:2,label:'V'}],html:'<p><strong>Imagen:</strong> (−∞,2]</p><p><strong>Raíces:</strong> 2 y 4</p><p><strong>C⁺:</strong> (2,4)</p><p><strong>Crece:</strong> (−∞,3)</p>'}
  }[v];
  g.innerHTML=graphSvg({...cfg.bounds,curves:[{fn:cfg.fn}],points:cfg.points,label:'Función seleccionada'}); d.innerHTML=cfg.html; typeset(d);
}

function actualizarLineal(){
  const a=+document.getElementById('lineal-a').value,b=+document.getElementById('lineal-b').value;
  document.getElementById('lineal-a-valor').textContent=numero(a); document.getElementById('lineal-b-valor').textContent=numero(b);
  const root=Math.abs(a)>1e-10?-b/a:null, prop=document.getElementById('lineal-propiedades');
  prop.innerHTML=`<p><strong>Función:</strong> \\(f(x)=${numero(a)}x${b>=0?'+':''}${numero(b)}\\)</p><p><strong>Comportamiento:</strong> ${a>0?'creciente':a<0?'decreciente':'constante'}</p><p><strong>Ordenada:</strong> \\(${numero(b)}\\)</p><p><strong>Raíz:</strong> ${root===null?(b===0?'todos los reales':'no tiene'):numero(root)}</p>`;
  const pts=[{x:0,y:b,label:'b'}]; if(root!==null&&root>=-8&&root<=8) pts.push({x:root,y:0,label:'raíz'});
  document.getElementById('lineal-grafico').innerHTML=graphSvg({xmin:-8,xmax:8,ymin:-8,ymax:8,curves:[{fn:x=>a*x+b}],points:pts,label:'Explorador de función lineal'}); typeset(prop);
}

function actualizarCuadratica(){
  let a=+document.getElementById('cuad-a').value; if(Math.abs(a)<.01){a=.25;document.getElementById('cuad-a').value=.25;}
  const h=+document.getElementById('cuad-h').value,k=+document.getElementById('cuad-k').value;
  document.getElementById('cuad-a-valor').textContent=numero(a);document.getElementById('cuad-h-valor').textContent=numero(h);document.getElementById('cuad-k-valor').textContent=numero(k);
  const rad=-k/a, roots=rad>=0?[h-Math.sqrt(rad),h+Math.sqrt(rad)]:[];
  const prop=document.getElementById('cuad-propiedades'); prop.innerHTML=`<p><strong>Función:</strong> \\(f(x)=${numero(a)}(x-${numero(h)})^2${k>=0?'+':''}${numero(k)}\\)</p><p><strong>Vértice:</strong> \\((${numero(h)},${numero(k)})\\)</p><p><strong>Imagen:</strong> ${a>0?`[${numero(k)},+∞)`:`(−∞,${numero(k)}]`}</p><p><strong>Raíces:</strong> ${roots.length?roots.map(x=>numero(x)).join(' y '):'no tiene raíces reales'}</p>`;
  const pts=[{x:h,y:k,label:'V'},...roots.map(x=>({x,y:0}))]; document.getElementById('cuad-grafico').innerHTML=graphSvg({xmin:-7,xmax:7,ymin:-9,ymax:9,curves:[{fn:x=>a*(x-h)**2+k}],points:pts,label:'Explorador de parábola'}); typeset(prop);
}

function actualizarExponencial(){
  let a=+document.getElementById('exp-a').value;if(Math.abs(a)<.01){a=.5;document.getElementById('exp-a').value=.5;}
  const b=+document.getElementById('exp-b').value,h=+document.getElementById('exp-h').value,c=+document.getElementById('exp-c').value;
  ['a','h','c'].forEach(z=>document.getElementById(`exp-${z}-valor`).textContent=numero({a,h,c}[z]));
  const grows=(a>0&&b>1)||(a<0&&b<1), ratio=-c/a, root=ratio>0?h+Math.log(ratio)/Math.log(b):null;
  const prop=document.getElementById('exp-propiedades');prop.innerHTML=`<p><strong>Función:</strong> \\(f(x)=${numero(a)}\\cdot${numero(b)}^{x-${numero(h)}}${c>=0?'+':''}${numero(c)}\\)</p><p><strong>Asíntota:</strong> \\(y=${numero(c)}\\)</p><p><strong>Imagen:</strong> ${a>0?`(${numero(c)},+∞)`:`(−∞,${numero(c)})`}</p><p><strong>Comportamiento:</strong> ${grows?'creciente':'decreciente'}</p><p><strong>Raíz:</strong> ${root===null?'no tiene':numero(root)}</p>`;
  const pts=[];if(root!==null&&root>-7&&root<7)pts.push({x:root,y:0,label:'raíz'});document.getElementById('exp-grafico').innerHTML=graphSvg({xmin:-7,xmax:7,ymin:-9,ymax:11,curves:[{fn:x=>a*b**(x-h)+c}],points:pts,lines:[{type:'horizontal',value:c}],label:'Explorador exponencial'});typeset(prop);
}

function actualizarPotencia(){
  const n=+document.getElementById('pot-n').value;let a=+document.getElementById('pot-a').value;if(Math.abs(a)<.01){a=.25;document.getElementById('pot-a').value=.25;}const h=+document.getElementById('pot-h').value,k=+document.getElementById('pot-k').value;
  ['a','h','k'].forEach(z=>document.getElementById(`pot-${z}-valor`).textContent=numero({a,h,k}[z]));
  const even=n%2===0, behavior=even?(a>0?'decrece antes de h y crece después':'crece antes de h y decrece después'):(a>0?'creciente en ℝ':'decreciente en ℝ');
  const prop=document.getElementById('pot-propiedades');prop.innerHTML=`<p><strong>Función:</strong> \\(f(x)=${numero(a)}(x-${numero(h)})^{${n}}${k>=0?'+':''}${numero(k)}\\)</p><p><strong>Punto de desplazamiento:</strong> \\((${numero(h)},${numero(k)})\\)</p><p><strong>Tipo:</strong> exponente ${even?'par':'impar'}</p><p><strong>Comportamiento:</strong> ${behavior}</p>`;
  document.getElementById('pot-grafico').innerHTML=graphSvg({xmin:-6,xmax:6,ymin:-9,ymax:9,curves:[{fn:x=>a*(x-h)**n+k}],points:[{x:h,y:k,label:even?'V':'I'}],label:'Potencia desplazada'});typeset(prop);
}

function actualizarPartes(){
  const curves=[{fn:x=>2**x-5,from:-5,to:.999,color:'#1f4e8c'},{fn:x=>-x+2,from:2,to:3,color:'#17725a'},{fn:x=>(x-6)**2-2,from:4,to:9,color:'#b56b20'}];
  const points=[{x:1,y:-3,open:true,color:'#1f4e8c'},{x:2,y:0,color:'#17725a'},{x:3,y:-1,color:'#17725a'},{x:4,y:2,color:'#b56b20'}];
  document.getElementById('partes-grafico').innerHTML=graphSvg({xmin:-5,xmax:9,ymin:-7,ymax:10,curves,points,label:'Función por partes'});
}
function evaluarPartes(){
  const x=+document.getElementById('partes-x').value; let y,regla;
  if(x<1){y=2**x-5;regla='\\(2^x-5\\), porque \\(x\\lt 1\\)';}
  else if(x>=2&&x<=3){y=-x+2;regla='\\(-x+2\\), porque \\(2\\le x\\le 3\\)';}
  else if(x>=4){y=(x-6)**2-2;regla='\\((x-6)^2-2\\), porque \\(x\\ge 4\\)';}
  const r=document.getElementById('partes-resultado'); r.innerHTML=y===undefined?`<p><strong>No está definida.</strong> ${numero(x)} no pertenece al dominio.</p>`:`<p><strong>Regla:</strong> ${regla}</p><p><strong>Resultado:</strong> \\(f(${numero(x)})=${numero(y)}\\)</p>`; typeset(r);
}

function actualizarInversa(){
  const v=document.getElementById('inversa-selector').value; let curves=[],points=[],html='',bounds={xmin:-6,xmax:6,ymin:-6,ymax:6};
  if(v==='lineal'){ curves=[{fn:x=>4*x/3-1,color:'#1f4e8c'},{fn:x=>3*(x+1)/4,color:'#b83a3a'}]; html='<p><strong>Inversa:</strong> \\(f^{-1}(x)=\\frac34(x+1)\\)</p><p>Ambas funciones tienen dominio e imagen \\(\\mathbb R\\).</p>'; }
  if(v==='cubica'){ bounds={xmin:-4,xmax:7,ymin:-7,ymax:8}; curves=[{fn:x=>(x-2)**3+1,color:'#1f4e8c'},{fn:x=>Math.cbrt(x-1)+2,color:'#b83a3a'}]; points=[{x:2,y:1,label:'f'},{x:1,y:2,label:'f⁻¹'}]; html='<p><strong>Inversa:</strong> \\(f^{-1}(x)=\\sqrt[3]{x-1}+2\\)</p><p>La cúbica es inyectiva en todo \\(\\mathbb R\\).</p>'; }
  if(v==='exponencial'){ bounds={xmin:-5,xmax:6,ymin:-5,ymax:10}; curves=[{fn:x=>2*3**x-2,color:'#1f4e8c'},{fn:x=>x>-2?Math.log((x+2)/2)/Math.log(3):NaN,color:'#b83a3a'},{fn:x=>x,color:'#d29a2e',width:2}]; html='<p><strong>Inversa:</strong> \\(f^{-1}(x)=\\log_3\\left(\\frac{x+2}{2}\\right)\\)</p><p>El dominio de la inversa es \\((-2,+\\infty)\\).</p>'; document.getElementById('inversa-grafico').innerHTML=graphSvg({...bounds,curves,lines:[{type:'horizontal',value:-2,color:'#1f4e8c'},{type:'vertical',value:-2,color:'#b83a3a'}],label:'Exponencial e inversa'}); document.getElementById('inversa-datos').innerHTML=html; typeset(document.getElementById('inversa-datos')); return; }
  if(v==='cuadratica'){ bounds={xmin:-2,xmax:9,ymin:-3,ymax:9}; curves=[{fn:x=>x>=3?(x-3)**2-1:NaN,color:'#1f4e8c'},{fn:x=>x>=-1?Math.sqrt(x+1)+3:NaN,color:'#b83a3a'}]; points=[{x:3,y:-1,label:'f'},{x:-1,y:3,label:'f⁻¹'}]; html='<p><strong>Restricción:</strong> \\(x\\ge3\\)</p><p><strong>Inversa:</strong> \\(f^{-1}(x)=\\sqrt{x+1}+3\\)</p>'; }
  curves.push({fn:x=>x,color:'#d29a2e',width:2}); document.getElementById('inversa-grafico').innerHTML=graphSvg({...bounds,curves,points,label:'Función e inversa'}); document.getElementById('inversa-datos').innerHTML=html; typeset(document.getElementById('inversa-datos'));
}

function actualizarBalde(){
  const t=+document.getElementById('balde-t').value, v=50-.5*t; document.getElementById('balde-t-valor').textContent=`${numero(t,0)} min`; document.getElementById('balde-datos').innerHTML=`<p><strong>Volumen:</strong> ${numero(v)} litros</p><p><strong>Pendiente:</strong> −0,5 L/min</p><p><strong>Dominio contextual:</strong> [0,100]</p><p><strong>Imagen:</strong> [0,50]</p>`; document.getElementById('balde-agua').style.height=`${Math.max(0,v/50*100)}%`; document.getElementById('balde-grafico').innerHTML=graphSvg({xmin:0,xmax:100,ymin:0,ymax:55,curves:[{fn:x=>50-.5*x,from:0,to:100}],points:[{x:t,y:v,label:`${numero(v)} L`}],label:'Volumen de agua'});
}

function cargarVideoDrive(boton){
  const target=document.getElementById(boton.dataset.target), id=boton.dataset.drive; if(!target||!id)return;
  target.innerHTML=`<iframe data-video src="https://drive.google.com/file/d/${id}/preview" title="Video de práctica" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
}
function detenerVideos(seccionActiva){ document.querySelectorAll('iframe[data-video]').forEach(f=>{ if(!seccionActiva?.contains(f)) f.src='about:blank'; }); }

function checkTaxi(){
  const vals={ind:document.getElementById('taxi-independiente').value,dep:document.getElementById('taxi-dependiente').value,mod:document.getElementById('taxi-modelo').value,costo:+document.getElementById('taxi-costo').value,cuadras:+document.getElementById('taxi-cuadras').value}; estado.personalizados.taxi=vals;
  const ok=vals.ind==='cuadras'&&vals.dep==='costo'&&vals.mod==='42x+418'&&Math.abs(vals.costo-1468)<.01&&Math.abs(vals.cuadras-40)<.01; const f=document.getElementById('feedback-taxi'); f.className=`retroalimentacion ${ok?'ok':'error'}`; f.innerHTML=ok?'<strong>Correcto.</strong> C(25)=42·25+418=1468 y 42x+418=2098 da x=40 cuadras.':'Revisá las variables y el modelo. La bajada de bandera es el valor inicial; para hallar cuadras hay que resolver 42x+418=2098.'; if(ok){estado.completadas.taxi=true;marcarActividad('taxi',true);}else{delete estado.completadas.taxi;marcarActividad('taxi',false);} guardarEstado(); typeset(f);
}
function resetTaxi(){ ['taxi-independiente','taxi-dependiente','taxi-modelo'].forEach(id=>document.getElementById(id).value=''); ['taxi-costo','taxi-cuadras'].forEach(id=>document.getElementById(id).value=''); document.getElementById('feedback-taxi').textContent=''; delete estado.personalizados.taxi; delete estado.completadas.taxi; marcarActividad('taxi',false); guardarEstado(); }
function restoreTaxi(){ const v=estado.personalizados.taxi;if(!v)return; document.getElementById('taxi-independiente').value=v.ind||'';document.getElementById('taxi-dependiente').value=v.dep||'';document.getElementById('taxi-modelo').value=v.mod||'';document.getElementById('taxi-costo').value=v.costo||'';document.getElementById('taxi-cuadras').value=v.cuadras||''; }

function parseNum(id){ return Number(String(document.getElementById(id).value).trim().replace(',','.')); }
function checkModelos(){
  const ids=['modelo-taxi','modelo-balde','modelo-bacterias','modelo-factor'], ans=[1468,45,36000,.8]; const vals=ids.map(parseNum); estado.personalizados.modelos=vals; const ok=vals.every((v,i)=>Number.isFinite(v)&&Math.abs(v-ans[i])<1e-6); const f=document.getElementById('feedback-modelos'); f.className=`retroalimentacion ${ok?'ok':'error'}`; f.innerHTML=ok?'<strong>Correcto.</strong> Los modelos son C(x)=42x+418, V(t)=50−0,5t, P(t)=4000·3^{2t} y R(t)=10000·0,8^t.':'Revisá: taxi 1468; balde 45; bacterias 36000; factor de reducción 0,8.'; if(ok){estado.completadas.modelos=true;marcarActividad('modelos',true);}else{delete estado.completadas.modelos;marcarActividad('modelos',false);} guardarEstado(); typeset(f);
}
function resetModelos(){ ['modelo-taxi','modelo-balde','modelo-bacterias','modelo-factor'].forEach(id=>document.getElementById(id).value='');document.getElementById('feedback-modelos').textContent='';delete estado.personalizados.modelos;delete estado.completadas.modelos;marcarActividad('modelos',false);guardarEstado(); }
function restoreModelos(){ const v=estado.personalizados.modelos;if(!v)return;['modelo-taxi','modelo-balde','modelo-bacterias','modelo-factor'].forEach((id,i)=>document.getElementById(id).value=v[i]??''); }

const practicaBanco=Object.values(quizzes).flat().map(q=>({pregunta:q.texto,opciones:q.opciones,correcta:q.correcta,explicacion:q.explicacion}));
function nuevaPractica(){ practicaActual=practicaBanco[Math.floor(Math.random()*practicaBanco.length)];document.getElementById('practica-pregunta').innerHTML=practicaActual.pregunta;document.getElementById('practica-opciones').innerHTML=practicaActual.opciones.map(o=>`<label class="opcion opcion--tarjeta"><input type="radio" name="practica" value="${escapar(o)}"><span class="opcion__contenido">${escapar(o)}</span></label>`).join('');const f=document.getElementById('practica-feedback');f.textContent='';f.className='retroalimentacion';typeset(document.getElementById('practica-final'));}
function comprobarPractica(){ if(!practicaActual)return;const v=document.querySelector('input[name="practica"]:checked')?.value,f=document.getElementById('practica-feedback');if(!v){f.className='retroalimentacion error';f.textContent='Elegí una opción.';return;}if(v===practicaActual.correcta){racha++;mejorRacha=Math.max(mejorRacha,racha);f.className='retroalimentacion ok';f.innerHTML=`<strong>Correcto.</strong> ${practicaActual.explicacion}`;}else{racha=0;f.className='retroalimentacion error';f.innerHTML=`<strong>No es esa.</strong> ${practicaActual.explicacion}`;}document.getElementById('racha').textContent=`Racha: ${racha}`;guardarEstado();typeset(f);}

function agregarNavegacionSecuencial(enlaces){ enlaces.forEach((e,i)=>{const s=document.querySelector(e.getAttribute('href'));if(!s||s.querySelector(':scope > .navegacion-secuencial'))return;const n=document.createElement('nav');n.className='navegacion-secuencial';n.setAttribute('aria-label','Navegación entre secciones');if(enlaces[i-1])n.innerHTML+=`<a class="boton boton--fantasma" href="${enlaces[i-1].getAttribute('href')}">← ${enlaces[i-1].textContent.trim()}</a>`;if(enlaces[i+1])n.innerHTML+=`<a class="boton boton--secundario boton--siguiente" href="${enlaces[i+1].getAttribute('href')}">${enlaces[i+1].textContent.trim()} →</a>`;s.appendChild(n);}); }
function configurarNavegacion(){
  const toggle=document.getElementById('nav-toggle'),nav=document.getElementById('lista-navegacion'),enlaces=[...nav.querySelectorAll('a[href^="#"]')],secciones=enlaces.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function mostrar(id,{url=false,scroll=true}={}){const dest=document.getElementById(id)||document.getElementById('inicio');secciones.forEach(s=>{const on=s===dest;s.classList.toggle('activa',on);s.setAttribute('aria-hidden',String(!on));if('inert'in s)s.inert=!on;});enlaces.forEach(a=>{const on=a.hash===`#${dest.id}`;a.classList.toggle('activo',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current');});nav.classList.remove('abierto');toggle.setAttribute('aria-expanded','false');detenerVideos(dest);if(url&&location.hash!==`#${dest.id}`)history.pushState({id:dest.id},'',`#${dest.id}`);if(scroll)dest.scrollIntoView({behavior:'smooth',block:'start'});}
  toggle.addEventListener('click',()=>{const o=nav.classList.toggle('abierto');toggle.setAttribute('aria-expanded',String(o));});document.addEventListener('click',ev=>{const a=ev.target.closest('a[href^="#"]');if(!a)return;const id=a.hash.slice(1);if(!document.getElementById(id))return;ev.preventDefault();mostrar(id,{url:true,scroll:true});});window.addEventListener('popstate',()=>mostrar(location.hash.slice(1)||'inicio',{scroll:false}));window.addEventListener('hashchange',()=>mostrar(location.hash.slice(1)||'inicio',{scroll:false}));agregarNavegacionSecuencial(enlaces);mostrar(location.hash.slice(1)||'inicio',{scroll:false});
}

function restaurarPersonalizados(){ restoreTaxi();restoreModelos(); }
function renderTodo(){ Object.keys(quizzes).forEach(renderQuiz);restaurarPersonalizados();actualizarProgreso();nuevaPractica(); }
function configurarEventos(){
  document.querySelectorAll('[data-check]').forEach(b=>b.addEventListener('click',()=>comprobarQuiz(b.dataset.check)));document.querySelectorAll('[data-reset]').forEach(b=>b.addEventListener('click',()=>borrarQuiz(b.dataset.reset)));
  document.getElementById('taxi-comprobar').addEventListener('click',checkTaxi);document.getElementById('taxi-borrar').addEventListener('click',resetTaxi);document.getElementById('modelos-comprobar').addEventListener('click',checkModelos);document.getElementById('modelos-borrar').addEventListener('click',resetModelos);
  document.getElementById('lector-selector').addEventListener('change',actualizarLector);['lineal-a','lineal-b'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarLineal));['cuad-a','cuad-h','cuad-k'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarCuadratica));['exp-a','exp-b','exp-h','exp-c'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarExponencial));['pot-n','pot-a','pot-h','pot-k'].forEach(id=>document.getElementById(id).addEventListener('input',actualizarPotencia));document.getElementById('partes-evaluar').addEventListener('click',evaluarPartes);document.getElementById('partes-x').addEventListener('input',evaluarPartes);document.getElementById('inversa-selector').addEventListener('change',actualizarInversa);document.getElementById('balde-t').addEventListener('input',actualizarBalde);
  document.querySelectorAll('.boton-video-drive').forEach(b=>b.addEventListener('click',()=>cargarVideoDrive(b)));
  const nom=document.getElementById('nombre-estudiante');nom.value=estado.nombre||'';nom.addEventListener('input',()=>{estado.nombre=nom.value;guardarEstado();});document.getElementById('imprimir').addEventListener('click',()=>window.print());document.getElementById('reiniciar').addEventListener('click',()=>{if(!confirm('¿Querés borrar todas las respuestas y el progreso guardado?'))return;localStorage.removeItem(CLAVE);estado=estadoInicial();racha=0;mejorRacha=0;location.reload();});document.getElementById('practica-nueva').addEventListener('click',nuevaPractica);document.getElementById('practica-comprobar').addEventListener('click',comprobarPractica);
}
function iniciar(){renderTodo();configurarEventos();configurarNavegacion();actualizarLector();actualizarLineal();actualizarCuadratica();actualizarExponencial();actualizarPartes();evaluarPartes();actualizarPotencia();actualizarInversa();actualizarBalde();document.getElementById('racha').textContent=`Racha: ${racha}`;}
document.addEventListener('DOMContentLoaded',iniciar);
