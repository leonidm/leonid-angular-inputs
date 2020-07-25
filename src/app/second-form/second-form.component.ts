import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-second-form",
  templateUrl: "./second-form.component.html",
  styleUrls: ["./second-form.component.css"]
})
export class SecondFormComponent implements OnInit {
  secondForm: FormGroup;
  ttt: string;
  chktt: boolean;
  rad: number;

  constructor(private fb: FormBuilder) {
    this.secondForm = this.fb.group({
      text1: ["aa"],
      chk: [true],
      radio: 22
    });
  }

  ngOnInit() {
    this.secondForm.get("text1").valueChanges.subscribe(v => {
      this.ttt = v;
    });
    this.secondForm.get("chk").valueChanges.subscribe(v => {
      this.chktt = v;
    });
    this.secondForm.get("radio").valueChanges.subscribe(v => {
      this.rad = v;
    });
  }
}
