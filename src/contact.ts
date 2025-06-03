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
    // return `| ${this.fname.padEnd(15)} | ${this.lname?.padEnd(15) ?? " ".repeat(15)} | ${this.phone.padEnd(12)} | ${this.email?.padEnd(30) ?? " ".repeat(30)} | ${(this.notes?.toString().substring(0,27)+ "...").padEnd(30)} | `;
  }
}
