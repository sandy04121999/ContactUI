import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-contact-details',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {

  contacts: Contact[] = [];
  editingContact: Contact = { id: 0, firstname: '', lastname: '', email: ''  };
  modal: any;
  contactForm: FormGroup;
  submitSuccess = false;
  submitError = false;
  isEditContract = false;
  isDelete =false;
  constructor(public contactService: ContactService,private fb: FormBuilder,)
  {
    this.contactForm = this.fb.group({
      id: [0],
      firstname: ['', [Validators.required]],  // Correct way to define the 'required' validator
      lastname: ['', [Validators.required]], // // Correct way to define the 'required' validator
      email: ['', [Validators.required, Validators.email]]  // 'email' is required and valid
    });
  }
  ngOnInit(): void {
    this.getContacts();
    this.editingContact = { id: 0, firstname: '', lastname: '', email: ''  };
    this.modal = new bootstrap.Modal(document.getElementById('editSaveContactModal'));
  }

  getContacts(): void{
    this.contactService.getContacts().subscribe((data)=>{
      this.contacts = data;
    })
  }
  onNewContact(): void {
    this.editingContact = { id: 0, firstname: '', lastname: '', email: ''  };
    this.modal.show();
  }

  onContactEdit(contact: any): void {
    this.editingContact = { ...contact };
    this.modal.show();
  }

  onContactSave(): void {
    if (this.editingContact.id) {
      this.isEditContract = true;
      this.contactService
        .updateContact(this.editingContact.id, this.editingContact)
        .subscribe({next: (data) => {
          this.submitSuccess = data;
          this.submitError = false;
          this.contactForm.reset();
          this.getContacts(),
          setTimeout(()=> this.submitSuccess=false, 1500);},
          error:(error)=>
            {
          this.submitError = true;
          this.submitSuccess = false;
          setTimeout(()=> this.submitError= false, 1500);
            }
        });
        this.modal.hide();
    } else {
      this.isEditContract = false;
      this.contactService
        .createContact(this.editingContact)
        .subscribe({next: (data) => {
          this.submitSuccess = data;
          this.submitError = false;
          this.contactForm.reset();
          this.getContacts();
          setTimeout(()=> this.submitSuccess=false, 1500);
        },
        error:(error)=>
          {
        this.submitError = true;
        this.submitSuccess = false;
        setTimeout(()=> this.submitError, 1500);
          }
      });
        this.modal.hide();
    }
    this.editingContact = { id: 0, firstname: '', lastname: '', email: ''  };
  }
  onContactDelete(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      {next: (data) => {
        this.isDelete =data;
        this.getContacts();
        setTimeout(()=> this.isDelete=false, 1500);
      }

      });
  }
  onContactCancel(): void {
    this.editingContact = { id: 0, firstname: '', lastname: '', email: ''  };
  }
}
