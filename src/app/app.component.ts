import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  inputs = [
    {
      type: "text",
      id: "text 1",
      name: "text 1",
      val: "aa"
    },
    {
      type: "password",
      id: "passwd 1",
      name: "passwd 1",
      val: "z"
    },
    {
      type: "checkbox",
      id: "checkbox 1",
      name: "checkbox 1",
      val: true
    },
    {
      type: "radio",
      id: "radio 1",
      name: "aa",
      val: "1",
      commonVal: null
    },
    {
      type: "radio",
      id: "radio 2",
      name: "aa",
      val: "2",
      commonVal: null
    }
  ];

  radioVal = "2";

  constructor() {
    this.inputs
      .filter(x => x.type === "radio" && x.name === "aa")
      .forEach(x => {
        console.log(x.id);
        delete x.commonVal;
        Object.defineProperty(x, "commonVal", {
          get: () => {
            return this.radioVal;
          },
          set: v => {
            this.radioVal = v;
          },
          configurable: true
        });
      });
  }
}
