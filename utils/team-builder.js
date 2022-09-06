function Manager(name, id, email, ph) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.ph = ph;
}

function Engineer(name, id, email, gh) {
    this.name = name;
    this.id = id
    this.email = email;
    this.gh = gh;
}

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}

module.exports = {
    Manager,
    Engineer,
    Intern,
};