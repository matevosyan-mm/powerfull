import { withTranslation } from "../../i18n";
import { plans } from "constants/plans";
import Heading from "shared/heading";
import PlanCardMobile from "shared/planCardMobile";
import { useBreakpoints } from "hooks/useBreakpoints";
import { Fragment } from "react/cjs/react.production.min";

const Plans = ({ t, i18n }) => {
  const { desktopMode } = useBreakpoints();
  return (
    <Fragment>
      <Heading text={t("hm_sec3_title")} />
      {desktopMode ? (
        <div className='lg:flex xs:justify-center xs:grid xs:gap-4 lg:gap-6 xs:row-gap-4 lg:grid-cols-0  md:grid-cols-2 xs:grid-cols-1 transform -skew-y-3 lg:mx-8 xs:mx-0'>
          {plans.map((item, key) => (
            <div
              className={`flex flex-col justify-center  lg:w-260px  xs:w-11/12 mx-auto  h-400px  transition-all duration-200 shadow-3d border-2 border-primary-dark transform lg:hover:-translate-y-6 xs:hover:-translate-y-0`}
              key={key}
            >
              <div className='flex flex-col justify-center items-center h-200px bg-white'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <p children={t(item.desc_t_key)} className='text-primary-blue my-4 font-bold' />
              </div>
              <div className='flex justify-center items-center bg-primary-blue h-200px  font-bold text-sm w-full'>
                <h3 children={`${item.price} ${t("amd")}`} className=' text-2xl font-bold  text-white' />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='grid sm:grid-cols-2 xs:grid-cols-1'>
          {plans.map((item, key) => (
            <PlanCardMobile t={t} item={item} key={key} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default withTranslation("sections")(Plans);
