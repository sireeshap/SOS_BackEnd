INSERT INTO
    `AppointmentSystemDB`.`DOCTORS_DATA` (
        `DOCTOR_ID`,
        `NAME`,
        `SPECIALLIZATION`,
        `START_DATE`,
        `END_DATE`,
        `SLOTS_COUNT`,
        `STATUS`
    )
VALUES
    (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    );