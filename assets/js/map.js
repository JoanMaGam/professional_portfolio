document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
    marginwidth="0" referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4847.95099843879!2d2.0255139785413263!3d41.491783491683286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a491580ef5f221%3A0x7a1bfeb2698e573!2sUbu%20Work!5e0!3m2!1ses!2ses!4v1695578832219!5m2!1ses!2ses"></iframe>
    `;
    }, 500);
});