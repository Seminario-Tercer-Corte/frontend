import { Component, OnInit } from "@angular/core";
import { PruebaService } from "../../services/prueba.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"],
})
export class PerfilComponent implements OnInit {
  greting: any = [];

  constructor(protected pruebaservice: PruebaService) {}

  ngOnInit(): void {
    this.getGreting;
    console.log("prueba");
  }

  getGreting() {
    this.pruebaservice.gerGreting().subscribe(
      (res) => {
        this.greting = res;
        console.log(res);
        console.log("res");
      },
      (err) => console.error(err)
    );
  }
}
