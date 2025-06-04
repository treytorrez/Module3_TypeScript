import { Contact } from "./contact.js";
// import { Parser } from './parser.js'
// import promptSync from "prompt-sync";
// const prompt = promptSync();
import prompts from "prompts";

export class ContactBook {
  hash: Map<string, Contact> = new Map();
  list: Contact[] = [];

  constructor() {}

  async addContact(): Promise<void> {
    type ContactResponse = {
      fname: string;
      lname: string;
      phone: string;
      email: string;
      note: string;
    };
    const responses: ContactResponse = await prompts([
      // Prompts for first name (Required) ==========================================
      {
        type: "text",
        name: "fname",
        message: "[Required] What is the first name?",
        validate: (value: string) =>
          value.trim().length > 0 ? true : "Name cannot be empty",
      },
      // Prompts for last name ======================================================
      { type: "text", name: "lname", message: "What is the last name? " },
      // Prompts for Phone (Required) ===============================================
      {
        type: "text",
        name: "phone",
        message: "[Required] What is the phone number? ",
        validate: (value: string) => {
          const numOnly: string = value.replace(/\D/g, "");
          return numOnly.length == 10 || numOnly.length == 11
            ? true
            : "Please enter a valid phone number";
        },
      }, //checks for length of 10 or 11 (for country codes)
      // Prompts for email =========================================================
      {
        type: "text",
        name: "email",
        message: "What is the email? ",
        validate: (value: string) => {
          return value.search(".+@.+\\..+") == 0 || value.length == 0
            ? true
            : "Please enter a valid email";
        },
      }, // loosely checks for an email or for nothing
      // Prompts for note =========================================================
      { type: "text", name: "note", message: "Add a note? " },
    ]);

    const newContact: Contact = new Contact(
      responses.fname,
      responses.lname,
      responses.phone,
      responses.email,
      [responses.note]
    );
    this.hash.set(responses.phone, newContact);
    this.list.push(newContact);
  }

  removeContact() {} //TODO

  //DEPRECEATED..for now
  // listAll() {
  //   // table of all contacts with headers
  //   console.log(
  //     `|-${"-".repeat(15)}-|-${"-".repeat(15)}-|-${"-".repeat(12)}-|-${"-".repeat(30)}-|-${"-".repeat(30)}-| `
  //   );
  //   console.log(
  //     `| ${"fname".padEnd(15)} | ${"lname".padEnd(15)} | ${"phone".padEnd(12)} | ${"email".padEnd(30)} | ${"notes".padEnd(30)} | `
  //   );
  //   console.log(
  //     `|-${"-".repeat(15)}-|-${"-".repeat(15)}-|-${"-".repeat(12)}-|-${"-".repeat(30)}-|-${"-".repeat(30)}-| `
  //   );

  //   for (const contact of this.hash.values()) {
  //     // console.log(contactList.get(key));
  //     console.log(this._contactToTableRow(contact));
  //   }
  //   console.log(
  //     `|-${"-".repeat(15)}-|-${"-".repeat(15)}-|-${"-".repeat(12)}-|-${"-".repeat(30)}-|-${"-".repeat(30)}-| `
  //   );
  // }

  async listAll() {

    // Creates a list of prompt.Choice to display in the selection list
    const choicesList: prompts.Choice[] = [];
    for (let i = 0; i < this.list.length; i++){
      const current:Contact = this.list[i];
      choicesList.push({title:`${current.fname} ${current.lname}`, description:current.phone, value:current})
    }
    
    const list = await prompts({
      type: "autocomplete",
      name: "Contacts",
      message: "Select a contact to view",
      choices: choicesList,
    });


  }
  //DEPRECEATED..for now
  // private _contactToTableRow(c: Contact): string {
  //   return `| ${c.fname.padEnd(15)} | ${c.lname?.padEnd(15) ?? " ".repeat(15)} | ${c.phone.padEnd(12)} | ${c.email?.padEnd(30) ?? " ".repeat(30)} | ${(c.notes?.toString().substring(0, 27) + "...").padEnd(30)} | `;
  //   //TODO: notes is probably going to need to be changed,                        ^^and the padding of phone too
  // }
}
