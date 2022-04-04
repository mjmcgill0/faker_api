const express = require('express');
const faker = require('faker')
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        _id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
};

app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});
app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
});
app.get('/api/user/company', (req, res) => {
    res.json([createUser(), createCompany()]);
});
app.listen(port, () => console.log(`Listening on port: ${port}`));