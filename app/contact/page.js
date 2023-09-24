import Button from "../(components)/button/button";
import Navbar from "../(components)/navbar/navbar";
import Contact_icon_title_description from "./(components)/contact_icon_title_description/contact_icon_title_description";
import Contact_inputs from "./(components)/contact_inputs/contact_inputs";

export default function Contact() {
  return (
    <>
      <Navbar header_title="CONTACT US" />

      <section class="loacation">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
          width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
      </section>


      <section class="contact-us">
        <div class="row">

          <div class="content-col">

            <Contact_icon_title_description
              icon="fa-home"
              title="NH9 Road, ABC Building"
              description="Ghaziabad, Uttar Pradesh, IN" />

            <Contact_icon_title_description
              icon="fa-phone"
              title="+91 7445546525"
              description="Monday To Saturday, 9AM To 6PM" />

            <Contact_icon_title_description
              icon="fa-envelope"
              title="xyz@email.com"
              description="Email Us Yor Query" />

          </div>

          <div class="content-col">
            <form>
              <Contact_inputs type="text" placeholder="Enter Name" />
              <Contact_inputs type="email" placeholder="Enter Email" />
              <Contact_inputs type="text" placeholder="Enter Subject" />

              <textarea rows="8" placeholder="Message" required></textarea>

              <Button btnClass="btn" btnTitle="Send Message" />
              
            </form>
          </div>
        </div>
      </section>



    </>
  )
}
