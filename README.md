# ClubHub: Student Organization Management System

## I. Background
ClubHub is a full-stack web application designed to streamline the management of student-led organizations. The platform enables multiple user roles (Admin, Club Leader, Student Member) within a university to manage club activities, attendance, event planning, inventory, and internal communication, all authenticated through Google domain-restricted login (e.g., @uwcisak.jp, @case.edu)

### Problem Definition (UWC ISAK Japan)
At UWC ISAK Japan, over 70 student-led clubs are active, yet the management of inventory, attendance, event scheduling, and communication is often handled manually or across disparate platforms. This results in inefficiencies, data loss, and lack of transparency across student organizations.

### Proposed Solution
Develop an integrated platform accessible only to authorized @isak.jp users. This centralized system provides distinct role-based dashboards, standardizes club operations, and supports school-wide oversight, data accuracy, and organizational sustainability.

### Features
* Google domain-restricted login (@isak.jp only)
* Multi-role access (Admin, Club Leader, Member)
* Club event creation and calendar
* Attendance tracking (QR or manual)
* Inventory request and tracking system
* Announcements and internal messaging
* Club approval and review system (admin only)
* Role-based dashboard with analytics

### Technology Stack
* Frontend: React.js, HTML5, CSS3, TailwindCSS
* Backend: Node.js, Express.js
* Database: MySQL (with Sequelize ORM)
* Authentication: Google OAuth 2.0 (with domain restriction)
* Other Tools: JWT, Axios, RESTful APIs, Git, Postman

### Development Techniques
* Google OAuth 2.0 with domain-level restriction (hd field)
* RESTful API design for modularity and scalability
* Role-based access control using tokens (JWT)
* Routing and Middleware for access management and error handling
* Client-server architecture with Axios-based API integration

## II. System Design
### User Interface
**1. Login Page**
**2. Dashboard (Admin, Club Leader, Member)**
* Welcome message
* “Your Clubs” section
* Upcoming events
* Quick links (join club, view calendar, edit profile)
  
**3. Club Directory / Explore Orgs**
* List of all registered clubs/orgs
* Filters (e.g., category, popularity)
* “Join” or “Request to Join” buttons
* Club profiles (click → club detail page)

**4. Club Profile**
* Club description, leader info
* Events timeline or calendar
* Inventory & announcements (for leaders)
* Member list (for leaders/admins)
### System Diagram

**5. Admin Dashboard**
* View and approve club registration requests
* Manage users and permissions
* Generate reports
* Inventory + activity summary by club

**6. Event Management Page**
For: Club Leaders
* Create/edit/delete events
* Attach attendance (manual or QR code)
* View RSVPs or check-in history

**7. Join/Leave Club Confirmation Flow**
For students
* Show success screen or message when joining/leaving a club

### UML Diagram
### ER Diagram
### Flowcharts


## III. Evaluation
### Success Criteria
### User Interface (Figma)
| No. |                    Success Criteria                   |                 Problem Addressed                 |
|:---:|:-----------------------------------------------------:|:-------------------------------------------------:|
| 1   | Login restricted to @isak.jp emails                   | Prevents unauthorized access                      |
| 2   | Admin can approve or reject new club registrations    | Centralized control of clubs                      |
| 3   | Club leaders can add/edit events and track attendance | Reduces manual tracking errors                    |
| 4   | Inventory system per club is functional               | Prevents loss/misuse of club property             |
| 5   | Student members can join clubs and RSVP to events     | Encourages student participation and transparency |


### Test Log
| Test ID | Feature Tested          | Result | Notes                                    |
|---------|-------------------------|--------|------------------------------------------|
| T1      | Google OAuth Login      | Pass   | Only @isak.jp users were able to log in  |
| T2      | Event Creation (Leader) | Pass   | Form validated, event visible to members |
| T3      | Attendance Marking      | Pass   | Manual and QR modes functioned correctly |
| T4      | Inventory Edit          | Pass   | CRUD operations successful               |
| T5      | Admin Role Restrictions | Pass   | Only admins could access approval pages  |



