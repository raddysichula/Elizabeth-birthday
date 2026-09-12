import { db } from "hatchable";


/*
    Only the project administrator
    can access the RSVP list.
*/

export const access =
    "admin";


export const methods =
    ["GET"];


export default async function (
    req,
    res
) {

    const { rows } =
        await db.query(

            `
            SELECT
                id,
                name,
                attendance,
                message,
                created_at

            FROM rsvps

            ORDER BY
                created_at DESC
            `

        );


    res.json(rows);

}