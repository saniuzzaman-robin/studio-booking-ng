import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});
  awaitingRegister: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async register() {
    this.awaitingRegister = true;
    await this._authService
      .register(this.registerForm.getRawValue())
      .then((res: boolean) => {
        if (res) {
          this.showSnackbarMessage(
            'Registration successful, please redirect to login page to login'
          );
          //this._router.navigate(['home']);
        }
        this.awaitingRegister = false;
      })
      .catch(error => {
        this.showSnackbarMessage(error?.error);
        this.awaitingRegister = false;
      });
  }
  navigateToLogin(): void {
    this._router.navigate(['auth', 'login']);
  }
  showSnackbarMessage(data: string): void {
    this._snackbar.open(data, '', { duration: 2000 });
  }
}
