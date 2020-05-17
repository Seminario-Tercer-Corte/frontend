import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.css"],
})
export class InputTextComponent implements OnInit {
  @Input() label: string = "label";
  @Input() type: string = "text";
  @Input() placeholder: string = "placeholder";
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
