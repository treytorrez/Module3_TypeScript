import { Contact } from './contact.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
const menu = `
Welcome to your contact book, choose an option:
1. View all contacts
2. Add a contact
3. Delete a contact
4. Edit a contact
5. Search for a contact
6. Close`;
const contactList = new Map();
while (true) {
    console.log(menu);
    const choice = prompt("Make a selection: ");
    let choiceParsed;
    if (choice == null) {
        break;
    }
    else {
        choiceParsed = parseInt(choice);
    }
    switch (choiceParsed) {
        case 1: // View all contacts
            //TODO
            console.log(`|-${'-'.repeat(15)}-|-${'-'.repeat(15)}-|-${'-'.repeat(12)}-|-${'-'.repeat(30)}-|-${'-'.repeat(30)}-| `);
            console.log(`| ${'fname'.padEnd(15)} | ${'lname'.padEnd(15)} | ${'phone'.padEnd(12)} | ${'email'.padEnd(30)} | ${'notes'.padEnd(30)} | `); // table with headers
            console.log(`|-${'-'.repeat(15)}-|-${'-'.repeat(15)}-|-${'-'.repeat(12)}-|-${'-'.repeat(30)}-|-${'-'.repeat(30)}-| `);
            for (const [key, value] of contactList) {
                // console.log(contactList.get(key));
                console.log(value.toString());
            }
            console.log(`|-${'-'.repeat(15)}-|-${'-'.repeat(15)}-|-${'-'.repeat(12)}-|-${'-'.repeat(30)}-|-${'-'.repeat(30)}-| `);
            break;
        case 2: // Add a contact
            {
                const newFName = prompt("What is their first name? : ") ?? ""; //HACK: nullish coalescing op is bad practice //TODO: fname needed
                const newLName = prompt("What is their last name? : ") ?? ""; //HACK: nullish coalescing op is bad practice
                const newPhone = prompt("What is their phone number? : ") ?? ""; //HACK: nullish coalescing op is bad practice //TODO: phone needed  //TODO: regex check for number
                const newEmail = prompt("What is their email? : ") ?? ""; //HACK: nullish coalescing op is bad practice                       //TODO: regex check for email
                const newNotes = [""]; //TODO:note fucntionality; accept lines as individual notes until certain message entered?
                contactList.set(newPhone, new Contact(newFName, newLName, newPhone, newEmail, newNotes));
            }
            break;
        case 3: // Delete a contact
            //TODO
            break;
        case 4: // Edit a contact
            //TODO
            break;
        case 5: // Search for a contact
            //TODO
            break;
        case 6: // Close
            //TODO
            break;
        case 42:
            contactList.set("307-555-1234", new Contact("Alice", "Smith", "307-555-1234", "alice@example.com", ["Met at conference", "Follow up in June"]));
            contactList.set("284-555-5678", new Contact("Bob", null, "284-555-5678", null, null));
            contactList.set("261-555-8765", new Contact("Carol", "Johnson", "261-555-8765", "carolj@example.org", ["VIP client"]));
            contactList.set("238-555-4321", new Contact("David", "Lee", "238-555-4321", "david.lee@mail.com", []));
            contactList.set("215-555-0000", new Contact("Eve", null, "215-555-0000", "eve@mail.net", ["New lead", "Requested brochure"]));
            contactList.set("192-555-1111", new Contact("Frank", "O'Connor", "192-555-1111", null, null));
            contactList.set("169-555-2222", new Contact("Grace", "Kim", "169-555-2222", "grace.kim@domain.com", ["Important", "Call before 5pm"]));
            contactList.set("146-555-3333", new Contact("Hank", "Miller", "146-555-3333", null, ["Needs follow-up"]));
            contactList.set("123-555-4444", new Contact("Ivy", null, "123-555-4444", "ivy@mail.com", null));
            contactList.set("100-555-5555", new Contact("Jack", "Brown", "100-555-5555", "jack.brown@company.com", ["Met at trade show"]));
            break;
        default: // 
            //TODO
            break;
    }
}
