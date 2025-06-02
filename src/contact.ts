export class Contact {
  fname: string;
  lname: string | null;
  phone: string;
  email: string | null;
  notes: string[] | null;
  constructor(
    fname: string,
    lname: string | null,
    phone: string,
    email: string | null,
    notes: string[] | null
  ) {
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
  }

  toString() {
    return `| ${this.fname.padEnd(15)} | ${this.lname?.padEnd(15) ?? ""} | ${this.phone.padEnd(10)} | ${this.email?.padEnd(30) ?? ""} | ${this.notes?.toString().padEnd(20)} | `;
     //TODO: notes is probably going to need to be changed here,                        ^^and the padding of phone too
  }
}
