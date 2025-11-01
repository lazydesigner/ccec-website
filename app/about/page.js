// app/about/page.js

import { GraduationCap, Target, Users, Award } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - Career Crave Education Centre',
  description: 'Learn about Career Crave Education Centre, founded by Er. Shravan Katiyar in 2010, providing quality IIT-JEE coaching in Kanpur.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:min-h-[250px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/channels4_banner.jpg')" }}>
        {/* <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Career Crave</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building IIT dreams since 2010 with dedication, innovation, and excellence
          </p>
        </div> */}
      </section>

      {/* About CCEC Section */}
      <section id="ccec" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Career Crave Education Centre</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                CAREER CRAVE was created in 2010 by the vision and hard work of Er. Shravan Katiyar, Electronics Engineering Graduate from IET, Lucknow. He established it with a prime motto of imparting quality education and to provide an ideal launch pad for serious IIT aspirants.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Along the way to realization of this vision, we went beyond merely coaching for IIT-JEE. We actually started to make a difference in the way Students think and approach problems and align students to crack JEE (Main & Advanced) & other competitive examinations.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                From a small coaching centre with just a handful of students in the year 2010, the institute has grown by leaps and bounds and established itself as one of the leading institutions in Kanpur for JEE (Main & Advanced) coaching. The institute draws students every year from all over India. CCEC has become the abode for engineering aspirants students who aspire to get into different IITs & NITs.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Unique Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">CCEC gives more emphasis on concepts rather than just providing solutions, which makes students compatible to handle ever-changing dynamic questions in IIT Exam.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Two-way communications in our classrooms rather than just bombardment of facts from one side.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">We start from basics and gradually upgrade level to ensure strong foundation.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Teacher's duty doesn't end at just taking the class but ends after ensuring that concept is internalized by our students.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Apart from course, there are motivation sessions at regular intervals to ensure that students maintain pace in studies throughout the long year duration. Time to time there are interaction programmes for students with previous year toppers, which helps them align their study schedule with toppers and gives them a sense of confidence.
              </p>

              <p className="text-gray-700 leading-relaxed">
                CCEC doesn't make superficial promises like others that every student will be selected in IIT, but we promise that if a student has a dream to become an IITian, we will leave you only after your dream becomes true.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-gray-700 font-semibold">IIT Selections</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-600 mb-1">1000+</div>
                <div className="text-gray-700 font-semibold">NIT Selections</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 text-center">
                <Target className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-pink-600 mb-1">15+</div>
                <div className="text-gray-700 font-semibold">Years Legacy</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center">
                <Award className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-indigo-600 mb-1">95%</div>
                <div className="text-gray-700 font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Directors Section */}
      <section id="directors" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Message from Director</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br  overflow-hidden from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                  <Image
                  src={'/images/director.jpg'}
                  width={100}
                  height={100}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dr. Vijay Katiyar</h3>
                  <p className="text-blue-600 font-semibold">Director</p>
                  <p className="text-gray-600 text-sm">vijay@cceckanpur.com</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I welcome all of you to CAREER CRAVE and earnestly wish success to each one of you. I would sincerely hope that all of you make it to the respective institutes that you've set your minds upon.
                </p>

                <p>
                  In this era of intensive competition, students while preparing to successfully crack the IIT puzzle, need an empirically proven set of scientific teaching and practice techniques. To put this into context, consider this - about 13.03 lakh students appeared in JEE (Main) at All India level, out of which, only 1.5 lakh were shortlisted for JEE (Advanced) and these shortlisted students competed for limited seats in IITs. Now this makes it imperative for the students and the parents alike to make the most optimum choice in terms of choosing a right coaching.
                </p>

                <p>
                  Our goal at CAREER CRAVE EDUCATION CENTER (CCEC) is to provide knowledge and guidance and thereby create an environment that not only guides students to the path of success, but also inspires them to recognize and explore their own potential.
                </p>

                <p>
                  CCEC is run by a group of ENGINEERS, who have over the years, guided thousands of IIT aspirants to fulfill their dream of getting into the prestigious IITs. This journey from just an IIT-JEE coaching institute, to the most powerful brand in serious education has been exhilarating. However, the journey is not over yet. For us at CCEC, The journey will never be over... For us, this journey itself is the destination.
                </p>

                <p className="font-semibold text-gray-900 mt-6">
                  With Best Regards,<br />
                  Dr. Vijay Katiyar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Er. Shravan Sir Section */}
      <section id="shravan" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Message from Founder</h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br overflow-hidden from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                  <Image
                  src={'/images/Founder.jpg'}
                  width={100}
                  height={100}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Er. Shravan Katiyar</h3>
                  <p className="text-purple-600 font-semibold">Founder & Director</p>
                  <p className="text-gray-600 text-sm">Electronics Engineering, IET Lucknow</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">Dear Students,</p>

                <p>
                  Today when we look into the past system of selecting career in engineering stream, it was very comfortable for the aspirants to choose for. Now in present days this equation has drastically changed its kinetics. Merely aspiration doesn't work in today's cut-throat competitive environment. One has to continuously be in touch with the latest pattern and trend to conquer the ultimate success.
                </p>

                <p>
                  Career Crave Education Center is not just another institute. It follows a different thought and the time to come will vouch for it. It is a philosophy followed and practiced by CAREER CRAVE for the last years. It is a humble birth of a significant education system and institution where no student is ever neglected, every action and thought is student oriented, personal attention to every student is ensured, and "LEAD" is the Philosophy we follow.
                </p>

                <p className="text-xl font-bold text-purple-600 text-center my-6">
                  "Believe in yourself, you can do it....."
                </p>

                <p className="font-semibold text-gray-900 mt-6">
                  With Best Regards,<br />
                  Er. Shravan Katiyar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}