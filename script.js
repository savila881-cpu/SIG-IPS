const solicitudes = [
 {radicado:"SIG-IPS-001",documento:"100000001",nombre:"María López",ips:"Centro de Salud Central",motivo:"Cambio de residencia",estado:"RECIBIDA"},
 {radicado:"SIG-IPS-002",documento:"100000002",nombre:"Pedro Ruiz",ips:"IPS San José",motivo:"Preferencia del afiliado",estado:"EN REVISIÓN"}
];
const formSolicitud=document.getElementById("formSolicitud");
const mensajeRegistro=document.getElementById("mensajeRegistro");
const formConsulta=document.getElementById("formConsulta");
const resultadoConsulta=document.getElementById("resultadoConsulta");
const tablaSolicitudes=document.getElementById("tablaSolicitudes");
formSolicitud.addEventListener("submit",function(evento){
 evento.preventDefault();
 const documento=document.getElementById("documento").value.trim();
 const nombre=document.getElementById("nombre").value.trim();
 const ips=document.getElementById("ips").value.trim();
 const motivo=document.getElementById("motivo").value;
 const radicado="SIG-IPS-"+String(solicitudes.length+1).padStart(3,"0");
 const nueva={radicado,documento,nombre,ips,motivo,estado:"RECIBIDA"};
 solicitudes.push(nueva);agregarFila(nueva);
 mensajeRegistro.textContent="Solicitud registrada en este prototipo. Tu radicado es: "+radicado;
 formSolicitud.reset();
});
formConsulta.addEventListener("submit",function(evento){
 evento.preventDefault();
 const buscado=document.getElementById("radicado").value.trim().toUpperCase();
 const solicitud=solicitudes.find(item=>item.radicado.toUpperCase()===buscado);
 if(solicitud){resultadoConsulta.innerHTML="<strong>Solicitud encontrada</strong><p>Radicado: "+solicitud.radicado+"</p><p>Afiliado: "+escaparTexto(solicitud.nombre)+"</p><p>IPS de destino: "+escaparTexto(solicitud.ips)+"</p><p>Motivo: "+escaparTexto(solicitud.motivo)+"</p><p>Estado: <strong>"+solicitud.estado+"</strong></p>";}
 else{resultadoConsulta.textContent="No se encontró el radicado. Revisa el número e intenta nuevamente.";}
});
function agregarFila(solicitud){const fila=document.createElement("tr");fila.innerHTML="<td>"+solicitud.radicado+"</td><td>"+escaparTexto(solicitud.nombre)+"</td><td>"+escaparTexto(solicitud.ips)+"</td><td><span class='estado recibida'>"+solicitud.estado+"</span></td>";tablaSolicitudes.appendChild(fila);}
function escaparTexto(texto){return String(texto).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}
document.getElementById("btnInicioSesion").addEventListener("click",function(){alert("Esta opción es una muestra visual del prototipo académico.");});
