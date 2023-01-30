const form = document.getElementById("formulario")

// Secciones
const sobreMi = document.querySelector('.sobreMi');
const informacionP = document.querySelector('.informacionP');
const experiencia = document.querySelector('.experiencia');
const habilidades = document.querySelector('.habilidades');
const contactos = document.querySelector('.contactos');
const lateralDerecho = document.querySelectorAll('.lateralDerecho a');

// Enlaces
const aSobreMi = document.querySelector('.aSobreMi')
const aInformacionP = document.querySelector('.aInformacionP')
const aExperiencia = document.querySelector('.aExperiencia')
const aHabilidades = document.querySelector('.aHabilidades')
const aContactos = document.querySelector('.aContactos')



form.addEventListener("submit", function(e){
    e.preventDefault();
    alert('Su solicitud ha sido enviada. Nos contactaremos con usted a la brevedad.');
    form.reset();
}
)


window.addEventListener('scroll',function(){
    console.log(informacionP.getBoundingClientRect())
   
  if(sobreMi.getBoundingClientRect().top <= 0 && sobreMi.getBoundingClientRect().top > -400  ){
    aSobreMi.classList.add("activo")
  }else{
    aSobreMi.classList.remove("activo")
  }
})


window.addEventListener('scroll',function(){
    if(informacionP.getBoundingClientRect().top <= 0 && informacionP.getBoundingClientRect().top > -450 ){
        aInformacionP.classList.add("activo")
    }else{
        aInformacionP.classList.remove("activo")
    }
})

window.addEventListener('scroll',function(){
  if(experiencia.getBoundingClientRect().top < 0){
    aExperiencia.classList.add("activo")
  }else{
    aExperiencia.classList.remove("activo")
  }
})

window.addEventListener('scroll',function(){
  if(habilidades.getBoundingClientRect().top < 0){
    aHabilidades.classList.add("activo")
  }else{
    aHabilidades.classList.remove("activo")
  }
})

window.addEventListener('scroll',function(){
  if(contactos.getBoundingClientRect().top < 0){
    aContactos.classList.add("activo")
  }else{
    aContactos.classList.remove("activo")
  }
})