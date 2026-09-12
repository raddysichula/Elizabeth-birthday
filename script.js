/* =====================================
   BIRTHDAY MUSIC
===================================== */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");


musicBtn.addEventListener(
    "click",
    async function () {

        try {

            if (music.paused) {

                await music.play();

                musicBtn.textContent =
                    "⏸ Pause Music";

            }

            else {

                music.pause();

                musicBtn.textContent =
                    "🎵 Play Music";

            }

        }

        catch (error) {

            alert(
                "Please put birthday-music.mp3 inside the public folder."
            );

        }

    }
);


/* =====================================
   LOVE MESSAGE POPUP
===================================== */

const modal =
    document.getElementById("modal");

const messageBtn =
    document.getElementById("messageBtn");

const closeModal =
    document.getElementById("closeModal");


messageBtn.addEventListener(
    "click",
    function () {

        modal.classList.add("show");

    }
);


closeModal.addEventListener(
    "click",
    function () {

        modal.classList.remove("show");

    }
);


modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    }
);


/* =====================================
   BIRTHDAY CAKE
===================================== */

const cake =
    document.getElementById("cake");

const wishBtn =
    document.getElementById("wishBtn");


wishBtn.addEventListener(
    "click",
    function () {

        cake.classList.add("pop");


        setTimeout(
            function () {

                cake.classList.remove("pop");

            },
            700
        );


        alert(
            "✨ Elizabeth, make your beautiful birthday wish! ✨"
        );

    }
);


/* =====================================
   ONLINE RSVP
===================================== */

const rsvpForm =
    document.getElementById("rsvpForm");

const rsvpStatus =
    document.getElementById("rsvpStatus");


rsvpForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        rsvpStatus.textContent =
            "Sending your RSVP...";


        const formData =
            new FormData(rsvpForm);


        const data =
            Object.fromEntries(
                formData.entries()
            );


        try {

            const apiBase =
    window.__HATCHABLE__?.api || "/api";

const response = await fetch(
    `${apiBase}/rsvp`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
);

           /* const response =
                await fetch(
                    "/api/rsvp",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(data)
                    }
                );
*/
/* 
            const result =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    result.error ||
                    "Unable to save RSVP."
                );

            }
*/

            const responseText = await response.text();

let result = {};

if (responseText.trim() !== "") {
    result = JSON.parse(responseText);
}


            rsvpStatus.textContent =
                `Thank you, ${result.rsvp.name}! 
                 Your RSVP has been saved online. ❤️`;


            rsvpForm.reset();

        }


        catch (error) {

            rsvpStatus.textContent =
                error.message ||
                "Something went wrong.";

        }

    }
);