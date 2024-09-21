import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connnexion',
  templateUrl: './connnexion.component.html',
  styleUrls: ['./connnexion.component.css']
})
export class ConnnexionComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        success => {
          if (success) {
            // Rediriger vers la page d'accueil ou tableau de bord
            console.log('Login réussi');
          } else {
            // Afficher un message d'erreur
            console.log('Échec de la connexion');
          }
        }

      );

    }
  }
}

}
