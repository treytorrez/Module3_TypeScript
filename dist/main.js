import { Contact } from "./contact.js";
// import { Parser } from './parser.js'
import promptSync from "prompt-sync";
// import prompts from 'prompts';
import { ContactBook } from "./contact-book.js";
const prompt = promptSync();
const book = new ContactBook();
const menu = `
Welcome to your contact book, choose an option:
1. View contacts
2. Add a contact
3. Delete a contact
4. Edit a contact
5. Close`;
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
        case 1: {
            // View all contacts
            //TODO:handle 0 contacts
            const contact = (await book.listAll()).choice;
            console.log(contact.toString());
            break;
        }
        case 2: // Add a contact
            await book.addContact();
            break;
        case 3: // Delete a contact
            await book.removeContact();
            break;
        case 4: // Edit a contact
            //TODO
            break;
        case 5: // Close
            process.exit(0);
            break;
        case 42: //add filler content
            //TODO:Is has still needed?
            // book.hash.set(
            //   "307-555-1234",
            //   new Contact("Alice", "Smith", "307-555-1234", "alice@example.com", [
            //     "Met at conference",
            //     "Follow up in June",
            //   ])
            // );
            // book.hash.set(
            //   "284-555-5678",
            //   new Contact("Bob", null, "284-555-5678", null, null)
            // );
            // book.hash.set(
            //   "261-555-8765",
            //   new Contact("Carol", "Johnson", "261-555-8765", "carolj@example.org", [
            //     "VIP client",
            //   ])
            // );
            // book.hash.set(
            //   "238-555-4321",
            //   new Contact("David", "Lee", "238-555-4321", "david.lee@mail.com", [])
            // );
            // book.hash.set(
            //   "215-555-0000",
            //   new Contact("Eve", null, "215-555-0000", "eve@mail.net", [
            //     "New lead",
            //     "Requested brochure",
            //   ])
            // );
            // book.hash.set(
            //   "192-555-1111",
            //   new Contact("Frank", "O'Connor", "192-555-1111", null, null)
            // );
            // book.hash.set(
            //   "169-555-2222",
            //   new Contact("Grace", "Kim", "169-555-2222", "grace.kim@domain.com", [
            //     "Important",
            //     "Call before 5pm",
            //   ])
            // );
            // book.hash.set(
            //   "146-555-3333",
            //   new Contact("Hank", "Miller", "146-555-3333", null, ["Needs follow-up"])
            // );
            // book.hash.set(
            //   "123-555-4444",
            //   new Contact("Ivy", null, "123-555-4444", "ivy@mail.com", null)
            // );
            // book.hash.set(
            //   "100-555-5555",
            //   new Contact("Jack", "Brown", "100-555-5555", "jack.brown@company.com", [
            //     "Met at trade show",
            //   ])
            // );
            book.list.push(new Contact("Alice", "Smith", "307-555-1234", "alice@example.com", [
                "Met at conference",
                "Follow up in June",
            ]));
            book.list.push(new Contact("Bob", null, "284-555-5678", null, null));
            book.list.push(new Contact("Carol", "Johnson", "261-555-8765", "carolj@example.org", [
                "VIP client",
            ]));
            book.list.push(new Contact("David", "Lee", "238-555-4321", "david.lee@mail.com", []));
            book.list.push(new Contact("Eve", null, "215-555-0000", "eve@mail.net", [
                "New lead",
                "Requested brochure",
            ]));
            book.list.push(new Contact("Frank", "O'Connor", "192-555-1111", null, null));
            book.list.push(new Contact("Grace", "Kim", "169-555-2222", "grace.kim@domain.com", [
                "Important",
                "Call before 5pm",
            ]));
            book.list.push(new Contact("Hank", "Miller", "146-555-3333", null, ["Needs follow-up"]));
            book.list.push(new Contact("Ivy", null, "123-555-4444", "ivy@mail.com", null));
            book.list.push(new Contact("Jack", "Brown", "100-555-5555", "jack.brown@company.com", [
                "Met at trade show",
            ]));
            break;
        default: //
            //TODO
            break;
    }
}
