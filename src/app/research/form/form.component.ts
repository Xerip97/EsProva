import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  submitForm(f: NgForm) {
    this.submitted.emit(f.value.name);
  }
}
