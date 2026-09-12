import { db } from "hatchable";


export const access = "public";


export const methods = [
    "POST"
];


export default async function (req, res) {

    const body =
        req.body || {};


    const name =
        String(
            body.name || ""
        ).trim();


    const attendance =
        String(
            body.attendance || ""
        )
        .trim()
        .toLowerCase();


    const message =
        String(
            body.message || ""
        ).trim();


    /* -----------------------------
       VALIDATION
    ----------------------------- */

    if (name.length < 3) {

        return res
            .status(400)
            .json({
                error:
                    "Please enter your name."
            });

    }


    if (
        ![
            "yes",
            "no",
            "maybe"
        ].includes(attendance)
    ) {

        return res
            .status(400)
            .json({
                error:
                    "Please choose a valid attendance option."
            });

    }


    if (message.length > 500) {

        return res
            .status(400)
            .json({
                error:
                    "Message is too long."
            });

    }


    /* -----------------------------
       SAVE RSVP
    ----------------------------- */

    const { rows } =
        await db.query(

            `
            INSERT INTO rsvps
            (
                name,
                attendance,
                message
            )

            VALUES
            (
                $1,
                $2,
                $3
            )

            RETURNING
                id,
                name,
                attendance,
                message,
                created_at
            `,

            [
                name,
                attendance,
                message || null
            ]

        );


    /* -----------------------------
       RESPONSE
    ----------------------------- */

    res
        .status(201)
        .json({

            success:
                true,

            rsvp:
                rows[0]

        });

}