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
    const displayString: string = `${this.fname} ${this.lname ?? ""}
${this.phone}
${this.email ?? ""}
Notes:
${(this.notes && this.notes.length > 0 ? this.notes : ["No Notes"]).join("\n")}`;

    return displayString;
  }

  addNotes(newNote: string): void {
    if (this.notes) {
      this.notes?.push(newNote);
    } else {
      this.notes = [newNote];
    }
  }
}
