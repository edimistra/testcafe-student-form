import { Selector, t } from "testcafe";

export default class studentForm {
    constructor () {

        this.firstName = Selector('#firstName')
        this.lastName = Selector('#lastName')
        this.email = Selector('#userEmail')
        this.mobile = Selector('#userNumber')
        this.dateOfBirth = Selector('#dateOfBirthInput')
        this.confirmationTitle = Selector('#example-modal-sizes-title-lg')

        this.submit = Selector('#submit')
    }

    async addNewStudent(studentData) {
        await t
            .typeText(this.firstName, studentData.firstName)
            .typeText(this.lastName, studentData.lastName)
            .typeText(this.email, studentData.email)
            .click(Selector('label').withText(studentData.gender))
            .typeText(this.mobile, studentData.mobile)
            .typeText(this.dateOfBirth, studentData.dateOfBirth, { replace: true })
            .click(this.submit)
            .takeScreenshot()

        await this.assertAddNewStudent()
    }

    async assertAddNewStudent() {
        await t.expect(this.confirmationTitle.exists).ok()
    }
}