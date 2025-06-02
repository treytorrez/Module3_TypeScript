import { Contact } from './contact.js';
import { Parser } from './parser.js'
import promptSync from 'prompt-sync';
const prompt = promptSync();

const menu: string = `
Welcome to your contact book, choose an option:
1. View all contacts
2. Add a contact
3. Delete a contact
4. Edit a contact
5. Search for a contact
6. Close`;

const contactList:Map<string, Contact> = new Map(); 
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
    case 1:
      //TODO
      console.log(`|-${'-'.repeat(15)     }-|-${'-'.repeat(15)    }-|-${'-'.repeat(10)    }-|-${'-'.repeat(30)    }-|-${'-'.repeat(20)    }-| `);
      console.log(`| ${'fname'.padEnd(15) } | ${'lname'.padEnd(15)} | ${'phone'.padEnd(10)} | ${'email'.padEnd(30)} | ${'notes'.padEnd(20)} | `);
      console.log(`|-${'-'.repeat(15)     }-|-${'-'.repeat(15)    }-|-${'-'.repeat(10)    }-|-${'-'.repeat(30)    }-|-${'-'.repeat(20)    }-| `);
      
      for (const [key, value] of contactList) {
        // console.log(contactList.get(key));
        console.log(value.toString());
      }
      console.log(`|-${'-'.repeat(15)}-|-${'-'.repeat(15)}-|-${'-'.repeat(10)}-|-${'-'.repeat(30)}-|-${'-'.repeat(10)}-| `);
      break;
    case 2:
      {
        const newFName:string          = prompt("What is their first name? : "    ) ?? "";    //HACK: nullish coalescing op is bad practice //TODO: fname needed
        const newLName:string   | null = prompt("What is their last name? : "     ) ?? "";    //HACK: nullish coalescing op is bad practice
        const newPhone:string          = prompt("What is their phone number? : "  ) ?? "";    //HACK: nullish coalescing op is bad practice //TODO: phone needed  //TODO: regex check for number 
        const newEmail:string   | null = prompt("What is their email? : "         ) ?? "";    //HACK: nullish coalescing op is bad practice                       //TODO: regex check for email
        const newNotes:string[] | null = [""] //TODO:note fucntionality; accept lines as individual notes until certain message entered?
        contactList.set(newPhone, new Contact(newFName,newLName,newPhone,newEmail,newNotes))
      }
      break;
    case 3:
      //TODO
      break;
    case 4:
      //TODO
      break;
    case 5:
      //TODO
      break;
    case 6:
      //TODO
      break;
    case 7:
      //TODO
      break;
  }
}
