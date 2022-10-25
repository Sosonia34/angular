/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: UserProfileComponent },
];

export { ROUTES };