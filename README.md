Health Care Administration System (HAM)
Overview
The Health Care Administration System (HAM) is a comprehensive project aimed at transforming healthcare management. Leveraging the Django framework along with HTML, CSS, and JavaScript, HAM introduces innovative features to enhance the overall healthcare experience.

Key Features
User-Focused Website:

User-friendly interfaces for patients, administrators, and doctors.
Seamless login for patients through an intuitive interface, reducing reliance on the admin webpage.
Enhanced Trust and Accessibility:

Transparent insights into healthcare hospital operations on the website.
Immediate call button for quick communication in emergencies.
Admin website preview accessible by clicking the hospital logo, ensuring a smooth transition between the public-facing and administrative interfaces.
Streamlined Information Access:

Homepage with dedicated sections for home, services, doctors, departments, and about for easy navigation.
Integration of admin website features for a more comprehensive user understanding.
Future Enhancements
Chatbot Integration:

Enhance user engagement and support with the integration of a chatbot.
Customized Notification System:

Implement a personalized notification system for users.
Expanded Specifications:

Include more detailed specifications for services, doctors, and departments.
Improved Appointment Booking:

Enhance the user interface for streamlined appointment booking.
Technology Stack
Backend: Django Framework
Frontend: HTML, CSS, JavaScript
Database: Utilizes Django's Object-Relational Mapping (ORM)
Screenshots
Screenshots showcasing the project's output, including the user interface and key features, have been added to the project folder.

Conclusion
HAM aims to revolutionize healthcare administration by fostering transparency, accessibility, and efficiency. The project's user-centric approach, integration of innovative features, and future enhancements position it as a forward-looking solution in the realm of healthcare management.




# Hospital Management
![developer](https://img.shields.io/badge/Developed%20By%20%3A-Sumit%20Kumar-red)

# changes added to the given prototype
- Integrated changes into the existing prototype
- Introduced a user interface website with the following sections:
- Home
- About
- Doctors
- Departments
- Blog
- Services
- Implemented the addition of a call button for enhanced user interaction

# project output added in the screenshots folder


## screenshots
- Screenshots showcasing the project's output have been included in the project folder.
---
## Functions
### Admin
- Signup their account. Then Login (No approval Required).
- Can register/view/approve/reject/delete doctor (approve those doctor who applied for job in their hospital).
- Can admit/view/approve/reject/discharge patient (discharge patient when treatment is done).
- Can Generate/Download Invoice pdf (Generate Invoice according to medicine cost, room charge, doctor charge and other charge).
- Can view/book/approve Appointment (approve those appointments which is requested by patient).

### Doctor
- Apply for job in hospital. Then Login (Approval required by hospital admin, Then only doctor can login).
- Can only view their patient details (symptoms, name, mobile ) assigned to that doctor by admin.
- Can view their discharged(by admin) patient list.
- Can view their Appointments, booked by admin.
- Can delete their Appointment, when doctor attended their appointment.

### Patient
- Create account for admit in hospital. Then Login (Approval required by hospital admin, Then only patient can login).
- Can view assigned doctor's details like ( specialization, mobile, address).
- Can view their booked appointment status (pending/confirmed by admin).
- Can book appointments.(approval required by admin)
- Can view/download Invoice pdf (Only when that patient is discharged by admin).

---

## HOW TO RUN THIS PROJECT
- Install Python(3.7.6) (Dont Forget to Tick Add to Path while installing Python)
- Open Terminal and Execute Following Commands :
```
pip install django==3.0.5
pip install django-widget-tweaks
pip install xhtml2pdf
```
- Download This Project Zip Folder and Extract it
- Move to project folder in Terminal. Then run following Commands :
```
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```
- Now enter following URL in Your Browser Installed On Your Pc
```
http://127.0.0.1:8000/
```


```

