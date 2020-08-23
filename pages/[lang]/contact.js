import { useEffect } from "react";
import Head from "next/head";
import Header from "shared/header";
import Footer from "shared/footer";
import { withTranslation } from "../../i18n";

const submitForm = async (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const payload = {
    firstName: form.elements.item(0).value,
    email: form.elements.item(1).value,
    message: form.elements.item(2).value,
  };
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    alert("email send");
    form.reset();
  }
};

const Contact = ({ t }) => {
  useEffect(() => {
    const card = document.querySelector(".card");
    setTimeout(() => {
      if (!card.classList.contains("is-flipped")) {
        card.classList.toggle("is-flipped");
      }
    }, 1500);
  }, []);

  return (
    <div>
      <Head>
        <title>Powerfull | Contact</title>
      </Head>
      <Header />
      <div className='w-full absolute z-200 bottom-0 left-0 flex justify-end'>
        <div
          class='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-3/12 mb-12 mr-12 '
          role='alert'
        >
          <div class='flex'>
            <div class='py-1'>
              <svg
                class='fill-current h-6 w-6 text-teal-500 mr-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
              </svg>
            </div>
            <div>
              <p class='font-bold'>Our privacy policy has changed</p>
              <p class='text-sm'>Make sure you know how these changes affect you.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='lg-sm:h-110px xs:h-4' />
        <div className='container py-32  h-auto  overflow-hidden'>
          <div className='scene scene--card lg-sm:h-384px xs:h-590px'>
            <div className='card'>
              <div className='card__face card__face--front '>
                <div className='relative lg-sm:w-760px lg-sm:h-384px xs:h-590px xs:w-300px  m-auto side-a'>
                  <div className='xs:invisible lg-sm:visible'>
                    <img src='/assets/contact_page/contact_background.png' className='absolute z-10 w-full' />
                  </div>
                  <div className='xs:visible lg-sm:invisible '>
                    <img src='/assets/contact_page/contact_background_mobile.png' className='absolute z-10 w-full' />
                  </div>
                  <div className='absolute z-20 w-full'>
                    <h2 className='lg-sm:ml-184px lg-sm:mt-200px text-center  lg-sm:text-3xl xs:mt-48  xs:text-xl w-full text-black'>
                      <span className='border-primary-dark border-b-2 pb-2'>{t("contact_us")}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className='card__face card__face--back'>
                <div className='relative lg-sm:w-760px lg-sm:h-384px xs:h-590px xs:w-300px  m-auto side-b '>
                  <div className='xs:invisible lg-sm:visible'>
                    <img src='/assets/contact_page/contact_form.png' className='absolute z-10 w-full' />
                  </div>
                  <div className='xs:visible lg-sm:invisible '>
                    <img src='/assets/contact_page/contact_form_mobile.png' className='absolute z-10 w-full' />
                  </div>
                  <div className='absolute z-20 w-full '>
                    <h2 className='mx-auto lg-sm:mt-20px text-center text-black lg-sm::text-3xl  w-full xs:mt-12 xs:-ml-1 lg-sm:ml-0 xs:text-xl'>
                      <span className='border-primary-dark border-b-2 pb-2'>{t("contact_us")}</span>
                    </h2>

                    <form className='lg-sm:mt-29px xs:mt-8 xs:ml-5 lg-sm:ml-0  ' onSubmit={submitForm}>
                      <div className='flex xs:flex-col lg-sm:flex-row  '>
                        <label className='lg-sm:w-3/12 xs:w-full text-black lg-sm:text-center xs:text-left xs:mt-4 xs:mb-2 lg-sm:mt-0 '>
                          {t("name_surname")}
                        </label>
                        <input
                          type='text'
                          className='lg-sm:w-8/12 xs:w-11/12  lg-sm:h-38px xs:h-30px  lg-sm:ml-0 px-2 text-black'
                          placeholder={t("username_ph")}
                          required
                          title='anpayman'
                        />
                      </div>

                      <div className='flex xs:flex-col lg-sm:flex-row lg-sm:mt-4  '>
                        <label className='lg-sm:w-3/12 xs:w-96 text-black lg-sm:text-center xs:text-left xs:mt-4 xs:mb-2 lg-sm:mt-0'>
                          {t("email")}
                        </label>
                        <input
                          type='email'
                          className='lg-sm:w-8/12 xs:w-11/12  lg-sm:h-38px xs:h-30px  lg-sm:ml-0 px-2 text-black'
                          placeholder={t("email_ph")}
                          required
                        />
                      </div>

                      <div className='flex xs:flex-col lg-sm:flex-row lg-sm:mt-4'>
                        <label className='lg-sm:w-3/12 xs:w-96 text-black lg-sm:text-center xs:text-left xs:mt-4 xs:mb-2 lg-sm:mt-0'>
                          {t("message")}
                        </label>
                        <textarea
                          className='lg-sm:w-8/12 xs:h-40 lg-sm:h-32 px-2 xs:w-11/12   lg-sm:ml-0 resize-none text-black'
                          placeholder={t("message_ph")}
                          required
                        />
                      </div>

                      <div className='flex lg-sm:mt-4 xs:mt-6'>
                        <button
                          className='w-98px h-40px m-auto bg-white text-black  hover:bg-primary-light transition-all duration-500 '
                          children={t("submit")}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withTranslation("contact")(Contact);
