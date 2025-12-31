import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInService } from '../sign-in-service';
import { signupModel } from '../signupModel';


@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
signUpForm:FormGroup;
constructor(private formBuilder: FormBuilder,private signInService:SignInService) {
console.log("Form Submib");
 this.signUpForm=this.formBuilder.group({
  email:[null,[Validators.required, Validators.email]],
  password:[null,[Validators.required,Validators.minLength(6)]],
  reEnterPassword:[null,[Validators.required]]
 },{validators: [passwordMatchValidator('password', 'reEnterPassword')]});
}
onSubmit()
{
     if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      const user: signupModel={  
      email: formData.email,
      password: formData.password}
      console.log('User values: ', JSON.stringify(user));
      this.signInService.registerUser(user).subscribe(response => {
        console.log('Registration successful:', response);
      }, error => {
        console.error('Registration failed:', error);
      });
      
    } else {
      console.log('Form is invalid');
    }
}

get email()
{
  return this.signUpForm.get('email');
}
get rePassword()
{
  return this.signUpForm.get('reEnterPassword');
}
get password(){
  return this.signUpForm.get('password');
}

}
function passwordMatchValidator(password: string, reEnterPassword: string) {
  return (signUpForm: FormGroup) => {
    const control = signUpForm.controls[password];
    const matchingControl = signUpForm.controls[reEnterPassword];

    if (control.value !== matchingControl.value) {
      
      const errors = matchingControl.errors || {};
      matchingControl.setErrors({ ...errors, mustMatch: true });
    } else {
      if (matchingControl.errors) {
        const { mustMatch, ...otherErrors } = matchingControl.errors;
        matchingControl.setErrors(Object.keys(otherErrors).length ? otherErrors : null);
      }
    }
  };
}

