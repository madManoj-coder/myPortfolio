import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  isSubmitting = false
  isSubmitted = false

  onSubmit() {
    if (this.isValidForm()) {
      this.isSubmitting = true

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false
        this.isSubmitted = true
        this.resetForm()

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.isSubmitted = false
        }, 5000)
      }, 2000)
    }
  }

  isValidForm(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    )
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  resetForm() {
    this.contactForm = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }

}
