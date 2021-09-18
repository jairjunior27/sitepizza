
    
   
    

function textoMaquina(e){
   
    const textoArray = e.innerHTML.split('');
    e.innerHTML='';
   textoArray.forEach((letra,i)=>{
       
       setTimeout(()=> e.innerHTML += letra, 130*i);
       
       })
     
   

}



    

const titulo = document.getElementById('texto1');
textoMaquina(titulo);


textoTopo = document.getElementById('textoTopo')
now = new Date;
if(now.getHours () >= 0 && now.getHours () < 5){
   textoTopo.innerHTML = 'Agradecemos a preferencia boa madrugada'
}else if(now.getHours () >= 5 && now.getHours() < 12){
    textoTopo.innerHTML = 'Bom dia G & E Pizzas agradece a preferencia.'
}else if(now.getHours () >= 12 && now.getHours() < 18){
    textoTopo.innerHTML = 'Boa tarde G & E Pizzas agradece a preferencia.'
}else{
    textoTopo.innerHTML = 'Boa noite G & E Pizzas agradece a preferencia.'
}


