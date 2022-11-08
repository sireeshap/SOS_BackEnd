# AppointmentBooking

1. Clone the project
2. Install nodejs, docker, nodemon latest versions
3.  run "npm install"

# DB creation steps
1. Install Mysql workbench & connect to local database.
2. Create DATABAE name "appointmentSystemDB"
3. run below compand in workbench editor


# Command-1
CREATE TABLE `AppointmentSystemDB`.`DOCTORS_DATA` (

  `ID` INT NOT NULL,

  `NAME` VARCHAR(45) NOT NULL,

  `SPECIALLIZATION` VARCHAR(45) NOT NULL,

  `START_DATE` DATE NOT NULL,

  `END_DATE` DATE NOT NULL,

  `START_TIME` DATETIME NOT NULL,

  `END_TIME` DATETIME NOT NULL,

  `STATUS` TINYINT NOT NULL,

  PRIMARY KEY (`ID`));


# Command-2


CREATE TABLE `appointmentsystemdb`.`PATIENT_DATA` (

  `PATIENT_ID` INT NOT NULL,

  `NAME` VARCHAR(45) NULL,

  `AGE` INT NULL,

  `MOBILE` VARCHAR(45) NULL,

  `EMAIL` VARCHAR(45) NULL,

  PRIMARY KEY (`PATIENT_ID`));


# Command-3


CREATE TABLE `AppointmentSystemDB`.`APPOINTMENT_DATA` (

  `APPOINTMENT_ID` INT NOT NULL,

  `DOCTOR_ID` INT NOT NULL,

  `PATIENT_ID` INT NOT NULL,

  `APPOINTMENT_DATE` DATE NOT NULL,

  `APPOINTMENT_TIME` DATETIME NOT NULL,

  PRIMARY KEY (`APPOINTMENT_ID`));


# Command-4


CREATE TABLE `appointmentsystemdb`.`SPECIALIZATION_DATA` (

  `SPECIALIZATION_ID` INT NOT NULL,

  `SPECIALIZATION_NAME` VARCHAR(45) NOT NULL,

  PRIMARY KEY (`SPECIALIZATION_ID`));

# Command-5 (To insert some default specilizations to make it avaible during registration process)

insert into AppointmentSystemDB.SPECIALIZATION_DATA (SPECIALIZATION_ID, SPECIALIZATION_NAME) Values(UUID(), "General");

insert into AppointmentSystemDB.SPECIALIZATION_DATA (SPECIALIZATION_ID, SPECIALIZATION_NAME) Values(UUID(), "Orthopedics");

insert into AppointmentSystemDB.SPECIALIZATION_DATA (SPECIALIZATION_ID, SPECIALIZATION_NAME) Values(UUID(), "Gynecology");

insert into AppointmentSystemDB.SPECIALIZATION_DATA (SPECIALIZATION_ID, SPECIALIZATION_NAME) Values(UUID(), "Dermatology");

insert into AppointmentSystemDB.SPECIALIZATION_DATA (SPECIALIZATION_ID, SPECIALIZATION_NAME) Values(UUID(), "ENT");

5. in terminal, run "npm start" or "nodemon" to keep server live.
6. run 'http://localhost:3000" in browser, you should able to see server up & running.
