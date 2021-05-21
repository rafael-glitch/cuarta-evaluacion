import { Component, OnInit } from '@angular/core';
import { NOTAS} from '../../interface/notas'
import { N0tasService } from '../../n0tas.service'
@Component({
  selector: 'app-vernotas',
  templateUrl: './vernotas.component.html',
  styleUrls: ['./vernotas.component.scss']
})
export class VernotasComponent implements OnInit {
  ListNota: Array<NOTAS>=[];
  constructor(private servisio: N0tasService) { }

  ngOnInit(): void {
    this.servisio.catchNota().subscribe((gatos: string | any[])=>{
      for(let i=0; i<gatos.length; i++){
        this.ListNota.push(gatos[i]);
      }
    })
    
  }

}
