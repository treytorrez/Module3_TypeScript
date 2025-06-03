import { Contact } from './contact.js';
// import { Parser } from './parser.js'
import promptSync from 'prompt-sync';
import {ContactBook} from './contact-book.js'
const prompt = promptSync();

const book:ContactBook = new ContactBook();
const menu: string = `
Welcome to your contact book, choose an option:
1. View all contacts
2. Add a contact
3. Delete a contact
4. Edit a contact
5. Search for a contact
6. Close`;

const contactList:Map<string, Contact> = new Map();//FIX: make ContactBook instance
while (true) {
  console.log(menu);

  const choice: string | null = prompt("Make a selection: ");
  let choiceParsed: number;
  if (choice == null) {
    break;
  } else {
    choiceParsed = parseInt(choice);
  }

  switch (choiceParsed) {
    case 1: // View all contacts
      book.listAll()
      break;
    case 2: // Add a contact
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
        contactList.set("307-555-1234", new Contact("Alice",  "Smith",    "307-555-1234", "alice@example.com",      ["Met at conference", "Follow up in June"]));
        contactList.set("284-555-5678", new Contact("Bob",    null,       "284-555-5678", null,                     null));
        contactList.set("261-555-8765", new Contact("Carol",  "Johnson",  "261-555-8765", "carolj@example.org",     ["VIP client"]));
        contactList.set("238-555-4321", new Contact("David",  "Lee",      "238-555-4321", "david.lee@mail.com",     []));
        contactList.set("215-555-0000", new Contact("Eve",    null,       "215-555-0000", "eve@mail.net",           ["New lead", "Requested brochure"]));
        contactList.set("192-555-1111", new Contact("Frank",  "O'Connor", "192-555-1111", null,                     null));
        contactList.set("169-555-2222", new Contact("Grace",  "Kim",      "169-555-2222", "grace.kim@domain.com",   ["Important", "Call before 5pm"]));
        contactList.set("146-555-3333", new Contact("Hank",   "Miller",   "146-555-3333", null,                     ["Needs follow-up"]));
        contactList.set("123-555-4444", new Contact("Ivy",    null,       "123-555-4444", "ivy@mail.com",           null));
        contactList.set("100-555-5555", new Contact("Jack",   "Brown",    "100-555-5555", "jack.brown@company.com", ["Met at trade show"]));

        break;
    default: // 
      //TODO
      break;
  }
}
