import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.spiner}>
      <Oval
        height={80}
        width={80}
        color="blue"
        wrapperStyle={{}}
        wrapperClass={css.spinerItem}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#7f9df2"
        strokeWidth={3}
        strokeWidthSecondary={4}
      />
      <p className={css.title}>
        Please wait while the minions do their work...
      </p>
    </div>
  );
};
