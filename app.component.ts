import {Component} from '@angular/core';

@Component({
    selector: 'lundi',
    templateUrl:"./app/app.component.html",
    styleUrl: ["./app/AppComponent.style.css"],

export class AppComponent {
    title:string = 'Angular';
    paragraphe:string = 'TEXTE EN MIN ECRIT EN MAJ';
    button:string='Affichage de la date';
    anniv:Date;
    afficherDate(){
      this.anniv=new Date();
    };
    btn:string='';
    message:string="angular c'est de la bombe!";
    afficherMess(){
        alert(this.message);
    }
}