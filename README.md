# Admin Planning

-> NavBar : App-Name, Toggle-Dark, Profile Pic
-> New Button (For creating new event)

- Dashboard > Event Cards + Search > Tabs(Attendance + Search, Details, Analytics)
    : Date | Status | In-Person/Online
- Draft
- Newsletter (Mailing List) > Mail + Link + Subscribers
- New Admin (AdminName, AdminPfp, AdminPass, AdminEmail)
- Log Out

Event {
    EventName
    EventDate
    EventStartTime
    EventEndTime
    EventVenue
    EventDesc
    EventBanner
    EventHosts
    EventStatus (Upcoming, Ongoing, Past)
}

-- Top Level
EventCard {
    EventName
    EventDate
    EventLocation
    Participants
    Status (Upcoming, Ongoing, Past)
}

Attendance System
=================
QR -> opens a page which would contain the participant id, participant name 
auto-filled and disabled in forms input. VolunteerID has to be entered for 
authorization and them "Submit".


