import './AboutUsPage.scss';
import { BreadCrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import picture from '../../assets/images/hero-bcg.a876f19f6786a3aca992.jpeg';

export const AboutUsPage = () => {
  const breadUrls = [
    {
      href: '/',
      name: 'Home /',
    },
    {
      href: '',
      name: 'About',
    },
  ];
  return (
    <>
      <BreadCrumbs urls={breadUrls} />
      <section className="our-story container">
        <img src={picture} alt="" />

        <div>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed
            dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi
            blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi,
            eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </section>
    </>
  );
};
