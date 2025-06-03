import { Contact } from "./contact.js";
// import { Parser } from './parser.js'
// import promptSync from "prompt-sync";
// const prompt = promptSync();

export class ContactBook {
  hash: Map<string, Contact> = new Map();
  list: Contact[] = [];

  constructor() {}

  addContact() {
    const newFName: string = prompt("What is their first name? : ") ?? ""; //HACK: nullish coalescing op is bad practice //TODO: fname needed
    const newLName: string | null = prompt("What is their last name? : ") ?? ""; //HACK: nullish coalescing op is bad practice
    const newPhone: string = prompt("What is their phone number? : ") ?? ""; //HACK: nullish coalescing op is bad practice //TODO: phone needed  //TODO: regex check for number
    const newEmail: string | null = prompt("What is their email? : ") ?? ""; //HACK: nullish coalescing op is bad practice                       //TODO: regex check for email
    const newNotes: string[] | null = [""]; //TODO:note fucntionality; accept lines as individual notes until certain message entered?

    this.hash.set(
      newPhone,
      new Contact(newFName, newLName, newPhone, newEmail, newNotes)
    );
    this.list.push(
      new Contact(newFName, newLName, newPhone, newEmail, newNotes)
    );
  }

  removeContact() {} //TODO

  listAll() {
    // table of all contacts with headers
    console.log(
      `|-${"-".repeat(15)}-|-${"-".repeat(15)}-|-${"-".repeat(12)}-|-${"-".repeat(30)}-|-${"-".repeat(30)}-| `
    );
    console.log(
      `| ${"fname".padEnd(15)} | ${"lname".padEnd(15)} | ${"phone".padEnd(12)} | ${"email".padEnd(30)} | ${"notes".padEnd(30)} | `
    );
    console.log(
      `|-${"-".repeat(15)}-|-${"-".repeat(15)}-|-${"-".repeat(12)}-|-${"-".repeat(30)}-|-${"-".repeat(30)}-| `
    );

    for (const contact of this.hash.values()) {
      // console.log(contactList.get(key));
      console.log(this._contactToTableRow(contact));
    }
    console.log(
      `|-${"-".repeat(15)}-|-${"-".repeat(15)}-|-${"-".repeat(12)}-|-${"-".repeat(30)}-|-${"-".repeat(30)}-| `
    );
  }
  private _contactToTableRow(c: Contact): string {
    return `| ${c.fname.padEnd(15)} | ${c.lname?.padEnd(15) ?? " ".repeat(15)} | ${c.phone.padEnd(12)} | ${c.email?.padEnd(30) ?? " ".repeat(30)} | ${(c.notes?.toString().substring(0, 27) + "...").padEnd(30)} | `;
    //TODO: notes is probably going to need to be changed,                        ^^and the padding of phone too
  }
}
