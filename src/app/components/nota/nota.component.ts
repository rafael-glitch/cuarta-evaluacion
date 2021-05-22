import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder,FormGroup, Validators} from '@angular/forms';
import { NOTAS} from '../../interface/notas';
import { N0tasService} from '../../n0tas.service';
import {Router} from '@angular/router';  

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder, private servisio: N0tasService, private router:Router) {
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
      descripcion:['',[Validators.required,Validators.maxLength(150)]]
    });
   }


  ngOnInit(): void {
  }
  EnviarDatos(){
    let newNota:NOTAS={
      estado:this.formulario.get('estado')?.value,
      titulo:this.formulario.get('titulo')?.value,     
      descripcion:this.formulario.get('descripcion')?.value
     
    };

    console.log(newNota);
    this.servisio.sendNota(newNota).subscribe(nota => {console.log(nota);});    
    this.router.navigateByUrl('/vernotas');
  }

}
