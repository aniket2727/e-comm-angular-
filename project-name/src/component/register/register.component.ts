import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    name:string='';
    email:string='';
    password:string='';

    onhandleregister(){
      console.log(this.name,this.email,this.password)
    }
}
