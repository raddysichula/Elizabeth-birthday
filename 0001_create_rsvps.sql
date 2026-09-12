CREATE TABLE rsvps (

    id BIGSERIAL PRIMARY KEY,

    name TEXT NOT NULL,

    attendance TEXT NOT NULL
        CHECK (
            attendance
            IN (
                'yes',
                'no',
                'maybe'
            )
        ),

    message TEXT,

    created_at
        TIMESTAMP
        NOT NULL
        DEFAULT now()

);


CREATE INDEX
    idx_rsvps_created_at

ON rsvps (
    created_at DESC
);