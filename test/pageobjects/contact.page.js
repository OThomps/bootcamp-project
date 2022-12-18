const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName() {
        return $('#firstName');
    }

    get lastName() {
        return $('#lastName');
    }

    get email() {
        return $('#email');
    }

    get subject() {
        return $('#subject');
    }

    get message() {
        return $('#message');
    }

    get send() {
        return $('.css-vs0e4t');
    }

    get alert() {
        return $('#toast-1-title');
    }

    get errors() {
        return $('div[class="chakra-form__error-message css-170ki1a"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async completeForm(fname, lname, email, subject, message) {
        await this.firstName.setValue(fname);
        await this.lastName.setValue(lname);
        await this.email.setValue(email);
        await this.subject.setValue(subject);
        await this.message.setValue(message);
        await this.send.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('contact/');
    }
}

module.exports = new ContactPage();
