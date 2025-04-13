# ClubCentral: Student Organization Management System

## I. Background
ClubCentral is a full-stack web application designed to streamline the management of student-led organizations. The platform enables multiple user roles (Admin, Club Leader, Student Member) within a university to manage club activities, attendance, event planning, inventory, and internal communication, all authenticated through Google domain-restricted login (e.g., @uwcisak.jp, @case.edu)

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
### System Diagram
### UML Diagram
### ER Diagram
### Flowcharts


## III. Evaluation
### Success Criteria

