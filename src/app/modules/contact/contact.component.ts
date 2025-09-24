import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  contactList: any[] = [];


  constructor(private fb: FormBuilder, private ContactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.pattern(/^(?!.*(\d)\1{9})[6-9]\d{9}$/)]],
      message: ['', [Validators.required,Validators.minLength(5)]],
    });
  }
  isSubmitting = false;
 
  onSubmit() {
    
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.ContactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.contactForm.reset();
        this.isSubmitting = false;
        setTimeout(() => (this.successMessage = ''), 5000);
      },
      error: () => {
        this.successMessage = 'Something went wrong. Please try again.';
        this.isSubmitting = false;
        setTimeout(() => (this.successMessage = ''), 5000);
      },
    });
  
  
    // Proceed with API call
    this.ContactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.contactForm.reset();
  
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
      error: () => {
        this.successMessage = 'Something went wrong. Please try again.';
  
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
    });
  }
  
    
}


