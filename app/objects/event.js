class Event {

    constructor(nam, dsc, sub, pho, org, vol, att, srt, end) {
        if (arguments.length == 0) {
            this.name = null;
            this.description = null;
            this.subEvents = [];
            this.photos = [];

            this.organizers = [];
            this.volunteers = [];
            this.attendees = [];

            this.startTime = null;
            this.endTime = null;
        } else if (arguments.length == 2) {
            this.name = nam;
            this.description = dsc;
            this.subEvents = [];
            this.photos = [];

            this.organizers = [];
            this.volunteers = [];
            this.attendees = [];

            this.startTime = null;
            this.endTime = null;
        } else {
            this.name = nam;
            this.description = dsc;
            this.subEvents = sub;
            this.photos = pho;

            this.organizers = org;
            this.volunteers = vol;
            this.attendees = att;

            this.startTime = srt;
            this.endTime = end;
        }
    }

    // Setters
    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setSubEvents(subEvents) {
        this.subEvents = subEvents;
    }

    setPhotos(photos) {
        this.photos = photos;
    }

    setOrganizers(organizers) {
        this.organizers = organizers;
    }

    setVolunteers(volunteers) {
        this.volunteers = volunteers;
    }

    setAttendees(attendees) {
        this.attendees = attendees;
    }

    setStartTime(startTime) {
        this.startTime = startTime;
    }

    setEndTime(endTime) {
        this.endTime = endTime;
    }

    // Getters
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getSubEvents() {
        return this.subEvents;
    }

    getPhotos() {
        return this.photos;
    }

    getOrganizers() {
        return this.organizers;
    }

    getVolunteers() {
        return this.volunteers;
    }

    getAttendees() {
        return this.attendees;
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }
}

export default Event;