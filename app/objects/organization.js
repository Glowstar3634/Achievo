class Organization {

    constructor(n, d, i, c, a, mod, mem, e, p) {
        if (arguments.length == 0) {
            this.name = null;
            this.description = null;
            this.icon = null;

            this.creator = null;
            this.admins = [];
            this.moderators = [];
            this.members = [];

            this.events = [];
            this.posts = [];
        }else if (arguments.length == 2) {
            this.name = n;
            this.description = d;
            this.icon = null;

            this.creator = c;
            this.admins = [];
            this.moderators = [];
            this.members = [];

            this.events = [];
            this.posts = [];
        }else {
            this.name = n;
            this.description = d;
            this.icon = i;

            this.creator = c;
            this.admins = a;
            this.moderators = mod;
            this.members = mem;

            this.events = e;
            this.posts = p;
        }
    }

    // Setters
    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setIcon(icon) {
        this.icon = icon;
    }

    setCreator(creator) {
        this.creator = creator;
    }

    setAdmins(admins) {
        this.admins = admins;
    }

    setModerators(moderators) {
        this.moderators = moderators;
    }

    setMembers(members) {
        this.members = members;
    }

    setEvents(events) {
        this.events = events;
    }

    setPosts(posts) {
        this.posts = posts;
    }

    // Getters
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getIcon() {
        return this.icon;
    }

    getCreator() {
        return this.creator;
    }

    getAdmins() {
        return this.admins;
    }

    getModerators() {
        return this.moderators;
    }

    getMembers() {
        return this.members;
    }

    getEvents() {
        return this.events;
    }

    getPosts() {
        return this.posts;
    }

}

export default Organization;