// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'
import services from './schemas/services'
import navLinks from './schemas/navLinks'
import homeHeader from './schemas/homeHeader'
import majorProgramHeader from './schemas/majorProgramHeader'
import majorProgram from './schemas/majorPrograms'
import virtualTourHeader from './schemas/virtualTourHeader'
import virtualTour from './schemas/virtualTour'
import facilitiesHeader from './schemas/facilitiesHeader'
import facilities from './schemas/facilities'
import testimonialHeader from './schemas/testimonialHeader'
import testimonials from './schemas/testimonials'
import homeContact from './schemas/homeContact'

import coursesHeader from './schemas/coursesHeader'
import courseProgramHeader from './schemas/courseProgramHeader'
import bestCoursesHeader from './schemas/bestCoursesHeader'
import bestCourses from './schemas/bestCourses'

import aboutUsHeader from './schemas/aboutUsHeader'
import aboutUsContent from './schemas/aboutUsContent'

import blogHeader from './schemas/blogHeader'
import blogCertificateAndOnlineProgram from './schemas/blogCertificateAndOnlineProgram'
import blogCertificateDetailParas from './schemas/blogCertificateDetailParas'
import blogPostHeading from './schemas/blogPostHeading'
import blogPosts from './schemas/blogPosts'

import contactUsHeader from './schemas/contactUsHeader'
import contactUsMap from './schemas/contactUsMap'
import contactUsAddressContactEmail from './schemas/contactUsAddressContactEmail'

import footer from './schemas/footer'

export const schema = {
  // types: [post, author, category, blockContent],
  types: [

    services,

    navLinks,
    homeHeader,
    majorProgramHeader,
    majorProgram,
    virtualTourHeader,
    virtualTour,
    facilitiesHeader,
    facilities,
    testimonialHeader,
    testimonials,
    homeContact,

    coursesHeader,
    courseProgramHeader,
    bestCoursesHeader,
    bestCourses,

    aboutUsHeader,
    aboutUsContent,

    blogHeader,
    blogCertificateAndOnlineProgram,
    blogCertificateDetailParas,
    blogPostHeading,
    blogPosts,

    contactUsHeader,
    contactUsMap,
    contactUsAddressContactEmail,

    footer
  ],
}
