SELECT
    *
FROM
    AppointmentSystemDB.DOCTORS_DATA
    join (
        SELECT
            SPECIALIZATION_ID as SID
        from
            AppointmentSystemDB.SPECIALIZATION_DATA
        where
            SPECIALIZATION_NAME = ?
    ) as DD
where
    SPECIALLIZATION = SID;