export class Contact {
    constructor(fname, lname, phone, email, notes) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.notes = notes;
    }
    toString() {
        const displayString = `${this.fname} ${this.lname ?? ""}
${this.phone}
${this.email ?? ""}
Notes:
${(this.notes && this.notes.length > 0 ? this.notes : ["No Notes"]).join("\n")}`;
        return displayString;
    }
    addNotes(newNote) {
        if (this.notes) {
            this.notes?.push(newNote);
        }
        else {
            this.notes = [newNote];
        }
    }
}
