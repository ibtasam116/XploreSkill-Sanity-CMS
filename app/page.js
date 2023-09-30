import React from 'react';

import Home_header from './(components)/home_header/home_header';

import Home_program_card from './(components)/home_program_card/home_program_card';

import Section_header from './(components)/section_header/section_header';

import Home_tour_card from './(components)/home_tour_card/home_tour_card';

import Home_facilities_card from './(components)/home_facilities_card/home_facilities_card';

import Home_student_card from './(components)/home_student_card/home_student_card';

import Button from './(components)/button/button';

import Home_verticalLine from './(components)/home_verticalLine/home_verticalLine';

import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

const fetchMajorProgramHeader = async () => {
  const majorProgramHeader = await client.fetch(`*[_type == 'majorProgramHeader']`, {}, { cache: 'no-cache' });
  // console.log("Major Program Header", majorProgramHeader);
  return majorProgramHeader
}

const fetchMajorPrograms = async () => {
  const majorPrograms = await client.fetch(`*[_type == "majorPrograms"]`, {}, { cache: 'no-cache', });
  // console.log("Program", majorPrograms);
  return majorPrograms
}

const fetchVirtualTourHeader = async () => {
  const virtualTourHeader = await client.fetch(`*[_type == 'virtualTourHeader']`, {}, { cache: 'no-cache' });
  // console.log("Virtual Tour Header", virtualTourHeader);
  return virtualTourHeader
}

const fetchVirtualTour = async () => {
  const virtualTour = await client.fetch(`*[_type == 'virtualTour']`, {}, { cache: 'no-cache' });
  // console.log("Virtual Tour", virtualTour);
  return virtualTour
}

const fetchfacilitiesHeader = async () => {
  const facilitiesHeader = await client.fetch(`*[_type == 'facilitiesHeader']`, {}, { cache: 'no-cache' });
  // console.log('Facilities Header', facilitiesHeader);
  return facilitiesHeader
}

const fetchFacilities = async () => {
  const facilities = await client.fetch(`*[_type == 'facilities']`, {}, { cache: 'no-cache' })
  // console.log("Facilities", facilities);
  return facilities
}

const fetchTestimonialHeader = async () => {
  const testimonialHeader = await client.fetch(`*[_type== 'testimonialHeader']`, {}, { cache: 'no-cache' });
  // console.log("Testimonial Header", testimonialHeader);
  return testimonialHeader
}

const fetchTestimonials = async () => {
  const testimonials = await client.fetch(`*[_type== 'testimonials']`, {}, { cache: 'no-cache' });
  // console.log("Testimonials", testimonials);
  return testimonials
}

const fetchHomeContact = async () => {
  const homeContact = await client.fetch(`*[_type == 'homeContact']`, {}, { cache: 'no-cache' });
  // console.log("Home Contact", homeContact);
  return homeContact
}

export default async function Home() {

  const majorProgramHeader = await fetchMajorProgramHeader();
  const majorPrograms = await fetchMajorPrograms();
  const virtualTourHeader = await fetchVirtualTourHeader();
  const virtualTour = await fetchVirtualTour();
  const facilitiesHeader = await fetchfacilitiesHeader();
  const facilities = await fetchFacilities();
  const testimonialHeader = await fetchTestimonialHeader();
  const testimonials = await fetchTestimonials();
  const homeContact = await fetchHomeContact();

  return (
    <>

      <Home_header >

      </Home_header>


      <section className="course">

        <Home_verticalLine />
        {
          majorProgramHeader.map((content) => {
            return (
              <>
                <h1>{content.heading}<br />{content.subHeading}</h1>
                <p>{content.description}</p>
              </>
            )
          })
        }

        <div className="row">

          {
            majorPrograms.map((majorProgram) => {
              return (
                <>
                  <Home_program_card
                    title={majorProgram.title}
                    description={majorProgram.description}
                  />
                </>
              )
            })
          }

        </div>
      </section>


      <section className="campus">

        <Home_verticalLine />

        {
          virtualTourHeader.map((content) => {
            return (
              <>
                <Section_header
                  sectionTitle={content.heading}
                  sectionDescription={content.description}
                />
              </>
            )
          })
        }


        <div className="row">

          {
            virtualTour.map((tour) => {
              return (
                <>
                  <Home_tour_card
                    ImgSrc={urlForImage(tour.image).url()}
                    imgAlt={tour.image.alt}
                    title={tour.title} />
                </>
              )
            })
          }

        </div>

      </section>


      <section className="facilities">

        <Home_verticalLine />

        {
          facilitiesHeader.map((content) => {
            return (
              <>
                <Section_header
                  sectionTitle={content.heading}
                  sectionDescription={content.description} />
              </>
            )
          })
        }

        <div className="row">

          {
            facilities.map((facilitie) => {
              return (
                <>
                  <Home_facilities_card
                    imgSrc={urlForImage(facilitie.mainImage).url()}
                    imgAlt={facilitie.mainImage.alt}
                    title={facilitie.heading}
                    description={facilitie.description} />
                </>
              )
            })
          }

        </div>

      </section>


      <section className="testimonials">

        <Home_verticalLine />

        {
          testimonialHeader.map((content) => {
            return (
              <>
                <Section_header
                  sectionTitle={content.heading}
                  sectionDescription={content.description}
                />
              </>
            )
          })
        }

        <div className="row">

          {
            testimonials.map((testimonial) => {
              return (
                <>
                  <Home_student_card
                    studentImgSrc={urlForImage(testimonial.image).url()}
                    imgAlt={testimonial.image.alt}
                    studentDescription={testimonial.description}
                    studentName={testimonial.heading}
                    star_className="fa-star"
                  // star_className="fa-star-half-alt"
                  />
                </>
              )
            })
          }

        </div>
      </section>

      <section className="cta">

        {
          homeContact.map((content) => {
            return (
              <>
                <h1>{content.heading}</h1>
                <Button btnHref={content.btnHref} btnTitle={content.btnText} />
              </>
            )
          })
        }

      </section>

    </>
  )
}
