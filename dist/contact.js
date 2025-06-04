export class Contact {
    constructor(fname, lname, phone, email, notes) {
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
