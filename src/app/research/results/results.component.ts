import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/Persona';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() ricerche!: Persona[];
  constructor() {}

  ngOnInit(): void {}
}
