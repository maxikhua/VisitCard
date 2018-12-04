import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /**
   * Validation form.
   */
  public theForm: FormGroup;

  /**
   * User view model.
   */
  public theUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.theForm = new FormGroup({
      userComments: new FormControl('', Validators.required),
      userEmail: new FormControl('', [
        Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')])
    });
  }

  /**
   * Form submit.
   */
  submit() {
    this.theUser = new User(this.theForm.value.userEmail, this.theForm.value.userComments);
    this.userService.users.push(this.theUser);
    this.router.navigate(['/acknowledgment']);
  }

  ngOnInit() {
  }
}
