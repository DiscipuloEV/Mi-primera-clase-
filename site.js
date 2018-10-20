debugger
var ar;
 ar = ['h','o','l','a']
console.warn("Longitud de ar:",ar.length,ar);
console.log("Logintud de ar:"+ ar.length+ar)

// este es comentario

/*
1 hola 
2 mira mi 
3 comentario  
*/
var Minombre="Efren Oswaldo Villaquiran Peña";
for(var i=0;i<Minombre.length; i++){
    console.log (Minombre[i],"=>",i);
}
// for (declara variable ;condicion; intruduciones de cambio )
var x = " Palabra"
for (var i=0; i <Minombre.length; i++){
     if(i % 2 ==0){
         console.log( Minombre[i].toUpperCase(),"=>",i);      //convertir letra en mayuscula 
         }else{
             console.log(Minombre[i].toLowerCase(),"=>",i);   //convertir letra en minuscula 
         }
     }