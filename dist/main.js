import { Contact } from "./contact.js";
// import { Parser } from './parser.js'
import { ContactBook } from "./contact-book.js";
import prompts from "prompts";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
const book = new ContactBook();
while (true) {
    console.clear();
    // console.log(menu);
    // const choice: string | null = prompt("Make a selection: ");
    // let choiceParsed: number;
    // if (choice == null) {
    //   break;
    // } else {
    //   choiceParsed = parseInt(choice);
    // }
    const menu = await prompts({
        type: "select",
        name: "choice",
        message: "Welcome to your contact book! Select an option",
        choices: [
            {
                title: "View contacts",
                description: "View all your contacts and select one to see details",
                value: 1,
            },
            { title: "Add a contact", value: 2 },
            { title: "Delete a contact", value: 3 },
            { title: "Add notes to a contact", value: 4 },
            { title: "Save Contacts to disk", value: 5 },
            { title: "Get Contacts to disk", value: 6 },
            { title: "Close", description: "Exit the program", value: 6 },
            {
                title: "Fill Contact Book",
                description: "Fill the contact book with some filler content, for demo purposes",
                value: 42,
            },
        ],
    });
    switch (menu.choice) {
        case 1: {
            // View all contacts
            //TODO:handle 0 contacts
            //TODO: move display code into contact-book?
            const contact = await book.listAll();
            if (contact)
                console.log(contact.toString());
            console.log();
            console.log();
            prompt("Press enter to continue");
            break;
        }
        case 2: // Add a contact
            await book.addContact();
            break;
        case 3: // Delete a contact
            await book.removeContact();
            break;
        case 4: {
            // Add notes to a contact
            const c = await book.listAll();
            if (c)
                await book.addNotes(c);
            break;
        }
        case 5:
            book.store();
            break;
        case 6:
            book.retrieve();
            break;
        case 42: //add filler content
            //TODO:Is hash still needed?
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
        case 7: // Close
            process.exit(0);
    }
}
