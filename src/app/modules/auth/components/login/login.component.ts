import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginResponse } from './../../models/auth.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  awaitingLogin: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async login() {
    this.awaitingLogin = true;
    await this._authService
      .login(this.loginForm.getRawValue())
      .then((res: boolean) => {
        if (res) {
          this._router.navigate(['studios']);
        }
        this.awaitingLogin = false;
      })
      .catch(error => {
        this.showSnackbarMessage(error?.error);
        this.awaitingLogin = false;
      });
  }
  navigateToRegister(): void {
    this._router.navigate(['auth', 'register']);
  }
  showSnackbarMessage(data: string): void {
    this._snackbar.open(data, '', { duration: 2000 });
  }
}
