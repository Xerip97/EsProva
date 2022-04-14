import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/Persona';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
})
export class ResearchComponent implements OnInit {
  nomeInput: string = '';
  ricerche: Persona[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  submit(nome: String) {
    this.httpClient
      .get(`https://api.genderize.io/?name=${nome}`)
      .subscribe((data) => {
        // this.ricerche.push({ ...data, id: this.ricerche.length });
        console.log(data);
      });
  }
}
