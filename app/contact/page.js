import { client } from "@/sanity/lib/client";
import Button from "../(components)/button/button";
import Navbar from "../(components)/navbar/navbar";
import Contact_icon_title_description from "./(components)/contact_icon_title_description/contact_icon_title_description";
import Contact_inputs from "./(components)/contact_inputs/contact_inputs";

const fetchContactUsHeader = async () => {
  const contactUsHeader = await client.fetch(`*[_type == 'contactUsHeader']`, {}, { cache: 'no-cache' });
  // console.log("Contact Us Header", contactUsHeader);
  return contactUsHeader
}

const fetchContactUsMap = async () => {
  const contactUsMap = await client.fetch(`*[_type == 'contactUsMap']`, {}, { cache: 'no-cache' });
  // console.log("Contact Us Map", contactUsMap);
  return contactUsMap
}

const fetchContactUsAddressContactEmail = async () => {
  const contactUsAddressContactEmail = await client.fetch(`*[_type == 'contactUsAddressContactEmail']`, {}, { cache: 'no-cache' });
  // console.log("Contact Us Address Contact Email", contactUsAddressContactEmail);
  return contactUsAddressContactEmail
}

export default async function Contact() {

  const contactUsHeader = await fetchContactUsHeader();
  const contactUsMap = await fetchContactUsMap();
  const contactUsAddressContactEmail = await fetchContactUsAddressContactEmail();

  return (
    <>

      {
        contactUsHeader.map((content) => {
          return (
            <>
              <Navbar
                header_title={content.heading}
              />
            </>
          )
        })
      }


      <section class="loacation">
        {
          contactUsMap.map((link) => {
            return (
              <>
                <iframe
                  src={link.mapLink}
                  width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
              </>
            )
          })
        }
      </section>


      <section class="contact-us">
        <div class="row">

          <div class="content-col">

            {
              contactUsAddressContactEmail.map((content) => {
                return (
                  <>
                    <Contact_icon_title_description
                      icon={content.icon}
                      title={content.heading}
                      description={content.subHeading}
                    />
                  </>
                )
              })
            }

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
