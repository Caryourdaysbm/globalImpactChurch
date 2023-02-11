import yemiDavids from "../../assets/Images/yemidavid.png";
import abimbolaDavids from "../../assets/Images/bimbodavid.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,  useState } from "react";
import "./about.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function MeetOurLeadPastors() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="">
      <div className="">
        <article className="meet-pastors__article md:px-[6rem] px-8">
          <div
            className="space-y-6"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <div>
                <h1 className="text-2xl flex  pb-1">Meet our Lead Pastors</h1>
                </div>

<div className="flex flex-col md:flex-row gap-10 md:gap-[14rem]    ">
    <div className="flex flex-col  bg-white rounded-3xl px-14 mx-auto">
    <img
            src={yemiDavids}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt=""
            className="w-full md:max-w-xs mx-auto "
          />
  
<p className="mb-5 leading-8 font-light max-w-[20rem]">
  <ReadMore>
Yemi Davids is the founding pastor of Global Impact Churches with headquarters at The Goodland, Ogudu, Lagos, with multiple expressions in Nigeria and the USA running multiple services every weekend. He is the President of Global Impact Institute (GII), aimed at skill acquisition and human capacity development.
Yemi Davids believes that man was created as a possibility and not a finality and that the seeds of Greatness are within everyone crying for expression. He is a sought after speaker highly gifted in practical teachings in the area of Divine Wisdom for Life. He has a passion for leadership and hosts the Ministers and Leaders Forum (MLF) dedicated to leaders. He is a member of the Faculty of DLA Executive, and also possesses an Advanced Diploma in Pastoral and Transformational Leadership, RILA.
Yemi Davids has extensive qualifications from Obafemi Awolowo University, The Word of Faith Bible Institute [WOFBI] by Living Faith Church, Daystar Leadership Academy (DLA), Nigeria, Institute of Leadership & Management, United Kingdom, to mention but a few.
With a strong desire to see people fulfill their potential, Pastor Yemi has authored several books including the BEGreat Daily Devotional, 7 laws of Favour, In pursuit of Academic Excellence, Etc.
Yemi, married to Bimbo, both live in Lagos with their four adorable daughters.
</ReadMore>
</p>
</div>
<div className="flex flex-col  bg-white rounded-3xl px-14 mx-auto">
<img
            src={abimbolaDavids}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt=""
            className="w-full md:max-w-xs mx-auto "
          />

<p className="mb-5 leading-8 font-light max-w-[20rem]">
  <ReadMore>
Bimbo Davids is a woman with a deep passion for the empowerment of women and the proper development of children in society. Her gentle yet thought-provoking teachings inspire women to appreciate and esteem themselves in light of their true heritage and to see themselves as God’s jewels. She believes that royalty lies in the genes of every woman and is keen on helping women everywhere nurture this royal potential to full maturity.
She is the President and Founder of The Women of Worth Foundation. She has a passion for family and has spoken to women and children on several platforms.
Bimbo places a large premium on education. She believes it helps to achieve great goals and gives a platform to activate the potentials locked up in every human. To this end, she graduated from the Department of Philosophy Obafemi Awolowo University.
She also has a certificate in Entrepreneurial Management from EDC Pan African University and has undertaken several leadership courses/training at different institutions including WOFBI and DLA. She is currently undergoing her Masters in Applied Educational & Leadership Management at the University of London.
She is the author of “Fit for the Palace” an inspirational book written to inspire women to embrace their royal heritage in Christ and build up their self-esteem. She co-pastors with her husband, Yemi Davids, at the Global Impact Church. They have four very beautiful daughters: Pelumi, Subomi, Demilade, and Hadassah.

</ReadMore>
</p>
</div>
                </div>

 </div>
 <div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default MeetOurLeadPastors;
