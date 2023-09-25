import Home_facilities_card from "../(components)/home_facilities_card/home_facilities_card";
import Home_program_card from "../(components)/home_program_card/home_program_card";
import Navbar from "../(components)/navbar/navbar";
import Section_header from "../(components)/section_header/section_header";

import img1 from '../../public/img/course1.png'
import img2 from '../../public/img/course2.png'
import img3 from '../../public/img/course3.png'

import { client } from "@/sanity/lib/client";

const fetchCoursesHeader = async () => {
  const coursesHeader = await client.fetch(`*[_type == 'coursesHeader']`, {}, { cache: 'no-cache' });
  console.log("Courses Header", coursesHeader);
  return coursesHeader
}

const fetchCourseProgramHeader = async () => {
  const courseProgramHeader = await client.fetch(`*[_type == 'courseProgramHeader']`, {}, { cache: 'no-cache' });
  // console.log("Courses Header", courseProgramHeader);
  return courseProgramHeader
}

const fetchCoursePrograms = async () => {
  const coursePrograms = await client.fetch(`*[_type == 'majorPrograms']`, {}, { cache: 'no-cache', })
  // console.log("Major Programs", coursePrograms);
  return coursePrograms
}

const fetchBestCoursesHeader = async () => {
  const bestCoursesHeader = await client.fetch(`*[_type == 'bestCoursesHeader']`, {}, { cache: 'no-cache' });
  // console.log("Bbest Courses Header", bestCoursesHeader);
  return bestCoursesHeader
}

const fetchBestCourses = async () => {
  const bestCourses = await client.fetch(`*[_type == 'bestCourses']`, {}, { cache: 'no-cache' });
  console.log("Best Courses", bestCourses);
  return bestCourses
}

export default async function Courses() {

  const coursesHeader = await fetchCoursesHeader();
  const courseProgramHeader = await fetchCourseProgramHeader();
  const coursePrograms = await fetchCoursePrograms();
  const bestCoursesHeader = await fetchBestCoursesHeader();
  const bestCourses = await fetchBestCourses();

  return (
    <>
      {
        coursesHeader.map((content) => {
          return (
            <>
              <Navbar header_title={content.heading} />
            </>
          )
        })
      }

      <section class="course">

        {
          courseProgramHeader.map((content) => {
            return (
              <>
                <Section_header
                  sectionTitle={content.heading}
                  sectionDescription={content.description} />
              </>
            )
          })
        }

        <div class="row">

          {
            coursePrograms.map((program) => {
              return (
                <>
                  <Home_program_card
                    title={program.title}
                    description={program.description} />
                </>
              )
            })
          }

        </div>
      </section>

      <section class="facilities">
        {
          bestCoursesHeader.map((content) => {
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


        <div class="row">

          {
            bestCourses.map((content) => {
              return (
                <>
                  <Home_facilities_card
                    imgSrc={img1}
                    title={content.heading}
                    description={content.description}
                  />
                </>
              )
            })
          }


          {/* <Home_facilities_card
            imgSrc={img2}
            title="Artificial Intelligence"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />

          <Home_facilities_card
            imgSrc={img3}
            title="Data Science"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." /> */}



        </div>
      </section>


    </>
  )
}
