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
    const displayString: string = 
`${this.fname} ${this.lname ??""}
${this.phone}
${this.email ?? ""}
Notes:
${(this.notes && this.notes.length > 0 ? this.notes : ["No Notes"]).join("\n")}`;

    return displayString;
    // return `| ${this.fname.padEnd(15)} | ${this.lname?.padEnd(15) ?? " ".repeat(15)} | ${this.phone.padEnd(12)} | ${this.email?.padEnd(30) ?? " ".repeat(30)} | ${(this.notes?.toString().substring(0,27)+ "...").padEnd(30)} | `;
  }

  addNotes(newNote:string): void{
    if (this.notes){ this.notes?.push(newNote)}
    else {this.notes = [newNote]}
  }
}
