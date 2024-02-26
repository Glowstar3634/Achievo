class Profile {

    constructor(u, e, pw, fn, ln, a, g, b, pfp, s, port, web, res, fri, pos, gal, cser, awa, org) {
        if (arguments.length == 0) {
            this.username = null;
            this.email = null;
            this.password = null;

            this.firstName = null;
            this.lastName = null;
            this.age = null;
            this.grade = null;
            this.bio = null;
            this.pfp = null;
            this.state = null;

            this.portfolio = null;
            this.website = null;
            this.resume = null;

            this.friends = [];
            this.posts = [];
            this.gallery = [];
            this.cservice = [];
            this.awards = [];
            this.organizations = [];
        }
        else if (arguments.length == 3) {
            this.username = u;
            this.email = e;
            this.password = pw;

            this.firstName = null;
            this.lastName = null;
            this.age = null;
            this.grade = null;
            this.bio = null;
            this.pfp = null;
            this.state = null;

            this.portfolio = null;
            this.website = null;
            this.resume = null;

            this.friends = [];
            this.posts = [];
            this.gallery = [];
            this.cservice = [];
            this.awards = [];
            this.organizations = [];
        } else {
            this.username = u;
            this.email = e;
            this.password = pw;

            this.firstName = fn;
            this.lastName = ln;
            this.age = a;
            this.grade = g;
            this.bio = b;
            this.pfp = pfp;
            this.state = s;

            this.portfolio = port;
            this.website = web;
            this.resume = res;

            this.friends = fri;
            this.posts = pos;
            this.gallery = gal;
            this.cservice = cser;
            this.awards = awa;
            this.organizations = org;
        }
    }

    // Setters
    setUsername(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setGrade(grade) {
        this.grade = grade;
    }

    setBio(bio) {
        this.bio = bio;
    }

    setPfp(pfp) {
        this.pfp = pfp;
    }

    setState(state) {
        this.state = state;
    }

    setPortfolio(portfolio) {
        this.portfolio = portfolio;
    }

    setWebsite(website) {
        this.website = website;
    }

    setResume(resume) {
        this.resume = resume;
    }

    setFriends(friends) {
        this.friends = friends;
    }

    setPosts(posts) {
        this.posts = posts;
    }

    setGallery(gallery) {
        this.gallery = gallery;
    }

    setCservice(cservice) {
        this.cservice = cservice;
    }

    setAwards(awards) {
        this.awards = awards;
    }

    setOrganizations(organizations) {
        this.organizations = organizations;
    }

    // Getters
    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.age;
    }

    getGrade() {
        return this.grade;
    }

    getBio() {
        return this.bio;
    }

    getPfp() {
        return this.pfp;
    }

    getState() {
        return this.state;
    }

    getPortfolio() {
        return this.portfolio;
    }

    getWebsite() {
        return this.website;
    }

    getResume() {
        return this.resume;
    }

    getFriends() {
        return this.friends;
    }

    getPosts() {
        return this.posts;
    }

    getGallery() {
        return this.gallery;
    }

    getCservice() {
        return this.cservice;
    }

    getAwards() {
        return this.awards;
    }

    getOrganizations() {
        return this.organizations;
    }
}

export default Profile;