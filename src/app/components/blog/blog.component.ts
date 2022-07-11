import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicacion.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  ArrayPublicaciones:Publicacion[] = []
  resultado:string = "";
  autor:string = "";
  titulo:string = "";
  imagen:any = "";
  contenido:string = "";
  fecha:string = "";
  

  constructor() { 
    this.ArrayPublicaciones = [
      {
        autor: "ANTONIA LABORDE",
        titulo: "Trump cierra su blog tras menos de un mes en funcionamiento",
        imagen: "data:image/jpeg;base64,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",
        contenido: "Las menciones sobre el expresidente se han desplomado un 95% desde enero en las principales redes sociales, donde sus cuentas continúan suspendidas",
        fecha: "02 JUN 2021 - 14:01 COT"
      },
      {
        autor: "JORDI PÉREZ COLOMÉ",
        titulo: "“Estoy sorprendidísima de que hayan dado a Madrid el Patrimonio de la Humanidad”",
        imagen: "https://imagenes.elpais.com/resizer/HJdk7nexaQxyfu0EFSEn6ZuZvOQ=/414x311/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CJED3AYF5NFBXJC3CEX7LKQ6Y4.jpg",
        contenido: "Sonia Taravilla descubre el patrimonio de la capital desde una célebre cuenta en redes que toma el nombre de un oficio olvidado: el sereno",
        fecha: "27 AGO 2021 - 22:20 COT"
      }
    ]
  }

  ngOnInit(): void {
    this.cargarPublicaciones();
  }
 
  vaciar(){
    this.ArrayPublicaciones = [];
    this.cargarPublicaciones();
  }


publicar():void{
 if(this.autor == "" || this.titulo == ""  || this.contenido == "" || this.fecha == "" || this.imagen == ""){
   alert("Todos los campos son obligatorios");
   if(this.autor =="")
   {
      alert("falta el autor");
   }
    if(this.titulo =="")
    {
      alert("falta el titulo");
    }
    if(this.contenido =="")
    {
      alert("falta el contenido");
    }
    if(this.fecha =="")
    {
      alert("falta la fecha");
    }
    if(this.imagen =="")
    {
      alert("falta la imagen");
    }
 }



 if(this.ArrayPublicaciones.findIndex(x => x.titulo == this.titulo) != -1){
    alert("El titulo ya existe");
  }

 else{
  this.ArrayPublicaciones.push({
    autor: this.autor,
    titulo: this.titulo,
    imagen: this.imagen,
    contenido: this.contenido,
    fecha: this.fecha
  })

  this.cargarPublicaciones();
  this.limpiar();

 }

}

limpiar():void{
  this.autor = "";
  this.titulo = "";
  this.imagen = "";
  this.contenido = "";
  this.fecha = "";
}
cargarPublicaciones(){
  this.resultado = "";
  
  this.ArrayPublicaciones.forEach(element => {
    this.resultado += `<article class="media">
    <header class="card-title">${element.titulo}</header>
    <div class="card-body">
    <div class="image"> <div class="autor"><a>${element.autor}</a> <span> <span >|</span> <time >${element.fecha}</time></span></div> <img src="${element.imagen}" alt=""> </div>
      <div class="content">
      <header class="card-title1">${element.titulo}</header>
      <div class="autor1"><a>${element.autor}</a> <span> <span >|</span> <time >${element.fecha}</time></span></div> 
       <p class="card-text">${element.contenido}</p>
       <footer class="card-footer"> <a href="#" class="card-link">Leer más</a> </footer>
      </div>
    </div>
  </article>
  `
  }
  )
 }

}