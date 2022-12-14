import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { searchParams } from 'src/app/app-types';


@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  details: FormGroup;
  @Output() filterParam = new EventEmitter<searchParams>()

  constructor(fb: FormBuilder) { 
    this.details = fb.group({
    title: ['', Validators.minLength(3)],
    author: ['', Validators.minLength(3)]


    })
  }

  saveEmployeeDetails(): void {
    console.log('Form Submitted', this.details.value);
    this.filterParam.emit(this.details.value);
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.details.value, "moo");
    this.filterParam.emit(this.details.value);
  }

}
