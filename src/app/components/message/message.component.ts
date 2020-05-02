import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessageComponent implements OnInit {
  @Input() success: boolean = true;
  @Input() message = "Mensaje";
  @Output() display = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.display.emit(false);
  }
}
