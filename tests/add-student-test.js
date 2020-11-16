import StudentFormPage from "../pages/student-form-page";
const dateFormat = require('dateformat');
const faker = require('faker');

const studentFormPage = new StudentFormPage();

fixture `Register new student form`
    .page `https://demoqa.com/automation-practice-form`;

    test(`Register a new student`, async t => {        
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const email = faker.internet.email(firstName, lastName)
        const genderArray = ['Male', 'Female', 'Other']
        const gender = genderArray[faker.random.number({ 'min': 0, 'max': 2 })]
        const mobile = faker.phone.phoneNumber('##########')
        const pastDate = faker.date.past()
        const dateOfBirth = dateFormat(pastDate, "dd mmm yyyy")

        await studentFormPage.addNewStudent({ firstName, lastName, email, gender, mobile, dateOfBirth });
    });